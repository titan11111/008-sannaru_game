# 008-sannaru_game — 鉱物画像 有無一覧 & 生成プロンプト

全30種のうち **画像あり30 / なし0**（2026-07-25 取り込み完了）。  
保存名は `images/mN.webp`（512×512・黒背景）。

---

## 共通スタイル（全プロンプトの先頭に付ける）

```
Photorealistic still life of a single isolated gemstone or mineral specimen,
centered, studio product photography, soft key light from upper-left,
subtle specular highlights, sharp focus, high detail crystal facets or natural texture,
pure solid black background, no props, no stand, no jewelry setting, no text, no watermark,
transparent-ready edges, square 1024x1024 composition
```

**日本語メモ（指示用）**
- 1個だけ・中央配置・黒背景
- 実写っぽい商品撮影風（イラスト禁止）
- 台座・指輪・文字・透かしなし
- 既存の `m1.webp`（ルビー）`m7.webp`（ダイヤ）と同じトーン

---

## ✅ 画像あり（30）

| ID | 石 | ファイル | 備考 |
|---|---|---|---|
| m1 | ルビー | `m1.webp` | OK |
| m2 | サファイア | `m2.webp` | 2026-07-25 追加 |
| m3 | エメラルド | `m3.webp` | OK |
| m4 | トパーズ | `m4.webp` | OK |
| m5 | アメジスト | `m5.webp` | OK |
| m6 | アクアマリン | `m6.webp` | OK |
| m7 | ダイヤモンド | `m7.webp` | OK |
| m8 | ペリドット | `m8.webp` | OK |
| m9 | ガーネット | `m9.webp` | 2026-07-25 追加 |
| m10 | オパール | `m10.webp` | あり（約5KB・薄い。必要なら再生成） |
| m11 | ローズクォーツ | `m11.webp` | OK |
| m12 | ラピスラズリ | `m12.webp` | OK |
| m13 | 黒曜石 | `m13.webp` | OK |
| m14 | 琥珀 | `m14.webp` | OK |
| m15 | パイライト | `m15.webp` | 2026-07-25 追加 |
| m16 | ターコイズ | `m16.webp` | 2026-07-25 追加 |
| m17 | ムーンストーン | `m17.webp` | 2026-07-25 追加 |
| m18 | サンストーン | `m18.webp` | 2026-07-25 追加 |
| m19 | モルダバイト | `m19.webp` | 2026-07-25 追加 |
| m20 | アレキサンドライト | `m20.webp` | 2026-07-25 追加 |
| m21 | フローライト | `m21.webp` | 2026-07-25 追加 |
| m22 | スモーキークォーツ | `m22.webp` | 2026-07-25 追加 |
| m23 | シトリン | `m23.webp` | 2026-07-25 追加 |
| m24 | チャロアイト | `m24.webp` | 2026-07-25 追加 |
| m25 | ジェダイト（翡翠） | `m25.webp` | 2026-07-25 追加 |
| m26 | ビスマス結晶 | `m26.webp` | 2026-07-25 追加 |
| m27 | フォスフォフィライト | `m27.webp` | 2026-07-25 追加 |
| m28 | タイガーズアイ | `m28.webp` | 2026-07-25 追加 |
| m29 | ロードクロサイト | `m29.webp` | 2026-07-25 追加 |
| m30 | 水晶 | `m30.webp` | 2026-07-25 追加 |

---

## 個別プロンプト（共通スタイル + 下記）

### m2 サファイア
```
deep royal blue oval-cut sapphire gemstone, transparent corundum,
rich cobalt blue with subtle lighter zoning, brilliant facets,
photorealistic jewelry stone, black background
```

### m9 ガーネット
```
deep wine-red garnet crystal cluster, dodecahedral natural crystal faces,
dark burgundy to blood-red translucent mineral specimen,
photorealistic, black background
```

### m15 パイライト（黄鉄鉱）
```
metallic gold pyrite cubic crystal cluster, fool's gold,
shiny brass-yellow metal luster, sharp cube forms with striations,
photorealistic mineral specimen, black background
```

### m16 ターコイズ
```
sky-blue turquoise polished cabochon or rough nodule,
turquoise blue with brown matrix web veins,
opaque copper phosphate mineral, photorealistic, black background
```

### m17 ムーンストーン
```
milky translucent moonstone cabochon, adularescent blue-white sheen,
soft pearly glow like moonlight across the surface,
photorealistic feldspar gem, black background
```

### m18 サンストーン
```
warm orange-copper sunstone cabochon, sparkling aventurescence,
tiny glittering metallic platelets like sunlight inside translucent orange stone,
photorealistic, black background
```

### m19 モルダバイト
```
olive-green moldavite tektite, irregular wrinkled natural glass surface,
translucent bottle-green meteoritic glass specimen,
photorealistic, black background
```

### m20 アレキサンドライト
```
faceted alexandrite gemstone showing color-change,
teal-green to violet-red dual color suggestion in studio light,
rare chrysoberyl, brilliant cut, photorealistic, black background
```

### m21 フローライト
```
fluorite crystal cube with purple-to-green color zoning,
translucent cubic crystal specimen, soft fluorescence look,
photorealistic mineral, black background
```

### m22 スモーキークォーツ
```
smoky quartz hexagonal crystal point, translucent brown-gray smoke color,
clear crystal tip fading into smoky body, photorealistic, black background
```

### m23 シトリン
```
golden yellow citrine quartz crystal point or faceted gem,
warm honey to lemon yellow transparent quartz,
photorealistic, black background
```

### m24 チャロアイト
```
charoite polished stone slab, swirling lilac and violet fibrous marble pattern,
silky chatoyant purple silicate, photorealistic, black background
```

### m25 ジェダイト（翡翠）
```
imperial jadeite jade cabochon, deep translucent emerald-green nephrite/jadeite look,
smooth polished surface with subtle internal mottling,
East Asian gemstone aesthetic, photorealistic, black background
```

### m26 ビスマス結晶
```
iridescent bismuth hopper crystal, geometric stair-step cubic growth,
rainbow thin-film oxidation colors on metallic silver-pink structure,
photorealistic lab-grown looking mineral, black background
```

### m27 フォスフォフィライト
```
delicate mint-blue phosphophyllite crystal cluster,
pale aqua to seafoam translucent phosphate crystals,
fragile rare gem look, photorealistic, black background
```

### m28 タイガーズアイ
```
tiger's eye polished cabochon, golden-brown chatoyant silk bands,
cat's-eye optical effect across fibrous quartz,
photorealistic, black background
```

### m29 ロードクロサイト
```
rhodochrosite polished slice or cabochon, rose-pink banding (Inca rose),
concentric pink and white manganese carbonate patterns,
photorealistic, black background
```

### m30 水晶（ロッククリスタル）
```
clear colorless rock crystal quartz hexagonal prism with pyramid tip,
transparent pure SiO2 crystal point, sharp faces,
photorealistic, black background
```

---

## 取り込み手順（メモ）

1. 各画像を `images/mN.png`（または webp）で保存
2. 512×512 にリサイズ → WebP圧縮（既存と同程度・1枚十数〜50KB目安）
3. `index.html` の `MINERAL_IMAGES` に追記  
   例: `m2: 'images/m2.webp',`
4. プレイセット合計 3MB 以内を維持
5. 元の巨大PNGは削除（GitHub Pages / 3MB鉄則）

---

## 任意：品質が薄い候補の再生成

| ID | 石 | 理由 |
|---|---|---|
| m10 | オパール | ファイル約5KBで薄い。遊色（虹色）が弱い可能性 |
