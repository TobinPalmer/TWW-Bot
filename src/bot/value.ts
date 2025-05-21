import {
    itemDictionary,
    ItemDictionary,
    ItemDictionaryKeys,
    itemDictionaryKeys
} from '../itemDictionary.js'
import { parseSerialNumber, serialStatus } from './serial.js'

interface ItemValue {
    LinReg: number
    priceRange: string
}

export function isItemValue(value: ItemValue | string): value is ItemValue {
    return (value as ItemValue).LinReg !== undefined
}

export function findItemByName(
    name: ItemDictionaryKeys
): ItemDictionary[keyof ItemDictionary] {
    return itemDictionary[name]
}

export function nameIsValid(name: string): name is ItemDictionaryKeys {
    return itemDictionaryKeys.includes(name as ItemDictionaryKeys)
}

export function getItemValue(
    itemName: ItemDictionaryKeys,
    serialNumber: number,
    round = true
): ItemValue | -1 {
    const item = findItemByName(itemName)

    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    if (serialNumber === serialStatus.HIGH) {
        if (item.serialRanges) {
            if (isPriceRange(item.serialRanges[0].price)) {
                const { low, high } = parsePriceRange(
                    item.serialRanges[0].price
                )

                return {
                    LinReg: getLinearApproximation(
                        high,
                        low,
                        item.serialRanges[0].range[1],
                        item.serialRanges[0].range[0],
                        serialNumber,
                        round
                    ),
                    priceRange: item.serialRanges[0].price
                }
            } else {
                return {
                    LinReg: parseSerialNumber(item.serialRanges[0].price),
                    priceRange: item.serialRanges[0].price
                }
            }
        } else {
            return {
                LinReg: parseSerialNumber(item.price),
                priceRange: item.price
            }
        }
    }

    if (item.serialRanges) {
        for (const rangeInfo of item.serialRanges) {
            let [min, max] = rangeInfo.range
            if (min > max) {
                ;[min, max] = [max, min] // Swap if min is greater than max
            }
            if (serialNumber >= min && serialNumber <= max) {
                if (isPriceRange(rangeInfo.price)) {
                    const { low, high } = parsePriceRange(rangeInfo.price)

                    return {
                        LinReg: getLinearApproximation(
                            high,
                            low,
                            max,
                            min,
                            serialNumber,
                            round
                        ),
                        priceRange: rangeInfo.price
                    }
                } else {
                    return {
                        LinReg: parseSerialNumber(rangeInfo.price),
                        priceRange: rangeInfo.price
                    }
                }
            }
        }
    }

    return -1
}

export function isCustomPrice(testString: string): boolean {
    return (
        testString
            .toLowerCase()
            .trim()
            .match(/^\d+(\.\d+)?[kBM]?$/) === null
    )
}

function parsePriceRange(priceRange: string) {
    const [low, high] = priceRange
        .split('-')
        .map((val) => val.trim().toLowerCase())
    const modifierMap = {
        k: 1000,
        m: 1000000,
        b: 1000000000
    }

    const modifierLow = low.match(/[kmb]/)?.[0] as keyof typeof modifierMap
    const modifierHigh = high.match(/[kmb]/)?.[0] as keyof typeof modifierMap

    return {
        low: parseFloat(low) * (modifierLow ? modifierMap[modifierLow] : 1),
        high: parseFloat(high) * (modifierHigh ? modifierMap[modifierHigh] : 1)
    }
}

export function isPriceRange(price: string) {
    return price.includes('-')
}

function getLinearApproximation(
    highVal: number,
    lowVal: number,
    serialHigh: number,
    serialLow: number,
    serial: number,
    round = true
) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    if (serial === serialStatus.HIGH) return highVal

    const val =
        highVal -
        ((serial - serialLow) * (highVal - lowVal)) / (serialHigh - serialLow)

    return round ? Math.round(val / 1000) * 1000 : val
}
