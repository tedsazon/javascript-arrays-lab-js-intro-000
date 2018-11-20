var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten() {
  return kittens.push("Ralph")
}

function destructivelyPrependKitten() {
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(2)
}
