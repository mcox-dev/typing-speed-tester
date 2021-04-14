import group from './../group'

describe('group util', () => {
  test('should group primitives by callback', () => {
    const data = [1, 1.1, 1.2, 2.3, 2.5, .5, 2.9, 3.5, 2, 3, 5.7]

    const expected = {
      0: [.5],
      1: [1, 1.1, 1.2],
      2: [2.3, 2.5, 2.9, 2],
      3: [3.5, 3],
      5: [5.7]
    }

    const result = group(data, Math.floor)

    expect(result).toEqual(expected)
  })

  test('should group objects by callback', () => {
    const data = [
      {
        type: 'A',
        number: 1
      },
      {
        type: 'B',
        number: 2
      },
      {
        type: 'C',
        number: 3,
      },
      {
        type: 'B',
        number: 4
      }
    ]

    const expected = {
      A: [
        {
          type: 'A',
          number: 1
        }
      ],
      B: [
        {
          type: 'B',
          number: 2
        },
        {
          type: 'B',
          number: 4
        }
      ],
      C: [
        {
          type: 'C',
          number: 3,
        }
      ]
    }

    const result = group(data, (item) => item.type)

    expect(result).toEqual(expected)
  })
})