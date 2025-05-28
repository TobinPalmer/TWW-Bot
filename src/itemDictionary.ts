interface AuctionItem {
    serialRanges: { range: [number, number]; price: string }[]
    price?: never
}

interface NonAuctionItem {
    serialRanges?: never
    price: string
    tradeValue?: string
}

type Item = AuctionItem | NonAuctionItem

export type ItemDictionary = {
    [K in ItemDictionaryKeys]: {
        officialName: string
        demand: Demand
        stability: Stability
        trend: Trend
        increasing?: boolean
    } & Item
}

export const nonAuctionItems = [
    'Cursed Volcanic Pistol',
    'Cursed Lantern',
    'Occult Lantern',
    'Rednose Rifle',
    'Occult Sawed Off',
    'Occult Mule',
    'Ceremonial Dagger',
    'Zombie Bear Pelt',
    'Wendigo Bones',
    'Any Vials',
    'Frozen Volcanic Rifle',
    'Frozen Axe',
    'Frozen Horn Bow',
    'Skeleton Horse Parts',
    'Stolen Presents',
    'Christmas Cookies',
    'Candy Canes',
    'Polar Bear Pelt',
    'Ancient Relic',
    'Frosty Gun Parts',
    'Damaged Gun Barrel',
    'Damaged Gun Parts',
    'Damaged Gun Body',
    'Martini Gun',
    'Blunderbuss Barrel',
    'Blunderbuss Parts',
    'Blunderbuss Body',
    'Blunderbuss',
    'Pile of Bones',
    'Animal Bones',
    'An Old Boot',
    'Hudsons Key',
    'Thunderstruck Log',
    'Thunderstruck Cactus Juice',
    'Scorched Pelt',
    'Dubloons',
    'Gold Bars',
    'Albino Gator Pelt',
    'Snake Venom',
    'Legendary Pelts',
    'Normal Pelts',
    'Ores',
    'Workshop Ticket',
    'Aequitas',
    'Frozen Aequitas',
    'Santa Lantern',
    'Membership Token',
    'Stacked Coal',
    'Flood Lantern',
    'Occult Blade',
    'Skin Walker Spear',
    'Skin Walker Bow',
    'Model 3 Lightning'
] as const

export const auctionItem = [
    'Spitfire Revolving Sniper',
    'Paterson Navy',
    'Axegonne',
    'Prototype Pistol',
    'Lancaster Pistol',
    'Guycot Chain Carbine',
    'Guycot Chain Pistol',
    'Accordion',
    'Guitar',
    'Fiddle',
    'Trumpet',
    'Flute',
    'Harmonica',
    'Drum',
    'Trade Ticket',
    'Kukri Machete Average Color',
    'Kukri Machete Full Black',
    'Kukri Machete Gold & White',
    'Kukri Machete White Sheath',
    'Kukri Machete Black & Bronze',
    'Kukri Machete Red Stripe',
    'Kukri Machete Brown Handle',
    'Kukri Machete Tan Handle',
    'Kukri Machete Inverted Grey'
] as const

export const itemDictionaryKeys = [...auctionItem, ...nonAuctionItems] as const

export type ItemDictionaryKeys = (typeof itemDictionaryKeys)[number]

export enum Demand {
    EXTREMELY_HIGH = 'Extremely High',
    HIGH = 'High',
    MEDIUM = 'Medium',
    LOW = 'Low',
    EXTREMELY_LOW = 'Extremely Low'
}

export enum Stability {
    STABLE = 'Stable',
    UNSTABLE = 'Unstable'
}

export enum Trend {
    INCREASING = 'Increasing',
    DECREASING = 'Decreasing',
    UNAPPLICABLE = 'Unapplicable'
}

export const itemDictionary: ItemDictionary = {
    'Spitfire Revolving Sniper': {
        officialName: 'Spitfire Revolving Sniper',
        demand: Demand.EXTREMELY_HIGH,
        stability: Stability.UNSTABLE,
        trend: Trend.INCREASING,
        serialRanges: [
            { range: [5000, 5000], price: '5M' },
            { range: [4999, 4000], price: '5.05M-5.1M' },
            { range: [3999, 3000], price: '5.1M-5.2M' },
            { range: [2999, 2000], price: '5.2M-5.35M' },
            { range: [1999, 1000], price: '5.45M-5.65M' },
            { range: [999, 800], price: '6.15M-6.35M' },
            { range: [799, 600], price: '6.45M-6.55M' },
            { range: [599, 400], price: '6.75M-7M' },
            { range: [399, 300], price: '7.25M-7.75M' },
            { range: [299, 200], price: '8M-8.5M' },
            { range: [199, 150], price: '9M-9.5M' },
            { range: [149, 100], price: '10M-11M' },
            { range: [99, 90], price: '12.5M-13.5M' },
            { range: [89, 80], price: '15M-15.5M' },
            { range: [79, 70], price: '16M-16.5M' },
            { range: [69, 60], price: '17M-17.5M' },
            { range: [59, 50], price: '18.5M-19M' },
            { range: [49, 40], price: '20M-21.5M' },
            { range: [39, 30], price: '22.5M-23.5M' },
            { range: [29, 20], price: '25M-27M' },
            { range: [19, 15], price: '30M-31M' },
            { range: [14, 10], price: '33M-35M' },
            { range: [9, 9], price: '50M' },
            { range: [8, 8], price: '55M' },
            { range: [7, 7], price: '77.5M' },
            { range: [6, 6], price: '83M' },
            { range: [5, 5], price: '90M' },
            { range: [4, 4], price: '100M' },
            { range: [3, 3], price: '110M' },
            { range: [2, 2], price: '150M' },
            { range: [1, 1], price: '200M' }
        ]
    },

    'Paterson Navy': {
        officialName: 'Paterson Navy',
        increasing: true,
        demand: Demand.EXTREMELY_HIGH,
        stability: Stability.UNSTABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 25000], price: '750K' },
            { range: [24999, 20000], price: '750K-780K' },
            { range: [19999, 15000], price: '780K-790K' },
            { range: [14999, 10000], price: '790K-810K' },
            { range: [9999, 8000], price: '820K-850K' },
            { range: [7999, 6000], price: '850K-900K' },
            { range: [5999, 4000], price: '900K-950K' },
            { range: [3999, 3000], price: '950K-1M' },
            { range: [2999, 2200], price: '1M-1.1M' },
            { range: [2199, 1800], price: '1.1M-1.2M' },
            { range: [1799, 1300], price: '1.2M-1.3M' },
            { range: [1299, 1000], price: '1.3M-1.4M' },
            { range: [999, 900], price: '1.8M-2M' },
            { range: [899, 800], price: '2M-2.3M' },
            { range: [799, 700], price: '2.3M-2.6M' },
            { range: [699, 600], price: '2.6M-2.9M' },
            { range: [599, 500], price: '2.9M-3.2M' },
            { range: [499, 400], price: '3.2M-3.5M' },
            { range: [399, 300], price: '3.5M-3.8M' },
            { range: [299, 200], price: '3.8M-4.2M' },
            { range: [199, 100], price: '4.2M-4.7M' },
            { range: [99, 90], price: '16M-17M' },
            { range: [89, 80], price: '17.5M-18.5M' },
            { range: [79, 70], price: '19M-20M' },
            { range: [69, 60], price: '20.5M-22M' },
            { range: [59, 50], price: '22.5M-24M' },
            { range: [49, 40], price: '26M-28M' },
            { range: [39, 30], price: '30M-33M' },
            { range: [29, 20], price: '35M-40M' },
            { range: [19, 15], price: '50M-55M' },
            { range: [14, 10], price: '60M-70M' }
        ]
    },
    Axegonne: {
        officialName: 'Admirals Axegonne',
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 8000], price: '175k' },
            { range: [7999, 6000], price: '180k-200k' },
            { range: [5999, 5000], price: '215k-220k' },
            { range: [4999, 4000], price: '230k-240k' },
            { range: [3999, 3000], price: '260k-280k' },
            { range: [2999, 2000], price: '280k-300k' },
            { range: [1999, 1000], price: '300k-330k' },
            { range: [999, 900], price: '375k-425k' },
            { range: [899, 750], price: '475k-500k' },
            { range: [749, 600], price: '500k-600k' },
            { range: [599, 500], price: '650k-700k' },
            { range: [499, 400], price: '750k-800k' },
            { range: [399, 300], price: '800k-850k' },
            { range: [299, 250], price: '850k-900k' },
            { range: [249, 200], price: '1.05M-1.15M' },
            { range: [199, 150], price: '1.2M-1.4M' },
            { range: [149, 100], price: '1.5M-1.7M' },
            { range: [99, 90], price: '2.25M-2.75M' },
            { range: [89, 80], price: '2.75M-3.25M' },
            { range: [79, 70], price: '3.25M-3.75M' },
            { range: [69, 60], price: '3.75M-4.25M' },
            { range: [59, 50], price: '4.25M-4.75M' },
            { range: [49, 40], price: '5M-5.5M' },
            { range: [39, 30], price: '5.75M-6.25M' },
            { range: [29, 20], price: '6.5M-7M' },
            { range: [19, 15], price: '9M-10M' },
            { range: [14, 10], price: '12M-13M' },
            { range: [9, 9], price: '25M' },
            { range: [8, 8], price: '30M' },
            { range: [7, 7], price: '35M' },
            { range: [6, 6], price: '40M' },
            { range: [5, 5], price: '48M' },
            { range: [4, 4], price: '60M' },
            { range: [3, 3], price: '75M' },
            { range: [2, 2], price: '100M' },
            { range: [1, 1], price: '140M' }
        ]
    },

    'Kukri Machete Average Color': {
        officialName: 'Kukri Machete Average Color',
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '120k' },
            { range: [39999, 30000], price: '125k-130k' },
            { range: [29999, 20000], price: '135k-145k' },
            { range: [19999, 10000], price: '150k-160k' },
            { range: [9999, 8000], price: '170k-180k' },
            { range: [7999, 6000], price: '190k-195k' },
            { range: [5999, 4000], price: '200-210k' },
            { range: [3999, 2000], price: '215k-240k' },
            { range: [1999, 1000], price: '245k-280k' },
            { range: [999, 800], price: '260k-290k' },
            { range: [799, 600], price: '290k-380k' },
            { range: [599, 400], price: '380k-480k' },
            { range: [399, 300], price: '480k-580k' },
            { range: [299, 200], price: '580k-775k' },
            { range: [199, 100], price: '775k-1M' },
            { range: [99, 80], price: '3.4M-3.8M' },
            { range: [79, 60], price: '3.9M-4.2M' },
            { range: [59, 50], price: '4.2M-4.5M' },
            { range: [49, 40], price: '4.8M-5.3M' },
            { range: [39, 30], price: '6M-6.8M' },
            { range: [29, 20], price: '9M-11M' },
            { range: [19, 15], price: '13M-15M' },
            { range: [14, 10], price: '17.5M-18.5M' }
        ]
    },

    'Kukri Machete Full Black': {
        officialName: 'Kukri Machete (Full Black)',
        demand: Demand.HIGH,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '125k' },
            { range: [39999, 30000], price: '130k-140k' },
            { range: [29999, 20000], price: '145k-155k' },
            { range: [19999, 10000], price: '160k-175k' },
            { range: [9999, 8000], price: '180k-190k' },
            { range: [7999, 6000], price: '190k-195k' },
            { range: [5999, 4000], price: '200-210k' },
            { range: [3999, 2000], price: '215k-240k' },
            { range: [1999, 1000], price: '245k-280k' },
            { range: [999, 800], price: '350k-415k' },
            { range: [799, 600], price: '415k-495k' },
            { range: [599, 400], price: '495k-612k' },
            { range: [399, 300], price: '612-750k' },
            { range: [299, 200], price: '750k-930k' },
            { range: [199, 100], price: '930k-1.35M' },
            { range: [99, 80], price: '3.6M-4M' },
            { range: [79, 60], price: '4.2M-4.5M' },
            { range: [59, 50], price: '4.6M-5M' },
            { range: [49, 40], price: '5.5M-6M' },
            { range: [39, 30], price: '7M-8M' },
            { range: [29, 20], price: '10M-12M' },
            { range: [19, 15], price: '14M-16M' },
            { range: [14, 10], price: '18.5M-20M' }
        ]
    },
    'Kukri Machete Gold & White': {
        officialName: 'Kukri Machete (Gold & White)',
        demand: Demand.HIGH,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '125k' },
            { range: [39999, 30000], price: '130k-140k' },
            { range: [29999, 20000], price: '145k-155k' },
            { range: [19999, 10000], price: '160k-175k' },
            { range: [9999, 8000], price: '180k-190k' },
            { range: [7999, 6000], price: '190k-195k' },
            { range: [5999, 4000], price: '200-210k' },
            { range: [3999, 2000], price: '215k-240k' },
            { range: [1999, 1000], price: '245k-280k' },
            { range: [999, 800], price: '300k-350k' },
            { range: [799, 600], price: '350k-400k' },
            { range: [599, 400], price: '400k-500k' },
            { range: [399, 300], price: '500k-600k' },
            { range: [299, 200], price: '600k-800k' },
            { range: [199, 100], price: '800k-1.1M' },
            { range: [99, 80], price: '3.6M-4M' },
            { range: [79, 60], price: '4.2M-4.5M' },
            { range: [59, 50], price: '4.6M-5M' },
            { range: [49, 40], price: '5.5M-6M' },
            { range: [39, 30], price: '7M-8M' },
            { range: [29, 20], price: '10M-12M' },
            { range: [19, 15], price: '14M-16M' },
            { range: [14, 10], price: '18.5M-20M' }
        ]
    },
    'Kukri Machete White Sheath': {
        officialName: 'Kukri Machete (White Sheath)',
        demand: Demand.HIGH,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '125k' },
            { range: [39999, 30000], price: '130k-140k' },
            { range: [29999, 20000], price: '145k-155k' },
            { range: [19999, 10000], price: '160k-175k' },
            { range: [9999, 8000], price: '180k-190k' },
            { range: [7999, 6000], price: '190k-195k' },
            { range: [5999, 4000], price: '200-210k' },
            { range: [3999, 2000], price: '215k-240k' },
            { range: [1999, 1000], price: '245k-280k' },
            { range: [999, 800], price: '300k-350k' },
            { range: [799, 600], price: '350k-400k' },
            { range: [599, 400], price: '400k-500k' },
            { range: [399, 300], price: '500k-600k' },
            { range: [299, 200], price: '600k-800k' },
            { range: [199, 100], price: '800k-1.1M' },
            { range: [99, 80], price: '3.6M-4M' },
            { range: [79, 60], price: '4.2M-4.5M' },
            { range: [59, 50], price: '4.6M-5M' },
            { range: [49, 40], price: '5.5M-6M' },
            { range: [39, 30], price: '7M-8M' },
            { range: [29, 20], price: '10M-12M' },
            { range: [19, 15], price: '14M-16M' },
            { range: [14, 10], price: '18.5M-20M' }
        ]
    },

    'Kukri Machete Black & Bronze': {
        officialName: 'Kukri Machete (Black & Bronze)',
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '120k' },
            { range: [39999, 30000], price: '125k-130k' },
            { range: [29999, 20000], price: '135k-145k' },
            { range: [19999, 10000], price: '150k-160k' },
            { range: [9999, 8000], price: '170k-180k' },
            { range: [7999, 6000], price: '190k-195k' },
            { range: [5999, 4000], price: '200-210k' },
            { range: [3999, 2000], price: '215k-240k' },
            { range: [1999, 1000], price: '245k-280k' },
            { range: [999, 800], price: '260k-290k' },
            { range: [799, 600], price: '290k-380k' },
            { range: [599, 400], price: '380k-480k' },
            { range: [399, 300], price: '480k-580k' },
            { range: [299, 200], price: '580k-775k' },
            { range: [199, 100], price: '775k-1M' },
            { range: [99, 80], price: '3.4M-3.8M' },
            { range: [79, 60], price: '3.9M-4.2M' },
            { range: [59, 50], price: '4.2M-4.5M' },
            { range: [49, 40], price: '4.8M-5.3M' },
            { range: [39, 30], price: '6M-6.8M' },
            { range: [29, 20], price: '9M-11M' },
            { range: [19, 15], price: '13M-15M' },
            { range: [14, 10], price: '17.5M-18.5M' }
        ]
    },
    'Kukri Machete Red Stripe': {
        officialName: 'Kukri Machete (Red Stripe)',
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '120k' },
            { range: [39999, 30000], price: '125k-130k' },
            { range: [29999, 20000], price: '135k-145k' },
            { range: [19999, 10000], price: '150k-160k' },
            { range: [9999, 8000], price: '170k-180k' },
            { range: [7999, 6000], price: '190k-195k' },
            { range: [5999, 4000], price: '200-210k' },
            { range: [3999, 2000], price: '215k-240k' },
            { range: [1999, 1000], price: '245k-280k' },
            { range: [999, 800], price: '260k-290k' },
            { range: [799, 600], price: '290k-380k' },
            { range: [599, 400], price: '380k-480k' },
            { range: [399, 300], price: '480k-580k' },
            { range: [299, 200], price: '580k-775k' },
            { range: [199, 100], price: '775k-1M' },
            { range: [99, 80], price: '3.4M-3.8M' },
            { range: [79, 60], price: '3.9M-4.2M' },
            { range: [59, 50], price: '4.2M-4.5M' },
            { range: [49, 40], price: '4.8M-5.3M' },
            { range: [39, 30], price: '6M-6.8M' },
            { range: [29, 20], price: '9M-11M' },
            { range: [19, 15], price: '13M-15M' },
            { range: [14, 10], price: '17.5M-18.5M' }
        ]
    },
    'Kukri Machete Tan Handle': {
        officialName: 'Kukri Machete (Tan Handle)',
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '110k' },
            { range: [39999, 30000], price: '115k-120k' },
            { range: [29999, 20000], price: '125k-130k' },
            { range: [19999, 10000], price: '135k-140k' },
            { range: [9999, 8000], price: '145k-155k' },
            { range: [7999, 6000], price: '165k-180k' },
            { range: [5999, 4000], price: '190k-200k' },
            { range: [3999, 2000], price: '225k-240k' },
            { range: [1999, 1000], price: '245k-265k' },
            { range: [999, 800], price: '260k-290k' },
            { range: [799, 600], price: '290k-380k' },
            { range: [599, 400], price: '380k-480k' },
            { range: [399, 300], price: '480k-580k' },
            { range: [299, 200], price: '580k-775k' },
            { range: [199, 100], price: '775k-1M' },
            { range: [99, 80], price: '3.4M-3.8M' },
            { range: [79, 60], price: '3.9M-4.2M' },
            { range: [59, 50], price: '4.2M-4.5M' },
            { range: [49, 40], price: '4.8M-5.3M' },
            { range: [39, 30], price: '6M-6.8M' },
            { range: [29, 20], price: '9M-11M' },
            { range: [19, 15], price: '13M-15M' },
            { range: [14, 10], price: '17.5M-18.5M' }
            // the lowest known kukri of this variant is serial 20
        ]
    },
    'Kukri Machete Inverted Grey': {
        officialName: 'Kukri Machete (Inverted Grey)',
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '120k' },
            { range: [39999, 30000], price: '125k-130k' },
            { range: [29999, 20000], price: '135k-145k' },
            { range: [19999, 10000], price: '150k-160k' },
            { range: [9999, 8000], price: '170k-180k' },
            { range: [7999, 6000], price: '190k-195k' },
            { range: [5999, 4000], price: '200-210k' },
            { range: [3999, 2000], price: '215k-240k' },
            { range: [1999, 1000], price: '245k-280k' },
            { range: [999, 800], price: '260k-290k' },
            { range: [799, 600], price: '290k-380k' },
            { range: [599, 400], price: '380k-480k' },
            { range: [399, 300], price: '480k-580k' },
            { range: [299, 200], price: '580k-775k' },
            { range: [199, 100], price: '775k-1M' },
            { range: [99, 80], price: '3.4M-3.8M' },
            { range: [79, 60], price: '3.9M-4.2M' },
            { range: [59, 50], price: '4.2M-4.5M' },
            { range: [49, 40], price: '4.8M-5.3M' },
            { range: [39, 30], price: '6M-6.8M' },
            { range: [29, 20], price: '9M-11M' },
            { range: [19, 15], price: '13M-15M' },
            { range: [14, 10], price: '17.5M-18.5M' }
        ]
    },
    'Kukri Machete Brown Handle': {
        officialName: 'Kukri Machete (Brown Handle)',
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '110k' },
            { range: [39999, 30000], price: '115k-120k' },
            { range: [29999, 20000], price: '125k-130k' },
            { range: [19999, 10000], price: '135k-140k' },
            { range: [9999, 8000], price: '145k-155k' },
            { range: [7999, 6000], price: '165k-180k' },
            { range: [5999, 4000], price: '190k-200k' },
            { range: [3999, 2000], price: '225k-240k' },
            { range: [1999, 1000], price: '245k-265k' },
            { range: [999, 800], price: '260k-290k' },
            { range: [799, 600], price: '290k-380k' },
            { range: [599, 400], price: '380k-480k' },
            { range: [399, 300], price: '480k-580k' },
            { range: [299, 200], price: '580k-775k' },
            { range: [199, 100], price: '775k-1M' },
            { range: [99, 80], price: '3.4M-3.8M' },
            { range: [79, 60], price: '3.9M-4.2M' },
            { range: [59, 50], price: '4.2M-4.5M' },
            { range: [49, 40], price: '4.8M-5.3M' },
            { range: [39, 30], price: '6M-6.8M' },
            { range: [29, 20], price: '9M-11M' },
            { range: [19, 15], price: '13M-15M' },
            { range: [14, 10], price: '17.5M-18.5M' }
        ]
    },

    'Prototype Pistol': {
        officialName: 'Schwarzlose Prototype Pistol',
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [1000000, 70000], price: '110k' },
            { range: [69999, 60000], price: '110k-115k' },
            { range: [59999, 50000], price: '115k-120k' },
            { range: [49999, 40000], price: '120k-125k' },
            { range: [39999, 30000], price: '125k-130k' },
            { range: [29999, 20000], price: '145k-155k' },
            { range: [19999, 10000], price: '160k-170k' },
            { range: [9999, 8000], price: '180k-190k' },
            { range: [7999, 6000], price: '190k-195k' },
            { range: [5999, 4000], price: '200k-220k' },
            { range: [3999, 2000], price: '225k-240k' },
            { range: [1999, 1000], price: '245k-265k' },
            { range: [999, 800], price: '400k-475k' },
            { range: [799, 600], price: '475k-575k' },
            { range: [599, 400], price: '575k-700k' },
            { range: [399, 300], price: '700k-850k' },
            { range: [299, 200], price: '850k-1.2M' },
            { range: [199, 100], price: '1.2M-1.6M' },
            { range: [99, 90], price: '3.2M-3.7M' },
            { range: [89, 80], price: '3.7M-4.2M' },
            { range: [79, 70], price: '4.2-4.7M' },
            { range: [69, 60], price: '4.7M-5.2M' },
            { range: [59, 50], price: '5.2M-5.7M' },
            { range: [49, 40], price: '6.3M-7.2M' },
            { range: [39, 30], price: '7.2M-8.8M' },
            { range: [29, 25], price: '9M-9.5M' },
            { range: [24, 20], price: '11M-11.5M' },
            { range: [19, 15], price: '15M-16M' },
            { range: [14, 10], price: '18M-19M' },
            { range: [9, 9], price: '35M' },
            { range: [8, 8], price: '50M' },
            { range: [7, 7], price: '75M' },
            { range: [6, 6], price: '100M' },
            { range: [5, 5], price: '125M' },
            { range: [4, 4], price: '150M' },
            { range: [3, 3], price: '180M' },
            { range: [2, 2], price: '225M' },
            { range: [1, 1], price: '275M' }
        ]
    },

    'Lancaster Pistol': {
        officialName: 'Lancaster Pistol',
        demand: Demand.HIGH,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [1000000, 60000], price: '120k' },
            { range: [59999, 50000], price: '120k-125k' },
            { range: [49999, 40000], price: '125k-130k' },
            { range: [39999, 30000], price: '130k-140k' },
            { range: [29999, 20000], price: '140k-155k' },
            { range: [19999, 10000], price: '160k-175k' },
            { range: [9999, 8000], price: '180k-190k' },
            { range: [7999, 6000], price: '190k-195k' },
            { range: [5999, 4000], price: '200-210k' },
            { range: [3999, 2000], price: '215k-240k' },
            { range: [1999, 1000], price: '245k-280kk' },
            { range: [999, 800], price: '450k-545k' },
            { range: [799, 600], price: '560k-600k' },
            { range: [599, 400], price: '615k-730k' },
            { range: [399, 300], price: '730k-850k' },
            { range: [299, 200], price: '850k-1.2M' },
            { range: [199, 100], price: '1.2M-1.6M' },
            { range: [99, 90], price: '1.8M-2.2M' },
            { range: [89, 80], price: '2.2M-2.8M' },
            { range: [79, 70], price: '3.8M-4.3M' },
            { range: [69, 60], price: '4.3M-5M' },
            { range: [59, 50], price: '5M-6M' },
            { range: [49, 40], price: '6M-7M' },
            { range: [39, 30], price: '7M-8M' },
            { range: [29, 20], price: '8M-11M' },
            { range: [19, 10], price: '13M-15M' },
            { range: [9, 9], price: '35M' },
            { range: [8, 8], price: '50M' },
            { range: [7, 7], price: '75M' },
            { range: [6, 6], price: '100M' },
            { range: [5, 5], price: '125M' },
            { range: [4, 4], price: '150M' },
            { range: [3, 3], price: '180M' },
            { range: [2, 2], price: '225M' },
            { range: [1, 1], price: '275M' }
        ]
    },

    'Guycot Chain Carbine': {
        officialName: 'Guycot Chain Carbine',
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [1000000, 60000], price: '15k' },
            { range: [59999, 30000], price: '15k-20k' },
            { range: [29999, 20000], price: '20k-25k' },
            { range: [19999, 8000], price: '25k-30k' },
            { range: [7999, 3000], price: '30k-35k' },
            { range: [2999, 1000], price: '35k-40k' },
            { range: [999, 700], price: '95k-110k' },
            { range: [699, 400], price: '115k-135k' },
            { range: [399, 300], price: '140k-150k' },
            { range: [299, 200], price: '155k-170k' },
            { range: [199, 100], price: '175k-200k' },
            { range: [99, 90], price: '1.4M-1.6M' },
            { range: [89, 75], price: '1.6M-1.9M' },
            { range: [74, 60], price: '1.9M-2.3M' },
            { range: [59, 50], price: '2.3M-2.8M' },
            { range: [49, 40], price: '2.8M-3.6M' },
            { range: [39, 30], price: '3.6M-4.5M' },
            { range: [29, 25], price: '4.5M-5.5M' },
            { range: [24, 20], price: '5.5M-6.8M' },
            { range: [19, 15], price: '6.8M-8.5M' },
            { range: [14, 10], price: '8.5M-11M' }
        ]
    },
    'Guycot Chain Pistol': {
        officialName: 'Guycot Chain Pistol',
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [1000000, 60000], price: '6.5k' },
            { range: [59999, 30000], price: '10k' },
            { range: [29999, 20000], price: '14k' },
            { range: [19999, 8000], price: '12k-15k' },
            { range: [7999, 3000], price: '15k-20k' },
            { range: [2999, 1000], price: '25k-28k' },
            { range: [999, 700], price: '80k-95k' },
            { range: [699, 400], price: '96k-115k' },
            { range: [399, 300], price: '116k-125k' },
            { range: [299, 200], price: '126k-135k' },
            { range: [199, 100], price: '150k-160k' },
            { range: [99, 90], price: '1.3M-1.5M' },
            { range: [89, 75], price: '1.5M-1.7M' },
            { range: [74, 60], price: '1.7M-2.0M' },
            { range: [59, 50], price: '2.0M-2.5M' },
            { range: [49, 40], price: '2.5M-3.2M' },
            { range: [39, 30], price: '3.2M-4.0M' },
            { range: [29, 25], price: '4.0M-5.0M' },
            { range: [24, 20], price: '5.0M-6.5M' },
            { range: [19, 15], price: '6.5M-8.0M' },
            { range: [14, 10], price: '8.5M-9.5M' }
        ]
    },
    Accordion: {
        officialName: 'Accordion',
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [1000000, 40000], price: '6k' },
            { range: [39999, 15000], price: '6k-12k' },
            { range: [14999, 7500], price: '12k-16k' },
            { range: [7499, 5000], price: '16k-20k' },
            { range: [5000, 2000], price: '20k-25k' },
            { range: [1999, 1000], price: '25k-30k' },
            { range: [999, 900], price: '65k-80k' },
            { range: [899, 800], price: '80k-85k' },
            { range: [799, 700], price: '85k-95k' },
            { range: [699, 600], price: '95k-115k' },
            { range: [599, 500], price: '115k-130k' },
            { range: [499, 400], price: '130k-160k' },
            { range: [399, 300], price: '160k-200k' },
            { range: [299, 200], price: '200k-250k' },
            { range: [199, 100], price: '250k-300k' },
            { range: [99, 80], price: '1.6M-1.8M' },
            { range: [79, 60], price: '1.8M-2.2M' },
            { range: [59, 50], price: '2.2M-2.4M' },
            { range: [49, 40], price: '2.6M-2.8M' },
            { range: [39, 30], price: '3M-3.2M' },
            { range: [29, 20], price: '3.8M-4.5M' },
            { range: [19, 15], price: '7M-8M' },
            { range: [14, 10], price: '10M-11M' },
            { range: [9, 9], price: '18M' },
            { range: [8, 8], price: '23M' },
            { range: [7, 7], price: '26M' },
            { range: [6, 6], price: '30M' },
            { range: [5, 5], price: '35M' },
            { range: [4, 4], price: '40M' },
            { range: [3, 3], price: '50M' },
            { range: [2, 2], price: '60M' },
            { range: [1, 1], price: '75M' }
        ]
    },

    Guitar: {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Guitar',
        serialRanges: [
            { range: [1000000, 40000], price: '6k' },
            { range: [39999, 15000], price: '6k-12k' },
            { range: [14999, 7500], price: '12k-16k' },
            { range: [7499, 5000], price: '16k-20k' },
            { range: [5000, 2000], price: '20k-25k' },
            { range: [1999, 1000], price: '25k-30k' },
            { range: [999, 900], price: '65k-80k' },
            { range: [899, 800], price: '80k-85k' },
            { range: [799, 700], price: '85k-95k' },
            { range: [699, 600], price: '95k-115k' },
            { range: [599, 500], price: '115k-130k' },
            { range: [499, 400], price: '130k-160k' },
            { range: [399, 300], price: '160k-200k' },
            { range: [299, 200], price: '200k-250k' },
            { range: [199, 100], price: '250k-300k' },
            { range: [99, 90], price: '2M-2.1M' },
            { range: [89, 75], price: '2.1M-2.3M' },
            { range: [74, 60], price: '2.4M-2.6M' },
            { range: [59, 50], price: '2.7M-3M' },
            { range: [49, 40], price: '3.2M-3.5M' },
            { range: [39, 30], price: '3.6M-4M' },
            { range: [29, 25], price: '4.5M-5.2M' },
            { range: [24, 20], price: '6M-6.5M' },
            { range: [19, 15], price: '8M-9M' },
            { range: [14, 10], price: '10M-13M' },
            { range: [9, 9], price: '25M' },
            { range: [8, 8], price: '30M' },
            { range: [7, 7], price: '38M' },
            { range: [6, 6], price: '50M' },
            { range: [5, 5], price: '60M' },
            { range: [4, 4], price: '70M' },
            { range: [3, 3], price: '80M' },
            { range: [2, 2], price: '88M' },
            { range: [1, 1], price: '100M' }
        ]
    },

    Fiddle: {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Fiddle',
        serialRanges: [
            { range: [1000000, 40000], price: '6k' },
            { range: [39999, 15000], price: '6k-10k' },
            { range: [14999, 7500], price: '10k-13k' },
            { range: [7499, 5000], price: '13k-15k' },
            { range: [5000, 2000], price: '15k-18k' },
            { range: [1999, 1000], price: '18k-20k' },
            { range: [999, 900], price: '60k-75k' },
            { range: [899, 800], price: '75k-80k' },
            { range: [799, 700], price: '80k-90k' },
            { range: [699, 600], price: '90k-110k' },
            { range: [599, 500], price: '110k-125k' },
            { range: [499, 400], price: '125k-155k' },
            { range: [399, 300], price: '155k-195k' },
            { range: [299, 200], price: '195k-245k' },
            { range: [199, 100], price: '245k-295k' },
            { range: [99, 90], price: '1.5M-1.7M' },
            { range: [89, 80], price: '1.7M-1.9M' },
            { range: [79, 70], price: '1.9M-2.0M' },
            { range: [69, 60], price: '2.0M-2.1M' },
            { range: [59, 50], price: '2.1M-2.2M' },
            { range: [49, 40], price: '2.2M-2.3M' },
            { range: [39, 30], price: '2.3M-2.5M' },
            { range: [29, 20], price: '2.5M-3.0M' },
            { range: [19, 15], price: '3.5M-5.5M' },
            { range: [14, 10], price: '7.5M-9.5M' },
            { range: [9, 9], price: '22M' },
            { range: [8, 8], price: '27.5M' },
            { range: [7, 7], price: '35M' },
            { range: [6, 6], price: '45M' },
            { range: [5, 5], price: '55M' },
            { range: [4, 4], price: '65M' },
            { range: [3, 3], price: '75M' },
            { range: [2, 2], price: '85M' },
            { range: [1, 1], price: '95M' }
        ]
    },

    Trumpet: {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Trumpet',
        serialRanges: [
            { range: [1000000, 60000], price: '4k' },
            { range: [59999, 30000], price: '4k-6k' },
            { range: [30000, 10000], price: '6k-7k' },
            { range: [10000, 2000], price: '7k-18k' },
            { range: [1999, 1000], price: '18k-20k' },
            { range: [999, 900], price: '60k-65k' },
            { range: [899, 800], price: '65k-70k' },
            { range: [799, 700], price: '70k-75k' },
            { range: [699, 600], price: '75k-80k' },
            { range: [599, 500], price: '85k-90k' },
            { range: [499, 400], price: '105k-115k' },
            { range: [399, 300], price: '115k-125k' },
            { range: [299, 200], price: '125k-150k' },
            { range: [199, 100], price: '225k-275k' },
            { range: [99, 80], price: '850k-950k' },
            { range: [79, 60], price: '1M-1.2M' },
            { range: [59, 50], price: '1.2M-1.35M' },
            { range: [49, 40], price: '1.35M-1.6M' },
            { range: [39, 30], price: '1.6M-2M' },
            { range: [29, 20], price: '2M-2.85M' },
            { range: [19, 15], price: '2.85M-3.65M' },
            { range: [14, 10], price: '3.65M-5.75M' }
            // { range: [9, 9], price: '18M' },
            // { range: [8, 8], price: '20M' },
            // { range: [7, 7], price: '30M' },
            // { range: [6, 6], price: '35M' },
            // { range: [5, 5], price: '40M' },
            // { range: [4, 4], price: '50M' },
            // { range: [3, 3], price: '70M' },
            // { range: [2, 2], price: '85M' },
            // { range: [1, 1], price: '100M' }
        ]
    },

    Flute: {
        officialName: 'Flute',
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [1000000, 60000], price: '2k' },
            { range: [59999, 20000], price: '2k-3k' },
            { range: [20000, 7500], price: '3k-5k' },
            { range: [7500, 2000], price: '5k-10k' },
            { range: [1999, 1000], price: '10k-15k' },
            { range: [999, 900], price: '65k-70k' },
            { range: [899, 800], price: '70k-75k' },
            { range: [799, 700], price: '80k-85k' },
            { range: [699, 600], price: '90k-95k' },
            { range: [599, 500], price: '95k-100k' },
            { range: [499, 400], price: '100k-105k' },
            { range: [399, 300], price: '105k-110k' },
            { range: [299, 200], price: '125k-130k' },
            { range: [199, 100], price: '140k-150k' },
            { range: [99, 80], price: '900k-1.1M' },
            { range: [79, 60], price: '1.1M-1.4M' },
            { range: [59, 50], price: '1.4M-1.6M' },
            { range: [49, 40], price: '1.6M-1.9M' },
            { range: [39, 30], price: '1.9M-2.5M' },
            { range: [29, 20], price: '2.5M-3M' },
            { range: [19, 15], price: '3M-4.75M' },
            { range: [14, 10], price: '4.75M-6.75M' },
            { range: [9, 9], price: '20M' },
            { range: [8, 8], price: '25M' },
            { range: [7, 7], price: '30M' },
            { range: [6, 6], price: '38M' },
            { range: [5, 5], price: '52M' },
            { range: [4, 4], price: '60M' },
            { range: [3, 3], price: '70M' },
            { range: [2, 2], price: '80M' },
            { range: [1, 1], price: '90M' }
        ]
    },

    Harmonica: {
        officialName: 'Harmonia',
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [1000000, 60000], price: '2k' },
            { range: [59999, 20000], price: '2k-3k' },
            { range: [20000, 7500], price: '3k-5k' },
            { range: [7500, 2000], price: '5k-10k' },
            { range: [1999, 1000], price: '10k-15k' },
            { range: [999, 900], price: '45k-50k' },
            { range: [899, 800], price: '50k-55k' },
            { range: [799, 700], price: '55k-60k' },
            { range: [699, 600], price: '60k-65k' },
            { range: [599, 500], price: '65k-70k' },
            { range: [499, 400], price: '70k-80k' },
            { range: [399, 300], price: '80k-90k' },
            { range: [299, 200], price: '105k-115k' },
            { range: [199, 100], price: '125k-140k' },
            { range: [99, 80], price: '1.3M-1.5M' },
            { range: [79, 70], price: '1.5M-1.6M' },
            { range: [69, 60], price: '1.6M-1.7M' },
            { range: [59, 50], price: '1.7M-1.8M' },
            { range: [49, 40], price: '1.8M-2.0M' },
            { range: [39, 30], price: '2.0M-2.3M' },
            { range: [29, 25], price: '2.3M-2.6M' },
            { range: [24, 20], price: '2.6M-2.9M' },
            { range: [19, 15], price: '3.5M-4.5M' },
            { range: [14, 10], price: '4.5M-5.5M' }
            // { range: [9, 9], price: '12M' },
            // { range: [8, 8], price: '20M' },
            // { range: [7, 7], price: '30M' },
            // { range: [6, 6], price: '40M' },
            // { range: [5, 5], price: '50M' },
            // { range: [4, 4], price: '60M' },
            // { range: [3, 3], price: '75M' },
            // { range: [2, 2], price: '85M' },
            // { range: [1, 1], price: '100M' }
        ]
    },

    Drum: {
        officialName: 'Drum',
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [1000000, 60000], price: '2k' },
            { range: [59999, 20000], price: '2k-3k' },
            { range: [20000, 7500], price: '3k-5k' },
            { range: [7500, 2000], price: '5k-10k' },
            { range: [1999, 1000], price: '10k-15k' },
            { range: [999, 900], price: '45k-50k' },
            { range: [899, 800], price: '50k-55k' },
            { range: [799, 700], price: '55k-60k' },
            { range: [699, 600], price: '60k-65k' },
            { range: [599, 500], price: '65k-70k' },
            { range: [499, 400], price: '70k-80k' },
            { range: [399, 300], price: '80k-90k' },
            { range: [299, 200], price: '105k-115k' },
            { range: [199, 100], price: '125k-140k' },
            { range: [99, 80], price: '1.3M-1.5M' },
            { range: [79, 70], price: '1.5M-1.6M' },
            { range: [69, 60], price: '1.6M-1.7M' },
            { range: [59, 50], price: '1.7M-1.8M' },
            { range: [49, 40], price: '1.8M-2.0M' },
            { range: [39, 30], price: '2.0M-2.3M' },
            { range: [29, 25], price: '2.3M-2.6M' },
            { range: [24, 20], price: '2.6M-2.9M' },
            { range: [19, 15], price: '3.5M-4.5M' },
            { range: [14, 10], price: '4.5M-5.5M' }
            // { range: [9, 9], price: '12M' },
            // { range: [8, 8], price: '20M' },
            // { range: [7, 7], price: '30M' },
            // { range: [6, 6], price: '40M' },
            // { range: [5, 5], price: '50M' },
            // { range: [4, 4], price: '60M' },
            // { range: [3, 3], price: '75M' },
            // { range: [2, 2], price: '85M' },
            // { range: [1, 1], price: '100M' }
        ]
    },

    'Trade Ticket': {
        officialName: 'Trade Ticket',
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [1000000, 500000], price: '1k' },
            { range: [499999, 100000], price: '1k-2k' },
            { range: [99999, 50000], price: '2k-3k' },
            { range: [49999, 10000], price: '3k-5k' },
            { range: [9999, 5000], price: '5k-8k' },
            { range: [4999, 1000], price: '10k-25k' },
            { range: [999, 900], price: '60k-70k' },
            { range: [899, 800], price: '70k-85k' },
            { range: [799, 700], price: '85k-105k' },
            { range: [699, 600], price: '105k-130k' },
            { range: [599, 500], price: '130k-175k' },
            { range: [499, 400], price: '175k-225k' },
            { range: [399, 300], price: '220k-290k' },
            { range: [299, 200], price: '285k-435k' },
            { range: [199, 100], price: '430k-580k' },
            { range: [99, 80], price: '1M-1.3M' },
            { range: [79, 60], price: '1.3M-2.3M' },
            { range: [59, 50], price: '2.3M-2.5M' },
            { range: [49, 40], price: '2.5M-2.8M' },
            { range: [39, 30], price: '2.8M-3.5M' },
            { range: [29, 20], price: '3.5M-5M' },
            { range: [19, 15], price: '5M-7M' },
            { range: [14, 10], price: '7M-10M' },
            { range: [9, 9], price: '25M' },
            { range: [8, 8], price: '30M' },
            { range: [7, 7], price: '35M' },
            { range: [6, 6], price: '42M' },
            { range: [5, 5], price: '50M' },
            { range: [4, 4], price: '60M' },
            { range: [3, 3], price: '75M' },
            { range: [2, 2], price: '90M' },
            { range: [1, 1], price: '115M' }
        ]
    },

    // AUCTION ITEMS ABOVE
    // NON AUCTION BELOW
    'Rednose Rifle': {
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Rednose rifle',
        price: '10-15k',
        tradeValue: '15k'
    },

    'Pile of Bones': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Pile of Bones',
        price: '$50 per bone unless the stack is 31-50 in which case it is $1.5M-2M'
    },

    'Animal Bones': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Animal Bones',
        price: '$3k-5k per bone unless the stack is 50 or 1, in which case the value varies heavily'
    },

    'Cursed Volcanic Pistol': {
        demand: Demand.EXTREMELY_HIGH,
        stability: Stability.STABLE,
        trend: Trend.INCREASING,
        officialName: 'Cursed Volcanic Pistol',
        price: '85k'
    },

    'Cursed Lantern': {
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Cursed Lantern',
        price: '15k'
    },

    'Occult Lantern': {
        demand: Demand.EXTREMELY_HIGH,
        stability: Stability.STABLE,
        trend: Trend.INCREASING,
        officialName: 'Occult Lantern',
        price: '80k'
    },

    'Occult Sawed Off': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Occult Sawed-Off',
        price: '5k'
    },

    'Occult Mule': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Occult Mule',
        price: '5k'
    },

    'Ceremonial Dagger': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Ceremonial Dagger',
        price: '8k'
    },

    'Zombie Bear Pelt': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Zombie Bear Pelt',
        price: '250'
    },

    'Wendigo Bones': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Wendigo Bones',
        price: '0'
    },

    'Any Vials': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Vials',
        price: '0'
    },

    'Frozen Volcanic Rifle': {
        demand: Demand.EXTREMELY_HIGH,
        stability: Stability.STABLE,
        trend: Trend.INCREASING,
        price: '70k',
        officialName: 'Frozen Volcanic Rifle'
    },

    'Frozen Axe': {
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Frozen Axe',
        price: '55k'
    },

    'Frozen Horn Bow': {
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Frozen Horn Bow',
        price: '65k'
    },

    'Skeleton Horse Parts': {
        demand: Demand.HIGH,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Skeleton Horse Parts',
        price: '60k'
    },

    'Stolen Presents': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Stolen Presents',
        price: '1k each',
        tradeValue: '1k'
    },

    'Skin Walker Spear': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Skin Walker Spear',
        price: '10k'
    },

    'Model 3 Lightning': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Model 3 Lightning',
        price: '20k'
    },

    'Skin Walker Bow': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Skin Walker Bow',
        price: '10k'
    },

    'Christmas Cookies': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Christmas Cookies',
        price: '50 each',
        tradeValue: '50'
    },

    'Candy Canes': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Candy Canes',
        price: '250 each',
        tradeValue: '250'
    },

    'Polar Bear Pelt': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Polar Bear Pelt',
        price: '250'
    },

    'Ancient Relic': {
        demand: Demand.HIGH,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Ancient Relic',
        price: '55k'
    },

    'Frosty Gun Parts': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Frosty Gun Parts',
        price: '1.5k'
    },

    'Damaged Gun Barrel': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Damaged Gun Barrel',
        price: '5k'
    },

    'Damaged Gun Parts': {
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Damaged Gun Parts',
        price: '8k'
    },

    'Damaged Gun Body': {
        demand: Demand.HIGH,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Damaged Gun Body',
        price: '25k'
    },

    'Martini Gun': {
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Martini Gun',
        price: '40k'
    },

    'Blunderbuss Barrel': {
        demand: Demand.HIGH,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Damaged Gun Barrel',
        price: '28k'
    },

    'Blunderbuss Parts': {
        demand: Demand.HIGH,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Damaged Gun Parts',
        price: '40k'
    },

    'Blunderbuss Body': {
        demand: Demand.EXTREMELY_HIGH,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Damaged Gun Body',
        price: '55k'
    },

    Blunderbuss: {
        demand: Demand.EXTREMELY_HIGH,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Blunderbuss Gun',
        price: '125-150k'
    },

    'Flood Lantern': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Flood Lantern',
        price: '10k'
    },

    'Occult Blade': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Occult Blade',
        price: '10k'
    },

    'An Old Boot': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'An Old Boot',
        price: '200'
    },

    'Hudsons Key': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Hudsons Key',
        price: '0.3'
    },

    'Thunderstruck Log': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Thunderstruck Log',
        price: '2.5k'
    },

    'Thunderstruck Cactus Juice': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Thunderstruck Cactus Juice',
        price: '3.5k'
    },

    'Scorched Pelt': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Scorched Pelt',
        price: '1.5k'
    },

    Dubloons: {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Dubloons',
        price: '$50 per coin',
        tradeValue: '50'
    },

    'Gold Bars': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Gold Bars',
        price: '$100 per bar',
        tradeValue: '100'
    },

    'Albino Gator Pelt': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Albino Gator Pelt',
        price: '750'
    },

    'Snake Venom': {
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Snake Venom',
        price: '525k'
    },

    'Stacked Coal': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Stacked Coal',
        price: '35k'
    },

    'Legendary Pelts': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Legendary Pelts',
        price: 'Shop price'
    },

    'Normal Pelts': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Normal Pelts',
        price: 'Shop price'
    },

    Ores: {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Ores',
        price: 'Shop price'
    },

    'Workshop Ticket': {
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Workshop Ticket',
        price: '1k per ticket'
    },

    'Santa Lantern': {
        demand: Demand.LOW,
        stability: Stability.UNSTABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Santa Lantern',
        price: '10k'
    },

    'Membership Token': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Membership Token',
        price: '25-30k each',
        tradeValue: '25k'
    },

    Aequitas: {
        demand: Demand.EXTREMELY_HIGH,
        stability: Stability.UNSTABLE,
        trend: Trend.INCREASING,
        officialName: 'Aequitas',
        price: '3T'
    },

    'Frozen Aequitas': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.UNSTABLE,
        trend: Trend.DECREASING,
        officialName: 'Frozen Aequitas',
        price: '-36B'
    }
} as const

export const isAuctionItem = (item: string): boolean => {
    return auctionItem.includes(item as [...typeof auctionItem][number])
}

export const isNonAuctionItem = (item: string): boolean => {
    return nonAuctionItems.includes(item as [...typeof nonAuctionItems][number])
}
