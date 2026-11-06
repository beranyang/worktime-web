# worktime-web

上班時數填寫網頁（前端）。資料與權限檢查都在 Google Apps Script 後端，本儲存庫只放畫面。

- 不放任何密碼、權杖、員工資料或試算表 ID。
- 員工連結格式：`https://beranyang.github.io/worktime-web/?e=sbx#k=權杖`（`#` 後面不會送到 GitHub 主機）。
- `config.js`：後端網址（`sbx` 沙盒、`prod` 正式）。
