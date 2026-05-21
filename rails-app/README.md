# タスク管理アプリ

ReactとRuby on Railsで構築したシンプルなタスク管理Webアプリです。

---

## 技術スタック

| 役割             | 技術                        |
| ---------------- | --------------------------- |
| フロントエンド   | React / Chakra UI v3        |
| バックエンド     | Ruby on Rails 8 (APIモード) |
| データベース     | SQLite3                     |
| HTTPクライアント | Axios                       |
| アイコン         | Lucide React                |

---

## 機能

- タスクの作成・編集・削除
- タスクの完了/未完了の切り替え
- 期日の設定・表示
- メモの追加
- 期日順での並び替え（昇順/降順）
- 完了済みタスクの表示/非表示切り替え
- 期限切れタスクの赤色表示

---

## フォルダ構成

```
Desktop/
├── rails-app/        # フロントエンド（React）
│   └── src/
│       ├── api/
│       │   └── taskApi.js
│       ├── component/
│       │   ├── Task.jsx
│       │   ├── TaskDetailModal.jsx
│       │   ├── TaskEditModal.jsx
│       │   ├── TaskForm.jsx
│       │   ├── TaskList.jsx
│       │   └── TaskTable.jsx
│       ├── utils/
│       │   └── dateUtils.js
│       └── App.js
│
└── task-api/         # バックエンド（Rails）
    ├── app/
    │   ├── controllers/
    │   │   └── tasks_controller.rb
    │   └── models/
    │       └── task.rb
    └── config/
        ├── routes.rb
        └── initializers/
            └── cors.rb
```

---

## セットアップ

### 必要な環境

- Ruby 3.2.2
- Rails 8.x
- Node.js
- npm

### バックエンド（Rails）

```bash
cd ~/Desktop/task-api
bundle install
rails db:create db:migrate
rails server -p 3010
```

### フロントエンド（React）

```bash
cd ~/Desktop/rails-app
npm install
npm start
```

---

## 起動方法

アプリを使うには**毎回両方のサーバーを起動**する必要があります。

**ターミナル1（Rails）:**

```bash
cd ~/Desktop/task-api
rails server -p 3010
```

**ターミナル2（React）:**

```bash
cd ~/Desktop/rails-app
npm start
```

ブラウザで `http://localhost:3000` または `http://localhost:3001` にアクセスしてください。

---

## APIエンドポイント

| メソッド | パス       | 説明           |
| -------- | ---------- | -------------- |
| GET      | /tasks     | タスク一覧取得 |
| POST     | /tasks     | タスク作成     |
| PUT      | /tasks/:id | タスク更新     |
| DELETE   | /tasks/:id | タスク削除     |
