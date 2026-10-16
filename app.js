const RandomWords =['APPLE','COMPUTER','CAKE','SPRING','TEAPOT','MUSIC','TREASURE','ART','STAR','DOOR','BACKPACK','COMPASS','NOTEBOOK','PILLOW','GUITAR','PENCIEL','MOUNTAIN','AEROPLANE','FLOWER','LANTERN']

const lettersbtnEl = document.querySelectorAll('.lett')
const ResetbtnEl = document.querySelector('#Reset')
const hiddenWordEl = document.querySelector('.Hidden-word')
const WinMessageEl = document.querySelector('#message')
const ImageEl = document.querySelector('#image')
const MistakesEl = document.querySelector('#guesses-number')
const NextbtnEl = document.querySelector('#Next')
console.log(lettersbtnEl)
console.log(ResetbtnEl)
console.log(hiddenWordEl)
console.log(WinMessageEl)
console.log(ImageEl)
console.log(MistakesEl)
console.log(NextbtnEl)

let winner = false
let HiddenWordLetters =[]
let Index = 0
let randomword = ''
let Guessedletter = []
let MistakesNo = 0

 HiddenWordLetters = RandomWords.map((Letters)=>{
   return Letters.split('')
})
console.log(HiddenWordLetters)

function init(){
  winner = false
  ImageEl.src = './hangman1.png'
  MistakesEl.textContent = 'Mistakes Remianing :  6'
  WinMessageEl.textContent =''
  MistakesNo = 0
  HiddenWord()
  IfWin() 
}


function HiddenWord(){
    randomword = RandomWords[Index]
    if(Index>= RandomWords.length){
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
}

function Nextbtn(){
    if(winner === true){
        Index = Index + 1 
        init()
    }
    return Index
}

hiddenWordEl.textContent =''

function Choose(event){
    let letter = event.target.textContent
    let Correctlet = false

    for(let i=0; i<randomword.length;i++){
        
            if(letter === randomword[i]){
            Guessedletter[i] = letter
            Correctlet = true
        }
        
    }
    hiddenWordEl.textContent=''
    for(let i=0; i< Guessedletter.length;i++){
        hiddenWordEl.textContent += Guessedletter[i] + ' '
    }
    if(Correctlet===false){
        mistakes()
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
}

function Restart(){

}

init()
NextbtnEl.addEventListener('click',Nextbtn)
for(let oneElement of lettersbtnEl){
    oneElement.addEventListener('click',Choose)
}
