const quize = [
  {
    question: "パンはパンでも食べられないパンではないものは？",
    answers: [
      "フライパン",
      "腐ったパン",
      "パンツ",
      "アンパン"
    ],
    
    correct: "アンパン"
  }, {
    question: "ゲーム市場で最も売れた機種は？",
    answers: [
      "スーパーファミコン",
      "プレイステーション",
      "ニンテンドースイッチ",
      "ニンテンドーDS"
    ],
    
    correct: "ニンテンドーDS"
  }, {
    question: "糸井重里が企画に関わった、任天堂の看板ゲームは？",
    answers: [
      "MOTHER2",
      "スーパードンキーコング",
      "スーパーマリオブラザーズ",
      "星のカービィ"
    ],
    
    correct: "MOTHER2"
  }, {
    question: "男子マラソンの世界記録保持者の名前は？",
    answers: [
      "大迫傑",
      "ケネニサ・ベケレ",
      "エリウド・キプチョゲ",
      "ジョージ・マイケル"
    ],
    
    correct: "エリウド・キプチョゲ"
  }
];

quizeLength = quize.length;
quizeIndex = 0;

let score = 0;

// button[0].textContent = answers[0]
// button[1].textContent = answers[1]
// button[2].textContent = answers[2]
// button[3].textContent = answers[3]

//各ボタンに選択しを反映させる。
const button = document.getElementsByTagName("button")
const buttonLength = button.length;

const setupQuiz = () => {  
  document.getElementById("js-question").textContent = quize[quizeIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    button[buttonIndex].textContent = quize[quizeIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if (quize[quizeIndex].correct === e.target.textContent){
    window.alert("正解");
    score++;
  } else {
    window.alert("不正解");
  }

  quizeIndex++;
   if (quizeIndex < quizeLength) {
     setupQuiz();
   } else {
     window.alert("終了！あなたの正解数は"+ score +"/"+ quizeLength + "です！")
   }
}

let handlerIndex = 0;

while (handlerIndex < buttonLength) {
  button[handlerIndex].addEventListener("click", (e)=>{
    clickHandler(e);
  });
  handlerIndex++;
}



