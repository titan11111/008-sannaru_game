# 008-sannaru_game — 鉱物融合ラボ (Gem Alchemist)

## 概要
元素・物理条件を注入管A/B/Cに入れて融合し、実在鉱物を図鑑に集めるブラウザゲーム。

## 操作（iPhone想定）
1. 注入管をタップ → 「実在元素・物理条件」シート
2. 元素を選んで注入（2〜3本）
3. FUSE で融合
4. 図鑑タブで確認（**リロードで図鑑は0に戻る**）

## アセット
- 画像: `images/m1.webp`〜`m30.webp`（全30種・512×512。失敗作のみSVG）
- 音: `audio/*.m4a`（ishi-moment-long / ishi-moment / maou / seikai2 / fuseikai2 / levelup予備）
- 不採用: `field.m4a`（コードから参照しない）
- 3MB鉄則: プレイセット約2.98MB（画像0.66MB＋音声2.27MB＋HTML）
- デフォルト音量: BGM 0.16 / 失敗 0.18 / 発見 0.22 / SE 0.36

## 音の対応
| イベント | 音 |
|---|---|
| 待機・合成中BGM | ishi-moment-long.m4a（同一曲） |
| 新発見 | ishi-moment.m4a（BGM停止） |
| 既存成功 | seikai2.m4a → BGM継続/再開 |
| 失敗（不純） | maou.m4a（BGM停止。モーダル閉じでBGM再開） |
| 選択/クリア/チャージ | WebAudio短音 |

## 公開
- GitHub Pages: `https://titan11111.github.io/008-sannaru_game/`
