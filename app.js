const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
        "スーパーファミコン",
      "プレーステーション２",
      "ニンテンドースイッチ",
      "ニンテンドーDS" 
    ],
    correct: 'ニンテンドーDS'
  },{
    question: '3+3は？',
    answers: [
      "1",
      "2",
      "3",
      "6"
    ],
    correct: "6"
  },{
    question: '5+5は？',
    answers: [
      "1",
      "2",
      "3",
      "10"
    ],
    correct: '10'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  }else{
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
   setupQuiz();
  }else{
    window.alert(`終了！あなたの正解数は${score}/ ${quizLength}です`)
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  handlerIndex++;
}





