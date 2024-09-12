let    input = document.querySelector('.input'),
       btn   = document.querySelector('.btn'),
       time  = document.querySelector('.time'),
       gameZone = document.querySelector('.game__zone'),
       score = 0;
       gameTime = 0;
       interval = 0;
       ballsCreated = 0;
       ballsClicked = 0;
       colors = ['pink','green','orange','red','yellow','purple']

   

gameZone.addEventListener('click',(event) => {
   if(event.target.classList.contains('ball')){
    score++
    ballsClicked++
    event.target.remove()
    createBall()
   }
})
       



btn.addEventListener('click',() => {
  if(input.value > 4){
    gameTime = input.value
    input.value = ''
    gameZone.innerHTML = 0
    score = 0
    startGame()

  }else{
    alert('нужно ввывести минимум 5 секунд')
  }
})




function startGame(){
  time.innerHTML = gameTime
   interval = setInterval(()=> decreaseTime(),1000)
  createBall()

}

function decreaseTime(){
  if(gameTime == 1){
    time.innerHTML= 0
    endGame()

  }else{
    time.innerHTML = --gameTime

  }

}

function endGame(){
  let accuracy = ballsCreated > 0 ? (ballsClicked / ballsCreated * 100).toFixed(2) : 0
  alert(`вы набрали ${score} очков вы кликнули ${ballsClicked} раз выша точность ${accuracy}%`)
  gameZone.innerHTML = `<h2> вы набрали ${score} score </h2>`
  clearInterval(interval)

}

function createBall() {
  let ball = document.createElement('div')
  ball.classList.add('ball')
  let size = getRandomSize()
  let shape = getRandomShape()
  ball.style.clipPath = shape;

  ball.style.width = size + 'px'
  ball.style.height = size + 'px'
  ball.style.background = getRandomColor();



  let coor = gameZone.getBoundingClientRect()
  let leftValue = random(0,coor.width - size)
  let topValue = random(0,coor.height - size)

  ball.style.left  = leftValue + 'px'
  ball.style.top   = topValue + 'px'
  ball.style.position = 'absolute'
  


  gameZone.append(ball);
  ballsCreated++


}

function random(min,max) {
  return Math.floor(Math.random() * (max+1-min)+min)
  
}

function getRandomColor(){
  return colors[Math.floor(Math.random() * colors.length)]
}

function getRandomSize(){
  return Math.floor(Math.random() * (100 - 20 + 1)) + 20
}

function getRandomShape() {
  shapes = [
    'polygon(50% 0%, 0% 100%, 78% 51%)',
    'polygon(50% 0%, 91% 15%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
    ' polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    'polygon(50% 0%, 0% 100%, 100% 100%)',
    ' circle(50% at 50% 50%)'

  ]
  return shapes[Math.floor(Math.random()* shapes.length)]
  
}


















































  //  let game = document.querySelector('.input'),
  //   btn = document.querySelector('.btn'),
  //  time = document.querySelector('.time'),
  //  game__zone = document.querySelector('.game__zone'),
  //  score = 0;
  //  gameTime = 0;
  //  let coor = game__zone.getBoundingClientRect()
  //  console.log(coor);
  //  leftValue = random(0,coor.width - size)
  //  topValue = random(0, coor.height - size)
  //  interval = 0


  //  ball.style.leftValue

  //  game__zone.addEventListener('click', (event) => {
  //   if(event.target.classList.contains('ball')){
  //       score++
  //       event.target.remove()
  //       createBall()


  //   }

  //  })








  //  btn.addEventListener('click', () => {
  //    if(input.value > 4){
  //       gameTime = input.value
  //       input.value = ''
  //       game__zone.innerHTML = ''
  //       score = 0
  //       startGame()
  //    }else{
  //       alert('need to enter max 5 ')
  //    }
  //  })

  //  function startGame(){
  //   time.innerHTML = gameTime
  //   createBall()

  //   interval = setInterval(() => decreaseTime(),1000)


  //  }


  //  function decreaseTime(){
  //   if(gameTime == 1){
  //       time.innerHTML = 0
  //       endGame()

  //   }
  //   else{
  //       time.innerHTML = --gameTime

  //   }

  //  }


  //  function endGame() {
  //   game__zone.innerHTML = `<h2> you scored ${score} score<h2>`
  //   clearInterval(interval)

  //  }

  //  function createBall(){
  //   let ball = document.createElement('div')
  //   ball.classList.add('ball')
  //   let size = 40

  //   ball.style.width = size + 'px'
  //   ball.style.height= size + 'px'
  //   ball.style.background = 'red'

  //   ball.style.left = topValue + 'px'
  //   ball.style.top = leftValue + 'px' 

  //   game__zone.append('ball')

  //  }

  //  function random(min,max){
  //    return Math.floor(Math.random() * (max + 1 - min) + min)
  //  }