let gameData;
let currentChapter = 0;
let currentHint = 0;
let currentPuzzlePhase = 1; // 1=簡單謎題, 2=複雜謎題
let mobileNetModel = null;
let cameraStream = null;

// ====== 遊戲主流程與資料載入 ======
// 優先載入遊戲資料，讓玩家可以立即開始
fetch('data/gameData.json')
  .then(response => response.json())
  .then(data => {
    gameData = data;
    console.log('遊戲資料載入完成');
    
    // 顯示遊戲簡介
    showGameIntroduction();
    
    // 在背景載入 AI 模型
    loadAIModel();
  })
  .catch(error => {
    console.error('遊戲資料載入失敗:', error);
  });

// 顯示遊戲簡介
function showGameIntroduction() {
  // 隱藏其他區域
  document.getElementById('chapter-intro-section').style.display = 'none';
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('puzzle-section').style.display = 'none';
  document.getElementById('ending-section').style.display = 'none';
  
  // 隱藏進度條
  document.querySelector('.progress-container').style.display = 'none';
  
  // 創建並顯示簡介區域
  const introSection = document.createElement('div');
  introSection.id = 'game-intro-section';
  introSection.className = 'content-card';
  
  // 添加簡介內容
  introSection.innerHTML = `
    <h2 class="chapter-title">${gameData.introduction.title}</h2>
    <div class="story-text">
      ${gameData.introduction.content.map(p => `<p>${p}</p>`).join('')}
    </div>
    <button id="start-game" class="btn">${gameData.introduction.startButton}</button>
  `;
  
  // 添加到遊戲容器
  document.getElementById('game-container').appendChild(introSection);
  
  // 添加開始遊戲按鈕事件
  document.getElementById('start-game').onclick = function() {
    // 移除簡介區域
    document.getElementById('game-intro-section').remove();
    // 顯示進度條
    document.querySelector('.progress-container').style.display = '';
    // 開始第一章
    renderChapter();
  };
}

// ====== AI 模型載入與相機狀態 ======
// 背景載入 AI 模型
async function loadAIModel() {
  try {
    console.log('開始載入 AI 模型...');
    mobileNetModel = await mobilenet.load();
    console.log('✅ AI 模型載入完成！相機功能已可使用');
    
    // 更新相機按鈕狀態
    updateCameraButtonStatus();
  } catch (error) {
    console.error('❌ AI 模型載入失敗:', error);
    mobileNetModel = null;
  }
}

// 更新相機按鈕狀態
function updateCameraButtonStatus() {
  const takePhotoBtn = document.getElementById('take-photo');
  if (takePhotoBtn) {
    if (mobileNetModel) {
      takePhotoBtn.textContent = '📸 開始拍照';
      takePhotoBtn.disabled = false;
    } else {
      takePhotoBtn.textContent = '⏳ AI 模型載入中...';
      takePhotoBtn.disabled = true;
    }
  }
}

// ====== 章節渲染與切換 ======
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
  currentPuzzlePhase = 1; // 重置為第一個謎題
  
  // 隱藏開場示意圖區域
  document.getElementById('chapter-intro-section').style.display = 'none';
  
  // 顯示主要內容
  document.getElementById('main-content').style.display = '';
  
  // 顯示故事內容（前半段）
  document.getElementById('story').innerHTML = chapter.story.map(p => `<p>${p}</p>`).join('');
  
  // 章節圖片
  if (chapter.image) {
    document.getElementById('chapter-image').innerHTML = `<img src="images/${chapter.image}" alt="章節場景" class="chapter-image">`;
  } else {
    document.getElementById('chapter-image').innerHTML = '';
  }

  // 顯示第一個謎題（簡單謎題）
  showCurrentPuzzle();

  // 結局區
  document.getElementById('ending-section').style.display = 'none';
}

function showCurrentPuzzle() {
  const chapter = gameData.chapters[currentChapter];
  let puzzle;
  
  if (currentPuzzlePhase === 1) {
    puzzle = chapter.puzzle; // 簡單謎題
    document.getElementById('puzzle-question').previousElementSibling.textContent = '謎題';
  } else {
    puzzle = chapter.puzzle2; // 複雜謎題
    document.getElementById('puzzle-question').previousElementSibling.textContent = '挑戰看看';
  }
  
  if (puzzle) {
    document.getElementById('puzzle-section').style.display = '';
    document.getElementById('puzzle-question').textContent = puzzle.question;
    if (puzzle.image) {
      document.getElementById('puzzle-image').innerHTML = `<img src="images/${puzzle.image}" alt="謎題圖片" class="puzzle-image">`;
      document.getElementById('puzzle-image').style.display = '';
    } else {
      document.getElementById('puzzle-image').style.display = 'none';
    }
    
    // 根據謎題類型顯示不同的介面
    if (puzzle.type === 'camera') {
      document.getElementById('text-puzzle').style.display = 'none';
      document.getElementById('drag-puzzle').style.display = 'none';
      document.getElementById('camera-puzzle').style.display = '';
      resetCameraInterface();
      updateCameraButtonStatus();
    } else if (puzzle.type === 'drag') {
      document.getElementById('text-puzzle').style.display = 'none';
      document.getElementById('camera-puzzle').style.display = 'none';
      document.getElementById('drag-puzzle').style.display = '';
      
      // 生成拖拉題介面
      const dragQuestionsDiv = document.getElementById('drag-questions');
      dragQuestionsDiv.innerHTML = '';
      
      puzzle.dragPuzzles.forEach((dragPuzzle, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'drag-question';
        questionDiv.innerHTML = `
          <h3>${index + 1}. ${dragPuzzle.prompt}</h3>
          <div class="drag-options" id="options-${index}">
            ${dragPuzzle.options.map(option => `
              <div class="drag-option" draggable="true" data-option="${option}">
                ${option}
              </div>
            `).join('')}
          </div>
          <div class="drag-answer" id="answer-${index}" data-answer="${dragPuzzle.answer[0]}"></div>
        `;
        dragQuestionsDiv.appendChild(questionDiv);
      });
      
      // 設置拖拉事件
      setupDragAndDrop();
    } else {
      document.getElementById('text-puzzle').style.display = '';
      document.getElementById('drag-puzzle').style.display = 'none';
      document.getElementById('camera-puzzle').style.display = 'none';
      document.getElementById('puzzle-answer').value = '';
      document.getElementById('hint').textContent = '';
      currentHint = 0;
      
      // 根據謎題類型設置輸入框類型
      const answerInput = document.getElementById('puzzle-answer');
      if (puzzle.type === 'number') {
        answerInput.type = 'number';
        answerInput.placeholder = '請輸入數字';
      } else {
        answerInput.type = 'text';
        answerInput.placeholder = '請輸入答案';
      }
    }
    
    document.getElementById('puzzle-feedback').textContent = '';
  } else {
    document.getElementById('puzzle-section').style.display = 'none';
  }
}

// 設置拖拉功能
function setupDragAndDrop() {
  const dragOptions = document.querySelectorAll('.drag-option');
  const dropZones = document.querySelectorAll('.drag-answer');
  
  dragOptions.forEach(option => {
    option.addEventListener('dragstart', handleDragStart);
    option.addEventListener('dragend', handleDragEnd);
  });
  
  dropZones.forEach(zone => {
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('dragleave', handleDragLeave);
    zone.addEventListener('drop', handleDrop);
  });
  
  // 提交拖拉題答案
  document.getElementById('submit-drag').onclick = function() {
    const chapter = gameData.chapters[currentChapter];
    const puzzle = chapter.puzzle2;
    let allCorrect = true;
    
    puzzle.dragPuzzles.forEach((dragPuzzle, index) => {
      const answerZone = document.getElementById(`answer-${index}`);
      const selectedOption = answerZone.querySelector('.drag-option');
      
      if (!selectedOption || selectedOption.dataset.option !== dragPuzzle.answer[0]) {
        allCorrect = false;
      }
    });
    
    if (allCorrect) {
      document.getElementById('drag-feedback').textContent = gameData.settings.correctMessage;
      if (currentPuzzlePhase === 1) {
        showPuzzleDiscovery();
        setTimeout(() => {
          proceedToSecondPuzzle();
        }, 1800);
      } else {
        setTimeout(() => {
          showChapterConclusion(chapter.conclusion);
        }, 1000);
      }
    } else {
      document.getElementById('drag-feedback').textContent = gameData.settings.wrongMessage;
    }
  };
}

// 拖拉事件處理函數
function handleDragStart(e) {
  e.target.classList.add('dragging');
  e.dataTransfer.setData('text/plain', e.target.dataset.option);
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
}

function handleDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
  e.preventDefault();
  const dropZone = e.currentTarget;
  dropZone.classList.remove('drag-over');
  
  // 清空答案區域
  dropZone.innerHTML = '';
  
  // 創建新的選項元素
  const option = document.createElement('div');
  option.className = 'drag-option';
  option.textContent = e.dataTransfer.getData('text/plain');
  option.dataset.option = e.dataTransfer.getData('text/plain');
  
  // 將選項添加到答案區域
  dropZone.appendChild(option);
}

// ====== 謎題顯示與互動邏輯 ======
// 提交答案
document.getElementById('submit-answer').onclick = function() {
  const chapter = gameData.chapters[currentChapter];
  let puzzle;
  
  if (currentPuzzlePhase === 1) {
    puzzle = chapter.puzzle;
  } else {
    puzzle = chapter.puzzle2;
  }
  
  const userAnswer = document.getElementById('puzzle-answer').value.trim();
  const correctAnswers = puzzle.answer.map(ans => ans.trim());
  
  if (correctAnswers.includes(userAnswer)) {
    document.getElementById('puzzle-feedback').textContent = gameData.settings.correctMessage;
    
    if (currentPuzzlePhase === 1) {
      // 新增：顯示「新發現」區塊
      showPuzzleDiscovery();
      // 第一個謎題完成，進入第二階段
      setTimeout(() => {
        proceedToSecondPuzzle();
      }, 1800);
    } else {
      // 第二個謎題完成，顯示結論
      setTimeout(() => {
        showChapterConclusion(chapter.conclusion);
      }, 1000);
    }
  } else {
    document.getElementById('puzzle-feedback').textContent = gameData.settings.wrongMessage;
  }
};

function proceedToSecondPuzzle() {
  const chapter = gameData.chapters[currentChapter];
  currentPuzzlePhase = 2;
  
  // 隱藏第一個謎題
  document.getElementById('puzzle-section').style.display = 'none';
  
  // 如果有後半段劇情，顯示它
  if (chapter.midStory) {
    const midStoryHtml = chapter.midStory.map(p => `<p>${p}</p>`).join('');
    const midStoryDiv = document.createElement('div');
    midStoryDiv.className = 'mid-story';
    midStoryDiv.innerHTML = midStoryHtml;
    document.getElementById('story').appendChild(midStoryDiv);
    
    // 滾動到新內容
    setTimeout(() => {
      midStoryDiv.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 500);
  }
  
  // 顯示第二個謎題
  setTimeout(() => {
    showCurrentPuzzle();
  }, 1500);
}

// 顯示提示
document.getElementById('show-hint').onclick = function() {
  const chapter = gameData.chapters[currentChapter];
  let puzzle;
  
  if (currentPuzzlePhase === 1) {
    puzzle = chapter.puzzle;
  } else {
    puzzle = chapter.puzzle2;
  }
  
  if (puzzle && puzzle.hints && currentHint < puzzle.hints.length) {
    document.getElementById('hint').textContent = puzzle.hints[currentHint];
    currentHint++;
  } else {
    document.getElementById('hint').textContent = gameData.settings.noMoreHints;
  }
};

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

// ====== 進度條更新 ======
// 更新進度條
function updateProgress() {
  const totalChapters = gameData.chapters.length; // 動態取得章節數量
  const currentProgress = ((currentChapter + 1) / totalChapters) * 100;
  
  document.getElementById('progress-fill').style.width = currentProgress + '%';
  
  // 動態生成進度文字
  const chapterNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  const currentChapterText = chapterNumbers[currentChapter] || (currentChapter + 1);
  const totalChapterText = chapterNumbers[totalChapters - 1] || totalChapters;
  
  document.getElementById('progress-text').textContent = `第${currentChapterText}章 / 共${totalChapterText}章`;
}

// ====== 相機功能與拍照互動 ======
// 重置相機介面
function resetCameraInterface() {
  document.getElementById('camera-preview').style.display = 'none';
  document.getElementById('photo-result').style.display = 'none';
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
  }
}

// 拍照按鈕事件
document.getElementById('take-photo').onclick = async function() {
  if (!mobileNetModel) {
    document.getElementById('puzzle-feedback').textContent = 'AI 模型尚未載入完成，請稍後再試';
    return;
  }
  
  try {
    // 請求相機權限
    cameraStream = await navigator.mediaDevices.getUserMedia({ 
      video: { 
        facingMode: 'environment' // 使用後置相機
      } 
    });
    
    const video = document.getElementById('camera-video');
    video.srcObject = cameraStream;
    
    document.getElementById('camera-preview').style.display = '';
    
  } catch (error) {
    console.error('無法存取相機:', error);
    document.getElementById('puzzle-feedback').textContent = '無法存取相機，請確認已允許相機權限';
  }
};

// 拍攝按鈕事件
document.getElementById('capture-photo').onclick = function() {
  const video = document.getElementById('camera-video');
  const canvas = document.getElementById('photo-canvas');
  const ctx = canvas.getContext('2d');
  
  // 設定 canvas 尺寸
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  
  // 將影像繪製到 canvas
  ctx.drawImage(video, 0, 0);
  
  // 隱藏相機預覽，顯示拍攝結果
  document.getElementById('camera-preview').style.display = 'none';
  document.getElementById('photo-result').style.display = '';
  
  // 停止相機
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
  }
  
  // 開始分析照片
  analyzePhoto(canvas);
};

// 取消拍照
document.getElementById('close-camera').onclick = function() {
  resetCameraInterface();
};

// 重新拍攝
document.getElementById('retake-photo').onclick = function() {
  resetCameraInterface();
  document.getElementById('take-photo').click();
};

// 分析照片
async function analyzePhoto(canvas) {
  const statusDiv = document.getElementById('analysis-status');
  statusDiv.textContent = '正在處理照片...';
  
  try {
    // 模擬處理時間
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 拍照即通過，不需要辨識特定物品
    statusDiv.textContent = '✅ 拍照成功！';
    document.getElementById('puzzle-feedback').textContent = '照片已記錄！';
    
    const chapter = gameData.chapters[currentChapter];
    
    if (currentPuzzlePhase === 1) {
      // 第一個謎題完成，進入第二階段
      setTimeout(() => {
        proceedToSecondPuzzle();
      }, 2000);
    } else {
      // 第二個謎題完成，顯示結論
      setTimeout(() => {
        showChapterConclusion(chapter.conclusion);
      }, 2000);
    }
    
  } catch (error) {
    console.error('處理照片時發生錯誤:', error);
    statusDiv.textContent = '❌ 處理失敗，請重新拍攝';
    document.getElementById('puzzle-feedback').textContent = '處理失敗，請重新拍攝';
  }
}

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

// ====== 新發現區塊顯示 ======
function showPuzzleDiscovery() {
  const discoveryDiv = document.createElement('div');
  discoveryDiv.className = 'puzzle-discovery';
  discoveryDiv.innerHTML = '<p>你正確解開謎題，獲得了新的線索，劇情將繼續推進！</p>';
  document.getElementById('story').appendChild(discoveryDiv);
  // 滾動到新內容
  setTimeout(() => {
    discoveryDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 300);
}

