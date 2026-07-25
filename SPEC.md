# 008-sannaru_game — 鉱物融合ラボ (Gem Alchemist)

## 概要
元素・物理条件を注入管A/B/Cに入れて融合し、実在鉱物を図鑑に集めるブラウザゲーム。

## 操作（iPhone想定）
1. 注入管をタップ → 「実在元素・物理条件」シート
2. 元素を選んで注入（2〜3本）
3. FUSE で融合
4. 図鑑タブで確認（**リロードで図鑑は0に戻る**）

## アセット
- 画像: `images/mN.webp`（一部。無いIDはSVG）
- 音: `audio/*.m4a`（field / seikai2 / fuseikai2 / ishi-moment / levelup予備）
- 3MB鉄則: プレイセット約1.4MB

## 音の対応
| イベント | 音 |
|---|---|
| BGM | field.m4a |
| 新発見 | ishi-moment.m4a（BGM停止） |
| 既存成功 | seikai2.m4a |
| 失敗 | fuseikai2.m4a |
| 選択/クリア/チャージ | WebAudio短音 |

## 公開
- GitHub Pages: `https://titan11111.github.io/008-sannaru_game/`
