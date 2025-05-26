# 雷震子遇難記 | Thunder God Adventure

## 📖 專案簡介

這是一個以台南歷史文化為背景的互動式解謎遊戲，改編自許丙丁的《小封神》作品。玩家將跟隨雷震子的腳步，走訪台南各大古蹟，解開謎題並了解在地文史。

## 🎮 遊戲特色

- **實境解謎**：結合台南真實地景的解謎遊戲
- **文史教育**：融合台南歷史文化與民俗傳說
- **互動故事**：豐富的角色對話與劇情發展
- **響應式設計**：支援手機與電腦瀏覽

## 🏛️ 遊戲場景

### 測試版內容
1. **萬福庵** - 第一回：與齊天大聖的初次相遇
2. **大天后宮** - 第二回：千里眼順風耳的考驗
3. **普濟殿** - 第三回：蜘蛛精的陷阱
4. **結局** - 故事收尾與和解

### 完整版規劃
5. **風神廟** - 第四回：萬年龜的秘密
6. **藥王廟** - 第五回：仙藥的求取
7. **大團圓** - 第六回：完整結局

## 🚀 線上遊玩

遊戲網址：https://zhulingru.github.io/thunder-god-adventure/

## 💻 技術架構

- **前端**：HTML5 + CSS3 + JavaScript (ES6)
- **資料格式**：JSON
- **部署平台**：GitHub Pages
- **版本控制**：Git

## 📁 專案結構

```
thunder-god-adventure/
├── index.html          # 主要遊戲頁面
├── style.css           # 樣式表（古典廟宇風格，響應式設計）
├── main.js             # 遊戲邏輯（章節渲染、謎題驗證、提示系統）
├── data/
│   └── gameData.json   # 遊戲資料（三回完整故事、謎題、對話分段格式）
├── images/             # 圖片資源
│   ├── wanfuan.png     # 第一回萬福庵場景圖
│   ├── puzzle1.png     # 第一回三寶殿匾額謎題圖
│   ├── datianhou.png   # 第二回大天后宮場景圖
│   ├── puzzle2.png     # 第二回媽祖謎題圖
│   ├── pujidian.png    # 第三回普濟殿場景圖
│   └── puzzle3.png     # 第三回池府王爺謎題圖
└── README.md           # 專案說明與開發歷程
```

## 🎯 開發原則與需求

### 核心開發理念
- **最小段落更新**：每次只修改最小必要的程式碼段落
- **可擴展性**：架構設計要能輕鬆添加新章節和功能
- **可彈性調整性**：程式碼結構要能快速適應需求變更
- **可維護性**：程式碼要清晰易懂，便於後續維護

### 內容設計原則
- **對話分段規範**：每個角色的話都要獨立成段，避免混雜在同一段落
- **角色標示清楚**：保留說話者標示，如「孫悟空說：」、「雷震子說：」
- **敘述對話分離**：純敘述部分保持完整，只分離角色對話
- **閱讀舒適度優先**：文字間距適當，段落層次分明

### 技術限制與規範
- **程式碼行數限制**：每個分支頁面程式碼控制在 1500 行以內
- **漸進式開發**：先完善第一回，再複製到其他回
- **模組化設計**：功能分離，便於獨立測試和修改
- **文檔同步更新**：每次更新都要記錄在 README 和 AI_NOTE

### 專案定位
- **測試專案**：為未來正式遊戲提供開發經驗
- **學習目標**：建立可重複使用的開發模式
- **技術驗證**：測試各種功能的可行性和最佳實踐

## 📝 開發歷程

### 2025-05-25

#### 初始化階段
- **建立基本架構**：HTML + CSS + JavaScript 基礎結構
- **設置 GitHub Pages**：完成線上部署和 Git 連動
- **實現第一回內容**：萬福庵的故事與謎題功能

#### 確立開發原則
- **最小段落更新**：每次只修改必要的程式碼段落
- **可擴展性**：架構設計便於添加新章節
- **可維護性**：程式碼清晰易懂
- **1500行限制**：控制每個檔案的複雜度
- **漸進式開發**：先完善第一回，再複製其他回

#### 介面框架建立
- **古典廟宇風格**：深色背景 + 金色文字設計
- **響應式佈局**：支援手機和電腦瀏覽
- **卡片式設計**：內容用半透明卡片包裝
- **CSS 變數系統**：便於統一管理顏色主題
- **互動效果**：按鈕懸停、輸入框焦點等

#### 技術決策記錄
- **純前端架構**：無後端依賴，適合 GitHub Pages
- **JSON 資料格式**：便於管理遊戲內容
- **模組化 CSS**：使用 CSS 變數和類別系統
- **文檔整合**：移除重複的 AI_NOTE.md，統一使用 README

#### 圖片系統開發
- **圖片顯示系統**：章節圖片 500x300px，謎題圖片 400x250px
- **佔位設計**：金色邊框，漸層背景，完美置中
- **響應式圖片**：手機自動調整尺寸，保持比例
- **AI 圖片生成**：提供詳細 prompt，用戶成功生成萬福庵場景圖和三寶殿匾額圖

#### 第一回內容完善
- **故事擴展**：從 3 段擴展到 17 段完整劇情
- **角色對話**：豐富雷震子與孫悟空的互動
- **背景設定**：封神戰爭、蓬萊仙島、贔屭失蹤事件
- **謎題改善**：情境化問題設計，三層提示系統
- **章節結尾**：解謎後完整劇情收尾和角色和解
- **流程優化**：「繼續冒險」按鈕自然銜接下一回

#### 需求調整
- **測試版範圍縮減**：從六回縮減為三回 + 結局
- **目標章節**：萬福庵 → 大天后宮 → 普濟殿 → 簡單結局
- **開發重點**：完整的三回劇情體驗，建立可複製的章節模式
- **手機優先設計**：主打手機實境解謎，玩家邊玩邊走訪古蹟

#### 文字排版優化
- **段落間距改善**：增加段落間距，解決文字密集問題
- **互動效果增強**：段落懸停時顯示金色邊框和淡背景
- **章節結尾美化**：專門的結尾區塊，包含「✦ 章節結尾 ✦」標題
- **響應式間距**：針對桌面、手機、小手機調整適當間距
- **閱讀體驗提升**：文字左對齊，更適合中文閱讀習慣
- **視覺層次優化**：改善整體可讀性和視覺舒適度

#### 對話分段優化
- **角色對話獨立**：每個角色的話都分成獨立段落，提升閱讀清晰度
- **說話者標示保留**：維持「孫悟空說：」、「雷震子說：」等標示
- **對話節奏改善**：玩家更容易跟上角色間的對話流程
- **敘述對話分離**：純敘述保持完整，只分離角色對話部分
- **閱讀流暢性**：避免長段落中混雜多個角色的話，減少閱讀困惑

#### 互動功能完善
- **進度條系統**：金色漸層進度條顯示遊戲進度（第X回/共三回）
- **章節切換優化**：完成謎題後自動滾動到頂部，確保玩家看到新章節
- **錯誤訊息改善**：答錯時顯示「哎呀！再觀察一下。」更友善的提示
- **完整劇情體驗**：三回完整故事線，從誤會到真相大白

#### 第二回開發完成
- **大天后宮章節**：千里眼順風耳的考驗，揭露真兇線索指向普濟殿
- **媽祖謎題**：「林默娘」答案，支援多種正確答案格式
- **劇情發展**：從萬福庵的誤會，到大天后宮獲得線索
- **圖片整合**：datianhou.png 和 puzzle2.png 場景圖片

#### 第三回開發完成
- **普濟殿最終章**：蜘蛛精對決，救回贔屭，真相大白
- **威靈王謎題**：融入池府王爺（陳文魁）的豐富歷史背景
- **歷史文化深度**：詳細介紹池夢彪與陳文魁兩位池府王爺的故事
- **完整結局**：雷震子洗刷冤屈，與孫悟空化敵為友

#### 章節開場示意圖系統
- **開場示意圖功能**：每章節開始前顯示600x400px開場圖片
- **三張開場圖**：T-Bike突襲、大天后宮會面、普濟殿夜襲
- **流程優化**：開場示意圖 → 點擊「開始章節」→ 正常故事內容
- **響應式設計**：桌面600x400px，手機自動調整比例

#### 測試版完成
- **三回完整內容**：萬福庵 → 大天后宮 → 普濟殿 → 測試版結局
- **圖片系統完整**：背景圖、章節圖、謎題圖、開場示意圖全部到位
- **自動滾動優化**：解謎後自動滾動到章節結尾，提升使用體驗
- **JSON語法修復**：修復第三回結尾文字缺少引號的語法錯誤

### 2025-05-26

#### 相機系統開發與測試

##### 需求分析與技術選型
- **專案背景確認**：實境走讀遊戲，玩家用手機在現實地點進行，正式版主題將是「瓦斯」
- **功能需求**：點擊拍照按鈕連動手機相機，拍攝指定物品，自動辨識物品是否符合要求，判斷謎題通過與否
- **技術要求**：純前端處理，照片不上傳到伺服器，保護隱私
- **測試目標**：辨識「杯子」物品
- **技術方案選擇**：TensorFlow.js + MobileNet（成熟穩定，文檔完整，辨識準確率85-95%）

##### 相機系統實作
- **gameData.json 修改**：將第一回謎題從文字輸入改為相機類型，答案設為["cup"]，移除提示功能
- **index.html 整合**：
  - 新增 TensorFlow.js 和 MobileNet 的 CDN
  - 新增相機介面元素（拍照按鈕、相機預覽、照片結果等）
  - 分離文字謎題和相機謎題的介面
- **main.js 功能開發**：
  - 整合 AI 模型載入邏輯
  - 新增相機功能（拍照、預覽、分析、重拍）
  - 實作物件辨識和謎題驗證邏輯
- **style.css 美化**：新增相機介面的美化樣式，包含響應式設計

##### 辨識系統優化
- **關鍵字擴展**：從單一 'cup' 擴展到包含 'mug', 'teacup', 'coffee', 'glass', 'tumbler', 'goblet', 'espresso', 'latte', 'cappuccino', 'beer', 'wine', 'water', 'drinking', 'beverage', 'container', 'vessel' 等杯子相關詞彙
- **除錯資訊增強**：
  - 在瀏覽器控制台顯示前3個辨識結果和信心度
  - 在介面上顯示辨識到的物品名稱
  - 失敗時顯示辨識到的前3個結果，幫助用戶理解 AI 看到了什麼
- **用戶體驗改善**：
  - 成功時顯示具體找到的物品名稱
  - 失敗時提供詳細的辨識結果回饋

##### 載入性能優化
- **問題識別**：MobileNet 模型約 16-20 MB，首次載入需要 10-30 秒，會阻塞整個遊戲啟動
- **優化策略**：改為遊戲資料優先載入，AI 模型在背景載入
- **實作改進**：
  - 遊戲資料立即載入（< 1 秒），玩家可立即開始遊戲
  - AI 模型在背景載入，完成後自動啟用相機功能
  - 相機按鈕狀態管理：載入中顯示「⏳ AI 模型載入中...」，完成後變為「📸 開始拍照」
- **用戶體驗提升**：從等待 20-30 秒變為立即開始，大幅改善首次載入體驗

##### 測試與調整
- **實際測試**：用戶成功測試相機系統，能夠辨識各種杯子類型
- **訊息客製化**：將成功訊息從通用的 `gameData.settings.correctMessage` 改為專門的「你成功找到了杯子！」
- **技術驗證**：確認 TensorFlow.js + MobileNet 方案在實際環境中運作良好

##### 開發成果
- **完整相機系統**：從拍照到辨識到回饋的完整流程
- **性能優化**：遊戲立即啟動，AI 模型背景載入
- **用戶友善**：詳細的除錯資訊和清楚的狀態提示
- **技術基礎**：為未來「瓦斯」主題的正式版建立了可重複使用的相機辨識框架

##### Git 提交記錄
- `實作相機系統：第一回謎題改為拍攝杯子`
- `改進相機辨識系統：擴展杯子關鍵字並加入除錯資訊`
- `優化載入策略：遊戲立即啟動，AI模型背景載入`
- `修改相機辨識成功訊息為「你成功找到了杯子！」`

## 🎯 開發計畫

### 測試版目標（三回 + 結局）
- [x] 第一回：萬福庵（內容完整，包含豐富故事、圖片、謎題和結尾）
- [x] 第二回：大天后宮（千里眼順風耳的考驗，揭露真兇線索）
- [x] 第三回：普濟殿（蜘蛛精的最終對決，救回贔屭）
- [x] 完整結局：真相大白，雷震子洗刷冤屈

### 技術完善
- [x] 介面框架（古典廟宇風格）
- [x] 完善所有章節內容和謎題
- [x] 建立章節切換機制
- [x] 優化使用者體驗（文字排版改善、進度條、自動滾動）
- [x] 完整三回劇情和結局
- [x] 相機系統（TensorFlow.js + MobileNet 物件辨識）

### 未來擴展（正式版）
- [ ] 擴展至完整六回
- [ ] 加入音效與背景音樂
- [ ] 實現多種謎題類型
- [ ] 加入成就系統

## 🤝 貢獻指南

本專案歡迎各種形式的貢獻：
- 🐛 回報 Bug
- 💡 提出新功能建議
- 📝 改善文檔
- 🎨 設計改善

## 📚 參考資料

- 許丙丁《小封神》原著
- 台南市文化資產資料
- 府城歷史古蹟導覽

## 🎨 AI 圖片生成 Prompt

### 萬福庵場景圖片 (`wanfuan.jpg`)
```
A traditional Taiwanese temple called "Wanfuan Temple" (萬福庵) in Tainan, Taiwan. Ancient Chinese architecture with red pillars, curved roof tiles, ornate decorations, and traditional lanterns. Warm golden lighting, atmospheric and mystical mood. The temple should look historic and sacred, with intricate wood carvings and traditional Chinese architectural details. Shot in cinematic style with rich colors and dramatic lighting. 500x300 pixels, landscape orientation.

Style: Traditional Chinese temple architecture, warm golden tones, atmospheric lighting, historic and sacred feeling.
```

### 三寶殿匾額圖片 (`puzzle1.png`)
```
A traditional Chinese temple plaque (匾額) with the characters "三寶殿" (San Bao Dian) written in elegant Chinese calligraphy. The plaque should be wooden with gold or red characters, hanging in a traditional temple interior. Include traditional decorative elements around the plaque like carved dragons, clouds, or floral patterns. The background should show part of a temple interior with red pillars and traditional decorations. Clear, readable Chinese characters are essential for the puzzle. 400x250 pixels, landscape orientation.

Style: Traditional Chinese calligraphy, temple interior, gold/red color scheme, ornate decorative elements, clear and readable text.
```

### 大天后宮場景圖片 (`datianhou.png`)
```
A majestic traditional Taiwanese temple called "Datianhou Temple" (大天后宮) in Tainan, Taiwan. Grand Chinese architecture with red pillars, golden decorations, curved roof tiles with dragon sculptures. The temple should be more magnificent than Wanfuan Temple, showing its status as Taiwan's first Mazu temple. Include traditional lanterns, incense burners, and ornate carvings. Evening or dusk lighting with warm golden glow. Atmospheric and sacred mood. 500x300 pixels, landscape orientation.

Style: Grand traditional Chinese temple architecture, red and gold color scheme, majestic and sacred atmosphere, warm lighting.
```

### 媽祖謎題圖片 (`puzzle2.png`)
```
A traditional Chinese temple interior showing Mazu (媽祖) statue or shrine in Datianhou Temple. The goddess Mazu should be depicted in traditional Chinese style with ornate robes, crown, and peaceful expression. Include traditional temple decorations, red pillars, golden ornaments, and incense. The image should convey the sacred nature of Taiwan's most important sea goddess. Clear details for puzzle context. 400x250 pixels, landscape orientation.

Style: Traditional Chinese religious art, temple interior, red and gold decorations, sacred and peaceful atmosphere.
```

### 普濟殿場景圖片 (`pujidian.png`)
```
A mysterious traditional Taiwanese temple called "Pujidian Temple" (普濟殿) in Tainan at night. Ancient Chinese architecture with darker, more mysterious atmosphere compared to other temples. Moonlight casting shadows, traditional lanterns providing dim lighting. The temple should look historic and slightly eerie, suitable for the final confrontation scene. Include stone lions, traditional roof tiles, and atmospheric fog or mist. 500x300 pixels, landscape orientation.

Style: Traditional Chinese temple architecture, nighttime scene, mysterious and atmospheric, moonlight and lantern lighting, slightly eerie mood.
```

### 池府王爺謎題圖片 (`puzzle3.png`)
```
A traditional Chinese temple shrine showing Chi Fu Wang Ye (池府王爺) deity statue or plaque in Pujidian Temple. The deity should be depicted in traditional Chinese style with royal robes and dignified expression, as he is known as the plague god and protector. Include traditional temple decorations, dark wood carvings, and atmospheric lighting. The character "池" should be visible or prominent for the puzzle. 400x250 pixels, landscape orientation.

Style: Traditional Chinese religious art, temple interior, dignified and powerful deity, dark wood and traditional decorations.
```

### 遊戲背景圖片 (`background.jpg`)
```
A panoramic view of ancient Tainan city at dusk, showing traditional Taiwanese temples and historic architecture in silhouette. Include multiple temple rooftops with curved tiles, traditional lanterns glowing softly, and a mystical atmosphere with stars beginning to appear in the twilight sky. The image should be suitable as a website background - not too busy or distracting, with darker tones that won't interfere with text readability. Atmospheric and cinematic style with warm golden and deep blue tones. 1920x1080 pixels, landscape orientation.

Style: Cinematic landscape, traditional Taiwanese architecture, dusk lighting, mystical atmosphere, suitable for website background use.
```

### 第一回開場示意圖 (`chapter1_intro.png`)
```
Thunder God (雷震子) riding a T-Bike near Wanfuan Temple in Tainan, suddenly being attacked by Monkey King (孫悟空) with his golden staff. Thunder God has blue-green skin, bird-like features, and wings on his back, looking surprised and defensive. Monkey King appears fierce and aggressive, emerging from a temple alley with his golden staff raised. Traditional Taiwanese temple architecture in the background with warm lighting. Dynamic action scene showing the moment of confrontation. 600x400 pixels, landscape orientation.

Style: Chinese mythology characters, dynamic action scene, traditional temple setting, dramatic lighting, cinematic composition.
```

### 第二回開場示意圖 (`chapter2_intro.png`)
```
Thunder God (雷震子) and Monkey King (孫悟空) standing together in front of the majestic Datianhou Temple, looking up at the two guardian deities - Thousand-Mile Eyes (千里眼) and Wind-Following Ears (順風耳). The guardian deities should be imposing figures with distinctive large eyes and ears respectively, positioned on either side of Mazu statue. The temple interior should be grand and ornate with red pillars, golden decorations, and traditional Chinese architectural details. Peaceful but tense atmosphere as they seek answers. 600x400 pixels, landscape orientation.

Style: Chinese temple interior, mythological characters meeting, grand architecture, red and gold color scheme, atmospheric lighting.
```

### 第三回開場示意圖 (`chapter3_intro.png`)
```
Thunder God (雷震子) and Monkey King (孫悟空) approaching Pujidian Temple at night, with a mysterious spider demon (蜘蛛精) lurking in the shadows. The spider demon should have a humanoid form with spider-like features, multiple eyes, and dark robes, partially hidden but menacing. The temple should look ancient and slightly eerie under moonlight with traditional lanterns casting long shadows. Tense atmosphere building up to the final confrontation. Stone lions and traditional architecture visible. 600x400 pixels, landscape orientation.

Style: Nighttime scene, mysterious and suspenseful atmosphere, traditional temple architecture, mythological creatures, dramatic shadows and lighting.
```

## 📄 授權

本專案採用 MIT 授權條款。

---

**開發者**：Zhulingru  
**最後更新**：2025-05-25
