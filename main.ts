input.onButtonPressed(Button.A, function () {
    basic.showString("It is")
    basic.showString("" + (input.temperature()))
    basic.showString("Degrees Celsius")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    music.ringTone(587)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 5000, 3185, 255, 233, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("C - F D A G C5 B ", 120)
    }
})
basic.showLeds(`
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
music.playMelody("E G F A G B A C5 ", 510)
