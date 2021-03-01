export const campaign = {
  waterProject: {
    name: 'The Water Project - Global Initiative',
  },
}

export const defaultDollarAmount = [5, 10, 25, 50]

export const truncateText = (text, maxLength) => {
  return text && text.length > maxLength
    ? `${text.substring(0, maxLength)}...`
    : text
}
