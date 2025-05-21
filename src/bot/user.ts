export function resetUserStates() {
    return {
        counter: [],
        offer: [],
        trading: false,
        kukri: { serial: 0, enabled: false, userSerial: '' }
    }
}
