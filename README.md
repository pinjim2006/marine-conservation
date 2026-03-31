## 🛠️ 環境快速安裝指南 (針對全新電腦)

如果你是第一次參與網頁開發，請按照以下三個步驟完成環境配置：

### 第一步：安裝 Node.js 24
Node.js 是執行本專案的核心環境。
1. 前往 [Node.js 官方網站](https://nodejs.org/)。
2. 下載 **Node.js 24** 的安裝程式 (建議選擇 Windows Installer `.msi`)。
3. 執行安裝程式，一律點擊「Next」直到完成。
4. **重要：** 安裝完成後，請**重新啟動**你的終端機 (PowerShell 或 CMD) 或 VS Code。

> **驗證安裝：** 在終端機輸入 `node -v`，若顯示 `v24.x.x` 即代表成功。

### 第二步：下載專案並進入目錄
請將專案下載 (或從 GitHub Clone) 到你的電腦，並使用終端機進入該資料夾：
```bash
cd marine-conservation
```

### 第三步：安裝必要套件 (Dependencies)
由於專案使用了最新的 Astro 6 與 Tailwind 整合包，請執行以下指令來自動安裝所有相依工具：

```Bash
npm install --legacy-peer-deps
```

### 啟動與預覽
安裝完成後，輸入以下指令啟動開發環境：
```bash
npm run dev
```
---

# default README for Astro Starter Kit: Basics
# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
