# Yuina Yamaguchi — Portfolio

Personal portfolio site. Plain HTML / CSS / JS — no build tools, no frameworks, no external dependencies.

## GitHub Pages へのデプロイ手順

### 1. リポジトリを作成する

GitHub で新しいリポジトリを作成します。

- ルート URL（`https://<username>.github.io/`）で公開したい場合 → リポジトリ名を **`<username>.github.io`** にする
- サブパス（`https://<username>.github.io/<repo>/`）でよい場合 → 任意の名前で可

### 2. ファイルをプッシュする

```bash
git init
git add index.html style.css script.js README.md
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

### 3. GitHub Pages を有効にする

1. リポジトリの **Settings** タブを開く
2. 左サイドバーの **Pages** をクリック
3. **Source** → `Deploy from a branch`
4. **Branch** → `main` / `(root)` → **Save**

数分後、`https://<username>.github.io/<repo>/` でサイトが公開されます。

### 4. カスタムドメイン（任意）

**Custom domain** 欄にドメインを入力し、DNS に CNAME レコードを追加してください。

---

## ローカル確認

```bash
python -m http.server 8080
# → http://localhost:8080
```

## 公開前に埋めるべき TODO

- `index.html` 内の `TODO:` をすべて実際の内容に置き換える
- プロフィール写真を用意し `<img src="...">` の URL を更新する
- `og:image` に画像 URL を設定する
- SNS リンクを追加する
- スキルセクションに実際のスキルを追加する
