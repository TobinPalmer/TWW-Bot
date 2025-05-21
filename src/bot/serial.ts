import { ItemDictionary, itemDictionary } from '../itemDictionary.js'

export enum serialStatus {
    HIGH = -2,
    FAILED = -1
}

export enum SerialValidationStatus {
    Valid = 'valid',
    High = 'high',
    Low = 'low',
    Invalid = 'invalid'
}

export function validateSerial(
    item: ItemDictionary[keyof ItemDictionary],
    parsedSerial: number
): SerialValidationStatus {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    if (parsedSerial === serialStatus.HIGH) return SerialValidationStatus.High

    if (item.serialRanges && parsedSerial > 0) {
        if (item.serialRanges[0].range[0] < parsedSerial)
            return SerialValidationStatus.High

        if (
            item.serialRanges[item.serialRanges.length - 1].range[1] >
            parsedSerial
        ) {
            return SerialValidationStatus.Low
        }
        return SerialValidationStatus.Valid
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    return parsedSerial === serialStatus.HIGH
        ? SerialValidationStatus.Valid
        : SerialValidationStatus.Invalid
}

export function getHighestSerial(item: keyof ItemDictionary): number {
    const itemData = itemDictionary[item]

    if (!itemData.serialRanges) return serialStatus.FAILED

    return itemData.serialRanges[0].range[0]
}

export function parseSerialNumber(
    serial: string | number
): number | serialStatus {
    if (typeof serial === 'number') {
        if (serial < 1 || serial % 1 !== 0) return serialStatus.FAILED
        else return serial
    }

    if (serial.toLowerCase().trim() === 'high') return serialStatus.HIGH
    if (serial.match(/[^0-9km,.]/gi)) return serialStatus.FAILED
    if (serial === '') return serialStatus.FAILED

    const parsedSerial = serial
        .toLowerCase()
        .replaceAll(',', '')
        .replace('#', '')
        .trim()

    const multipliers: Record<string, number> = {
        k: 1000,
        m: 1000000,
        b: 1000000000
    }

    const suffix = parsedSerial.slice(-1) // Get the last character
    const num = parseFloat(
        multipliers[suffix] ? parsedSerial.slice(0, -1) : parsedSerial
    )

    if (isNaN(num)) return serialStatus.FAILED

    const res = multipliers[suffix] ? num * multipliers[suffix] : num

    if (isNaN(res)) return serialStatus.FAILED

    if (res < 1) return serialStatus.FAILED

    if (res % 1 !== 0) return serialStatus.FAILED

    return res
}

export function isSpecialSerial(serial: number): boolean {
    if (serial === 69 || serial === 420 || serial === 69420 || serial === 42069)
        return true
    const str = serial.toString(10)
    if (new Set(str.split('')).size === 1) return true
    const nonZeroDigits = str.replace(/0/g, '')
    if (nonZeroDigits.length === 1) return true
    if (str.match(/69/g)?.length === str.length / 2) return true
    return false
}
