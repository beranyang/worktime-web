// Version: 2026.11.07_09.19
// 後端（Apps Script 網頁應用程式）網址。不是秘密：沒有員工專屬權杖的人呼叫只會得到「未授權」。
// ?e=sbx → 沙盒；沒有參數 → 正式（上線時填入正式主控的 /exec 網址）。
window.WT_CONFIG = {
  sbx: 'https://script.google.com/macros/s/AKfycbzw5eJT0nf-RJy5p2opunICbweBQJ0Ceth4NwXDsJssqKzY7ROnZj9v1PiaGq2V-Dr5dA/exec',
  prod: '',
  // 2026.11.07：「用 Google 帳號驗證」的登入小程式（以存取者身分執行，只取 Email）。空白＝不顯示這個按鈕。
  login: {
    sbx: 'https://script.google.com/macros/s/AKfycbzQj-Nnu13voLyiqbECYvs-VK1CjkiPlnqmgUWeeJUX5c3vSsjlEABW2AmF096mtMCYlg/exec',
    prod: '',
  },
};
