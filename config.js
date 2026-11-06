// Version: 2026.11.06_21.57
// 後端（Apps Script 網頁應用程式）網址。不是秘密：沒有員工專屬權杖的人呼叫只會得到「未授權」。
// ?e=sbx → 沙盒；沒有參數 → 正式（上線時填入正式主控的 /exec 網址）。
window.WT_CONFIG = {
  sbx: 'https://script.google.com/macros/s/AKfycbzw5eJT0nf-RJy5p2opunICbweBQJ0Ceth4NwXDsJssqKzY7ROnZj9v1PiaGq2V-Dr5dA/exec',
  prod: '',
};
