export function getServerDate() {
    const offset = -8.0
    const clientDate = new Date()
    const utc = clientDate.getTime() + clientDate.getTimezoneOffset() * 60000
    const serverDate = new Date(utc + 3600000 * offset)
    return serverDate
}
