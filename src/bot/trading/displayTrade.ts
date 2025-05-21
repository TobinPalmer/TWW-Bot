import { UserStateValue } from '../../index.js'
import { format } from './format.js'

export function displayTrade(trade: UserStateValue[]) {
    let tradeString = ''

    for (const val of trade) {
        if (val.serial) {
            const str =
                val.serial.str === 'high' ? `(high)` : `(${val.serial.str})`
            tradeString += `${val.amount}x ${val.name} ${str}: $${format(val.value)} ${val.amount > 1 ? `each` : ``}\n`
        } else {
            tradeString += `${val.amount}x ${val.name}: $${format(val.value)} ${val.amount > 1 ? `each` : ``}\n`
        }
    }

    return tradeString.trim()
}
