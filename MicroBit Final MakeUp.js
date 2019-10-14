let fortuneOne = false;
radio.setGroup(1)
let radioRecieved = ("RECIEVED")
let dollarAmount = 0
const speed = 100
let dollarMillions = (1, 5, 10, 100)

//Basic screen saver for when the microbit turns on
basic.forever(() => {
    led.plot(4, 0)
    basic.pause(speed)
    led.plot(3, 1)
    basic.pause(speed)
    led.plot(2, 2)
    basic.pause(speed)
    led.plot(1, 3)
    basic.pause(speed)
    led.plot(0, 4)
    basic.pause(speed)
    led.plotBrightness(4, 1, 150)
    basic.pause(speed)
    led.plotBrightness(3, 0, 150)
    basic.pause(speed)
    led.plotBrightness(0, 3, 150)
    basic.pause(speed)
    led.plotBrightness(1, 4, 150)
    basic.pause(speed)
    led.plotBrightness(2, 1, 150)
    basic.pause(speed)
    led.plotBrightness(3, 2, 150)
    basic.pause(speed)
    led.plotBrightness(1, 2, 150)
    basic.pause(speed)
    led.plotBrightness(2, 3, 150)
    basic.pause(speed)
    led.plotBrightness(4, 2, 60)
    basic.pause(speed)
    led.plotBrightness(2, 0, 60)
    basic.pause(speed)
    led.plotBrightness(0, 2, 60)
    basic.pause(speed)
    led.plotBrightness(2, 4, 60)
    basic.pause(speed)
    led.plotBrightness(3, 3, 60)
    basic.pause(speed)
    led.plotBrightness(1, 1, 60)
    basic.pause(speed)
    led.plotBrightness(1, 0, 20)
    basic.pause(speed)
    led.plotBrightness(4, 3, 20)
    basic.pause(speed)
    led.plotBrightness(0, 1, 20)
    basic.pause(speed)
    led.plotBrightness(3, 4, 20)
    basic.pause(speed)
    led.plotBrightness(4, 4, 3)
    basic.pause(speed)
    led.plotBrightness(0, 0, 3)
    basic.pause(speed)
    basic.clearScreen()
    basic.showString("$MAN")
    basic.clearScreen()
})
//This is used to add one more dollar to your total while showing your total

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    dollarAmount += 1
    basic.showString("PLUSONE")
    basic.showNumber(dollarAmount)
})
//This is used to minus one dollor from your total while showing your total
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    dollarAmount -= 1
    basic.showString("ONELESS")
    basic.showNumber(dollarAmount)
})
// This is used to tell if you are in debt or not with a dramatic song for the outcome
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    for (let x = 0; x <= 0; x++) {
        while (!(input.buttonIsPressed(Button.A))) {
            music.playTone(Note.E, 10)
            basic.pause(speed)
            music.playTone(Note.E3, 10)
            basic.pause(speed)
            music.playTone(Note.E5, 10)
            basic.pause(speed)
        }
    }
    if (dollarAmount <= 0) {
        basic.showString("NODEBT")
    }
    else {
        basic.showString("DEBT")
    }
})

//This is a fortune teller that tells you wether you wil be rich or not
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
    fortuneOne = Math.randomBoolean()
    if (fortuneOne == true) {
        basic.showString("RICH")
    }
    else {
        basic.showString("POOR")
    }
})
//This is used to show off how many dollars you have to other microbit users
input.onButtonPressed(Button.AB, () => {
    radio.sendNumber(dollarAmount)
    radio.sendString("IMRICH")
    music.playTone(Note.E, 100)
})

//This is the conformation that your radio output was recieved
radio.onReceivedString(function (radioRecieved) {
    basic.showString(radioRecieved)
})
//Randomly picks a number out of the array and tells you how much money you will make in your life time.
input.onGesture(Gesture.ScreenDown, function () {
dollarMillions = Math.randomRange(dollarMillions, dollarMillions)
    basic.showString (dollarMillions+"MILLION")
})