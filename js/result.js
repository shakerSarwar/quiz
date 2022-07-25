  // const cat = localStorage.getItem('result');
   const score = document.getElementById("score");
   // score.innerText = userScore;
  console.log(score)

  function jekono(){
    const cat = sessionStorage.getItem('result');
    score.innerText = cat;
  }

  jekono();