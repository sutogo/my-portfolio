# ポートフォリオ ロードマップ

> 最終更新: 2026-10-02 ／ ブランチ: `feature/update-2026-08`

## 公開する内容のルール

- 研究の主張は、本人の論文原稿で精査された範囲を上限とする（「世界初」「動的評価」などは書かない）
- 装置の写真・計測ソフトの画面は載せない
- 未投稿の論文、共同研究先、交渉中の案件、選考状況は書かない
- 本番 URL（`my-portfolio-eta-gilt-57.vercel.app`）は名刺の QR コードに使われているので変えない（Vercel のプロジェクト名変更・作り直しをしない）

## 2026-08〜10 に実施

- 氏名の漢字を修正（浩祐）
- WCB 2026 を実績化、日本機械学会九州学生会の優秀講演賞を追記
- Research を再構成（背景・課題・目的 → 特徴3点 → 構成図 → 結果の数値 → 展望・成果）
- Works に主力3件（TKA 術中支援システム／ADAS シミュレーション／学生フォーミュラ）
- セクションを 8 → 6 に（Tech Stack 削除、Vision を Research と About に統合）
- Skills をハードウェア先頭に並べ替え
- Hero を2カラムにして膝モデルを主役に（陰影付き）
- 全文の日英対応（英語モードで日本語の取り残しなし）、`<html lang>` の同期

## 未対応

- 所属の英語表記（`Department of Information and Systems Engineering` か、大学院は `Graduate School of Engineering` か）— 論文側で確定したら timeline に揃える
- `public/logo.svg` が 960KB（favicon 用途）
- OGP 画像がない（SNS でシェアしたときに画像が出ない）
- 型チェック・lint の CI がない（lint エラー 6 件が残存: KneeScene の `any` 等）
- PDF の CV ダウンロード、ライト／ダークモード切替
