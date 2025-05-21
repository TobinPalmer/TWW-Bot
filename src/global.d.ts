/* eslint-disable no-var */
import { Client, Collection } from 'discord.js'
import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'
import { UserStateValue } from '.'
import ApplicationCommand from '../templates/ApplicationCommand'
import MessageCommand from '../templates/MessageCommand'

interface DiscordClient extends Client {
    commands: Collection<string, ApplicationCommand>
    msgCommands: Collection<string, MessageCommand>
}

export type userStates = Record<
    string,
    {
        offer: UserStateValue[]
        counter: UserStateValue[]
        kukri: { serial: number; enabled: boolean; userSerial: string }
        trading: boolean
    }
>
declare global {
    var client: DiscordClient
    var userStates: userStates
    var mongoClient: MongoClient
    var db: mongoose.Connection

    type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
}

export {}
