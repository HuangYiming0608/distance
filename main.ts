basic.forever(function () {
    if (CrocoKit_Sensor.IR(DigitalPin.P0, CrocoKit_Sensor.enObstacle.Obstacle)) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    }
})
