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
2. 第二章：媽祖天后宮（信仰與歷史）
3. 第三章：蜂大咖啡（街區生活）
4. 第四章：大世界戲院（愛情轉折）
5. 第五章：西門町歷史地標（城市變遷）
6. 第六章：乖乖總公司（青春記憶）
7. 第七章：龍祥電影院（時代見證）
8. 第八章：台北電影公園（圓滿結局）

**謎題系統：**
- 簡單謎題：文字輸入、數字輸入、選擇題
- 複雜謎題：相機拍照（記錄重要時刻）

**道具系統：**
- 每章節一個主線道具，共8個道具 + 8張紙條，最終拼成完整信件

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
- 規劃完整的33張圖片清單：
  - 1張背景圖（台北電影公園/前瓦斯工廠）
  - 32張章節圖片（8章節×4種圖片：intro, scene, puzzle1, puzzle2）
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
- **資料格式**：JSON，支援8章節結構
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

### 2025-05-27 完整故事重構與社交媒體優化

#### 故事框架重新設計
**問題識別：**
- 測量師角色過於突兀，與愛情主線不搭配
- 缺乏完整的6章節故事架構
- 需要更連貫的時空穿越邏輯

**故事重構：**
- **第一章：鑰匙與穿越** - 現代嘻哈少年獲得神秘鑰匙穿越到1943年
- **第二章：命運的偏離** - 意外改變歷史，阿嬤錯過與阿公相遇的公車
- **第三章：蜂大咖啡的線索** - 在時髦咖啡廳幫助他們重新相遇
- **第四章：戲院的定情之物** - 發現遺失的情書，解開阿嬤的疑問
- **第五章：瓦斯工廠的秘密** - 深入了解阿公的工作和愛情信念
- **第六章：記憶的回聲** - 成功讓情書送達，見證求婚時刻

#### 故事改進亮點
- ✅ **移除突兀角色**：測量師角色，所有情節圍繞愛情主線
- ✅ **強化穿越邏輯**：少年意外改變歷史，必須修復命運
- ✅ **完善情書來龍去脈**：解釋為什麼阿嬤沒收到那封重要的信
- ✅ **六張紙條組成完整情書**：「等妳來看電影，紅線千里牽，相遇在最美的時光，未曾送達的思念，永恆的祝福，永不落幕的愛情」
- ✅ **瓦斯工廠背景呼應**：與現代阿公阿嬤的身份完美銜接

#### 完整6章節內容創作
**新的道具與紙條系統：**
1. 老電影票根 + 「等妳來看電影」
2. 紅繩手鍊 + 「紅線千里牽」
3. 咖啡杯墊 + 「相遇在最美的時光」
4. 舊藥袋 + 「未曾送達的思念」
5. 香灰瓶 + 「永恆的祝福」
6. 未放映膠卷 + 「永不落幕的愛情」

**雙謎題系統完善：**
- 每章包含：章節示意圖→前半段文本→簡單謎題→後半段劇情→複雜謎題→道具獲得
- 簡單謎題：文字/數字輸入（歷史知識、年份計算等）
- 複雜謎題：相機拍照（記錄重要時刻）

#### 圖片資源完整規劃
**新增24張圖片prompt：**
- 6章節 × 4張圖片（intro, scene, puzzle1, puzzle2）
- 涵蓋1943年西門町、蜂大咖啡、大世界戲院、瓦斯工廠等場景
- 統一復古電影風格，溫暖色調，懷舊氛圍

#### 社交媒體分享優化
**問題解決：**
- 手機分享時顯示舊的「雷震子遇難記」縮圖

**技術實作：**
- ✅ 新增完整的Open Graph標籤
- ✅ 新增SEO優化meta標籤
- ✅ 新增Twitter卡片支援
- ✅ 新增Favicon和Apple Touch Icon支援
- ✅ 創建images資料夾和縮圖設計指南

**分享資訊更新：**
- 標題：「西城之鑰：愛的時光漫遊」
- 描述：「穿越時空的愛情解謎遊戲，體驗1943年西門町的浪漫故事，幫助阿公阿嬤完成未完的愛情心願」
- 縮圖：需要上傳1200x630像素的og-image.jpg

#### 技術優化
- 進度條正確顯示6章節進度
- 雙謎題系統流暢運作
- 相機功能保持拍照即通過的用戶友好設計
- 完整的故事結構從現代醫院開始到現代醫院結束，形成完美閉環

#### GitHub版本管理
- Commit a2719a5：完整6章節故事重構
- Commit e80bb3e：Open Graph標籤和社交媒體優化
- 所有更新已成功推送到GitHub Pages

## 章節與考證資料結合紀錄

本遊戲的第一章、第三章、第五章、第八章，劇情與謎題已融入《考證資料參考.txt》中的史實內容：
- 章節故事會以角色對話、旁白等方式自然帶出史實。
- 這些章節的「簡單謎題」設計會根據史實包裝，例如選擇題、數字題、關鍵字填空等多元互動方式，讓玩家能從故事中獲得線索。
- 例：第一章會提到「百年前就有自來瓦斯，1911年開業」，謎題設計為「台灣最早自來瓦斯公司開業於哪個年代？」（選擇題，正確答案：1910年代）。

## 備註

- 圖片素材為AI生成，未來可能替換為實地拍攝照片
- 所有圖片尺寸建議：背景圖1920x1080，其他圖片800x600或類似比例
- 圖片風格以復古、懷舊、電影感為主調
- 社交媒體縮圖需要1200x630像素，設計指南已提供
- 遊戲現已具備完整的6章節愛情故事，可供完整遊玩體驗
