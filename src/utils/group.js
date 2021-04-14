export default function group(array, cb) {
    const r = {}

    for (let i = 0; i < array.length; i++) {
        const a = cb(array[i])
        if (Object.prototype.hasOwnProperty.call(r, a)) {
            r[a].push(array[i])
        } else {
            r[a] = [array[i]]
        }
    }

    return r
}
