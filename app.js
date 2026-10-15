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
let winner = null
let HiddenWordLetters =[]
 HiddenWordLetters = RandomWords.map((Letters)=>{
   return Letters.split('')
})
console.log(HiddenWordLetters)

function init(){
  winner = false
  ImageEl.src = './hangman1.png'
  MistakesEl.textContent = 'Mistakes Remianing :  6'
  HiddenWord()
  IfWin()
  mistakes()
  Choose()
  IfWin()
  mistakes()
}
let Index = 0
let randomword = 0
function HiddenWord(){
    randomword = RandomWords[Index]
    if(Index>= RandomWords.length){
        Index=0;
    }
console.log(randomword)
hiddenWordEl.textContent =""

for(let Ind of HiddenWordLetters[Index]){
     hiddenWordEl.textContent += "_ "
}

}
function Nextbtn(){
    if(winner === true){
        Index = Index + 1 
        init()
    }
    return Index
}


function Choose(){

    
}

function IfWin(){

}
function mistakes() {
    
}
init()
ResetbtnEl.addEventListener('click',init)
NextbtnEl.addEventListener('click',Nextbtn)
