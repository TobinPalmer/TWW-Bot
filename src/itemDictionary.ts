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
    'Blunderbuss Barrel',
    'Blunderbuss Parts',
    'Blunderbuss Body',
    'Blunderbuss White',
    'Blunderbuss Black & Gold',
    'Blunderbuss Rosewood',
    'Blunderbuss Dark Brown',
    'Blunderbuss Light Brown',
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
    'Jezail Musket',
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
        trend: Trend.DECREASING,
        serialRanges: [
            { range: [7999, 7000], price: '2.1M-2.2M' },
            { range: [6999, 6000], price: '2.2M' },
            { range: [5999, 5000], price: '2.3M' },
            { range: [4999, 4000], price: '2.4M-2.5M' },
            { range: [3999, 3000], price: '2.6M-2.7M' },
            { range: [2999, 2000], price: '2.8M-2.9M' },
            { range: [1999, 1000], price: '3M-3.1M' },
            { range: [999, 800], price: '7.25M-7.4M' },
            { range: [799, 600], price: '7.5M-7.7M' },
            { range: [599, 400], price: '7.9M-8.2M' },
            { range: [399, 300], price: '8.35M-8.7M' },
            { range: [299, 200], price: '9.25M-9.75M' },
            { range: [199, 150], price: '10M-10.5M' },
            { range: [149, 100], price: '11M-11.5M' },
            { range: [99, 90], price: '15M-16M' },
            { range: [89, 80], price: '18M-19M' },
            { range: [79, 70], price: '20M-21M' },
            { range: [69, 60], price: '22.5M-23.5M' },
            { range: [59, 50], price: '25M-27M' },
            { range: [49, 40], price: '29M-31M' },
            { range: [39, 30], price: '33M-35.5M' },
            { range: [29, 20], price: '37.5M-39M' },
            { range: [19, 15], price: '41M-43M' },
            { range: [14, 10], price: '45M-50M' },
            { range: [9, 9], price: '60M' },
            { range: [8, 8], price: '70M' },
            { range: [7, 7], price: '85M' },
            { range: [6, 6], price: '100M' },
            { range: [5, 5], price: '115M' },
            { range: [4, 4], price: '125M' },
            { range: [3, 3], price: '150M' },
            { range: [2, 2], price: '175M' },
            { range: [1, 1], price: '250M' }
        ]
    },

    'Paterson Navy': {
        officialName: 'Paterson Navy',
        increasing: true,
        demand: Demand.EXTREMELY_HIGH,
        stability: Stability.UNSTABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 25000], price: '900K' },
            { range: [24999, 20000], price: '900k-925k' },
            { range: [19999, 15000], price: '950k-975k' },
            { range: [14999, 10000], price: '975k-1m' },
            { range: [9999, 9000], price: '1.075M-1.1M' },
            { range: [8999, 8000], price: '1.1M-1.150M' },
            { range: [7999, 7000], price: '1.150M-1.175M' },
            { range: [6999, 6000], price: '1.175M-1.2M' },
            { range: [5999, 5000], price: '1.2M-1.225M' },
            { range: [4999, 4000], price: '1.25M-1.275M' },
            { range: [3999, 3000], price: '1.275M-1.35M' },
            { range: [2999, 2000], price: '1.35M-1.4M' },
            { range: [1999, 1000], price: '1.4M-1.6M' },
            { range: [999, 900], price: '1.8M-2M' },
            { range: [899, 800], price: '2M-2.2M' },
            { range: [799, 700], price: '2.2M-2.5M' },
            { range: [699, 600], price: '2.5M-2.8M' },
            { range: [599, 500], price: '2.8M-3.1M' },
            { range: [499, 400], price: '3.2M-3.5M' },
            { range: [399, 300], price: '3.5M-3.8M' },
            { range: [299, 200], price: '3.8M-4.2M' },
            { range: [199, 100], price: '4.2M-4.7M' },
            { range: [99, 90], price: '5M-6M' },
            { range: [89, 80], price: '6M-8M' },
            { range: [79, 70], price: '8M-9M' },
            { range: [69, 60], price: '9M-10M' },
            { range: [59, 50], price: '10M-11M' },
            { range: [49, 40], price: '11M-13M' },
            { range: [39, 30], price: '13M-15M' },
            { range: [29, 20], price: '16M-18M' },
            { range: [19, 15], price: '20M-23M' },
            { range: [14, 10], price: '25M-30M' }
        ]
    },

    'Jezail Musket': {
        officialName: 'Jezail Musket',
        demand: Demand.LOW,
        stability: Stability.UNSTABLE,
        trend: Trend.DECREASING,
        serialRanges: [
            { range: [3000, 2000], price: '300k-350k' },
            { range: [1999, 1000], price: '350k-400k' },
            { range: [999, 800], price: '625k-650k' },
            { range: [799, 600], price: '650k-700k' },
            { range: [599, 400], price: '715k-775k' },
            { range: [399, 300], price: '800k-900k' },
            { range: [299, 200], price: '925k-1M' },
            { range: [199, 100], price: '1.025M-1.2M' },
            { range: [99, 90], price: '1.4M-1.5M' },
            { range: [89, 80], price: '1.6M-1.7M' },
            { range: [79, 70], price: '1.8M-1.9M' },
            { range: [69, 60], price: '2M-2.1M' },
            { range: [59, 50], price: '2.2M-2.3M' },
            { range: [49, 40], price: '2.5M-2.6M' },
            { range: [39, 30], price: '2.8M-2.9M' },
            { range: [29, 25], price: '3.1M-3.3M' },
            { range: [24, 20], price: '3.4M-3.6M' },
            { range: [19, 15], price: '4M-4.2M' },
            { range: [14, 10], price: '4.5M-5M' }
        ]
    },

    Axegonne: {
        officialName: 'Admirals Axegonne',
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 8000], price: '190k' },
            { range: [7999, 6000], price: '190k-210k' },
            { range: [5999, 5000], price: '215k-225k' },
            { range: [4999, 4000], price: '230k-250k' },
            { range: [3999, 3000], price: '250k-275k' },
            { range: [2999, 2000], price: '275k-290k' },
            { range: [1999, 1000], price: '300k-325k' },
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
            { range: [99, 90], price: '1.4M-1.5M' },
            { range: [89, 80], price: '1.6M-1.7M' },
            { range: [79, 70], price: '1.8M-1.9M' },
            { range: [69, 60], price: '2M-2.1M' },
            { range: [59, 50], price: '2.2M-2.3M' },
            { range: [49, 40], price: '2.5M-2.6M' },
            { range: [39, 30], price: '2.8M-2.9M' },
            { range: [29, 25], price: '3.1M-3.3M' },
            { range: [24, 20], price: '3.4M-3.6M' },
            { range: [19, 15], price: '4M-4.2M' },
            { range: [14, 10], price: '4.5M-5M' },
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
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '125k' },
            { range: [39999, 30000], price: '125k-130k' },
            { range: [29999, 20000], price: '130k-135k' },
            { range: [19999, 10000], price: '135k-145k' },
            { range: [9999, 8000], price: '155k-175k' },
            { range: [7999, 6000], price: '175k-195k' },
            { range: [5999, 4000], price: '195k-215k' },
            { range: [3999, 2000], price: '215k-235k' },
            { range: [1999, 1000], price: '245k-255k' },
            { range: [999, 900], price: '350k-360k' },
            { range: [899, 800], price: '380k-400k' },
            { range: [799, 700], price: '410k-430k' },
            { range: [699, 600], price: '450k-480k' },
            { range: [599, 500], price: '495k-515k' },
            { range: [499, 400], price: '535k-575k' },
            { range: [399, 300], price: '590k-640k' },
            { range: [299, 200], price: '700k-800k' },
            { range: [199, 100], price: '900k-1M' },
            { range: [99, 90], price: '1.5M-1.7M' },
            { range: [89, 80], price: '1.8M-1.9M' },
            { range: [79, 70], price: '2M-2.1M' },
            { range: [69, 60], price: '2.25M-2.4M' },
            { range: [59, 50], price: '2.5M-2.65M' },
            { range: [49, 40], price: '2.85M-3M' },
            { range: [39, 30], price: '3.3M-3.5M' },
            { range: [29, 25], price: '3.6M-3.8M' },
            { range: [24, 20], price: '4M-4.2M' },
            { range: [19, 15], price: '5.5M-6.25M' },
            { range: [14, 10], price: '7.25M-8.25M' }
        ]
    },

    'Kukri Machete Full Black': {
        officialName: 'Kukri Machete (Full Black)',
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '135k' },
            { range: [39999, 30000], price: '135k-140k' },
            { range: [29999, 20000], price: '140k-145k' },
            { range: [19999, 10000], price: '145k-155k' },
            { range: [9999, 8000], price: '165k-185k' },
            { range: [7999, 6000], price: '185k-205k' },
            { range: [5999, 4000], price: '205k-225k' },
            { range: [3999, 2000], price: '225k-245k' },
            { range: [1999, 1000], price: '255k-265k' },
            { range: [999, 900], price: '375k-390k' },
            { range: [899, 800], price: '400k-425k' },
            { range: [799, 700], price: '440k-470k' },
            { range: [699, 600], price: '490k-525k' },
            { range: [599, 500], price: '545k-570k' },
            { range: [499, 400], price: '625k-675k' },
            { range: [399, 300], price: '750k-820k' },
            { range: [299, 200], price: '900k-1M' },
            { range: [199, 100], price: '1.15M-1.3M' },
            { range: [99, 90], price: '2M-2.2M' },
            { range: [89, 80], price: '2.25M-2.35M' },
            { range: [79, 70], price: '2.45M-2.55M' },
            { range: [69, 60], price: '2.65M-2.75M' },
            { range: [59, 50], price: '2.9M-3M' },
            { range: [49, 40], price: '3.2M-3.5M' },
            { range: [39, 30], price: '3.75M-4M' },
            { range: [29, 25], price: '4.5M-5M' },
            { range: [24, 20], price: '5.5M-6M' },
            { range: [19, 15], price: '7.5M-8.5M' },
            { range: [14, 10], price: '10M-11.5M' }
        ]
    },
    'Kukri Machete Gold & White': {
        officialName: 'Kukri Machete (Gold & White)',
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '135k' },
            { range: [39999, 30000], price: '135k-140k' },
            { range: [29999, 20000], price: '140k-145k' },
            { range: [19999, 10000], price: '145k-155k' },
            { range: [9999, 8000], price: '165k-185k' },
            { range: [7999, 6000], price: '185k-205k' },
            { range: [5999, 4000], price: '205k-225k' },
            { range: [3999, 2000], price: '225k-245k' },
            { range: [1999, 1000], price: '255k-265k' },
            { range: [999, 900], price: '375k-390k' },
            { range: [899, 800], price: '400k-425k' },
            { range: [799, 700], price: '440k-470k' },
            { range: [699, 600], price: '490k-525k' },
            { range: [599, 500], price: '545k-570k' },
            { range: [499, 400], price: '625k-675k' },
            { range: [399, 300], price: '750k-820k' },
            { range: [299, 200], price: '900k-1M' },
            { range: [199, 100], price: '1.15M-1.3M' },
            { range: [99, 90], price: '2M-2.2M' },
            { range: [89, 80], price: '2.25M-2.35M' },
            { range: [79, 70], price: '2.45M-2.55M' },
            { range: [69, 60], price: '2.65M-2.75M' },
            { range: [59, 50], price: '2.9M-3M' },
            { range: [49, 40], price: '3.2M-3.5M' },
            { range: [39, 30], price: '3.75M-4M' },
            { range: [29, 25], price: '4.5M-5M' },
            { range: [24, 20], price: '5.5M-6M' },
            { range: [19, 15], price: '7.5M-8.5M' },
            { range: [14, 10], price: '10M-11.5M' }
        ]
    },
    'Kukri Machete White Sheath': {
        officialName: 'Kukri Machete (White Sheath)',
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '130k' },
            { range: [39999, 30000], price: '130k-135k' },
            { range: [29999, 20000], price: '135k-140k' },
            { range: [19999, 10000], price: '140k-150k' },
            { range: [9999, 8000], price: '160k-180k' },
            { range: [7999, 6000], price: '180k-200k' },
            { range: [5999, 4000], price: '200k-220k' },
            { range: [3999, 2000], price: '220k-240k' },
            { range: [1999, 1000], price: '250k-260k' },
            { range: [999, 900], price: '375k-390k' },
            { range: [899, 800], price: '400k-425k' },
            { range: [799, 700], price: '440k-470k' },
            { range: [699, 600], price: '490k-525k' },
            { range: [599, 500], price: '545k-570k' },
            { range: [499, 400], price: '625k-675k' },
            { range: [399, 300], price: '750k-820k' },
            { range: [299, 200], price: '900k-1M' },
            { range: [199, 100], price: '1.15M-1.3M' },
            { range: [99, 90], price: '2M-2.2M' },
            { range: [89, 80], price: '2.25M-2.35M' },
            { range: [79, 70], price: '2.45M-2.55M' },
            { range: [69, 60], price: '2.65M-2.75M' },
            { range: [59, 50], price: '2.9M-3M' },
            { range: [49, 40], price: '3.2M-3.5M' },
            { range: [39, 30], price: '3.75M-4M' },
            { range: [29, 25], price: '4.5M-5M' },
            { range: [24, 20], price: '5.5M-6M' },
            { range: [19, 15], price: '7.5M-8.5M' },
            { range: [14, 10], price: '10M-11.5M' }
        ]
    },

    'Kukri Machete Black & Bronze': {
        officialName: 'Kukri Machete (Black & Bronze)',
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '125k' },
            { range: [39999, 30000], price: '125k-130k' },
            { range: [29999, 20000], price: '130k-135k' },
            { range: [19999, 10000], price: '135k-145k' },
            { range: [9999, 8000], price: '155k-175k' },
            { range: [7999, 6000], price: '175k-195k' },
            { range: [5999, 4000], price: '195k-215k' },
            { range: [3999, 2000], price: '215k-235k' },
            { range: [1999, 1000], price: '245k-255k' },
            { range: [999, 900], price: '350k-360k' },
            { range: [899, 800], price: '380k-400k' },
            { range: [799, 700], price: '410k-430k' },
            { range: [699, 600], price: '450k-480k' },
            { range: [599, 500], price: '495k-515k' },
            { range: [499, 400], price: '535k-575k' },
            { range: [399, 300], price: '590k-640k' },
            { range: [299, 200], price: '700k-800k' },
            { range: [199, 100], price: '900k-1M' },
            { range: [99, 90], price: '1.5M-1.7M' },
            { range: [89, 80], price: '1.8M-1.9M' },
            { range: [79, 70], price: '2M-2.1M' },
            { range: [69, 60], price: '2.25M-2.4M' },
            { range: [59, 50], price: '2.5M-2.65M' },
            { range: [49, 40], price: '2.85M-3M' },
            { range: [39, 30], price: '3.3M-3.5M' },
            { range: [29, 25], price: '3.6M-3.8M' },
            { range: [24, 20], price: '4M-4.2M' },
            { range: [19, 15], price: '5.5M-6.25M' },
            { range: [14, 10], price: '7.25M-8.25M' }
        ]
    },
    'Kukri Machete Red Stripe': {
        officialName: 'Kukri Machete (Red Stripe)',
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '115k' },
            { range: [39999, 30000], price: '115k-120k' },
            { range: [29999, 20000], price: '120k-125k' },
            { range: [19999, 10000], price: '125k-135k' },
            { range: [9999, 8000], price: '135k-145k' },
            { range: [7999, 6000], price: '145k-165k' },
            { range: [5999, 4000], price: '165k-185k' },
            { range: [3999, 2000], price: '185k-205k' },
            { range: [1999, 1000], price: '225k-245k' },
            { range: [999, 900], price: '350k-360k' },
            { range: [899, 800], price: '380k-400k' },
            { range: [799, 700], price: '410k-430k' },
            { range: [699, 600], price: '450k-480k' },
            { range: [599, 500], price: '495k-515k' },
            { range: [499, 400], price: '535k-575k' },
            { range: [399, 300], price: '590k-640k' },
            { range: [299, 200], price: '700k-800k' },
            { range: [199, 100], price: '900k-1M' },
            { range: [99, 90], price: '1.5M-1.7M' },
            { range: [89, 80], price: '1.8M-1.9M' },
            { range: [79, 70], price: '2M-2.1M' },
            { range: [69, 60], price: '2.25M-2.4M' },
            { range: [59, 50], price: '2.5M-2.65M' },
            { range: [49, 40], price: '2.85M-3M' },
            { range: [39, 30], price: '3.2M-3.4M' },
            { range: [29, 25], price: '3.7M-3.85M' },
            { range: [24, 20], price: '4M-4.2M' },
            { range: [19, 15], price: '5.5M-6.25M' },
            { range: [14, 10], price: '7.25M-8.25M' }
        ]
    },
    'Kukri Machete Tan Handle': {
        officialName: 'Kukri Machete (Tan Handle)',
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '110k' },
            { range: [39999, 30000], price: '110k-115k' },
            { range: [29999, 20000], price: '115k-120k' },
            { range: [19999, 10000], price: '120k-130k' },
            { range: [9999, 8000], price: '130k-140k' },
            { range: [7999, 6000], price: '140k-160k' },
            { range: [5999, 4000], price: '160k-180k' },
            { range: [3999, 2000], price: '180k-200k' },
            { range: [1999, 1000], price: '225k-245k' },
            { range: [999, 900], price: '350k-360k' },
            { range: [899, 800], price: '380k-400k' },
            { range: [799, 700], price: '410k-430k' },
            { range: [699, 600], price: '450k-480k' },
            { range: [599, 500], price: '495k-515k' },
            { range: [499, 400], price: '535k-575k' },
            { range: [399, 300], price: '590k-640k' },
            { range: [299, 200], price: '700k-800k' },
            { range: [199, 100], price: '900k-1M' },
            { range: [99, 90], price: '1.5M-1.7M' },
            { range: [89, 80], price: '1.8M-1.9M' },
            { range: [79, 70], price: '2M-2.1M' },
            { range: [69, 60], price: '2.25M-2.4M' },
            { range: [59, 50], price: '2.5M-2.65M' },
            { range: [49, 40], price: '2.85M-3M' },
            { range: [39, 30], price: '3.2M-3.4M' },
            { range: [29, 25], price: '3.7M-3.85M' },
            { range: [24, 20], price: '4M-4.2M' },
            { range: [19, 15], price: '5.5M-6.25M' },
            { range: [14, 10], price: '7.25M-8.25M' }
            // the lowest known kukri of this variant is serial 20
        ]
    },
    'Kukri Machete Inverted Grey': {
        officialName: 'Kukri Machete (Inverted Grey)',
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '120k' },
            { range: [39999, 30000], price: '120k-125k' },
            { range: [29999, 20000], price: '125k-130k' },
            { range: [19999, 10000], price: '130k-140k' },
            { range: [9999, 8000], price: '140k-150k' },
            { range: [7999, 6000], price: '160k-170k' },
            { range: [5999, 4000], price: '170k-190k' },
            { range: [3999, 2000], price: '190k-210k' },
            { range: [1999, 1000], price: '235k-250k' },
            { range: [999, 900], price: '350k-360k' },
            { range: [899, 800], price: '380k-400k' },
            { range: [799, 700], price: '410k-430k' },
            { range: [699, 600], price: '450k-480k' },
            { range: [599, 500], price: '495k-515k' },
            { range: [499, 400], price: '535k-575k' },
            { range: [399, 300], price: '590k-640k' },
            { range: [299, 200], price: '700k-800k' },
            { range: [199, 100], price: '900k-1M' },
            { range: [99, 90], price: '1.5M-1.7M' },
            { range: [89, 80], price: '1.8M-1.9M' },
            { range: [79, 70], price: '2M-2.1M' },
            { range: [69, 60], price: '2.25M-2.4M' },
            { range: [59, 50], price: '2.5M-2.65M' },
            { range: [49, 40], price: '2.85M-3M' },
            { range: [39, 30], price: '3.2M-3.4M' },
            { range: [29, 25], price: '3.7M-3.85M' },
            { range: [24, 20], price: '4M-4.2M' },
            { range: [19, 15], price: '5.5M-6.25M' },
            { range: [14, 10], price: '7.25M-8.25M' }
        ]
    },
    'Kukri Machete Brown Handle': {
        officialName: 'Kukri Machete (Brown Handle)',
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [100000, 40000], price: '110k' },
            { range: [39999, 30000], price: '110k-115k' },
            { range: [29999, 20000], price: '115k-120k' },
            { range: [19999, 10000], price: '120k-130k' },
            { range: [9999, 8000], price: '130k-140k' },
            { range: [7999, 6000], price: '140k-160k' },
            { range: [5999, 4000], price: '160k-180k' },
            { range: [3999, 2000], price: '180k-200k' },
            { range: [1999, 1000], price: '225k-240k' },
            { range: [999, 900], price: '325k-340k' },
            { range: [899, 800], price: '350k-370k' },
            { range: [799, 700], price: '380k-400k' },
            { range: [699, 600], price: '420k-440k' },
            { range: [599, 500], price: '465k-485k' },
            { range: [499, 400], price: '515k-540k' },
            { range: [399, 300], price: '580k-630k' },
            { range: [299, 200], price: '700k-750k' },
            { range: [199, 100], price: '850k-950k' },
            { range: [99, 90], price: '1.35M-1.55M' },
            { range: [89, 80], price: '1.65M-1.75M' },
            { range: [79, 70], price: '1.85M-1.95M' },
            { range: [69, 60], price: '2.1M-2.25M' },
            { range: [59, 50], price: '2.35M-2.5M' },
            { range: [49, 40], price: '2.7M-2.85M' },
            { range: [39, 30], price: '3.05M-3.25M' },
            { range: [29, 25], price: '3.4M-3.6M' },
            { range: [24, 20], price: '3.9M-4.1M' },
            { range: [19, 15], price: '5M-5.5M' },
            { range: [14, 10], price: '6.5M-7M' }
        ]
    },

    'Prototype Pistol': {
        officialName: 'Schwarzlose Prototype Pistol',
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [1000000, 70000], price: '125k' },
            { range: [69999, 60000], price: '125k-127k' },
            { range: [59999, 50000], price: '127k-130k' },
            { range: [49999, 40000], price: '130k-135k' },
            { range: [39999, 30000], price: '135k-140k' },
            { range: [29999, 20000], price: '140k-145k' },
            { range: [19999, 10000], price: '145k-150k' },
            { range: [9999, 8000], price: '155k-170k' },
            { range: [7999, 6000], price: '175k-190k' },
            { range: [5999, 4000], price: '190k-210k' },
            { range: [3999, 2000], price: '215k-230k' },
            { range: [1999, 1000], price: '235k-245k' },
            { range: [999, 900], price: '400k-425k' },
            { range: [899, 800], price: '445k-465k' },
            { range: [799, 700], price: '485k-515k' },
            { range: [699, 600], price: '535k-555k' },
            { range: [599, 500], price: '575k-600k' },
            { range: [499, 400], price: '650k-700k' },
            { range: [399, 300], price: '750k-800k' },
            { range: [299, 200], price: '900k-1M' },
            { range: [199, 100], price: '1.15M-1.3M' },
            { range: [99, 90], price: '1.8M-1.9M' },
            { range: [89, 80], price: '2.1M-2.2M' },
            { range: [79, 70], price: '2.3M-2.4M' },
            { range: [69, 60], price: '2.5M-2.6M' },
            { range: [59, 50], price: '2.8M-2.9M' },
            { range: [49, 40], price: '3.15M-3.35M' },
            { range: [39, 30], price: '3.85M-4.15M' },
            { range: [29, 25], price: '5M-5.25M' },
            { range: [24, 20], price: '5.75M-6M' },
            { range: [19, 15], price: '7M-8M' },
            { range: [14, 10], price: '9M-10M' },
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
            { range: [1000000, 60000], price: '125k' },
            { range: [59999, 50000], price: '125k-130k' },
            { range: [49999, 40000], price: '130k-135k' },
            { range: [39999, 30000], price: '135k-145k' },
            { range: [29999, 20000], price: '145k-160k' },
            { range: [19999, 10000], price: '160k-175k' },
            { range: [9999, 8000], price: '180k-190k' },
            { range: [7999, 6000], price: '190k-195k' },
            { range: [5999, 4000], price: '200-210k' },
            { range: [3999, 2000], price: '215k-240k' },
            { range: [1999, 1000], price: '245k-260k' },
            { range: [999, 900], price: '400k-425k' },
            { range: [899, 800], price: '445k-465k' },
            { range: [799, 700], price: '485k-515k' },
            { range: [699, 600], price: '535k-555k' },
            { range: [599, 500], price: '575k-600k' },
            { range: [499, 400], price: '650k-700k' },
            { range: [399, 300], price: '750k-800k' },
            { range: [299, 200], price: '900k-1M' },
            { range: [199, 100], price: '1.15M-1.3M' },
            { range: [99, 90], price: '1.8M-1.9M' },
            { range: [89, 80], price: '2.1M-2.2M' },
            { range: [79, 70], price: '2.3M-2.4M' },
            { range: [69, 60], price: '2.5M-2.6M' },
            { range: [59, 50], price: '2.8M-2.9M' },
            { range: [49, 40], price: '3.15M-3.35M' },
            { range: [39, 30], price: '3.85M-4.15M' },
            { range: [29, 25], price: '5M-5.25M' },
            { range: [24, 20], price: '5.75M-6M' },
            { range: [19, 15], price: '7M-8M' },
            { range: [14, 10], price: '9M-10M' },
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
            { range: [1000000, 60000], price: '25k' },
            { range: [59999, 30000], price: '30k-40k' },
            { range: [29999, 20000], price: '45k-50k' },
            { range: [19999, 8000], price: '50k-55k' },
            { range: [7999, 3000], price: '55k-70k' },
            { range: [2999, 1000], price: '70k-85k' },
            { range: [999, 700], price: '95k-110k' },
            { range: [699, 400], price: '115k-135k' },
            { range: [399, 300], price: '140k-150k' },
            { range: [299, 200], price: '155k-170k' },
            { range: [199, 100], price: '175k-200k' },
            { range: [99, 90], price: '700k-750k' },
            { range: [89, 80], price: '775k-825k' },
            { range: [79, 70], price: '850k-900k' },
            { range: [69, 60], price: '925k-1M' },
            { range: [59, 50], price: '1.025M-1.1M' },
            { range: [49, 40], price: '1.3M-1.4M' },
            { range: [39, 30], price: '1.5M-1.6M' },
            { range: [29, 25], price: '1.8M-1.9M' },
            { range: [24, 20], price: '2M-2.1M' },
            { range: [19, 15], price: '2.6M-2.8M' },
            { range: [14, 10], price: '2.9M-3.1M' }
        ]
    },
    'Guycot Chain Pistol': {
        officialName: 'Guycot Chain Pistol',
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [1000000, 60000], price: '15k' },
            { range: [59999, 30000], price: '18k-20k' },
            { range: [29999, 20000], price: '20k-30k' },
            { range: [19999, 8000], price: '30k-40k' },
            { range: [7999, 3000], price: '40k-50k' },
            { range: [2999, 1000], price: '50k-60k' },
            { range: [999, 700], price: '80k-95k' },
            { range: [699, 400], price: '96k-115k' },
            { range: [399, 300], price: '116k-125k' },
            { range: [299, 200], price: '126k-135k' },
            { range: [199, 100], price: '150k-160k' },
            { range: [99, 90], price: '500k-550k' },
            { range: [89, 80], price: '550k-600k' },
            { range: [79, 70], price: '600k-650k' },
            { range: [69, 60], price: '650k-700k' },
            { range: [59, 50], price: '700k-750k' },
            { range: [49, 40], price: '800k-900k' },
            { range: [39, 30], price: '950k-1.05M' },
            { range: [29, 25], price: '1.15M-1.25M' },
            { range: [24, 20], price: '1.4M-1.5M' },
            { range: [19, 15], price: '1.8M-2M' },
            { range: [14, 10], price: '2.25M-2.5M' }
        ]
    },
    Accordion: {
        officialName: 'Accordion',
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        serialRanges: [
            { range: [1000000, 40000], price: '10k' },
            { range: [39999, 15000], price: '10k-15k' },
            { range: [14999, 7500], price: '15k-20k' },
            { range: [7499, 5000], price: '20k-30k' },
            { range: [5000, 2000], price: '30k-40k' },
            { range: [1999, 1000], price: '40k-50k' },
            { range: [999, 900], price: '65k-80k' },
            { range: [899, 800], price: '80k-85k' },
            { range: [799, 700], price: '85k-95k' },
            { range: [699, 600], price: '95k-115k' },
            { range: [599, 500], price: '115k-130k' },
            { range: [499, 400], price: '130k-160k' },
            { range: [399, 300], price: '160k-200k' },
            { range: [299, 200], price: '200k-250k' },
            { range: [199, 100], price: '250k-300k' },
            { range: [99, 80], price: '750k-825k' },
            { range: [79, 60], price: '850k-1M' },
            { range: [59, 50], price: '1.1M-1.2M' },
            { range: [49, 40], price: '1.25M-1.35M' },
            { range: [39, 30], price: '1.4M-1.5M' },
            { range: [29, 20], price: '1.55M-1.75M' },
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
            { range: [1000000, 40000], price: '10k' },
            { range: [39999, 15000], price: '10k-15k' },
            { range: [14999, 7500], price: '15k-20k' },
            { range: [7499, 5000], price: '20k-30k' },
            { range: [5000, 2000], price: '30k-40k' },
            { range: [1999, 1000], price: '40k-50k' },
            { range: [999, 900], price: '65k-80k' },
            { range: [899, 800], price: '80k-85k' },
            { range: [799, 700], price: '85k-95k' },
            { range: [699, 600], price: '95k-115k' },
            { range: [599, 500], price: '115k-130k' },
            { range: [499, 400], price: '130k-160k' },
            { range: [399, 300], price: '160k-200k' },
            { range: [299, 200], price: '200k-250k' },
            { range: [199, 100], price: '250k-300k' },
            { range: [99, 80], price: '1M-1.2M' },
            { range: [79, 60], price: '1.2M-1.4M' },
            { range: [59, 50], price: '1.4M-1.6M' },
            { range: [49, 40], price: '1.6M-1.8M' },
            { range: [39, 30], price: '2M-2.2M' },
            { range: [29, 20], price: '2.2M-2.5M' },
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
            { range: [1000000, 40000], price: '10k' },
            { range: [39999, 15000], price: '10k-15k' },
            { range: [14999, 7500], price: '15k-20k' },
            { range: [7499, 5000], price: '20k-30k' },
            { range: [5000, 2000], price: '30k-40k' },
            { range: [1999, 1000], price: '40k-50k' },
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
            { range: [99, 80], price: '600k-700k' },
            { range: [79, 60], price: '725k-825k' },
            { range: [59, 50], price: '835k-875k' },
            { range: [49, 40], price: '900k-1M' },
            { range: [39, 30], price: '1M-1.15M' },
            { range: [29, 20], price: '1.15M-1.35M' },
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
            { range: [1000000, 60000], price: '7k' },
            { range: [59999, 20000], price: '7k-9k' },
            { range: [20000, 7500], price: '9k-15k' },
            { range: [7500, 2000], price: '15k-20k' },
            { range: [1999, 1000], price: '20k-25k' },
            { range: [999, 900], price: '65k-70k' },
            { range: [899, 800], price: '70k-75k' },
            { range: [799, 700], price: '80k-85k' },
            { range: [699, 600], price: '90k-95k' },
            { range: [599, 500], price: '95k-100k' },
            { range: [499, 400], price: '100k-105k' },
            { range: [399, 300], price: '105k-110k' },
            { range: [299, 200], price: '125k-130k' },
            { range: [199, 100], price: '140k-150k' },
            { range: [99, 80], price: '600k-700k' },
            { range: [79, 60], price: '725k-825k' },
            { range: [59, 50], price: '835k-875k' },
            { range: [49, 40], price: '900k-1M' },
            { range: [39, 30], price: '1M-1.15M' },
            { range: [29, 20], price: '1.15M-1.35M' },
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
            { range: [99, 80], price: '600k-700k' },
            { range: [79, 60], price: '725k-825k' },
            { range: [59, 50], price: '835k-875k' },
            { range: [49, 40], price: '900k-1M' },
            { range: [39, 30], price: '1M-1.15M' },
            { range: [29, 20], price: '1.15M-1.35M' },
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
            { range: [99, 80], price: '600k-700k' },
            { range: [79, 60], price: '725k-825k' },
            { range: [59, 50], price: '835k-875k' },
            { range: [49, 40], price: '900k-1M' },
            { range: [39, 30], price: '1M-1.15M' },
            { range: [29, 20], price: '1.15M-1.35M' },
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
            { range: [80000, 50000], price: '10k-13k' },
            { range: [49999, 10000], price: '13k-18k' },
            { range: [9999, 5000], price: '20k-23k' },
            { range: [4999, 1000], price: '23k-25k' },
            { range: [999, 900], price: '50k-55k' },
            { range: [899, 800], price: '55k-65k' },
            { range: [799, 700], price: '65k-80k' },
            { range: [699, 600], price: '80k-95k' },
            { range: [599, 500], price: '95k-120k' },
            { range: [499, 400], price: '120k-150k' },
            { range: [399, 300], price: '150k-180k' },
            { range: [299, 200], price: '180k-250k' },
            { range: [199, 100], price: '250k-350k' },
            { range: [99, 80], price: '750k-825k' },
            { range: [79, 60], price: '850k-1M' },
            { range: [59, 50], price: '1.1M-1.2M' },
            { range: [49, 40], price: '1.25M-1.35M' },
            { range: [39, 30], price: '1.4M-1.5M' },
            { range: [29, 20], price: '1.55M-1.75M' },
            { range: [19, 15], price: '2.6M-2.9M' },
            { range: [14, 10], price: '3M-4M' },
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
        price: '10k'
    },

    'Pile of Bones': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Pile of Bones',
        price: '$50 per bone unless the stack is 31-50 in which case it is $1M'
    },

    'Animal Bones': {
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Animal Bones',
        price: '3k per bone, 150k for a stack of 50',
        tradeValue: '3k'
    },

    'Cursed Volcanic Pistol': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.DECREASING,
        officialName: 'Cursed Volcanic Pistol',
        price: '70k'
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
        price: '85k'
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
        price: '5k'
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
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.DECREASING,
        price: '50k',
        officialName: 'Frozen Volcanic Rifle'
    },

    'Frozen Axe': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Frozen Axe',
        price: '45k'
    },

    'Frozen Horn Bow': {
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.DECREASING,
        officialName: 'Frozen Horn Bow',
        price: '40k'
    },

    'Skeleton Horse Parts': {
        demand: Demand.MEDIUM,
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
        price: '2k each',
        tradeValue: '2k'
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
        price: '15k'
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
        price: '75 per cookie',
        tradeValue: '75'
    },

    'Candy Canes': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Candy Canes',
        price: '500 each',
        tradeValue: '500'
    },

    'Polar Bear Pelt': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Polar Bear Pelt',
        price: '250'
    },

    'Ancient Relic': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.DECREASING,
        officialName: 'Ancient Relic',
        price: '48k'
    },

    'Frosty Gun Parts': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Frosty Gun Parts',
        price: '2k'
    },

    'Damaged Gun Barrel': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Damaged Gun Barrel',
        price: '2.5k'
    },

    'Damaged Gun Parts': {
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Damaged Gun Parts',
        price: '7k'
    },

    'Damaged Gun Body': {
        demand: Demand.HIGH,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Damaged Gun Body',
        price: '20k'
    },

    'Blunderbuss Barrel': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.DECREASING,
        officialName: 'Blunderbuss Barrel',
        price: '7.5k'
    },

    'Blunderbuss Parts': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.DECREASING,
        officialName: 'Blunderbuss Parts',
        price: '11.5k'
    },

    'Blunderbuss Body': {
        demand: Demand.HIGH,
        stability: Stability.STABLE,
        trend: Trend.DECREASING,
        officialName: 'Blunderbuss Body',
        price: '35k'
    },

    'Blunderbuss White': {
        demand: Demand.HIGH,
        stability: Stability.STABLE,
        trend: Trend.DECREASING,
        officialName: 'Blunderbuss White',
        price: '100k'
    },

    'Blunderbuss Black & Gold': {
        demand: Demand.HIGH,
        stability: Stability.STABLE,
        trend: Trend.DECREASING,
        officialName: 'Blunderbuss Black & Gold',
        price: '80k'
    },

    'Blunderbuss Rosewood': {
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.DECREASING,
        officialName: 'Blunderbuss White & Gold',
        price: '50k'
    },

    'Blunderbuss Dark Brown': {
        demand: Demand.LOW,
        stability: Stability.STABLE,
        trend: Trend.DECREASING,
        officialName: 'Blunderbuss Dark Brown',
        price: '45k'
    },

    'Blunderbuss Light Brown': {
        demand: Demand.EXTREMELY_LOW,
        stability: Stability.STABLE,
        trend: Trend.DECREASING,
        officialName: 'Blunderbuss Light Brown',
        price: '40k'
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
        price: '600k'
    },

    'Stacked Coal': {
        demand: Demand.MEDIUM,
        stability: Stability.STABLE,
        trend: Trend.UNAPPLICABLE,
        officialName: 'Stacked Coal',
        price: '30k'
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
        price: '1.5k per ticket'
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
        price: '25k'
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
