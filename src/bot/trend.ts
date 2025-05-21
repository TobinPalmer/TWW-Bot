import { Demand, ItemDictionary, Stability, Trend } from '../itemDictionary.js'
import { findItemByName } from './value.js'

export interface ItemTrend {
    trend: Trend
    demand: Demand
    stability: Stability
}

export function getItemTrend(name: keyof ItemDictionary): ItemTrend {
    const item = findItemByName(name)

    return {
        trend: item.trend,
        demand: item.demand,
        stability: item.stability
    }
}
export function generateTrendString(
    trends: ItemTrend,
    lowSerial?: boolean
): string {
    const trendMap = {
        [Trend.INCREASING]: ':chart_with_upwards_trend:',
        [Trend.DECREASING]: ':chart_with_downwards_trend:',
        [Trend.UNAPPLICABLE]: ''
    }

    const demandMap = {
        [Demand.EXTREMELY_HIGH]: ':fire:',
        [Demand.HIGH]: ':thumbsup:',
        [Demand.MEDIUM]: ':neutral_face:',
        [Demand.LOW]: ':thumbsdown:',
        [Demand.EXTREMELY_LOW]: ':face_vomiting:'
    }

    const stabilityMap = {
        [Stability.STABLE]: ':shield:',
        [Stability.UNSTABLE]: ':warning:'
    }

    const trend =
        trends.trend !== Trend.UNAPPLICABLE
            ? `- Trend: ${trendMap[trends.trend]} ${trends.trend}\n`
            : ''

    let demand = trends.demand
    if (lowSerial) {
        if (trends.demand !== Demand.EXTREMELY_HIGH) {
            demand = Demand.HIGH
        }
    }

    return (
        `- Demand: ${demandMap[demand]} ${demand}\n` +
        trend +
        `- Stability: ${stabilityMap[trends.stability]} ${trends.stability}`
    )
}
