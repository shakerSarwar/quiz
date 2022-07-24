const questions = [{

            "type": "single",
            "question": "Which is not a step in the scientific method?",
            "A" :'html',
            "B" :'css',
            "c" :'ja',
            "D" :'html'
        },
        {

            "type": "single",
            "question": "Which is not a step in the scientific method?",
            "A" :'html',
            "B" :'css',
            "c" :'ja',
            "D" :'html'
        },
        {

            "type": "single",
            "question": "Which is not a step in the scientific method?",
            "A" :'html',
            "B" :'css',
            "c" :'ja',
            "D" :'html'
        },
        {

            "type": "single",
            "question": "Which is not a step in the scientific method?",
            "A" :'html',
            "B" :'css',
            "c" :'ja',
            "D" :'html'
        },
        {

            "type": "single",
            "question": "Which is not a step in the scientific method?",
            "A" :'html',
            "B" :'css',
            "c" :'ja',
            "D" :'html'
        },
        {

            "type": "single",
            "question": "Which is not a step in the scientific method?",
            "A" :'html',
            "B" :'css',
            "c" :'ja',
            "D" :'html'
        }
      
        
    ]
let index = 0;
const quesBox = document.getElementById("quesBox");
const options = document.getElementsByClassName('ans')
const loadQuestion = () => {
    const data = questions[index]
    console.log(data);
    quesBox.innerText = `${data.question}`;
}

loadQuestion();