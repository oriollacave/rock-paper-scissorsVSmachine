let ma = 0
let maquina = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    ma = 0
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
basic.forever(function () {
	
})
