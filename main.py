def haveIwonYet():
    global pixelCount, xIndex2, yIndex2, timeTaken, gameOver
    pixelCount = 0
    xIndex2 = 0
    yIndex2 = 0
    for xIndex in range(5):
        for yIndex in range(5):
            if led.point(xIndex, yIndex):
                pixelCount += 1
    if pixelCount == 0:
        timeTaken = input.running_time() - timeStart
        gameOver = True
timeTaken = 0
yIndex2 = 0
xIndex2 = 0
pixelCount = 0
gameOver = False
timeStart = 0
basic.show_string("cheese nibbler")
basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    """)
y = 2
x = 2
timeStart = input.running_time()
gameOver = False

def on_forever():
    global y, x
    while not (gameOver):
        led.plot(x, y)
        basic.pause(100)
        led.unplot(x, y)
        haveIwonYet()
        if input.rotation(Rotation.PITCH) < 0:
            y += -1
            if y < 0:
                y = 0
        if input.rotation(Rotation.PITCH) > 0:
            y += 1
            if y > 4:
                y = 4
        if input.rotation(Rotation.ROLL) < 0:
            x += -1
            if x < 0:
                x = 0
        if input.rotation(Rotation.ROLL) > 0:
            x += 1
            if x > 4:
                x = 4
    basic.show_number(timeTaken)
basic.forever(on_forever)
