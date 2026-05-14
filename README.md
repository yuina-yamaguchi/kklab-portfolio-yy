# My Portfolio Site

A lightweight, dependency-free static portfolio site. Built with just `index.html`, `style.css`, and `script.js` — ready to deploy on GitHub Pages.

[日本語版はこちら](#概要)

---

## Overview

This is a personal portfolio template featuring:

- **Dark / Light theme toggle** with persistent preference
- **Japanese / English language switch** with persistent preference
- **Smooth scroll animations** using IntersectionObserver
- **Responsive design** for mobile and desktop
- **Accessible** — skip links, ARIA labels, focus states, reduced-motion support
- **Zero build steps** — just open in a browser or deploy to GitHub Pages

## Demo

Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy to GitHub Pages

1. Create a repository on GitHub  
   (name it `<username>.github.io` for root domain deployment)

2. Push the files:

```bash
git init
git add index.html style.css script.js README.md
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

3. Enable GitHub Pages:  
   Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)`

## Customization

Replace the `{{...}}` placeholders in `index.html` with your own information.

| Placeholder | Description |
|-------------|-------------|
| `{{NAME_JP}}` | Name (Japanese) |
| `{{NAME_EN}}` | Name (English) |
| `{{INITIALS}}` | Initials for logo/favicon (e.g., `KK`) |
| `{{HEADLINE_JP}}` | Tagline (Japanese) |
| `{{HEADLINE_EN}}` | Tagline (English) |
| `{{BIO_JP}}` | Bio (Japanese) |
| `{{BIO_EN}}` | Bio (English) |
| `{{PHOTO_URL}}` | Profile photo URL |
| `{{GITHUB_USERNAME}}` | GitHub username |
| `{{EMAIL}}` | Email address |
| `{{X_HANDLE}}` | X (Twitter) handle (without `@`) |

### Add Skills

Duplicate `<li class="badge ...">` elements in the `#skills` section.

- Languages → `badge-accent`
- Tools & Frameworks → `badge-accent2`
- Other → `badge-accent3`

### Add Projects

Duplicate `<article class="project-card">` in the `#projects` section.

### Add Experience

Duplicate `<li class="timeline-item">` in the `#experience` section.

### Change Accent Colors

Edit CSS custom properties in `style.css`:

```css
:root {
  --accent:   #6366f1; /* primary */
  --accent-2: #ec4899; /* secondary */
  --accent-3: #06b6d4; /* tertiary */
}
```

## File Structure

```
.
├── index.html   # Markup & content
├── style.css    # Styles, themes & animations
├── script.js    # Theme toggle, language switch, scroll animations
└── README.md    # This file
```

## Prompt

This site was generated with the following prompt. You can use it to recreate or extend the template:

```
Create a static portfolio site using only HTML, CSS, and Vanilla JS — no build tools or external dependencies.

Requirements:
- File structure: index.html, style.css, script.js, README.md only
- Deployable on GitHub Pages as-is
- Responsive design (mobile to desktop)
- Accessibility: skip links, ARIA attributes, keyboard focus, prefers-reduced-motion

Design:
- Dark mode default with light/dark toggle button
- CSS custom properties for theme colors
- Gradient hero section and accents
- Background decorative blobs (fixed, blurred circles)
- Scroll reveal animations via IntersectionObserver
- Fixed header with backdrop-filter blur

Features:
1. Theme toggle: dark/light switch, saved to localStorage, OS setting as fallback
2. Language toggle: JP/EN switch using data-i18n-jp / data-i18n-en attributes, saved to localStorage, browser language as fallback
3. Smooth scroll for navigation links
4. Scroll animations: add .visible to .reveal elements when intersecting

Sections:
1. Hero: profile photo, name (JP/EN), tagline (JP/EN), 2 CTA buttons
2. About: bio text (JP/EN)
3. Skills: categorized badges (Languages / Tools & Frameworks / Other) with color coding
4. Projects: grid cards with title, description, tech badges, GitHub link, Live link
5. Experience: timeline with year, role, organization
6. Contact: GitHub / Email / X(Twitter) links with SVG icons
7. Footer: copyright and GitHub repo link

Templating:
- Use {{PLACEHOLDER}} format for personal info so anyone can customize
- Include placeholder guide and deployment instructions in README

Technical notes:
- Use color-mix() for transparent colors
- Disable animations under prefers-reduced-motion
- Ensure :focus-visible visibility
- Wrap script.js in IIFE with 'use strict'
```

## License

MIT

---

## 概要

ビルドツール・外部依存ゼロの静的ポートフォリオサイトです。`index.html` / `style.css` / `script.js` の 3 ファイルで完結しており、GitHub Pages にそのまま公開できます。

## 機能

- **ダーク / ライト テーマ切り替え**（設定を保存）
- **日本語 / 英語 言語切り替え**（設定を保存）
- **スクロールアニメーション**（IntersectionObserver 使用）
- **レスポンシブデザイン**
- **アクセシビリティ対応**（スキップリンク、ARIA、フォーカス状態、リデュースモーション対応）

## GitHub Pages へのデプロイ手順

1. GitHub で新しいリポジトリを作成  
   （`https://<ユーザー名>.github.io/` として公開する場合は、リポジトリ名を **`<ユーザー名>.github.io`** にしてください）

2. ファイルをプッシュ：

```bash
git init
git add index.html style.css script.js README.md
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
git push -u origin main
```

3. GitHub Pages を有効化：  
   Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `(root)`

数分後、サイトが公開されます。

## プロフィールの編集方法

`index.html` 内の `{{...}}` プレースホルダを自分の情報に書き換えてください。

| プレースホルダ | 内容 |
|---|---|
| `{{NAME_JP}}` | 氏名（日本語） |
| `{{NAME_EN}}` | 氏名（英語） |
| `{{INITIALS}}` | イニシャル（例: `KK`）|
| `{{HEADLINE_JP}}` | キャッチコピー（日本語） |
| `{{HEADLINE_EN}}` | キャッチコピー（英語） |
| `{{BIO_JP}}` | 自己紹介（日本語） |
| `{{BIO_EN}}` | 自己紹介（英語） |
| `{{PHOTO_URL}}` | プロフィール写真の URL |
| `{{GITHUB_USERNAME}}` | GitHub ユーザー名 |
| `{{EMAIL}}` | メールアドレス |
| `{{X_HANDLE}}` | X (Twitter) ハンドル（`@` なし） |

### スキルの追加

`#skills` セクション内の `<li class="badge ...">` を複製して追加します。カテゴリに応じてクラスを使い分けてください。

- 言語系 → `badge-accent`
- ツール・フレームワーク系 → `badge-accent2`
- その他 → `badge-accent3`

### プロジェクトの追加

`#projects` セクション内の `<article class="project-card">` を複製して追加します。`{{REPO_URL}}` と `{{LIVE_URL}}` を実際の URL に書き換えてください。

### 経歴の追加

`#experience` セクション内の `<li class="timeline-item">` を複製して追加します。

### アクセントカラーの変更

`style.css` の `:root` と `[data-theme="light"]` 内の `--accent` / `--accent-2` / `--accent-3` を変更してください。

## プロンプト

このサイトは以下のプロンプトで生成されました。テンプレートの再現や拡張にご利用ください。

```
ビルドツールや外部フレームワークを一切使わず、HTML・CSS・Vanilla JS のみで静的ポートフォリオサイトを作成してください。

基本要件:
- ファイル構成は index.html / style.css / script.js / README.md のみ
- GitHub Pages にそのままデプロイできること
- レスポンシブ対応（モバイル〜デスクトップ）
- アクセシビリティ対応（スキップリンク、ARIA属性、キーボードフォーカス、prefers-reduced-motion）

デザイン:
- ダークモードをデフォルトとし、ライトモードへの切り替えボタンを設置
- CSS カスタムプロパティ（変数）でテーマ色を管理
- グラデーションを使用したヒーローセクションとアクセント
- 背景にぼやけた円形の装飾（blob）を固定配置
- スクロール時の reveal アニメーション（IntersectionObserver）
- ヘッダーは固定表示＋背景ぼかし（backdrop-filter）

機能:
1. テーマ切り替え: ダーク/ライトの切り替え。localStorage に保存。OS設定を初期値のフォールバックとする
2. 言語切り替え: 日本語/英語の切り替え。各要素に data-i18n-jp / data-i18n-en 属性を持たせ、ボタン切り替えで textContent を入れ替える。localStorage に保存。ブラウザ言語を初期値のフォールバックとする
3. スムーススクロール: ナビゲーションリンクで該当セクションへスムーススクロール
4. スクロールアニメーション: .reveal クラスの要素が画面に入ったら .visible を付与してフェードイン

セクション構成:
1. Hero: プロフィール写真、名前（日/英）、キャッチコピー（日/英）、CTAボタン×2
2. About: 自己紹介テキスト（日/英）
3. Skills: カテゴリ別（言語 / ツール・フレームワーク / その他）のバッジ表示。カテゴリごとに色分け
4. Projects: グリッドレイアウトのカード。プロジェクト名、説明、使用技術バッジ、GitHubリンク、Liveリンク
5. Experience: タイムライン形式の経歴・学歴。年、役職、組織名
6. Contact: GitHub / Email / X(Twitter) へのリンク（SVGアイコン付き）
7. Footer: コピーライトとGitHubリポジトリリンク

テンプレート化:
- 名前や連絡先などの個人情報は {{PLACEHOLDER}} 形式にして、誰でも自分の情報に置き換えられるようにする
- README にプレースホルダー一覧とカスタマイズ方法、GitHub Pages デプロイ手順を記載する

技術的な注意点:
- CSS は color-mix() を使用して透明度付きの色を生成
- prefers-reduced-motion: reduce ではアニメーションを無効化
- フォーカス可視性（:focus-visible）を確保
- script.js は即時実行関数（IIFE）で囲み 'use strict' を使用
```

## ライセンス

MIT
