const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？'
const answers = [
  "スーパーファミコン",
  "プレーステーション２",
  "ニンテンドースイッチ",
  "ニンテンドーDS"
];
const correct = 'ニンテンドーDS';

console.log();

document.getElementById('js-question').textContent = question;

for(let i = 0;i < answers.length;i++){
  document.getElementsByTagName('button')[i].textContent = answers[i];
  document.getElementsByTagName('button')[i].addEventListener('click', () =>{
    if(correct === document.getElementsByTagName('button')[i].textContent) {
      window.alert('正解!');
    }else{
      window.alert('不正解!');
    }
  })
};



