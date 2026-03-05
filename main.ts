radio.onReceivedString(function (receivedString) {
    if (receivedString == "BEAT") {
        let spielt_gerade = false
        if (spielt_gerade == true) {
            melodie = [
            "C",
            "C",
            "G",
            "G",
            "A",
            "H",
            "C",
            "H",
            "A",
            "A",
            "F",
            "F",
            "E",
            "E",
            "D",
            "D",
            "C"
            ]
            taktposition += 1
        } else if (taktposition >= melodie.length) {
            taktposition = 0
        }
    }
})
let melodie: string[] = []
let taktposition = 0
radio.setGroup(42)
basic.pause(randint(100, 500))
let meinInstrument = randint(0, 2)
basic.showNumber(meinInstrument)
radio.sendString("Claim:" + meinInstrument)
