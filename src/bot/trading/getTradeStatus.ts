import { format } from './format.js'

enum TradeResults {
    LOSE = 'L',
    WIN = 'W',
    TIE = 'T'
}

export function getTradeStatus(offer: number, counter: number) {
    if (offer > counter) {
        return TradeResults.LOSE
    }
    if (offer < counter) {
        return TradeResults.WIN
    }

    return TradeResults.TIE
}

export function getTradeResult(offer: number, counter: number) {
    const letter = getTradeStatus(offer, counter)

    if (letter === TradeResults.LOSE) {
        return `:red_circle: L by $${format(offer - counter)}`
    } else if (letter === TradeResults.WIN) {
        return `:green_circle: W by $${format(counter - offer)}`
    } else {
        return ':yellow_circle: Your trade is fair'
    }
}
