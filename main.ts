let ma = 0
let maquina = 0
input.onButtonPressed(Button.A, function () {
    if (ma == 3) {
        ma = 1
    } else {
        ma += 1
    }
})
input.onButtonPressed(Button.B, function () {
    maquina = randint(1, 3)
    if (maquina == 1) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # # # # #
            # # # # #
            `)
        if (ma == 1) {
            music.playTone(988, music.beat(BeatFraction.Whole))
        }
        if (ma == 2) {
            music.playTone(131, music.beat(BeatFraction.Whole))
        }
        if (ma == 3) {
            music.playTone(349, music.beat(BeatFraction.Breve))
        }
    }
    if (maquina == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        if (ma == 2) {
            music.playTone(988, music.beat(BeatFraction.Whole))
        }
        if (ma == 3) {
            music.playTone(131, music.beat(BeatFraction.Whole))
        }
        if (ma == 1) {
            music.playTone(349, music.beat(BeatFraction.Breve))
        }
    }
    if (maquina == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        if (ma == 3) {
            music.playTone(988, music.beat(BeatFraction.Whole))
        }
        if (ma == 1) {
            music.playTone(131, music.beat(BeatFraction.Whole))
        }
        if (ma == 2) {
            music.playTone(349, music.beat(BeatFraction.Breve))
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    maquina = 0
    ma = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    if (ma == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (ma == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    if (ma == 1) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # # # # #
            # # # # #
            `)
    }
})
