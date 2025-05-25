let gameData;
let currentChapter = 0;
let currentHint = 0;

// 讀取 JSON 資料
fetch('data/gameData.json')
  .then(response => response.json())
  .then(data => {
    gameData = data;
    renderChapter();
  });

// 開始章節按鈕事件
document.getElementById('start-chapter').onclick = function() {
  startChapter();
};

function renderChapter() {
  const chapter = gameData.chapters[currentChapter];
  document.getElementById('game-title').textContent = gameData.title;
  document.getElementById('chapter-title').textContent = chapter.title;
  
  // 更新進度條
  updateProgress();
  
  // 顯示章節開場示意圖
  showChapterIntro(chapter);
}

function showChapterIntro(chapter) {
  // 隱藏其他區域
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('puzzle-section').style.display = 'none';
  document.getElementById('ending-section').style.display = 'none';
  
  // 顯示開場示意圖區域
  document.getElementById('chapter-intro-section').style.display = '';
  
  // 設置開場示意圖
  if (chapter.introImage) {
    document.getElementById('chapter-intro-image').innerHTML = `<img src="images/${chapter.introImage}" alt="章節開場示意圖" class="chapter-image">`;
  }
  
  // 設置開場文字
  document.getElementById('chapter-intro-text').innerHTML = `<p>${chapter.intro}</p>`;
  
  // 滾動到頂部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function startChapter() {
  const chapter = gameData.chapters[currentChapter];
  
  // 隱藏開場示意圖區域
  document.getElementById('chapter-intro-section').style.display = 'none';
  
  // 顯示主要內容
  document.getElementById('main-content').style.display = '';
  
  // 顯示故事內容
  document.getElementById('story').innerHTML = chapter.story.map(p => `<p>${p}</p>`).join('');
  
  // 章節圖片
  if (chapter.image) {
    document.getElementById('chapter-image').innerHTML = `<img src="images/${chapter.image}" alt="章節場景" class="chapter-image">`;
  } else {
    document.getElementById('chapter-image').innerHTML = '';
  }

  // 謎題區
  if (chapter.puzzle) {
    document.getElementById('puzzle-section').style.display = '';
    document.getElementById('puzzle-question').textContent = chapter.puzzle.question;
    if (chapter.puzzle.image) {
      document.getElementById('puzzle-image').innerHTML = `<img src="images/${chapter.puzzle.image}" alt="謎題圖片" class="puzzle-image">`;
      document.getElementById('puzzle-image').style.display = '';
    } else {
      document.getElementById('puzzle-image').style.display = 'none';
    }
    document.getElementById('puzzle-answer').value = '';
    document.getElementById('hint').textContent = '';
    document.getElementById('puzzle-feedback').textContent = '';
    currentHint = 0;
  } else {
    document.getElementById('puzzle-section').style.display = 'none';
  }

  // 結局區
  document.getElementById('ending-section').style.display = 'none';
}

// 提交答案
document.getElementById('submit-answer').onclick = function() {
  const chapter = gameData.chapters[currentChapter];
  const userAnswer = document.getElementById('puzzle-answer').value.trim();
  const correctAnswers = chapter.puzzle.answer.map(ans => ans.trim());
  if (correctAnswers.includes(userAnswer)) {
    document.getElementById('puzzle-feedback').textContent = gameData.settings.correctMessage;
    
    // 顯示章節結尾
    if (chapter.conclusion) {
      setTimeout(() => {
        showChapterConclusion(chapter.conclusion);
      }, 1000);
    } else {
      setTimeout(() => {
        nextChapter();
      }, 1000);
    }
  } else {
    document.getElementById('puzzle-feedback').textContent = gameData.settings.wrongMessage;
  }
};

// 顯示提示
document.getElementById('show-hint').onclick = function() {
  const chapter = gameData.chapters[currentChapter];
  if (chapter.puzzle && chapter.puzzle.hints && currentHint < chapter.puzzle.hints.length) {
    document.getElementById('hint').textContent = chapter.puzzle.hints[currentHint];
    currentHint++;
  } else {
    document.getElementById('hint').textContent = gameData.settings.noMoreHints;
  }
};

function nextChapter() {
  currentChapter++;
  if (currentChapter < gameData.chapters.length) {
    renderChapter();
    // 滾動到頁面頂部，讓玩家看到新章節
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    showEnding();
  }
}

function showChapterConclusion(conclusion) {
  // 隱藏謎題區域
  document.getElementById('puzzle-section').style.display = 'none';
  
  // 顯示章節結尾
  const conclusionHtml = conclusion.map(p => `<p>${p}</p>`).join('');
  const conclusionDiv = document.createElement('div');
  conclusionDiv.className = 'chapter-conclusion';
  conclusionDiv.innerHTML = conclusionHtml;
  document.getElementById('story').appendChild(conclusionDiv);
  
  // 滾動到章節結尾位置
  setTimeout(() => {
    conclusionDiv.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }, 500);
  
  // 添加繼續按鈕
  setTimeout(() => {
    const continueBtn = document.createElement('button');
    continueBtn.textContent = gameData.settings.continueButton;
    continueBtn.className = 'btn';
    continueBtn.style.marginTop = '1.5rem';
    continueBtn.onclick = () => nextChapter();
    
    document.getElementById('story').appendChild(continueBtn);
  }, 2000);
}

function showEnding() {
  // 隱藏所有其他區域
  document.getElementById('chapter-intro-section').style.display = 'none';
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('puzzle-section').style.display = 'none';
  
  // 顯示結局區域
  document.getElementById('ending-section').style.display = '';
  document.getElementById('ending-title').textContent = gameData.ending.title;
  document.getElementById('ending-story').innerHTML = gameData.ending.story.map(p => `<p>${p}</p>`).join('');
  
  // 滾動到頂部顯示結局
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}



// 更新進度條
function updateProgress() {
  const totalChapters = gameData.chapters.length; // 動態取得章節數量
  const currentProgress = ((currentChapter + 1) / totalChapters) * 100;
  
  document.getElementById('progress-fill').style.width = currentProgress + '%';
  
  // 動態生成進度文字
  const chapterNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  const currentChapterText = chapterNumbers[currentChapter] || (currentChapter + 1);
  const totalChapterText = chapterNumbers[totalChapters - 1] || totalChapters;
  
  document.getElementById('progress-text').textContent = `第${currentChapterText}回 / 共${totalChapterText}回`;
}

