// ゲームデータ
const quizData = [
    { question: "レモンジュース", answer: "酸性", explanation: "レモンジュースにはクエン酸が含まれており、強い酸性を示します。pH値は2〜3程度です。" },
    { question: "重曹水", answer: "アルカリ性", explanation: "重曹（炭酸水素ナトリウム）は水に溶かすと弱アルカリ性を示します。pH値は8〜9程度です。" },
    { question: "水道水", answer: "中性", explanation: "日本の水道水は飲料用として供給されており、pH値は中性（7.0）に保たれています。地域によって多少の差はあります。" },
    { question: "コーラ", answer: "酸性", explanation: "コーラにはリン酸や炭酸が含まれているため、酸性を示します。pH値は2.5〜3.5程度です。" },
    { question: "石鹸水", answer: "アルカリ性", explanation: "一般的な石鹸は油脂をアルカリで分解して作られるため、石鹸水はアルカリ性を示します。洗浄力があります。" },
    { question: "お酢", answer: "酸性", explanation: "お酢には酢酸が含まれており、強い酸性を示します。pH値は2〜3程度です。" },
    { question: "牛乳", answer: "中性", explanation: "牛乳のpH値は6.7程度と、ほぼ中性に近いです。わずかに酸性に傾くこともあります。" },
    { question: "オレンジジュース", answer: "酸性", explanation: "オレンジジュースにはクエン酸やアスコルビン酸（ビタミンC）が含まれており、酸性を示します。pH値は3〜4程度です。" },
    { question: "アンモニア水", answer: "アルカリ性", explanation: "アンモニアは水に溶けると水酸化アンモニウムとなり、強いアルカリ性を示します。刺激臭があります。" },
    { question: "純水", answer: "中性", explanation: "不純物が一切含まれない純粋な水は、中性（pH 7.0）です。電気はほとんど通しません。" },
    { question: "胃液", answer: "酸性", explanation: "胃液には消化酵素のペプシンが働くための塩酸が含まれており、非常に強い酸性（pH 1〜2）を示します。" },
    { question: "卵白", answer: "アルカリ性", explanation: "卵白は、鮮度が落ちるにつれて二酸化炭素が放出され、アルカリ性に傾きます。pH値は8〜9程度です。" },
    { question: "雨水", answer: "酸性", explanation: "大気中の二酸化炭素が溶け込むため、通常の雨水はわずかに酸性（pH 5.6程度）を示します。工場排煙などの影響でより酸性になることもあります。" },
    { question: "海水", answer: "アルカリ性", explanation: "海水には様々な塩類が溶け込んでおり、弱アルカリ性（pH 8.0〜8.3程度）を示します。" },
    { question: "涙", answer: "中性", explanation: "人間の涙は目の刺激を防ぐため、血液と同じくほぼ中性（pH 7.4程度）に保たれています。" },
    { question: "コーヒー", answer: "酸性", explanation: "コーヒー豆に含まれるクエン酸やリンゴ酸などにより、コーヒーは酸性を示します。pH値は5程度です。" },
    { question: "石灰水", answer: "アルカリ性", explanation: "水酸化カルシウムを水に溶かした石灰水は、強いアルカリ性を示します。二酸化炭素を検出する実験にも使われます。" },
    { question: "血液", answer: "アルカリ性", explanation: "人間の血液は、生命維持のために非常に厳密に弱アルカリ性（pH 7.35〜7.45）に保たれています。" },
    { question: "ワイン", answer: "酸性", explanation: "ワインには酒石酸やリンゴ酸などが含まれており、酸性を示します。pH値は3〜4程度です。" },
    { question: "唾液", answer: "中性", explanation: "人間の唾液は、pH値が6.7〜7.4程度のほぼ中性です。消化酵素アミラーゼを含みます。" },
    { question: "トマトジュース", answer: "酸性", explanation: "トマトにはクエン酸やリンゴ酸などが含まれており、トマトジュースは酸性を示します。pH値は4〜5程度です。" },
    { question: "漂白剤", answer: "アルカリ性", explanation: "家庭用の多くの漂白剤は、次亜塩素酸ナトリウムなどのアルカリ性物質を含み、強いアルカリ性を示します。取り扱いには注意が必要です。" },
    { question: "緑茶", answer: "酸性", explanation: "緑茶にはカテキンやカフェインなどが含まれており、わずかに酸性（pH 6程度）を示します。" },
    { question: "ベーキングパウダー水", answer: "アルカリ性", explanation: "ベーキングパウダーは重曹と酸性剤の混合物ですが、水に溶かすと重曹の作用で弱アルカリ性を示します。" },
    { question: "ヨーグルト", answer: "酸性", explanation: "ヨーグルトは乳酸菌の働きで乳糖が分解され、乳酸が生成されるため酸性です。pHは4〜5程度です。" },
    { question: "シャンプー", answer: "酸性", explanation: "人の髪や頭皮は弱酸性なので、多くのシャンプーも弱酸性に調整されています。pHは5〜6程度です。" },
    { question: "ハンドソープ", answer: "アルカリ性", explanation: "皮脂や汚れを落とすため、ハンドソープは弱アルカリ性に作られています。" },
    { question: "洗濯洗剤", answer: "アルカリ性", explanation: "洗濯洗剤は汚れを分解するためにアルカリ性物質を含み、pH8〜10程度を示します。" },
    { question: "スポーツドリンク", answer: "酸性", explanation: "クエン酸やリンゴ酸を含むため酸性を示します。歯のエナメル質を溶かすことがあるので注意が必要です。" },
    { question: "炭酸水", answer: "酸性", explanation: "二酸化炭素が溶けて炭酸を生じるため酸性です。pHは約5です。" }
];

// ゲーム状態管理
let currentQuestion = 0;
let score = 0;
let gameQuestions = [];
let isAnswered = false;

// DOM要素の取得
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const resultScreen = document.getElementById('resultScreen');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const questionText = document.getElementById('questionText');
const questionNum = document.getElementById('questionNum');
const scoreDisplay = document.getElementById('score');
const characterFace = document.getElementById('characterFace');
const feedback = document.getElementById('feedback');
const feedbackText = document.getElementById('feedbackText');
const finalScore = document.getElementById('finalScore');
const resultMessage = document.getElementById('resultMessage');
const resultCharacter = document.getElementById('resultCharacter');
const resultTitle = document.getElementById('resultTitle');
const choiceButtons = document.querySelectorAll('.choice-button');

// 音声読み上げ機能（コールバック機能付き）
function speak(text, callback) {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 1.0;
        utterance.pitch = 1.2;
        
        // 🎯 喋り終わったら実行
        utterance.onend = () => {
            if (callback) {
                callback();
            }
        };
        
        // エラー時も実行
        utterance.onerror = () => {
            if (callback) {
                callback();
            }
        };
        
        speechSynthesis.speak(utterance);
    } else {
        // 音声が使えない環境
        if (callback) {
            setTimeout(callback, 500);
        }
    }
}

// 正解フィードバック
function showCorrectFeedback() {
    characterFace.textContent = '😊';
    characterFace.className = 'character-face correct';
    
    feedback.className = 'feedback correct';
    const explanation = gameQuestions[currentQuestion].explanation;
    feedbackText.innerHTML = `🎉 正解！すごいね！<br><span class="explanation">${explanation}</span>`;
    feedback.classList.remove('hidden');
    
    gameScreen.className = 'screen correct-bg';
    
    // 🎯 読み上げ完了時に次の問題に進む
    const readText = `正解！すごいね！${explanation}`;
    speak(readText, () => {
        currentQuestion++;
        showQuestion();
    });
}

// 不正解フィードバック
function showIncorrectFeedback(correctAnswer) {
    characterFace.textContent = '😅';
    characterFace.className = 'character-face incorrect';
    
    feedback.className = 'feedback incorrect';
    const explanation = gameQuestions[currentQuestion].explanation;
    feedbackText.innerHTML = `😔 残念！正解は「${correctAnswer}」だよ<br><span class="explanation">${explanation}</span>`;
    feedback.classList.remove('hidden');
    
    gameScreen.className = 'screen incorrect-bg';
    
    // 🎯 読み上げ完了時に次の問題に進む
    const readText = `残念！正解は${correctAnswer}だよ。${explanation}`;
    speak(readText, () => {
        currentQuestion++;
        showQuestion();
    });
}

// 結果表示
function showResult() {
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    finalScore.textContent = score;
    
    let message = '';
    let character = '';
    let title = '';
    
    if (score >= 9) {
        title = '🏆 パーフェクト博士！';
        character = '🥇';
        message = 'すごい！君は酸アル博士だ！！';
    } else if (score >= 7) {
        title = '🎖️ 酸アル上級者！';
        character = '🥈';
        message = 'とても良くできました！';
    } else if (score >= 5) {
        title = '📚 勉強家さん！';
        character = '🥉';
        message = 'なかなか良い成績だね！';
    } else if (score >= 3) {
        title = '🌱 成長中！';
        character = '😊';
        message = 'もう少し頑張ろう！';
    } else {
        title = '💪 挑戦者！';
        character = '😅';
        message = 'また挑戦してみてね！';
    }
    
    resultTitle.textContent = title;
    resultCharacter.textContent = character;
    resultMessage.textContent = message;
    
    speak(`${score}問正解！${message}`);
}

// ゲーム初期化
function initGame() {
    currentQuestion = 0;
    score = 0;
    isAnswered = false;
    gameQuestions = quizData.sort(() => Math.random() - 0.5).slice(0, 10);
    showQuestion();
}

// 問題を表示
function showQuestion() {
    if (currentQuestion >= gameQuestions.length) {
        showResult();
        return;
    }

    isAnswered = false;
    gameScreen.className = 'screen';
    feedback.classList.add('hidden');
    characterFace.textContent = '🤔';
    characterFace.className = 'character-face';

    const currentQ = gameQuestions[currentQuestion];
    questionText.textContent = currentQ.question;
    questionNum.textContent = currentQuestion + 1;
    scoreDisplay.textContent = score;

    choiceButtons.forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = '1';
    });

    speak(`第${currentQuestion + 1}問。${currentQ.question}は何性でしょう？`);
}

// 回答処理
function handleAnswer(answer) {
    if (isAnswered) return;
    isAnswered = true;

    const correctAnswer = gameQuestions[currentQuestion].answer;
    const isCorrect = answer === correctAnswer;

    choiceButtons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
    });

    if (isCorrect) {
        score++;
        showCorrectFeedback();
    } else {
        showIncorrectFeedback(correctAnswer);
    }
}

// 画面切り替え
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

// イベントリスナー設定
startButton.addEventListener('click', () => {
    showScreen(gameScreen);
    initGame();
});

restartButton.addEventListener('click', () => {
    showScreen(gameScreen);
    initGame();
});

choiceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (!isAnswered) {
            const answer = e.target.getAttribute('data-answer');
            handleAnswer(answer);
        }
    });
});

// タッチデバイス対応
choiceButtons.forEach(button => {
    button.addEventListener('touchstart', (e) => {
        if (!isAnswered) {
            const answer = e.target.getAttribute('data-answer');
            handleAnswer(answer);
        }
    }, { passive: false });
});

// ページ読み込み時
document.addEventListener('DOMContentLoaded', () => {
    speak('酸アルバトルへようこそ！液体の性質を当てるゲームです！');
});

// キーボード操作対応（PCでも遊べるように）
document.addEventListener('keydown', (e) => {
    // ゲーム画面が表示中で、かつ回答済みでない場合のみキー入力を受け付ける
    if (gameScreen.classList.contains('hidden') || isAnswered) return;
    
    switch(e.key) {
        case '1':
            handleAnswer('酸性');
            break;
        case '2':
            handleAnswer('中性');
            break;
        case '3':
            handleAnswer('アルカリ性');
            break;
    }
});
