input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
function Convertir () {
    return input.temperature() * (1.8 + 32)
}
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Convertir())
})
