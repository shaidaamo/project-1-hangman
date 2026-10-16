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
  
}
let Index = 0
let randomword = ''
let Guessedletter = []
function HiddenWord(){
    randomword = RandomWords[Index]
    if(Index>= RandomWords.length){
        Index=0;
    }
console.log(randomword)

hiddenWordEl.textContent = ""
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

    for(let i=0; i<randomword.length;i++){
        
            if(letter === randomword[i]){
            Guessedletter[i] = letter
        }
        
    }
    hiddenWordEl.textContent=''
    for(let i=0; i< Guessedletter.length;i++){
        hiddenWordEl.textContent += Guessedletter[i] + ' '
    }
    
}

function IfWin(){

}
function mistakes() {
    
}
function Restart(){

}
init()
NextbtnEl.addEventListener('click',Nextbtn)
for(let oneElement of lettersbtnEl){
    oneElement.addEventListener('click',Choose)
}
