function haveIwonYet () {
    pixelCount = 0
    xIndex = 0
    yIndex = 0
    for (let xIndex = 0; xIndex <= 4; xIndex++) {
        for (let yIndex = 0; yIndex <= 4; yIndex++) {
            if (led.point(xIndex, yIndex)) {
                pixelCount += 1
            }
        }
    }
    if (pixelCount == 0) {
        timeTaken = input.runningTime() - timeStart
        gameOver = true
    }
}
let timeTaken = 0
let yIndex = 0
let xIndex = 0
let pixelCount = 0
let gameOver = false
let timeStart = 0
basic.showString("cheese nibbler")
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
let y = 2
let x = 2
timeStart = input.runningTime()
gameOver = false
basic.forever(function () {
    while (!(gameOver)) {
        led.plot(x, y)
        basic.pause(100)
        led.unplot(x, y)
        haveIwonYet()
        if (input.rotation(Rotation.Pitch) < 0) {
            y += -1
            if (y < 0) {
                y = 0
            }
        }
        if (input.rotation(Rotation.Pitch) > 0) {
            y += 1
            if (y > 4) {
                y = 4
            }
        }
        if (input.rotation(Rotation.Roll) < 0) {
            x += -1
            if (x < 0) {
                x = 0
            }
        }
        if (input.rotation(Rotation.Roll) > 0) {
            x += 1
            if (x > 4) {
                x = 4
            }
        }
    }
    basic.showNumber(timeTaken)
})
