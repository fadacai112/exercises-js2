const differenceInAges = (ages) => {
  const result = []
  ages.sort((a, b) => a - b)
  result.push(ages[0])
  result.push(ages[ages.length - 1])
  result.push(ages[ages.length - 1] - ages[0])
  return result
}
