enum KukriColors {
    FullBlack = 'Full Black',
    GoldWhite = 'Gold & White',
    WhiteSheath = 'White Sheath',
    BlackBronze = 'Black & Bronze',
    RedStripe = 'Red Stripe',
    TanHandle = 'Tan Handle',
    InvertedGrey = 'Inverted Grey',
    BrownHandle = 'Brown Handle'
}

export function formatKukriColor(num: string) {
    const val = parseInt(num)
    if (val < 1 || val > 8) return 'Invalid'

    switch (val) {
        case 1:
            return KukriColors.FullBlack
        case 2:
            return KukriColors.GoldWhite
        case 3:
            return KukriColors.WhiteSheath
        case 4:
            return KukriColors.BlackBronze
        case 5:
            return KukriColors.RedStripe
        case 6:
            return KukriColors.TanHandle
        case 7:
            return KukriColors.InvertedGrey
        case 8:
            return KukriColors.BrownHandle
    }
}
