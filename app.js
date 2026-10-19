const RandomWords =['APPLE','COMPUTER','CAKE','SPRING','TEAPOT','MUSIC','TREASURE','ART','STAR','DOOR','BACKPACK','COMPASS','NOTEBOOK','PILLOW','GUITAR','PENCIEL','MOUNTAIN','AEROPLANE','FLOWER','LANTERN']
const Hints =['A Fruit','A Device','A Dessert','A Season','Holds Hot Liqiud','Something We Listen To','Something We Value','Something We Make','Is In The Sky','We Use It To Get In/Out','Something We Hold','Something We Use To Know The Way','Something We Write In','Something We Sleep On','Something That Makes Music','Something We Write With','Something We Climb','Travels Long Distance','A Plant','Used In The Dark']

const lettersbtnEl = document.querySelectorAll('.lett')
const ResetbtnEl = document.querySelector('#Reset')
const hiddenWordEl = document.querySelector('.Hidden-word')
const WinMessageEl = document.querySelector('#message')
const ImageEl = document.querySelector('#image')
const MistakesEl = document.querySelector('#guesses-number')
const NextbtnEl = document.querySelector('#Next')
const HintEl = document.querySelector('#hint')
const StartbtnEl = document.querySelector('#start')
const timerEl = document.querySelector('#timer')
console.log(lettersbtnEl)
console.log(ResetbtnEl)
console.log(hiddenWordEl)
console.log(WinMessageEl)
console.log(ImageEl)
console.log(MistakesEl)
console.log(NextbtnEl)
console.log(HintEl)
console.log(StartbtnEl)

let winner = false
let Index = 0
let randomword = ''
let Guessedletter = []
let MistakesNo = 0
let HintRandom = ''
let time = 60

function init(){
    winner = false
    ImageEl.src = './hangman1.png'
    MistakesEl.textContent = 'Mistakes Remianing :  6'
    WinMessageEl.textContent =''
    MistakesNo = 0
    HiddenWord()
    IfWin() 
    startTime()
}

function HiddenWord(){
    randomword = RandomWords[Index]
    HintRandom = Hints[Index]
    if(Index> RandomWords.length){
        Index=0;
    }
    console.log(randomword)
    hiddenWordEl.textContent = ""
    Guessedletter = []
    for(let i=0;i<randomword.length;i++){
      Guessedletter.push('_')
    }
    for(let i=0;i< Guessedletter.length;i++){
      hiddenWordEl.textContent += Guessedletter[i] + ' '
    }
    console.log(Guessedletter)
    HintEl.textContent = 'Hint: ' + HintRandom
}

function Nextbtn(){
    if(winner === true){
        Index = Index + 1 
        for(let Onebutton of lettersbtnEl){
             Onebutton.style.visibility = 'visible'
        }
        init()
    }
    return Index

}

function Choose(event){
    let letter = event.target.textContent
    let Correctlet = false
    if(MistakesNo === 6 || winner===true || time ===0){
       return
    }
    for(let i=0; i<randomword.length;i++){
        if(letter === randomword[i]){     
        Guessedletter[i] = letter
        Correctlet = true
        event.target.style.visibility = 'hidden'    
        console.log(randomword[i])  
        }
    }
    hiddenWordEl.textContent=""
    for(let i=0; i< Guessedletter.length;i++){ 
     hiddenWordEl.textContent += Guessedletter[i] + ' '         
    }
    if(Correctlet===false){
        mistakes()
        event.target.style.visibility = 'hidden'
    }
    IfWin()
}

function IfWin(){
    winner = true
    for(let i=0; i< Guessedletter.length;i++){
        if(Guessedletter[i] === '_'){
            winner = false
        }
    }
    if(winner === true){
        WinMessageEl.textContent = 'You Win! Press Next for the Next Word'
    }  
}

function mistakes() {
    MistakesNo = MistakesNo + 1
    if(MistakesNo<=6){
        MistakesEl.textContent = 'Mistakes Remining: ' + (6-MistakesNo)
        ImageEl.src = MistakesNo+'.png'
    }
    if(MistakesNo === 6){
        WinMessageEl.textContent = 'You Lost. Restart The Game to Try Again'
    }
    return MistakesNo
}

function Restart(){
if(MistakesNo === 6){
  winner = false
  ImageEl.src = './hangman1.png'
  MistakesEl.textContent = 'Mistakes Remianing :  6'
  WinMessageEl.textContent =''
  MistakesNo = 0
for(let Onebutton of lettersbtnEl){
    Onebutton.style.visibility = 'visible'
 }
  HiddenWord()
  IfWin() 
    }
}
function startTime(){
const intervalId = setInterval(()=>{
    if(time === 0){
        clearInterval(intervalId)
        WinMessageEl.textContent = 'You Lost. Restart The Game to Try Again'
        return
    }
    time--
    timerEl.textContent = time
},1000)
}
StartbtnEl.addEventListener('click',init)
NextbtnEl.addEventListener('click',Nextbtn)
ResetbtnEl.addEventListener('click',Restart)
for(let oneElement of lettersbtnEl){
    oneElement.addEventListener('click',Choose)
}
