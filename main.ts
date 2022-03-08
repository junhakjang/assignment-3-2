input.onButtonPressed(Button.A, function () {
    NUmber = randint(0, 1)
    if (NUmber == 0) {
        basic.showString("P1")
        Point_for_p1 += 1
        basic.showString("" + (Point_for_p1))
        basic.clearScreen()
    } else {
        basic.showString("P2")
        Point_for_P2 += 1
        basic.showString("" + (Point_for_P2))
        basic.clearScreen()
    }
})
let Point_for_P2 = 0
let Point_for_p1 = 0
let NUmber = 0
NUmber = 0
basic.forever(function () {
	
})
