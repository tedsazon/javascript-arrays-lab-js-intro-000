var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten() {
  return kittens.push("Ralph")
}

function destructivelyPrependKitten() {
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  return kittens.pop("Garfield")
}
