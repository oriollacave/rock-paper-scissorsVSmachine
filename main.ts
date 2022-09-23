input.onButtonPressed(Button.A, function () {
    if (ma == 3) {
        ma = 1
    } else {
        ma += 1
    }
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
            music.playTone(392, music.beat(BeatFraction.Whole))
        }
        if (ma == 2) {
            music.playTone(196, music.beat(BeatFraction.Whole))
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.playTone(131, music.beat(BeatFraction.Whole))
        }
        if (ma == 3) {
            music.playTone(659, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(988, music.beat(BeatFraction.Whole))
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
            music.playTone(392, music.beat(BeatFraction.Whole))
        }
        if (ma == 3) {
            music.playTone(175, music.beat(BeatFraction.Whole))
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.playTone(131, music.beat(BeatFraction.Whole))
        }
        if (ma == 1) {
            music.playTone(659, music.beat(BeatFraction.Whole))
            music.playTone(784, music.beat(BeatFraction.Whole))
            music.playTone(988, music.beat(BeatFraction.Whole))
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
            music.playTone(349, music.beat(BeatFraction.Whole))
        }
        if (ma == 1) {
            music.playTone(175, music.beat(BeatFraction.Whole))
            music.playTone(165, music.beat(BeatFraction.Whole))
            music.playTone(131, music.beat(BeatFraction.Whole))
        }
        if (ma == 2) {
            music.playTone(659, music.beat(BeatFraction.Whole))
            music.playTone(784, music.beat(BeatFraction.Whole))
            music.playTone(988, music.beat(BeatFraction.Whole))
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    maquina = 0
    ma = 0
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let ma = 0
let maquina = 0
maquina = 0
ma = 0
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
}
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
