# Yuina Yamaguchi — Portfolio

Personal portfolio site built with plain HTML / CSS / JS. No build tools, no frameworks, no external dependencies.

## GitHub Pages へのデプロイ手順

### 1. リポジトリを作成する

GitHub で新しいリポジトリを作成します。  
GitHub Pages でルート URL（`https://<username>.github.io/`）として公開したい場合は、リポジトリ名を **`<username>.github.io`** にしてください。  
サブパス（`https://<username>.github.io/<repo>/`）でよければ任意の名前で構いません。

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

1. リポジトリページの **Settings** タブを開く
2. 左サイドバーの **Pages** をクリック
3. **Source** を `Deploy from a branch` に設定
4. **Branch** を `main` / `(root)` に設定して **Save**

数分後、`https://<username>.github.io/<repo>/` でサイトが公開されます。

### 4. カスタムドメイン（任意）

独自ドメインを使う場合は **Custom domain** 欄にドメインを入力し、DNS に CNAME レコードを追加してください。

---

## ローカルで確認する

ビルド不要です。`index.html` をブラウザで直接開くか、簡易サーバーを使ってください。

```bash
# Python 3
python -m http.server 8080
# → http://localhost:8080
```

## TODO（公開前に埋めてください）

- `index.html` 内の `TODO:` コメントをすべて実際の内容に置き換える
- プロフィール写真を用意し `<img src="...">` の URL を更新する
- OGP 画像 URL（`og:image`）を設定する
- SNS リンクを追加する
- スキルセクションに実際のスキルを追加する
