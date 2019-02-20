console.log("connected!")

//Increases main counter
let count = document.querySelector('#counter')

function plusCount(e) {
  count.innerText = parseInt(count.innerText) + 1
}

let incButton = document.querySelector('#plus')
incButton.addEventListener('click', plusCount)

//decreases main counter
function minusCount(e) {
  count.innerText = parseInt(count.innerText) - 1
}

let decButton = document.querySelector('#minus')
decButton.addEventListener('click', minusCount)

//sets heart variable
let heartButton = document.querySelector('#heart')

function likeCapture(e) {
  //creates new element
  let newLike = document.createElement('li')
  newLike.innerText = `${count.innerText} has been liked 1 time`
  
  //appends new element to ul parent
  document.querySelector('ul.likes').appendChild(newLike)
}

heartButton.addEventListener('click', likeCapture)

//sets inital time interval increase on page load
let countStatus = true

function incStart() {
  count.innerText = parseInt(count.innerText) + 1
  countStatus = true
}

let countInterval = setInterval(incStart, 1000)

//stops interval increase on pause and calls incStart on resume and disables/re-enables all butons

let submitButton = document.querySelector("#submit") //set submit button variable

function incrementer() {
  
  if (countStatus === true) {
    clearInterval(countInterval)
    decButton.setAttribute('disabled', true)
    incButton.setAttribute('disabled', true)
    heartButton.setAttribute('disabled', true)
    submitButton.setAttribute('disabled', true)
    countController.innerText = 'resume'
    countStatus = false
  } else {
    countInterval = setInterval(incStart, 1000)
    decButton.removeAttribute('disabled')
    incButton.removeAttribute('disabled')
    heartButton.removeAttribute('disabled')
    submitButton.removeAttribute('disabled')
    countController.innerText = 'pause'
  }
}
let countController = document.querySelector('#pause')
countController.addEventListener('click', incrementer)

//captures a comment from the form
function submitHandler(e) {
   //stops page from re-rendering upon submit, which is the default behavior of a submit button?
  event.preventDefault()
  
  //creates ul if this is the first comment to be recorded and appends it to the div directly beneath h3#Comments
  if (document.querySelector("#list").childElementCount === 0){
    let commentList = document.createElement('ul')
    commentList.setAttribute('id', 'all-comments')
    document.querySelector('#list').appendChild(commentList)
  }
  //creates comment and new li element
  let newComment = document.createElement('li')
  
//  REFACTORED
//  let content = document.querySelector('#new-comment').value
  
  newComment.innerText = document.querySelector('#new-comment').value
  document.querySelector('#all-comments').appendChild(newComment)
  
  //resets the comment field to an empty string
  document.querySelector('#new-comment').value = ''
//  debugger
}

submitButton.addEventListener("click", submitHandler)

















