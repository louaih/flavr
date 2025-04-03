# DineWise 后端服务 / DineWise Backend 🍽️

这是 DineWise 项目的后端模块，基于 Node.js + Express 搭建，使用 Yelp Fusion API 提供餐厅搜索和详情功能。  
This is the backend service for the DineWise project, built with Node.js + Express and powered by the Yelp Fusion API.

---

## ✅ 已完成功能 / Features Completed

- 🔍 `/api/search`：搜索餐厅，支持位置、关键词、价格、评分筛选  
  `/api/search`: Search for restaurants with filters like location, keyword, price, and rating

- 📄 `/api/details/:id`：查看单个餐厅的详细信息  
  `/api/details/:id`: Fetch detailed information for a specific restaurant

---

## 🚀 使用说明 / Setup Instructions

### 1️⃣ 克隆项目 / Clone the repository

```bash
git clone https://github.com/<Jiawen-Bao>/dinewise-backend.git
cd dinewise-backend

2️⃣ 安装依赖 / Install dependencies

npm install

3️⃣ 配置 Yelp API 密钥 / Set up Yelp API key
创建 .env 文件，并添加以下内容：
Create a .env file and add the following line:

YELP_API_KEY=your_actual_yelp_api_key

4️⃣ 启动服务器 / Start the server

node server.js

 示例接口 / Example API Calls
搜索餐厅 / Search for restaurants:

http://localhost:3000/api/search?location=New York&term=sushi&price=2&rating=4

查看详情 / Get details:

http://localhost:3000/api/details/hdiuRS9sVZSMReZm4oV5SA

📁 项目结构 / Project Structure

dinewise-backend/
├── .env               # Yelp API 密钥（不上传） / Yelp API key (not committed)
├── server.js          # 后端入口 / Entry point
├── routes/
│   ├── search.js      # 搜索接口 / Search endpoint
│   └── details.js     # 详情接口 / Details endpoint
├── utils/
│   └── yelpApi.js     # Yelp API 请求封装 / API client wrapper
└── README.md          # 项目说明 / Project documentation

👨‍💻 作者 / Author
鲍嘉文（组内后端负责人）
Jiawen-Bao – Backend Lead of DineWise Team 


---

## ✅ 如何使用

1. 将这段复制粘贴到 `README.md`
2. 使用命令提交到 Git 仓库：

```bash
git add README.md
git commit -m "Add bilingual README for teammates"
git push
