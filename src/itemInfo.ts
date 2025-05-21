export enum PenetrationType {
    STRONGEST = 'Strongest',
    VERY_STRONG = 'Very Strong',
    STRONG = 'Strong',
    AVERAGE = 'Average',
    WEAK = 'Weak',
    VERY_WEAK = 'Very Weak',
    WEAKEST = 'Weakest'
}
enum PurchaseLocation {
    GUN_SHOP = 'Gun Shop',
    FORT_HENRY = 'Fort Henry',
    AUCTION_HOUSE = 'Auction House',
    FORT_SPENCER = 'Fort Spencer',
    HUNTERS_SHACK = "Hunter's Shack",
    EVENT = 'Event',
    PAID_ACCESS = 'Paid Access',
    GENERAL_STORE = 'General Store',
    GAMEPASS = 'Gamepass',
    CLUE_SCROLLS = `Clue Scrolls`
}
export type ItemDescription = {
    description: string
    price?: number
    damage: {
        headshot?: number
        headShotMulti?: number
        bodyshot?: number
        pellets?: number
        melee?: number
    }

    fireRate?: 'fanfire' | number
    fanFireRate?: number
    reloadSpeed?: number
    swingRate?: number

    attacks?: 'Stabs, Cuts' | 'Stabs'
    accuracy?: number
    penetration?: PenetrationType
    ammoCapacity?: number
    purchaseLocation: PurchaseLocation
    images: {
        inventory?: string
        description?: string
        dropoff?: string
        wiki: string
    }
}

export type ItemInfo = {
    [K in ItemStatsKeys]: ItemDescription
}

export const infoItems = [
    'Spitfire Revolving Sniper',
    'Paterson Navy',
    'Axegonne',
    'Kukri Machete',
    'Prototype Pistol',
    'Lancaster Pistol',
    'Guycot Chain Carbine',
    'Guycot Chain Pistol',
    '1855 Revolving Shotgun',
    'Volcanic Rifle',
    'YellowBoy Rifle',
    'Lynx Bolt Action',
    'Sharps Rifle',
    'Harmonica Rifle',
    'Winchester Rifle',
    'Martini Henry',
    'Hartford Rifle',
    "Mare's Leg",
    'Frozen Volcanic Rifle',
    'Mule Shotgun',
    'Sawed-Off Shotgun',
    'Volcanic Pistol',
    'Peacekeeper Revolver',
    'Model 3',
    'Lemat Revolver',
    'Navy Revolver',
    'Dragoon Pistol',
    'Lindsay Doubleshot Pistol',
    'Lochke Revolver',
    'Hammerless Revolver',
    'Golden Dragoon Pistol',
    'Mauser',
    'Cursed Volcanic Pistol',
    'Model 3 Lightning',
    'Knife',
    'Bowie Knife',
    'Ceremonial Dagger'
    // 'Laser Cannon',
    // 'Occult Sawed Off',
    // 'Occult Mule',
    // 'Occult Lantern',
    // 'Scorched Pelt',
    // 'Cursed Lantern',
    // 'Longbow',
    // 'Horse Bow',
    //'Smoke Bomb',
    //'Dynamite',
    //'Tomahawk',
    //'Lasso',
    //'Blow Dart Gun',
    //'Torch',
    // 'Tribal Horn',
    // 'Build Tool',
    // 'Lantern',
    // 'Shovel',
    // 'Binoculars',
    // 'Flare Gun',
    // 'Firework Launcher',
    // 'Flare Gun Ammo',
    // 'Poison Arrows',
    // 'Gatling Gun Ammo',
    // 'Explosive Arrow',
    // 'Blow Darts',
    // 'Tier One Pickaxe',
    // 'Tier Two Pickaxe',
    // 'Tier Three Pickaxe',
    // 'Tier Four Pickaxe',
    // 'Tier Five Pickaxe',
    // 'Tier Six Pickaxe',
    // 'Tier One Axe',
    // 'Tier Two Axe',
    // 'Tier Three Axe',
    // 'Meal',
    // 'Rootbeer',
    // 'Baton',
    // 'Handcuffs',
    // 'Bandage',
    // 'Antibiotics',
    // 'Gavel',
    // 'Whistle',
    // 'Harmonica',
    // 'Drum',
    // 'Flute',
    // 'Trumpet',
    // 'Fiddle',
    // 'Guitar',
    // 'Accordion',
    // 'Banjo',
    // 'Bongo Drums',
    // 'Camp Bed',
    // 'Camp Fire',
    // 'Camp Stool',
    // 'Camp Table',
    // 'Target Dummy',
    // 'Camp Tent 1',
    // 'Camp Tent 2',
    // 'Bear Trap',
    // 'TNT',
    // 'Detonator',
    // 'Thunderstruck Log',
    // 'Coal Ore',
    // 'Copper Ore',
    // 'Zinc Ore',
    // 'Iron Ore',
    // 'Limestone',
    // 'Silver Ore',
    // 'Gold Ore',
    // 'Ruby',
    // 'Amethyst',
    // 'Sapphire',
    // 'Emerald',
    // 'Diamond',
    // 'Meal',
    // 'Rootbeer',
    // 'Empty Plate',
    // 'Empty Bottle',
    // 'Bandage',
    // "Hudson's Key",
    // 'Clue Scroll',
    // 'An Old Boot',
    // 'Dubloons',
    // 'Gold Bar',
    // 'Damaged Gun Barrel',
    // 'Damaged Gun Parts',
    // 'Damaged Gun Body',
    // 'Coin Purse',
    // 'Bag of Cash',
    // 'Remains',
    // 'Animal Bone',
    // 'Skeleton Horse Skull',
    // 'Skeleton Horse Shoulder',
    // 'Skeleton Horse Body',
    // 'Skeleton Horse Thigh',
    // 'Skeleton Horse Leg',
    // 'Zombie Bear Pelt',
    // 'A Pile Of Bones',
    // // 'Lightning Recurve Bow',
    // // 'Skin Walker Bow',
    // 'Skin Walker Spear',
    // 'Occult Blade',
    // 'Extractor',
    // // 'Flood Lantern',
    // // 'Vial',
    // // 'Vial of Lightning Essence',
    // // 'Bear Blood Vial',
    // // 'Bison Blood Vial',
    // // 'Deer Blood Vial',
    // // 'Skinwalker Bone',
    // // 'Skinwalker Jaw',
    // // 'Skinwalker Skull',
    // // 'Wendigo Ribs',
    // // 'Sled',
    // // 'Golden Ticket',
    // // 'Christmas Cookie',
    // // 'Candy Cane',
    // // 'Polar Bear Pelt',
    // // 'Ancient Relic',
    // // 'Naughty Token',
    // // 'Nice Token',
    // // 'Stolen Present',
    // 'Frozen Axe',
    // // 'Frozen Horn Bow',
    // 'Snowball',
    // // 'Frosty Gun Barrel',
    // // 'Frosty Gun Parts',
    // // 'Frosty Gun Body',
    // 'Rednose Rifle'
    // // 'Lightsaber',
    // // 'Eggveloper Cannon 9002',
    // // 'Heavy Guitar',
    // // 'Aequitas Revolver',
    // // 'Mjölnir',
    // // 'M1911',
    // // 'M16',
    // // 'The Headsman',
    // // 'Frozen Aequitas Revolver'
] as const

export type ItemStatsKeys = (typeof infoItems)[number]

export const info: ItemInfo = {
    'Volcanic Rifle': {
        description: "Fannable Lever Action - Doesn't Save",
        price: 50,
        damage: {
            bodyshot: 35,
            headshot: 42,
            headShotMulti: 1.2
        },
        fireRate: 57, // rounds per minute
        fanFireRate: 225, //rounds per minute
        reloadSpeed: 6.5, //empty reload
        accuracy: 96, //percent
        penetration: PenetrationType.AVERAGE,
        ammoCapacity: 10,
        purchaseLocation: PurchaseLocation.FORT_SPENCER,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/f/ff/Volcanic_rifle.png/revision/latest?cb=20210527033501', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/1/13/Volcanic_Rifle_menu.png/revision/latest?cb=20210723031637', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/a/a3/Volcanic_Falloff.png/revision/latest?cb=20240321143619', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/a/a7/Volcanic_Rifle.png/revision/latest?cb=20230403002752'
        }
    },
    'Winchester Rifle': {
        description: '8 Rounds. Lever Action',
        price: 7200,
        damage: {
            bodyshot: 35,
            headshot: 70,
            headShotMulti: 2
        },
        fireRate: 58, // rounds per minute
        reloadSpeed: 5.8, //empty reload
        accuracy: 98, //percent
        penetration: PenetrationType.STRONGEST,
        ammoCapacity: 8,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/7/7f/Winchester_new_inventory_icon.png/revision/latest?cb=20211229164230',
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/d/d9/Winchester_Rifle_Menu.png/revision/latest?cb=20210803234251',
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/b/b7/Winchester_Falloff.png/revision/latest?cb=20240321143816',
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/8/80/Winchester_Rifle.png/revision/latest?cb=20230401064755'
        }
    },
    'YellowBoy Rifle': {
        description: 'Iconic 7 round lever-action quickshot.',
        price: 1000,
        damage: {
            bodyshot: 28,
            headshot: 56,
            headShotMulti: 2
        },
        fireRate: 67, // rounds per minute
        reloadSpeed: 4, //empty reload
        accuracy: 94, //percent
        penetration: PenetrationType.AVERAGE,
        ammoCapacity: 7,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/5/57/YellowBoy_Rifle_3.9_Xmas_Icon.png/revision/latest?cb=20231225090848',
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/2/2a/YellowBoy_Shop_Menu_Updated.png/revision/latest?cb=20240102010329',
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/e/e9/YellowBoy_Falloff.png',
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/7/73/Yellowboy_Rifle_Remodeled.png/revision/latest?cb=20231226025058'
        }
    },
    'Martini Henry': {
        description: 'Sometimes a single bullet is all it takes.',
        damage: {
            bodyshot: 80,
            headshot: 112,
            headShotMulti: 1.4
        },
        fireRate: 25, // rounds per minute
        reloadSpeed: 3.3, //empty reload
        accuracy: 100, //percent
        penetration: PenetrationType.STRONGEST,
        ammoCapacity: 1,
        purchaseLocation: PurchaseLocation.CLUE_SCROLLS,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/1/10/Martini.png/revision/latest?cb=20230228052345',
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/d/d8/Martini_Henry_Desc.png/revision/latest?cb=20230225151644',
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/7/7e/Martini_Falloff.png/revision/latest?cb=20240321143847',
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/6/69/Martini_Henry_side_view_no_background.png/revision/latest?cb=20230427050855'
        }
    },
    'Lynx Bolt Action': {
        description: '4 Rounds. Bolt  Action',
        price: 1500,
        damage: {
            bodyshot: 40,
            headshot: 80,
            headShotMulti: 2
        },
        fireRate: 39, // rounds per minute
        reloadSpeed: 4.1, //empty reload
        accuracy: 99, //percent
        penetration: PenetrationType.STRONGEST,
        ammoCapacity: 4,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/5/5e/Lynx_new_inventory_icon.png/revision/latest?cb=20211229164048', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/2/2c/Lynx_Bolt_Action.png/revision/latest?cb=20210803233441', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/f/fb/Lynx_Falloff.png/revision/latest?cb=20240321121150',
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/6/6f/Lynx_Bolt_Action_Rifle.png/revision/latest?cb=20230403004219'
        }
    },
    'Hartford Rifle': {
        description: '1 Round heavy hitting marksman rifle',
        price: 12000,
        damage: {
            bodyshot: 75,
            headshot: 90,
            headShotMulti: 1.2
        },
        fireRate: 25, // rounds per minute
        reloadSpeed: 3, //empty reload
        accuracy: 100, //percent
        penetration: PenetrationType.STRONGEST,
        ammoCapacity: 1,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/1/17/Hartford_new_inventory_icon.png/revision/latest?cb=20211229164321', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/7/70/Hartfordmenu.png/revision/latest?cb=20230511152833', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/a/a9/Hartford_Falloff.png/revision/latest?cb=20240321143916', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/a/a7/HartfordRifle.png/revision/latest?cb=20230519032731'
        }
    },
    '1855 Revolving Shotgun': {
        description: '5 shot revolving shotgun',
        price: 14000,
        damage: {
            pellets: 5,
            bodyshot: 12,
            headshot: 20,
            headShotMulti: 1.2
        },
        fireRate: 60, // shells per minute
        reloadSpeed: 4.1, //empty reload
        accuracy: 81, //percent
        penetration: PenetrationType.WEAKEST,
        ammoCapacity: 5,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/1/1e/1855RevolvingShotgunIcon.png/revision/latest?cb=20210525012928', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/3/31/Revolving_shotgun_menu.png/revision/latest?cb=20210723031041', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/7/7e/1855_Falloff.png/revision/latest?cb=20240404171537',
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/f/fe/1855RevolvingShotgun.png/revision/latest?cb=20230401093633'
        }
    },
    'Mule Shotgun': {
        description: 'A personal favorite of Wyatt Earp.',
        price: 4000,
        damage: {
            pellets: 5,
            bodyshot: 15,
            headshot: 30,
            headShotMulti: 1.2
        },
        fireRate: 100, // shells per minute
        reloadSpeed: 1.8, //empty reload
        accuracy: 65, //percent
        penetration: PenetrationType.WEAKEST,
        ammoCapacity: 2,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/8/88/Mule_new_inventory_icon.png/revision/latest?cb=20230429232030', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/8/83/NewMuleIcon.png/revision/latest?cb=20240403225214', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/5/5d/Mule_Falloff.png/revision/latest?cb=20240319192805', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/d/dc/Mule_Shotgun.png/revision/latest?cb=20230401071337'
        }
    },
    'Guycot Chain Carbine': {
        description: '80 round fully automatic chain fed rifle',
        damage: {
            bodyshot: 12,
            headshot: 26,
            headShotMulti: 2.2
        },
        fireRate: 240, // rounds per minute
        reloadSpeed: 42.5, //empty reload
        accuracy: 98, //percent
        penetration: PenetrationType.WEAKEST,
        ammoCapacity: 80,
        purchaseLocation: PurchaseLocation.AUCTION_HOUSE,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/a/a8/Guycot_Chain_Carbine_Icon.png/revision/latest?cb=20210524115228', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/2/2b/Guycot_menu.png/revision/latest?cb=20210524132504', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/3/32/GuycotCarbine_FallOff.png/revision/latest?cb=20240321143949', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/e/e7/Chain_Carbine.png/revision/latest?cb=20230510065310'
        }
    },
    'Sharps Rifle': {
        description: '1 Round. Heavy hitting with long ranged scope',
        price: 4500,
        damage: {
            bodyshot: 75,
            headshot: 150,
            headShotMulti: 2
        },
        fireRate: 12, // rounds per minute
        reloadSpeed: 4, //empty reload
        accuracy: 100, //percent
        penetration: PenetrationType.VERY_STRONG,
        ammoCapacity: 1,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/4/47/SharpsIcon3.4.png/revision/latest?cb=20210525024552', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/6/60/Sharps_gun_store.png/revision/latest?cb=20230825011417', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/a/a8/Sharps_Falloff.png/revision/latest?cb=20240321143713', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/1/1e/SharpsSniperRifle.png/revision/latest?cb=20230401042314'
        }
    },
    'Spitfire Revolving Sniper': {
        description: 'Powerful burst-fire sniper with optional iron sights',
        damage: {
            bodyshot: 66,
            headshot: 178.2,
            headShotMulti: 2.7
        },
        fireRate: 400, // rounds per minute
        reloadSpeed: 5.5, //empty reload
        accuracy: 99.5, //percent
        penetration: PenetrationType.VERY_STRONG,
        ammoCapacity: 6,
        purchaseLocation: PurchaseLocation.AUCTION_HOUSE,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/6/67/Spitfire_Revolving_Sniper_icon.png/revision/latest?cb=20210524115434', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/5/59/Spitfire_menu.png/revision/latest?cb=20210524075627', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/5/5a/Spitfire_Falloff.png/revision/latest?cb=20240321144019', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/a/a9/Spitfire_Revolving_Sniper.png/revision/latest?cb=20231206154914'
        }
    },
    'Harmonica Rifle': {
        description: "Fannable Lever Action - Doesn't Save",
        price: 7000,
        damage: {
            bodyshot: 25,
            headshot: 45,
            headShotMulti: 1.8
        },
        fireRate: 120, // rounds per minute
        reloadSpeed: 4.3, //empty reload
        accuracy: 96, //percent
        penetration: PenetrationType.WEAK,
        ammoCapacity: 12,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/b/b1/Harmonica_new_inventory_icon.png/revision/latest?cb=20211229164146', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/d/d3/Harmonicarifflemenu.png/revision/latest?cb=20230511152542', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/4/4e/Harmonica_dropoff.png/revision/latest?cb=20210527004259', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/4/48/Harmonica_Rifle.png/revision/latest?cb=20230401094605'
        }
    },
    "Mare's Leg": {
        description: 'Early access reward item!',
        damage: {
            bodyshot: 40,
            headshot: 52,
            headShotMulti: 1.3
        },
        fireRate: 85, // rounds per minute
        reloadSpeed: 3.2, //empty reload
        accuracy: 96, //percent
        penetration: PenetrationType.AVERAGE,
        ammoCapacity: 5,
        purchaseLocation: PurchaseLocation.PAID_ACCESS,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/1/16/Mares_leg.png/revision/latest?cb=20210620232601', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/3/3b/The_Mare%27s_Leg%27s_item_description..png/revision/latest?cb=20230429193201', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/2/25/MaresLeg_Falloff.png/revision/latest?cb=20240321144050', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/0/02/Mares_Leg.png/revision/latest?cb=20230503015932'
        }
    },
    'Volcanic Pistol': {
        description: "High fan accuracy - Doest't save",
        price: 50,
        damage: {
            bodyshot: 30,
            headshot: 45,
            headShotMulti: 1.5
        },
        fireRate: 75, // rounds per minute
        fanFireRate: 100, //rounds per minute
        reloadSpeed: 4.2, //empty reload
        accuracy: 96, //percent
        penetration: PenetrationType.WEAK,
        ammoCapacity: 8,
        purchaseLocation: PurchaseLocation.FORT_HENRY,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/d/de/Volcanic_Pistol_icon.png/revision/latest?cb=20210526235846', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/7/7a/Volcanic_Pistol_menu.png/revision/latest?cb=20210723031732', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/1/1a/VolcPistol_Falloff.png/revision/latest?cb=20240326214827', // drop
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/5/59/Volcanic_Pistol.png/revision/latest?cb=20230401081424'
        }
    },
    'Hammerless Revolver': {
        description: 'The Hammerless Revolver',
        price: 9000,
        damage: {
            bodyshot: 26,
            headshot: 47,
            headShotMulti: 1.8
        },
        fireRate: 157, // rounds per minute
        reloadSpeed: 4.2, //empty reload
        accuracy: 95, //percent
        penetration: PenetrationType.WEAK,
        ammoCapacity: 6,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/e/e6/HammerlessIcon.png/revision/latest?cb=20210525013057', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/8/8f/Hammerless.PNG/revision/latest?cb=20210723032013', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/5/5a/Hammerless_Falloff.png/revision/latest?cb=20240321195045', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/f/f1/HammerlessRevolver.png/revision/latest?cb=20230430195124'
        }
    },
    'Peacekeeper Revolver': {
        description: 'Pistol',
        price: 150,
        damage: {
            bodyshot: 25,
            headshot: 50,
            headShotMulti: 2
        },
        fireRate: 62, // rounds per minute
        fanFireRate: 370,
        reloadSpeed: 5.4, //empty reload
        accuracy: 96, //percent
        penetration: PenetrationType.WEAK,
        ammoCapacity: 6,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/c/ca/Peacekeeper_revolver.png/revision/latest?cb=20210327003925', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/8/83/Peacekeepermenu.png/revision/latest?cb=20230511153029', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/d/da/PeaceKeeper_Falloff.png/revision/latest?cb=20240321194819', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/6/64/Peacekeeper.png/revision/latest?cb=20230429214414'
        }
    },
    'Guycot Chain Pistol': {
        description: 'The Guycot Chain Pistol in-game',
        damage: {
            bodyshot: 12,
            headshot: 26,
            headShotMulti: 2.2
        },
        fireRate: 240, // rounds per minute
        reloadSpeed: 10.5, //empty reload
        accuracy: 93, //percent
        penetration: PenetrationType.WEAKEST,
        ammoCapacity: 30,
        purchaseLocation: PurchaseLocation.AUCTION_HOUSE,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/a/ad/Guycot_Chain_Pistol_Icon.png/revision/latest?cb=20210524115204', // gun in inventory
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/e/e4/GuycotPistol_Falloff.png/revision/latest?cb=20240326215159', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/e/eb/Guycot_Pistol.png/revision/latest?cb=20230506010614'
        }
    },
    'Model 3': {
        description: 'Fast reload and high fan accuracy.',
        price: 600,
        damage: {
            bodyshot: 20,
            headshot: 40,
            headShotMulti: 2
        },
        fireRate: 48, // rounds per minute
        fanFireRate: 480,
        reloadSpeed: 3.5, //empty reload
        accuracy: 98, //percent
        penetration: PenetrationType.WEAK,
        ammoCapacity: 6,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/4/47/Model_3_revolver.png/revision/latest?cb=20231120224040', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/7/70/Model31.png/revision/latest?cb=20231120224159', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/7/7b/Model3_Falloff.png/revision/latest?cb=20240321194850', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/e/e8/Model_3_Revamp.png/revision/latest?cb=20231121065147'
        }
    },
    'Prototype Pistol': {
        description: 'Fast firing automatic pistol',
        damage: {
            bodyshot: 24,
            headshot: 53,
            headShotMulti: 2.2
        },
        fireRate: 145, // rounds per minute
        reloadSpeed: 2.4, //empty reload
        accuracy: 96, //percent
        penetration: PenetrationType.STRONG,
        ammoCapacity: 7,
        purchaseLocation: PurchaseLocation.AUCTION_HOUSE,
        images: {
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/2/22/Prototype_menu.png/revision/latest?cb=20210524090641', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/5/53/Prototype_FalloffNew.png/revision/latest?cb=20241101041343', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/a/a8/Schwarzlose_Prototype.png/revision/latest?cb=20230502060509'
        }
    },
    'Lemat Revolver': {
        description: 'Lemat',
        price: 800,
        damage: {
            bodyshot: 35,
            headshot: 70,
            headShotMulti: 2
        },
        fireRate: 63, // rounds per minute
        fanFireRate: 370,
        reloadSpeed: 5.4, //empty reload
        accuracy: 75, //percent
        penetration: PenetrationType.AVERAGE,
        ammoCapacity: 6,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/5/5f/Lemat_New_Icon.png/revision/latest?cb=20211229164442', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/c/cb/LematRevolver.png/revision/latest?cb=20200104133152', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/c/cc/LeMat_Falloff.png/revision/latest?cb=20240321194916', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/f/f2/Lemat.png/revision/latest?cb=20231206155919'
        }
    },
    'Lancaster Pistol': {
        description:
            'Quad-barrel Howdah pistol historically used to defend against tigers',
        damage: {
            bodyshot: 50,
            headshot: 90,
            headShotMulti: 1.8
        },
        fireRate: 135, // rounds per minute
        reloadSpeed: 4.4, //empty reload
        accuracy: 96, //percent
        penetration: PenetrationType.VERY_STRONG,
        ammoCapacity: 4,
        purchaseLocation: PurchaseLocation.AUCTION_HOUSE,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/a/a9/Lancaster_Pistol_Icon.png/revision/latest?cb=20210524115348', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/5/5a/Lancaster_pistol_menu.png/revision/latest?cb=20210524153356', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/e/ed/Lancaster_FalloffNew.png/revision/latest?cb=20241101041353', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/8/8c/Lancaster_.png/revision/latest?cb=20230506195306'
        }
    },
    'Sawed-Off Shotgun': {
        description: 'What better way to rob a bank.',
        price: 2000,
        damage: {
            pellets: 5,
            bodyshot: 13,
            headshot: 26,
            headShotMulti: 2
        },
        fireRate: 90, // shells per minute
        reloadSpeed: 1.8, //empty reload
        accuracy: 60, //percent
        penetration: PenetrationType.WEAKEST,
        ammoCapacity: 2,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/1/10/Sawed_Off_new_inventory_icon.png/revision/latest?cb=20230429232046', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/e/ed/NewSawedOffMenu.png/revision/latest?cb=20240403225447', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/c/c2/SawedOff_Falloff.png/revision/latest?cb=20240321121105', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/1/14/Sawed_Off.png/revision/latest?cb=20230506233022'
        }
    },
    'Paterson Navy': {
        description:
            'Extremely heavy hitting revolver with great aiming accuracy',
        damage: {
            bodyshot: 40,
            headshot: 84,
            headShotMulti: 2.1
        },
        fireRate: 55, // rounds per minute
        fanFireRate: 176,
        reloadSpeed: 6.2, //empty reload
        accuracy: 100, //percent
        penetration: PenetrationType.STRONG,
        ammoCapacity: 6,
        purchaseLocation: PurchaseLocation.AUCTION_HOUSE,
        images: {
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/5/5b/Paterson_menu.png/revision/latest?cb=20210524134118', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/5/5b/Paterson_Falloff.png/revision/latest?cb=20240321195110', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/c/c7/Paterson_Navy.png/revision/latest?cb=20230428055510'
        }
    },
    'Navy Revolver': {
        description: "Navy Revolver. Can't be fanned",
        price: 3200,
        damage: {
            bodyshot: 35,
            headshot: 70,
            headShotMulti: 2
        },
        fireRate: 105, // rounds per minute
        reloadSpeed: 3.5, //empty reload
        accuracy: 88, //percent
        penetration: PenetrationType.AVERAGE,
        ammoCapacity: 6,
        purchaseLocation: PurchaseLocation.AUCTION_HOUSE,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/e/e5/Navy_Revolver_new_inventory_icon.png/revision/latest?cb=20211230132135', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/6/68/NavyRevolver.png/revision/latest?cb=20200104133155', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/c/c4/Navy_Falloff.png/revision/latest?cb=20240321194941', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/4/4d/Navy_Revolver.png/revision/latest?cb=20230501000117'
        }
    },
    Axegonne: {
        description: 'Designed by the Swedish Navy for boarding actions.',
        damage: {
            bodyshot: 60,
            headshot: 150,
            melee: 40,
            headShotMulti: 2.5
        },
        fireRate: 9, // rounds per minute
        swingRate: 55,
        reloadSpeed: 7, //empty reload
        accuracy: 95, //percent
        penetration: PenetrationType.VERY_STRONG,
        ammoCapacity: 1,
        purchaseLocation: PurchaseLocation.AUCTION_HOUSE,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/a/ad/Admiral%27s_Axegonne_Icon.png/revision/latest?cb=20221113220230', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/4/40/Admiral%27s_Axegonne_Blurb.png/revision/latest?cb=20230331231210', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/e/ea/Axegonne_Falloff.png/revision/latest?cb=20240326215321', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/4/46/Admirals_Axegonne.png/revision/latest?cb=20231206165622'
        }
    },
    'Dragoon Pistol': {
        description: 'Dragoon',
        price: 4000,
        damage: {
            pellets: 3,
            bodyshot: 17,
            headshot: 27,
            headShotMulti: 1.6
        },
        fireRate: 156, // rounds per minute
        reloadSpeed: 5.1, //empty reload
        accuracy: 38, //percent
        penetration: PenetrationType.WEAK,
        ammoCapacity: 5,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/9/90/Dragoon_Icon.png/revision/latest?cb=20230515050437', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/8/8d/DragoonPistol.png/revision/latest?cb=20200104133151', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/8/8d/Dragoon_Falloff.png/revision/latest?cb=20240404171501', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/f/f3/Dragoon_Pistol_Shotgun.png/revision/latest?cb=20230430190016'
        }
    },
    'Golden Dragoon Pistol': {
        description: 'Golden Dragoon',
        damage: {
            pellets: 3,
            bodyshot: 17,
            headshot: 27,
            headShotMulti: 1.6
        },
        fireRate: 156, // rounds per minute
        reloadSpeed: 5.1, //empty reload
        accuracy: 38, //percent
        penetration: PenetrationType.WEAK,
        ammoCapacity: 5,
        purchaseLocation: PurchaseLocation.PAID_ACCESS,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/5/59/Dragoongolden.png/revision/latest?cb=20240318003023', // gun in inventory
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/8/8d/Dragoon_Falloff.png/revision/latest?cb=20240404171501', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/f/f6/Golden_Dragoon.png/revision/latest?cb=20230430191647'
        }
    },
    'Lindsay Doubleshot Pistol': {
        description: 'Two bullets one chamber',
        price: 5000,
        damage: {
            bodyshot: 30,
            headshot: 54,
            headShotMulti: 1.8
        },
        fireRate: 460, // rounds per minute
        reloadSpeed: 1.7, //empty reload
        accuracy: 97, //percent
        penetration: PenetrationType.AVERAGE,
        ammoCapacity: 2,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/f/f6/LindsayDoubleshotPistolIcon.png/revision/latest?cb=20210525024517', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/2/28/Lindsay_menu.png/revision/latest?cb=20210723031246', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/9/92/Lindsay_Falloff.png/revision/latest?cb=20240326214943', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/a/af/Lindsay_Doubleshot.png/revision/latest?cb=20231206154953'
        }
    },
    Mauser: {
        description: 'Mauser',
        damage: {
            bodyshot: 25,
            headshot: 45,
            headShotMulti: 1.8
        },
        fireRate: 170, // rounds per minute
        reloadSpeed: 4.0, //empty reload
        accuracy: 94, //percent
        penetration: PenetrationType.WEAK,
        ammoCapacity: 10,
        purchaseLocation: PurchaseLocation.GAMEPASS,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/9/9c/Mauser_3.3.1.png/revision/latest?cb=20240318003034', // gun in inventory
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/3/37/Mauser_Falloff.png/revision/latest?cb=20240326215116', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/e/ed/GoldenMauser.png/revision/latest?cb=20230429230644'
        }
    },
    'Lochke Revolver': {
        description: 'Unique double shot revolver',
        price: 6500,
        damage: {
            bodyshot: 30,
            headshot: 60,
            headShotMulti: 2
        },
        fireRate: 110, // rounds per minute
        fanFireRate: 120,
        reloadSpeed: 4.1, //empty reload
        accuracy: 93, //percent
        penetration: PenetrationType.WEAK,
        ammoCapacity: 6,
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/f/fe/Lochke_new_inventory_icon.png/revision/latest?cb=20211230132341', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/6/6e/Lockhe_Revolver_gun_store_menu.png/revision/latest?cb=20230509213119', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/1/16/Lochke_Falloff.png/revision/latest?cb=20240321195013', // dropoff damage
            wiki: ''
        }
    },
    Knife: {
        description: 'Stabby stabby',
        price: 50,
        damage: {
            melee: 30
        },
        swingRate: 85, // swings per minute
        attacks: 'Stabs',
        reloadSpeed: 4.1, //empty reload
        purchaseLocation: PurchaseLocation.GUN_SHOP,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/5/58/Knife.png/revision/latest?cb=20210327005703',
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/8/8c/Knifemenu.png/revision/latest/scale-to-width-down/1000?cb=20230511190613',
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/b/b6/Transparent_Knife.png/revision/latest?cb=20230719215051'
        }
    },
    'Bowie Knife': {
        description: "Now that's a knife",
        price: 4000,
        damage: {
            melee: 40
        },
        swingRate: 87, // swings per minute
        attacks: 'Stabs, Cuts',
        purchaseLocation: PurchaseLocation.HUNTERS_SHACK,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/7/78/Bowie_Knife_new_inventory_icon.png/revision/latest?cb=20210526134823', // gun in inventory
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/5/5b/Bowieknife.png/revision/latest?cb=20230519163613'
        }
    },
    'Kukri Machete': {
        description:
            'Remember, switching to your kukri is always faster than reloading',
        damage: {
            melee: 50
        },
        swingRate: 73, // swings per minute
        attacks: 'Stabs, Cuts',
        purchaseLocation: PurchaseLocation.AUCTION_HOUSE,
        images: {
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/6/62/Kukri.png/revision/latest?cb=20230430183254' // wiki image
        }
    },
    'Ceremonial Dagger': {
        description:
            'Legend says this dagger once belonged to a wealthy plantation owner.',
        damage: {
            melee: 40
        },
        swingRate: 87, // swings per minute
        attacks: 'Stabs, Cuts',
        purchaseLocation: PurchaseLocation.EVENT,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/1/1a/Ceremonial_Dagger_Icon.png/revision/latest?cb=20211109113013',
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/7/76/Ceremonial_Dagger.png/revision/latest?cb=20211109113044',
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/1/18/CereDagger.png/revision/latest?cb=20240403152823' // wiki image
        }
    },
    'Cursed Volcanic Pistol': {
        description: 'A light from beyond the Gates.',
        damage: {
            bodyshot: 30,
            headshot: 45,
            headShotMulti: 1.5
        },
        fireRate: 75, // rounds per minute
        fanFireRate: 100,
        reloadSpeed: 4.2, //empty reload
        accuracy: 96, //percent
        penetration: PenetrationType.WEAK,
        ammoCapacity: 8,
        purchaseLocation: PurchaseLocation.EVENT,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/5/52/Cursed_Pistol.png/revision/latest?cb=20211109110154', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/b/bb/Cursed_volcanic_pistol_logo.png/revision/latest?cb=20211109110102',
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/1/1a/VolcPistol_Falloff.png/revision/latest?cb=20240326214827', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/8/88/CursedVolcanicPistol.png/revision/latest?cb=20230401061558'
        }
    },
    'Model 3 Lightning': {
        description:
            'Only a mad scientist can come up with this! Stronger in a storm',
        damage: {
            bodyshot: 20,
            headshot: 40,
            headShotMulti: 2
        },
        fireRate: 48, // rounds per minute
        fanFireRate: 480,
        reloadSpeed: 3.5, //empty reload
        accuracy: 98, //percent
        penetration: PenetrationType.WEAK,
        ammoCapacity: 6,
        purchaseLocation: PurchaseLocation.EVENT,
        images: {
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/d/d7/Model3Lightning_menu_icon_and_caption.png/revision/latest?cb=20231125182236', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/7/7b/Model3_Falloff.png/revision/latest/scale-to-width-down/1000?cb=20240321194850', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/1/10/Model_3_Lightning_%28CREDITS_TO_DETECTIVE_TUX%29.png/revision/latest/scale-to-width-down/1000?cb=20231121140030'
        }
    },
    'Frozen Volcanic Rifle': {
        description: 'A glint of ice in the dark',
        damage: {
            bodyshot: 35,
            headshot: 42,
            headShotMulti: 1.2
        },
        fireRate: 57, // rounds per minute
        fanFireRate: 225, //rounds per minute
        reloadSpeed: 6.5, //empty reload
        accuracy: 96, //percent
        penetration: PenetrationType.AVERAGE,
        ammoCapacity: 10,
        purchaseLocation: PurchaseLocation.EVENT,
        images: {
            inventory:
                'https://static.wikia.nocookie.net/thewild-west/images/c/cf/Frozen_Volcanic_Rifle_Icon.png/revision/latest?cb=20211225063312', // gun in inventory
            description:
                'https://static.wikia.nocookie.net/thewild-west/images/2/22/Frozen_Volcanic_Rifle_Menu.png/revision/latest?cb=20211229060055', // gun description
            dropoff:
                'https://static.wikia.nocookie.net/thewild-west/images/a/a3/Volcanic_Falloff.png/revision/latest/scale-to-width-down/1000?cb=20240321143619', // dropoff damage
            wiki: 'https://static.wikia.nocookie.net/thewild-west/images/9/98/Frozen_Volcanic.png/revision/latest/scale-to-width-down/1000?cb=20230509030531'
        }
    }
}

export const isInfoKey = (key: string): key is ItemStatsKeys => {
    return infoItems.includes(key as ItemStatsKeys)
}

export function getItemInfo(item: ItemStatsKeys) {
    return info[item]
}
