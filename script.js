// ===== Question Data (20 questions) =====
const questions = [
  {
    question: "この漢字の読み方はどれですか。（公園）",
    options: ["こうえん", "がっこう", "えき", "じしょ"],
    correctIndex: 0,
    explanation: "公園（こうえん）は「park」という意味です。"
  },
  {
    question: "明日、雨が＿＿かもしれません。",
    options: ["ふる", "ふって", "ふり", "ふった"],
    correctIndex: 0,
    explanation: "「雨がふる」が正しい形です。"
  },
  {
    question: "昨日、友だちと映画を＿＿。",
    options: ["見ました", "見ます", "見る", "見て"],
    correctIndex: 0,
    explanation: "過去のことなので「見ました」が正しいです。"
  },
  {
    question: "日本へ来て（　）年になります。",
    options: ["三", "三つ", "三人", "三日"],
    correctIndex: 0,
    explanation: "年には「三年」のように数詞＋年を使います。"
  },
  {
    question: "この本は私＿＿です。",
    options: ["の", "が", "を", "に"],
    correctIndex: 0,
    explanation: "所有を表すときは「私の本」です。"
  },
  {
    question: "これは日本で一番＿＿山です。",
    options: ["高い", "高く", "高かった", "高くて"],
    correctIndex: 0,
    explanation: "名詞を修飾するときは「高い山」のようにい形容詞の基本形を使います。"
  },
  {
    question: "毎朝６時に＿＿。",
    options: ["起きます", "起こします", "起きる", "起こす"],
    correctIndex: 0,
    explanation: "自分がベッドから出ることは「起きます」です。"
  },
  {
    question: "もう晩ごはんを＿＿か。",
    options: ["食べました", "食べます", "食べて", "食べる"],
    correctIndex: 0,
    explanation: "完了したかどうか聞くときは「食べましたか」です。"
  },
  {
    question: "きのうはとても（　）かったです。",
    options: ["たのし", "たのしい", "たのしく", "たのしかった"],
    correctIndex: 3,
    explanation: "い形容詞の過去形は「楽しかった」です。"
  },
  {
    question: "田中さんは英語を話すことが＿＿。",
    options: ["できます", "できますか", "できません", "できない"],
    correctIndex: 0,
    explanation: "能力を表すときは「〜ことができます」です。"
  },
  {
    question: "もう少しゆっくり＿＿ください。",
    options: ["話して", "話す", "話した", "話さないで"],
    correctIndex: 0,
    explanation: "依頼のときは「〜てください」を使います。"
  },
  {
    question: "駅まで＿＿、10分ぐらいです。",
    options: ["歩いて", "歩き", "歩く", "歩いた"],
    correctIndex: 0,
    explanation: "方法・手段を表すときは「歩いて行きます」のように「〜て」を使います。"
  },
  {
    question: "日本語が（　）になりました。",
    options: ["上手", "上手な", "上手で", "上手だ"],
    correctIndex: 0,
    explanation: "名詞＋になる → 「上手になる」で上達を表します。"
  },
  {
    question: "部屋の電気を＿＿ください。",
    options: ["つけて", "つける", "つけた", "つけないで"],
    correctIndex: 0,
    explanation: "「〜てください」はお願いの形です。「電気をつけてください」。"
  },
  {
    question: "ここで写真を（　）いけません。",
    options: ["とっては", "とると", "とり", "とらないで"],
    correctIndex: 0,
    explanation: "禁止を表すときは「〜てはいけません」です。"
  },
  {
    question: "母は料理が＿＿。",
    options: ["上手です", "上手なです", "上手がです", "上手にです"],
    correctIndex: 0,
    explanation: "名詞＋です → 「上手です」が自然です。"
  },
  {
    question: "まだ宿題が＿＿。",
    options: ["終わっていません", "終わりました", "終わります", "終わりませんでした"],
    correctIndex: 0,
    explanation: "今も終わっていない状態は「終わっていません」です。"
  },
  {
    question: "窓を（　）もいいですか。",
    options: ["開けて", "開ける", "開けた", "開けないで"],
    correctIndex: 0,
    explanation: "許可をたずねるときは「〜てもいいですか」です。「開けてもいいですか」。"
  },
  {
    question: "日本の生活にだんだん＿＿きました。",
    options: ["慣れて", "慣れる", "慣れた", "慣れない"],
    correctIndex: 0,
    explanation: "変化の途中は「〜てきました」を使います。「慣れてきました」。"
  },
  {
    question: "時間がないので、＿＿ご飯を食べました。",
    options: ["急いで", "急ぐ", "急いだ", "急がないで"],
    correctIndex: 0,
    explanation: "様子・方法を表す副詞として「急いでご飯を食べました」が自然です。"
  }
];

// ===== State =====
let currentIndex = 0;
let selectedAnswers = [];
let currentSelectedIndex = null;

// timer: 10 minutes = 600 seconds
let timeLeft = 400;
let timerId = null;

// ===== DOM Elements =====
const homeScreen = document.getElementById("home-screen");
const testScreen = document.getElementById("test-screen");
const resultScreen = document.getElementById("result-screen");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const scoreText = document.getElementById("score-text");
const details = document.getElementById("details");
const timerEl = document.getElementById("timer");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");

// ===== Event Listeners =====
startBtn.addEventListener("click", startTest);
nextBtn.addEventListener("click", handleNext);

// ===== Timer Functions =====
function startTimer() {
  // reset
  timeLeft = 600; // 10 minutes
  updateTimerDisplay();

  if (timerId) {
    clearInterval(timerId);
  }

  timerId = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerId);
      timerId = null;
      alert("時間切れです。テストを終了します。");
      endTest();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerEl.textContent = `残り時間: ${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// ===== Main Functions =====
function startTest() {
  homeScreen.style.display = "none";
  resultScreen.style.display = "none";
  testScreen.style.display = "block";

  currentIndex = 0;
  selectedAnswers = [];
  currentSelectedIndex = null;

  startTimer();
  showQuestion();
}

function showQuestion() {
  const q = questions[currentIndex];
  questionText.textContent = `Q${currentIndex + 1}. ${q.question}`;

  optionsContainer.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.style.display = "block";
    btn.style.margin = "8px 0";
    btn.style.width = "100%";

    btn.onclick = () => {
      currentSelectedIndex = index;
      // visual feedback
      Array.from(optionsContainer.children).forEach(child => {
        child.style.backgroundColor = "";
      });
      btn.style.backgroundColor = "#ddd";
    };

    optionsContainer.appendChild(btn);
  });
}

function handleNext() {
  if (currentSelectedIndex === null) {
    alert("答えを選んでください。");
    return;
  }

  selectedAnswers.push(currentSelectedIndex);
  currentSelectedIndex = null;
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    endTest();
  }
}

function endTest() {
  // stop timer if still running
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  testScreen.style.display = "none";
  resultScreen.style.display = "block";

  let score = 0;
  let detailsHtml = "";

  questions.forEach((q, i) => {
    const userIndex = selectedAnswers[i];
    const correctIndex = q.correctIndex;

    if (userIndex === correctIndex) score++;

    const userAnswer =
      userIndex !== undefined ? q.options[userIndex] : "（未回答）";
    const correctAnswer = q.options[correctIndex];

    detailsHtml += `
      <div style="margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #ccc;">
        <b>Q${i + 1}:</b> ${q.question}<br/>
        あなたの答え: ${userAnswer}<br/>
        正しい答え: ${correctAnswer}<br/>
        <i>説明: ${q.explanation}</i>
      </div>
    `;
  });

  scoreText.textContent = `スコア: ${score} / ${questions.length}`;
  details.innerHTML = detailsHtml;
}
