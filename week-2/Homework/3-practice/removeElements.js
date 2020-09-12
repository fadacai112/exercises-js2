const removeEveryOther = array => {
    for(let i = 1; i < array.length; i++) {
      array.splice(i, 1)
    }
    return array
}