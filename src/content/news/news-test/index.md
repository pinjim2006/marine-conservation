---
title: "News Test — Markdown Reference"
date: 2026-04-30
summary: "測試檔：包含各種可渲染的 Markdown 範例"
author: "Test"
tags: ["test", "markdown"]
cover: "./ocean.jpg"
draft: true
---

# Heading 1

簡短段落示範。下一段會使用行間距。

## Heading 2

另一個段落，包含內嵌連結與強調：這是 **粗體**、這是 *斜體*、這是 **_粗斜體_**。內嵌程式碼範例：`const x = 42;`。

[外部連結](https://example.com) · [回到首頁](/)

### Heading 3

程式區塊（JavaScript）：

```js
// 範例程式碼
function greet(name) {
	console.log(`Hello, ${name}`);
}
greet('World');
```

程式執行範例（bash）：

```bash
npm run build
```

#### Heading 4

無序清單示範：

- 第一項
- 第二項
	- 嵌套子項目 1
	- 嵌套子項目 2
- 第三項

有序清單示範：

1. 第一
2. 第二
3. 第三

任務清單：

- [x] 已完成項目
- [ ] 未完成項目

##### Heading 5

表格示範：

| 欄位 A | 欄位 B |
|---|---:|
| 左對齊文字 | 右對齊數字 |
| a | 123 |

Horizontal rule 範例：

---

> 這是一個引用（blockquote），常用於強調或引述文字。

圖片示範（相對路徑）：

![海洋範例](./ocean.jpg)

內嵌 HTML（可用於自訂樣式或區塊）——Admonition / 提示框範例：

<div class="admonition info">
	<div class="admonition-title">Info</div>
	<p>這是資訊提示區塊，樣式由全域 CSS 提供（.admonition.info）。</p>
</div>

<div class="admonition success">
	<div class="admonition-title">Success</div>
	<p>這是成功提示。</p>
</div>

<div class="admonition warning">
	<div class="admonition-title">Warning</div>
	<p>這是警告提示，顯示警示色。</p>
</div>

<div class="admonition danger">
	<div class="admonition-title">Danger</div>
	<p>這是錯誤/危險提示。</p>
</div>

註腳示範：這裡有個註腳[^1]

[^1]: 這是註腳內容。

HTML raw 範例（細節元素）：

<details>
	<summary>更多資訊（點此展開）</summary>
	<p>這段內容放在 details 裡，會在支援的瀏覽器中可展開/收合。</p>
</details>

<!-- 結尾註記：此檔為測試/參考樣板，可自由修改或擴充 -->

