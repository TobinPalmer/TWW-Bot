import { UserStateValue } from '../../index.js'

export function aggregateTrade(trade: UserStateValue[]) {
    let sum = 0

    for (const val of trade) {
        sum += val.value * val.amount
    }

    return sum
}
