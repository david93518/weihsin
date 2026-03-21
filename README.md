# 點將家電腦伴唱機 北區維修服務/展示中心

點將家電腦伴唱機 北區維修服務/展示中心的官方網站，專營大台北地區點將家電腦伴唱機。提供家用、店家 KTV 規劃服務，從選機、安裝、伴唱機設備修理到維修保養，一次搞定。

## 技術規格

- **框架**：React 19 + TypeScript
- **建置工具**：Vite 6
- **樣式**：Tailwind CSS
- **路由**：React Router v7
- **圖示**：Lucide React

## 專案結構

```
├── App.tsx          # 主程式、導覽列、Footer、浮動按鈕
├── index.tsx        # 入口檔案
├── index.html       # HTML 模板
├── constants.tsx    # 店家資訊、服務項目、FAQ
├── vite.config.ts   # Vite 設定
├── pages/           # 頁面元件
│   ├── Home.tsx     # 首頁
│   ├── Services.tsx # 服務項目
│   ├── FAQ.tsx      # 常見問題
│   └── Contact.tsx  # 聯絡我們
```

## 開始使用

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

於瀏覽器開啟 `http://localhost:3000`（依 vite.config 為 port 3000）。

### 建置與預覽

```bash
npm run build    # 產生 dist 目錄
npm run preview  # 預覽建置結果
```

## 修改店家資訊

所有店家相關內容集中於 `constants.tsx`：

- `BUSINESS_INFO`：店名、電話、地址、營業時間
- `SERVICES`：服務項目與描述
- `FAQS`：常見問題

直接編輯該檔案即可更新網站內容。

## 注意事項

- 本專案為純前端，不包含後端或 API
- 請勿直接雙擊 `index.html` 開啟，需透過 `npm run dev` 啟動開發伺服器
- 建置後可將 `dist` 目錄部署至任何靜態網站託管服務（如 GitHub Pages、Vercel、Netlify）
- 若使用乾淨網址（`/services` 等）部署到靜態主機，需設定「所有路由回到 `index.html`」的 SPA rewrite 規則（本專案已在 `public/_redirects` 提供 Netlify/Cloudflare Pages 常見設定；其他主機請依平台文件設定）。

## 授權

Private - 點將家電腦伴唱機 北區維修服務/展示中心 版權所有
