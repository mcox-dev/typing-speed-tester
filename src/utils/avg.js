export default function avg(array) {
    const sum = array.reduce((acc, i) => acc + i, 0)

    return sum / array.length
}