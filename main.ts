basic.forever(function () {
    if (CrocoKit_Sensor.Ultrasonic(DigitalPin.P1, DigitalPin.P0) < 5) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else if (CrocoKit_Sensor.Ultrasonic(DigitalPin.P1, DigitalPin.P0) < 50) {
        if (true) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
    }
})
