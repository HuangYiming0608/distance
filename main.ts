basic.forever(function () {
    if (CrocoKit_Sensor.Ultrasonic(DigitalPin.P1, DigitalPin.P0) < 50) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    }
    if (CrocoKit_Sensor.IR(DigitalPin.P3, CrocoKit_Sensor.enObstacle.Obstacle)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    }
})
