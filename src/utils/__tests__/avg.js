import avg from './../avg'

describe('avg', () => {
    test('avg', () => {
        const data = [2, 4, 9]

        const expected = 5

        expect(avg(data)).toBeCloseTo(expected);
    })
})
