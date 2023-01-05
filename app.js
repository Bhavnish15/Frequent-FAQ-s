// const plusBtn = document.querySelector(".plus-icon");
// const closeBtn = document.querySelector(".minus-icon");
// const questionText = document.querySelector(".question-text");

// ****** 1st Method ******

const question = document.querySelectorAll(".question");
console.log(question);
question.forEach(function (yoyo) {
  const btn = yoyo.querySelector(".question-btn");
  console.log(btn);
  btn.addEventListener("click", function () {
    question.forEach(function (item) {
      if (item !== yoyo) {
        item.classList.remove("show-text");
      }
    });

    yoyo.classList.toggle("show-text");
  });
});

// 2nd Method

// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     } )
// })
