

let questions = [

  {
    numb: 1,
    src: "./assets/image1.jpg",
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
  {
    numb: 2,
    question: "What does CSS stand for?",
    src: "./assets/image2.jpg",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    src: "./assets/image3.jpg",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    src: "./assets/image4.jpg",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    src: "./assets/image5.jpg",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]

  }
  ,{
    numb: 6,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    src: "./assets/image5.jpg",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]

    
  },{
    numb: 7,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    src: "./assets/image5.jpg",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]

    
  },{
    numb: 8,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    src: "./assets/image5.jpg",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]

    
  },{
    numb: 9,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    src: "./assets/image5.jpg",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]

    
  },{
    numb: 10,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    src: "./assets/image5.jpg",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]

    
  }

]

const score = document.getElementById("score");
// score.innerText = userScore;
console.log(score)

const quiz = document.querySelector(".quiz")
const question = document.querySelector("#quesBox")
const option_list = document.querySelector(".quiz-answer");
const nextBtn = document.querySelector(".next_btn")
const img = document.querySelector(".img")
const dotContainer = document.querySelector(".dots")

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let lockedQues = []

// function showResult() {
//   const score = document.getElementById("score");
//   score.innerHTML = userScore;
//   console.log(score)
// }

function optionSelected(answer) {
  let userAns = answer.textContent; //getting user selected option
  let correcAns = questions[que_count].answer; //getting correct answer from array
  const allOptions = option_list.children.length;
  if (lockedQues.includes(que_count)) return
  lockedQues.push(que_count)





  if (userAns == correcAns) { //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option


  } else {
    answer.classList.add("incorrect"); //adding red color to correct selected option


  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  // next_btn.classList.add("show"); //show the next button if user selected any option
}



function setactiveDot() {
  console.log(dotContainer)
  let list = ""
  for (let i = 0; i < questions.length; i++) {
    let className = "dot"
    if (i === que_count) {
      className = "dot active-dot"
    }
    const tag = `<span class="${className}"></span>`
    list = list + tag
  }
  dotContainer.innerHTML = list

}


// getting questions and options from array
function showQuetions(index) {
  if (img) {
    img.src = questions[index].src
  }
  let que_tag = `<span>${questions[index].question}</span>`;



  let option_tag = '<div class="option ans"><span>' + questions[index].options[0] + '</span></div>'
    + '<div class="option ans"><span>' + questions[index].options[1] + '</span></div>'
    + '<div class="option ans"><span>' + questions[index].options[2] + '</span></div>'
    + '<div class="option ans"><span>' + questions[index].options[3] + '</span></div>';


  question.innerHTML = que_tag
  option_list.innerHTML = option_tag
  const option = option_list.querySelectorAll(".option");
  setactiveDot()

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }

}


function showResult() {
  //const cat = localStorage.getItem('result');
  window.location.href='result.html'
  // const score = document.getElementById("score");
  // score.innerText = userScore;
  // console.log(score)

}



showQuetions(0)


nextBtn.onclick = () => {
  if (que_count < questions.length - 1) {
    if(!lockedQues.includes(que_count)) rerurn //if question count is less than total question length
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function       
    nextBtn.classList.remove("show"); //hide the next button
    saveResult();
  } else {
    showResult(); //calling showResult function
  }
}


function saveResult() {
  sessionStorage.setItem('result', userScore);
}



