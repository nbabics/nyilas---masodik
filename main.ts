radio.onReceivedNumber(function (receivedNumber) {
    k = receivedNumber - 5
    led.plot(0 + k, 2)
    if (k > 0) {
        led.plot(k - 1, 1)
        led.plot(k - 1, 3)
    }
    if (k > 1) {
        led.unplot(k - 2, 1)
        led.unplot(k - 2, 3)
        led.plot(k - 2, 0)
        led.plot(k - 2, 4)
    }
    if (k > 2) {
        led.unplot(k - 3, 0)
        led.unplot(k - 3, 4)
    }
    if (k > 4) {
        led.unplot(k - 5, 2)
    }
    basic.pause(100)
})
let k = 0
radio.setGroup(1)
basic.forever(function () {
	
})
