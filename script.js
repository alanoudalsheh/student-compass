let qIndex = 0;

let scores = {
  engineering: 0,
  business: 0,
  medicine: 0,
  arts: 0
};

const questions = [
  {
    q: "What do you enjoy most?",
    a: [
      ["Solving problems", "engineering"],
      ["Leading people", "business"],
      ["Helping others", "medicine"],
      ["Creating things", "arts"]
    ]
  },
  {
    q: "Best skill?",
    a: [
      ["Math", "engineering"],
      ["Communication", "business"],
      ["Biology", "medicine"],
      ["Creativity", "arts"]
    ]
  },
  {
    q: "Work style?",
    a: [
      ["Analytical", "engineering"],
      ["Strategic", "business"],
      ["Caring", "medicine"],
      ["Flexible", "arts"]
    ]
  },
  {
    q: "What motivates you?",
    a: [
      ["Building things", "engineering"],
      ["Making money", "business"],
      ["Saving lives", "medicine"],
      ["Expressing ideas", "arts"]
    ]
  },
  {
    q: "Favorite subject?",
    a: [
      ["Physics", "engineering"],
      ["Economics", "business"],
      ["Biology", "medicine"],
      ["Art", "arts"]
    ]
  },
  {
    q: "You prefer working:",
    a: [
      ["With systems", "engineering"],
      ["With teams", "business"],
      ["With patients", "medicine"],
      ["Independently", "arts"]
    ]
  },
  {
    q: "What describes you best?",
    a: [
      ["Logical", "engineering"],
      ["Leader", "business"],
      ["Empathetic", "medicine"],
      ["Creative", "arts"]
    ]
  },
  {
    q: "Dream job environment?",
    a: [
      ["Tech company", "engineering"],
      ["Startup/office", "business"],
      ["Hospital", "medicine"],
      ["Studio", "arts"]
    ]
  },
  {
    q: "How do you make decisions?",
    a: [
      ["Data & logic", "engineering"],
      ["Strategy", "business"],
      ["Care & ethics", "medicine"],
      ["Emotion & ideas", "arts"]
    ]
  },
  {
    q: "Biggest strength?",
    a: [
      ["Problem-solving", "engineering"],
      ["Leadership", "business"],
      ["Helping others", "medicine"],
      ["Creativity", "arts"]
    ]
  }
];

if (document.getElementById("question")) {
  showQuestion();
}

function showQuestion() {
  if (qIndex >= questions.length) {
    localStorage.setItem("scores", JSON.stringify(scores));
    window.location.href = "results.html";
    return;
  }

  let q = questions[qIndex];
  document.getElementById("question").innerText = q.q;

  let html = "";
  q.a.forEach(ans => {
    html += `<button onclick="answer('${ans[1]}')">${ans[0]}</button>`;
  });

  document.getElementById("answers").innerHTML = html;

  let progress = (qIndex / questions.length) * 100;
  document.getElementById("progress").style.width = progress + "%";
}

function answer(cat) {
  scores[cat] += 2;
  qIndex++;
  showQuestion();
}

if (document.getElementById("result")) {
  let scores = JSON.parse(localStorage.getItem("scores"));

  let sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]);

  let best = sorted[0][0];
  let second = sorted[1][0];

  document.getElementById("result").innerHTML =
    `<h2>${best.toUpperCase()}</h2>
     <p>Second match: ${second.toUpperCase()}</p>
     <p>This result reflects your personality, strengths, and interests.</p>`;
}