# 西城之鑰：愛的時光漫遊

## 專案概述

這是一個以台北西門町為背景的時空穿越解謎遊戲，結合瓦斯工廠歷史、愛情故事與實境走讀體驗。玩家扮演現代少年，穿越時空修補祖父母的錯過愛情。

## 遊戲特色

- **主題**：瓦斯工廠 × 西門町記憶 × 愛情與時空穿越
- **形式**：章節式敘事 × 走讀實境 × 網頁互動
- **技術**：純前端實作，支援相機拍照功能
- **道具系統**：6個道具 + 6張紙條，最終拼成完整信件

## 開發歷程

### 2025-05-27 正式版開發啟動

#### 專案重新定位
- 從「雷震子遇難記」台南古蹟主題轉換為「西城之鑰：愛的時光漫遊」
- 確立瓦斯工廠 × 西門町 × 時空穿越愛情故事的核心主題
- 設計6章節×11地點的遊戲結構

#### 遊戲架構設計
**章節規劃：**
1. 第一章：西門紅樓（開場與導引）
2. 第二章：台北城古地圖、媽祖天后宮（城市轉變與現代化的代價）
3. 第三章：蜂大咖啡、大世界/國賓戲院（街區與生活的質地）
4. 第四章：沼澤地標牌、乖乖總公司（命運偏移與時間回收）
5. 第五章：將軍廟、慈雲寺（信仰與回聲）
6. 第六章：龍祥電影院、台北電影公園（記憶重組與真相回返）

**謎題系統：**
- 簡單謎題：文字輸入、數字輸入、拖拉排序
- 複雜謎題：相機拍照（改為拍照即通過，移除物品辨識）

**道具系統：**
- 老電影票根、紅繩手鍊、咖啡杯墊、舊藥袋、香灰瓶、未放映膠卷
- 每個道具附帶一張紙條，最終拼成阿公寫給阿嬤的完整信件

#### 第一章內容創作與實作
- 創作完整的時空穿越劇情（約700字）
- 現代少年穿越到1943年西門紅樓，遇見年輕阿公的故事
- 實作雙謎題系統：數字輸入謎題（昭和十八年=1943年）+ 相機拍照謎題
- 整合道具獲得機制：老電影票根 + 紙條①「等妳來看電影」

#### 技術優化
- 支援數字輸入類型謎題
- 相機系統改為拍照即通過，提升用戶體驗
- 保持AI模型背景載入，確保遊戲流暢度

#### 圖片資源規劃
- 規劃完整的26張圖片清單：
  - 1張背景圖（台北電影公園/前瓦斯工廠）
  - 24張章節圖片（6章節×4種圖片）
  - 1張最終謎底揭曉圖
- 清空舊圖片資源，準備符合新主題的圖片素材
- 更新背景圖片設定為瓦斯工廠主題

#### 遊戲標題與主題確立
- 正式確定遊戲標題：「西城之鑰：愛的時光漫遊」
- 建立瓦斯工廠歷史與愛情故事的完美結合
- 設計首尾呼應的敘事結構（從瓦斯工廠背景開始，到台北電影公園結束）

## 技術架構

- **前端**：HTML5 + CSS3 + JavaScript
- **AI功能**：TensorFlow.js + MobileNet（相機辨識）
- **資料格式**：JSON
- **響應式設計**：支援手機、平板、桌面裝置

## 下一步開發計畫

1. 準備26張圖片素材
2. 完成第二至六章的內容創作
3. 實作道具收集與展示系統
4. 開發最終信件拼圖功能
5. 優化手機端用戶體驗
6. 測試與調整遊戲平衡

## 圖片生成Prompt

### 背景圖片
**檔名：** `gas_factory_background.png`
**Prompt：** 
```
A vintage industrial landscape of Taipei Gas Factory (now Taipei Film Park), 1940s Taiwan. Dark atmospheric scene with old gas storage tanks, industrial pipes, brick buildings with weathered walls. Sepia-toned color palette with warm amber lighting. Nostalgic and melancholic mood, cinematic composition. Historical industrial heritage site, abandoned factory aesthetic with overgrown vegetation. Moody sky with soft clouds. Perfect for game background, high resolution, detailed textures.
```

### 第一章圖片

#### 1. 章節示意圖
**檔名：** `chapter1_intro.png`
**Prompt：**
```
Ximending Red House (西門紅樓) in modern Taipei, evening scene after rain. Wet brick pavement reflecting neon lights, young hip-hop dancers practicing in the distance, movie posters on walls, tourists walking around. A mysterious young man standing in front of the historic red brick building, holding an old key, looking contemplative. Atmospheric lighting with warm street lamps, nostalgic and mysterious mood. Cinematic composition, detailed architecture, realistic style.
```

#### 2. 章節場景圖
**檔名：** `chapter1_scene.png`
**Prompt：**
```
Interior of Ximending Red House in 1943, time-travel scene. Dimly lit corridor with faded vintage movie posters on walls, old wooden floors creaking. A young man in 1940s white shirt holding a movie ticket, standing under warm amber lighting. Sepia-toned atmosphere, nostalgic and romantic mood. Historical details like old film projector sounds, vintage architecture. Cinematic lighting, detailed period costume, realistic historical setting.
```

#### 3. 簡單謎題圖（昭和年號）
**檔名：** `chapter1_puzzle1.png`
**Prompt：**
```
Vintage Japanese calendar or document clearly showing "昭和十八年" (Showa 18) and "西元1943年" side by side, 1943 Taiwan under Japanese rule. Historical conversion chart or official document displaying both Japanese era year and Western calendar year. Old paper texture with traditional Japanese and Chinese typography, vintage stamps or seals. Warm sepia tones, aged paper effect. Clear readable text showing the year conversion, educational reference material style. Museum-quality historical artifact with visible year correlation.
```

#### 4. 複雜謎題圖（拍照紀念）
**檔名：** `chapter1_puzzle2.png`
**Prompt：**
```
Vintage 1940s camera or photography scene, young man wanting to take a commemorative photo. Old-fashioned camera equipment, perhaps a box camera or early film camera. Warm nostalgic lighting, sepia tones. Romantic and sentimental mood, capturing precious memories. Historical photography equipment, detailed vintage design, soft focus background. Artistic composition emphasizing the importance of preserving memories.
```

### 第二章圖片

#### 1. 章節示意圖
**檔名：** `chapter2_intro.png`
**Prompt：**
```
1943 Taipei city street scene, traditional wooden houses mixed with early modernization signs. A middle-aged surveyor in blue traditional Chinese robe holding an old map, standing on stone-paved streets. Background shows traditional architecture transitioning to modern infrastructure. Warm sepia tones, historical atmosphere. Cinematic composition showing urban transformation, detailed period clothing and architecture. Nostalgic mood capturing the moment between tradition and modernity.
```

#### 2. 章節場景圖
**檔名：** `chapter2_scene.png`
**Prompt：**
```
Close-up scene of a surveyor unrolling an ancient Taipei city map, 1943 setting. Detailed vintage map showing streets, rivers, and important buildings including planned gas factory location and Mazu temple. Hands pointing at specific locations on the map. Warm amber lighting, aged paper texture, traditional Chinese calligraphy on the map. Historical documentary style, detailed cartography, sepia-toned atmosphere. Educational and contemplative mood.
```

#### 3. 簡單謎題圖（台北城建造）
**檔名：** `chapter2_puzzle1.png`
**Prompt：**
```
Historical document or stone tablet showing "光緒八年" (8th year of Guangxu era), related to Taipei city construction in 1882. Traditional Chinese calligraphy, aged stone or paper texture. Official government document style from Qing Dynasty period. Warm sepia tones, museum artifact quality. Clear readable Chinese characters, historical authenticity. Educational reference material style, detailed traditional typography.
```

#### 4. 複雜謎題圖（古地圖拍照）
**檔名：** `chapter2_puzzle2.png`
**Prompt：**
```
Vintage surveying scene, 1940s camera positioned to photograph an ancient Taipei city map. Historical cartography equipment, measuring tools, and old maps spread on a wooden table. Warm nostalgic lighting, sepia tones. Documentary photography style, capturing the importance of preserving historical records. Detailed vintage surveying instruments, aged paper textures. Scholarly and historical preservation mood.
```

## 專案連結

- GitHub倉庫：https://github.com/Zhulingru/muyuing.git
- 遊戲主題：瓦斯工廠歷史 × 西門町記憶 × 時空穿越愛情

### 2025-05-27 第二章開發與圖片資源

#### 第二章內容實作
- 完成第二章「城市轉變與現代化的代價」完整內容設計
- 新增測量師角色與台北城古地圖主題
- 設計數字謎題：台北城建造年份（1882年，光緒八年）
- 設計相機謎題：拍攝古地圖記錄
- 新增道具：紅繩手鍊 + 紙條②「紅線千里牽」

#### 系統更新與優化
- 更新進度條系統：顯示「第一章/共六章」，進度條16.67%
- 確認背景圖片就位並正常顯示
- 成功推送第二章內容到GitHub

#### 圖片資源規劃完成
- 完成第二章4張圖片的AI生成prompt設計
- 章節示意圖：1943年台北街景與測量師場景
- 章節場景圖：古地圖展開與指點場景
- 簡單謎題圖：光緒八年歷史文件展示
- 複雜謎題圖：古地圖拍照記錄場景
- 所有prompt已整合到README圖片生成區段

#### 遊戲邏輯優化與問題修正
- 修正進度條顯示錯誤：移除舊的第三章資料，現在正確顯示2章節
- 實作雙謎題系統：簡單謎題→後半劇情→複雜謎題→結論道具
- 優化昭和年號謎題圖片prompt：加入「西元1943年」對照，讓玩家能直接從圖片找到答案
- 完善第一、二章的劇情結構：前半劇情→簡單謎題→後半劇情→複雜謎題→道具獲得

## 備註

- 圖片素材為AI生成，未來可能替換為實地拍攝照片
- 所有圖片尺寸建議：背景圖1920x1080，其他圖片800x600或類似比例
- 圖片風格以復古、懷舊、電影感為主調
