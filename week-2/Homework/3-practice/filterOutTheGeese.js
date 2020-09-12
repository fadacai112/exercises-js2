const gooseFilter = (birds) => {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    geese.forEach(
      goose => {
        if (birds.indexOf(goose) >= 0) {
         birds.splice(birds.indexOf(goose), 1) 
        }
      }
    )
    return birds
};