import { Collection, Role } from 'discord.js'

export enum Roles {
    Contributor,
    EsteemedMember,
    ValueHelper,
    ServerBooster,
    Owner,
    DistinguishedMember
}

const rolesMap = new Map<string, Roles>([
    [
        process.env.NODE_ENV === 'production'
            ? '1308324205292425309'
            : '1312211552677400737',
        Roles.EsteemedMember
    ],
    ['1306488613327863839', Roles.Owner],
    ['1308324447945752626', Roles.Contributor],
    ['1312330320682553375', Roles.ValueHelper],
    ['1308439539328745545', Roles.ServerBooster],
    ['1333660610054979614', Roles.DistinguishedMember]
])

export function hasAccessToCommand(
    roles: Collection<string, Role>,
    rolesList: Roles[] = [
        Roles.Owner,
        Roles.Contributor,
        Roles.EsteemedMember,
        Roles.ValueHelper,
        Roles.ServerBooster,
        Roles.DistinguishedMember
    ]
) {
    for (const role of roles.values()) {
        if (rolesMap.has(role.id)) {
            const roleValue = rolesMap.get(role.id)
            if (roleValue && rolesList.includes(roleValue)) return true
        }
    }

    return false
}
