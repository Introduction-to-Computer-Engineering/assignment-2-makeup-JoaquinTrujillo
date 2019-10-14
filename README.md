# CPE 1040 - Introduction to Computer Engeneering

## Assignment: Migrating micro:bit Programming from Blocks to JavaScript (Makeup)

### 1. Summary

This assignment asks you to go complete the Final Project for the [Intro to CS course with Blocks](https://makecode.microbit.org/courses/csintro) for the micro:bit, in JavaScript, following the [criteria](#criteria) below. This assignment is submitted through Github.

### 2. Criteira

#### 2.1 Requirements
1. The file should have a name and the `.js` file extension.
2. A project [description](#description) should be included in this [README](README.md) file.	

#### 2.2 Code quality
1. The program should have proper indentation.
2. Every block of code should contain inline comments, briefly describing its purpose and functionality.	
3. The program should have good structure, with asynchronous and synchronous code blocks properly differentiated. **Note:** You cannot have more than one `forever` loop.
4. Variables should be named in either of the following styles:
   1. `variable_name_of_underscore_delimited_lower_case_words`, or
   2. `variableNameInCamelCase`

#### 2.3 JavaScript
1. Variables should be declared with [full static data types](https://makecode.microbit.org/javascript/types).	
2. Programmatic functionality should be encapsulated in [functions](https://makecode.microbit.org/javascript/functions), and, optionally for **bonus** points, [classes](https://makecode.microbit.org/javascript/classes).	
3. Functions in JavaScript are [1st class objects](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function). All event constructs like `onButtonPressed` and `onGesture` take functions as arguments.	
4. A maximum variety of JS language constructs (loops, conditionals, various operators, encapsulations, event handling, etc) should be used.

#### 2.4 micro:bit			
1. Use of buttons	and/or guestures.
2. Sensible display update.
3. Non-trivial functionality.	
4. Control complexity.

## Resources

### micro:bit 

1. [micro:bit lessons](https://makecode.microbit.org/lessons).

2. [micro:bit ideas](https://microbit.org/ideas/).

3. A list of some more [advanced projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects).

4. The [projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects) at the [awesome micro:bit list](https://github.com/carlosperate/awesome-microbit).

### Github

1. Github Tutorial for Beginners ([webpage](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)).

2. Github Basics for Mac and Windows ([video](https://www.youtube.com/watch?v=0fKg7e37bQE)).

3. git & Github Crash Course for Beginners ([video](https://www.youtube.com/watch?v=SWYqp7iY_Tc)).

4. Introduction to Github for Beginners ([video](https://www.youtube.com/watch?v=fQLK8Ib_SKk)).

5. About `git` ([webpage](https://git-scm.com/about)).

6. `git` [documentation](https://git-scm.com/doc) (webpage, book, videos, reference manual).

7. [Github markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### JavaScript

1. Technically, the language which is used side-by-side with Blocks in the Makecode environment is a subset of [TypeScript](https://makecode.com/language), which itself is a superset of JavaScript (technically, [ECMAScript](https://www.ecma-international.org/ecma-262/10.0/index.html#Title)), with some JS features not implemented in Makecode.

2. The limited [JavaScript mini-tutorial](https://makecode.microbit.org/javascript) in Makecode. Make sure you read it but that can't be your only reference.

3. Official [TypeScript documentation]():
   1. TypeScript in 5 min [tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). _**Highly recommended!** You will need to [download](https://www.typescriptlang.org/index.html#download-links) and install an integrated development envinronment (IDE). The two that I recommend are Visual Studio Code from Microsoft and WebStorm from JetBrains._
   2. The full documentation and reference is under _Handbook_. Bear in mind that you are drinking from the hose. Don't be surprised if not everything is presented in a strictly incremental manner.
   
4. In-browser TypeScript [playground](https://www.typescriptlang.org/play/index.html). Note that micro:bit specific code will not run, but you can still play. _Start making the distinction between a generic multi-purpose programming language (TypeScript) and functionality (packages, libraries, objects, etc.) that is specific to a particular device (micro:bit), though written in the same programming language._

5. A pretty good and very palatable JS tutorial with in-browser coding, by [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript).

6. Extensive and detailed [JS tutorial](https://javascript.info/), with some advanced material thrown in. _**I like this one!**

7. The most authoritative JS resource on the Web, including tutorials and reference, by [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

---

### Description

#### Goal: MONEY TRACKER/READER
##### My Micro:Bit Project consists of
1. A money counting system (Button A +1$/Button B -1$)
2. A way to show your total dollar amount (Buttons A and B)
3. A start up screen and that shows the name of the Programm ($MAN)
4. On the Shake gesture tells you if you are in debt or not depending on your dollar amount while playing a music melody that can only be stopped when Button A is pressed
5. On the tilt left gesture it randomly picks if you will end up poor or rich and shows the string accordingly
6. On Buttons AB it will then send a radio signal to a microbit on the same radio group saying im rich and showing your dollar amount while playing an e note
7. On the screen down gesture it picks a random number out of the array and shows it plus the string MILLIONS to show you how much money you will make in your life time.

#### Design process
1. to start the screen saver and title of the program i plotted leds and their brightness into a forever function
2. for the counting system i assigned a variable named dollarAmount to 0 and then wrapped it in an input function which would add or minus one depending on which button was pressed
3. I also added basic.showNumber (dollarAmount) into the A and B input functions to show the number and a string to both saying one less ore plus one
4.For the shake gesture i wrapped a loop into the function then inside of that loop added a condition while to play a melody until the controller pressed A 
in the sahke gesture function i then added if the dollar amount is less than or equal to zero to showSting no debt or else show string debt
5. I then added a boolean variable under the name fortuneOne which i then wrapped in the tilt left gesture and assigned the computer to pick a random boolean if it was true it would show string rich meaning you will get rich if it was false it would show string poor
6. On buttons AB pressed it would send your dollar amount, a string saying im rich, and a note to radio group 1 and when recieved will send a string to you saying recieved.
7. On gesture screen down it would choose between a random number of the array variable called dollarMillions and will show that number + the string millions to show you how much money you will make

#### JS Constructs & objects

##### Constructs
1. Button A
2. Button B
3. Gesture Shake
4. Gesture tilt left
5. Gesture screen down

##### Objects
1. Basic forever
2. radio.onRecievedString
3. Input.buttonIsPressed(Button.A)
4. All other functions wrapped in inputs
