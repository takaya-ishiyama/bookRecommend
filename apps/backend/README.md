## データベース操作

- ローカルは database/pg-data にマウントされているからデータベースを完全削除するときは消す
- sqlx migrate run
- sqlx database drop

### memo

- cargo fmt でフォーマットの修正が出来る
- cargo clippy --fix を使うと自動で直してくれる。
