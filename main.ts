input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendString("hallo")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendString("test")
})
radio.onReceivedString(function (receivedString) {
    radio.sendString(receivedString)
})
radio.setGroup(42)
basic.pause(randint(100, 500))
let meinInstrument = randint(0, 2)
basic.showNumber(meinInstrument)
radio.sendString("Claim:" + meinInstrument)
basic.forever(function () {
	
})
