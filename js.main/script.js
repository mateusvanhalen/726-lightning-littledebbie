const populateDB = function () {

const orangeCake = {
    name: "orange cream cakes",
    color: "white and orange",
    shape: "rectangle",
    amount: "8",
    iced: "yes",
    weight: "12.01oz",
    wrapped: "yes"
}

const blueCake = {
    name: "blueCake",
    color: "blue",
    shape: "square",
    amount: "10",
    iced: "yes",
    weight: "20oz",
    wrapped: "yes"
}
const createSnackCake = (name, color, shape, amount, iced, weight, wrapped) => {
    const snackCake = {
        name: name,
        color: color,
        shape: shape,
        amount: amount,
        iced: iced,
        weight: weight,
        wrapped: wrapped 
    }
    return snackCake
}

const greenCake = createSnackCake("green Cake", "green", "star", "35", "yes", "10oz", "yes")
const purpleCake = createSnackCake("purple cake", "purple", "circle", "15", "yes", "12oz", "yes")

    const snackCakes = [greenCake, purpleCake, orangeCake, blueCake]
    const stringified = JSON.stringify(snackCakes)
    localStorage.setItem("snackCakes", stringified)

}