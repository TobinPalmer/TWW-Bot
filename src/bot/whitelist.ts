export const whitelist: string[] = [
    '1306203182472364083', // Wealthy Westeners
    '1309357940112756736' // Testing Jon
]
export function isWhitelisted(id: string) {
    return whitelist.includes(id)
}

export const disabledFeatures = ['trading', 'upgrading', 'private mode']

function joinFeatures(features: string[]) {
    return features.join(', ').replace(/,([^,]*)$/, ', and$1')
}

export function formatDisabledFeatures(currentCommand: string) {
    return `:x: __The **${currentCommand}** command is disabled in this server__. Join the main discord server to access ${joinFeatures(disabledFeatures)}!
discord.gg/urz7jSNUC2`
}
