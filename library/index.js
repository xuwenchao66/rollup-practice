import _sum from 'lodash/sum'

export const sum = (numbers = []) => new Promise(_sum(numbers))
