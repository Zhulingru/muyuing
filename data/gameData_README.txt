【gameData.json 結構說明】

本檔案為遊戲主資料來源，包含標題、主題、全域設定、章節內容與結局。

---

1. title / subtitle / theme
   - 遊戲標題、副標題與主題風格。

2. settings
   - 全域訊息設定（如答對、答錯、提示、繼續按鈕文字等）。
   - 範例：
     correctMessage：答對時顯示訊息
     wrongMessage：答錯時顯示訊息
     noMoreHints：無更多提示時顯示
     continueButton：章節結束繼續按鈕

3. chapters（陣列）
   - 每個章節為一個物件，包含：
     id：章節唯一識別碼
     title：章節標題
     intro：章節開場文字
     protagonist：主角資訊（name/desc）
     introImage：章節開場圖片
     story：章節前半段故事（陣列）
     midStory：章節後半段故事（陣列）
     image：章節場景圖片
     puzzle：簡單謎題（物件，type/question/image/answer/hints）
     puzzle2：複雜謎題（物件，type/question/image/answer/hints/dragPuzzles）
     conclusion：章節結論與道具獲得（陣列）

   - puzzle.type 說明：
     number：數字填空題
     text：文字填空題
     choice：選擇題
     drag：拖拉互動題（puzzle2 專用）
     camera：拍照互動題

   - puzzle.answer：正確答案陣列（可多個）
   - puzzle.hints：提示陣列
   - puzzle2.dragPuzzles：拖拉題題組（每題含 prompt/options/answer）

4. ending
   - 遊戲結局內容，包含標題與故事陣列。

---

如需調整章節、謎題、道具等，請依上述結構編輯。 