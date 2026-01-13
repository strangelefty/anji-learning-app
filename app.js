// 小学1年生 漢字データベース（80字）
const kanjiData = [
  // 数字（11字）
  { kanji: "一", onyomi: ["イチ"], kunyomi: ["ひと(つ)"], strokes: 1, category: "数字", strokePaths: [{ path: "M 15 50 H 85", type: "horizontal" }] },
  { kanji: "二", onyomi: ["ニ"], kunyomi: ["ふた(つ)"], strokes: 2, category: "数字", strokePaths: [{ path: "M 20 35 H 80", type: "horizontal" }, { path: "M 15 65 H 85", type: "horizontal" }] },
  { kanji: "三", onyomi: ["サン"], kunyomi: ["み(つ)"], strokes: 3, category: "数字", strokePaths: [{ path: "M 25 25 H 75", type: "horizontal" }, { path: "M 20 50 H 80", type: "horizontal" }, { path: "M 15 75 H 85", type: "horizontal" }] },
  { kanji: "四", onyomi: ["シ"], kunyomi: ["よ(つ)", "よん"], strokes: 5, category: "数字", strokePaths: [{ path: "M 20 20 V 80", type: "vertical" }, { path: "M 20 20 H 80", type: "horizontal" }, { path: "M 80 20 V 80", type: "vertical" }, { path: "M 35 40 L 50 55 L 65 40", type: "bend" }, { path: "M 20 80 H 80", type: "horizontal" }] },
  { kanji: "五", onyomi: ["ゴ"], kunyomi: ["いつ(つ)"], strokes: 4, category: "数字", strokePaths: [{ path: "M 20 20 H 80", type: "horizontal" }, { path: "M 50 20 V 50", type: "vertical" }, { path: "M 25 50 H 75 L 70 75", type: "bend" }, { path: "M 20 80 H 80", type: "horizontal" }] },
  { kanji: "六", onyomi: ["ロク"], kunyomi: ["む(つ)"], strokes: 4, category: "数字", strokePaths: [{ path: "M 50 15 L 52 18", type: "dot" }, { path: "M 20 35 H 80", type: "horizontal" }, { path: "M 35 45 L 20 80", type: "diagonal" }, { path: "M 55 45 L 80 80", type: "diagonal" }] },
  { kanji: "七", onyomi: ["シチ"], kunyomi: ["なな(つ)"], strokes: 2, category: "数字", strokePaths: [{ path: "M 20 30 H 80", type: "horizontal" }, { path: "M 55 15 L 50 50 L 25 85", type: "bend" }] },
  { kanji: "八", onyomi: ["ハチ"], kunyomi: ["や(つ)"], strokes: 2, category: "数字", strokePaths: [{ path: "M 45 20 L 15 80", type: "diagonal" }, { path: "M 55 20 L 85 80", type: "diagonal" }] },
  { kanji: "九", onyomi: ["キュウ"], kunyomi: ["ここの(つ)"], strokes: 2, category: "数字", strokePaths: [{ path: "M 35 20 L 35 55 L 80 65", type: "bend" }, { path: "M 60 15 L 25 85", type: "diagonal" }] },
  { kanji: "十", onyomi: ["ジュウ"], kunyomi: ["とお"], strokes: 2, category: "数字", strokePaths: [{ path: "M 15 50 H 85", type: "horizontal" }, { path: "M 50 15 V 85", type: "vertical" }] },
  { kanji: "百", onyomi: ["ヒャク"], kunyomi: [], strokes: 6, category: "数字", strokePaths: [{ path: "M 20 20 H 80", type: "horizontal" }, { path: "M 25 35 V 80", type: "vertical" }, { path: "M 25 35 H 75", type: "horizontal" }, { path: "M 75 35 V 80", type: "vertical" }, { path: "M 35 55 H 65", type: "horizontal" }, { path: "M 25 80 H 75", type: "horizontal" }] },

  // 方向（7字）
  { kanji: "上", onyomi: ["ジョウ"], kunyomi: ["うえ", "あ(げる)"], strokes: 3, category: "方向", strokePaths: [{ path: "M 50 15 V 65", type: "vertical" }, { path: "M 25 40 H 75", type: "horizontal" }, { path: "M 20 80 H 80", type: "horizontal" }] },
  { kanji: "下", onyomi: ["カ", "ゲ"], kunyomi: ["した", "さ(げる)"], strokes: 3, category: "方向", strokePaths: [{ path: "M 20 20 H 80", type: "horizontal" }, { path: "M 50 20 V 85", type: "vertical" }, { path: "M 30 50 L 32 53", type: "dot" }] },
  { kanji: "左", onyomi: ["サ"], kunyomi: ["ひだり"], strokes: 5, category: "方向", strokePaths: [{ path: "M 45 15 L 20 45", type: "diagonal" }, { path: "M 20 30 H 75", type: "horizontal" }, { path: "M 30 50 H 80", type: "horizontal" }, { path: "M 55 50 V 85", type: "vertical" }, { path: "M 35 70 H 75", type: "horizontal" }] },
  { kanji: "右", onyomi: ["ウ", "ユウ"], kunyomi: ["みぎ"], strokes: 5, category: "方向", strokePaths: [{ path: "M 25 20 H 75", type: "horizontal" }, { path: "M 55 20 L 25 55", type: "diagonal" }, { path: "M 30 55 H 80", type: "horizontal" }, { path: "M 55 55 V 85", type: "vertical" }, { path: "M 35 72 H 75", type: "horizontal" }] },
  { kanji: "中", onyomi: ["チュウ"], kunyomi: ["なか"], strokes: 4, category: "方向", strokePaths: [{ path: "M 25 25 V 75", type: "vertical" }, { path: "M 25 25 H 75", type: "horizontal" }, { path: "M 75 25 V 75", type: "vertical" }, { path: "M 50 15 V 85", type: "vertical" }] },
  { kanji: "入", onyomi: ["ニュウ"], kunyomi: ["い(る)", "はい(る)"], strokes: 2, category: "方向", strokePaths: [{ path: "M 45 20 L 30 85", type: "diagonal" }, { path: "M 55 35 L 75 85", type: "diagonal" }] },
  { kanji: "出", onyomi: ["シュツ"], kunyomi: ["で(る)", "だ(す)"], strokes: 5, category: "方向", strokePaths: [{ path: "M 50 10 V 45", type: "vertical" }, { path: "M 30 25 V 55", type: "vertical" }, { path: "M 30 55 H 70", type: "horizontal" }, { path: "M 70 25 V 55", type: "vertical" }, { path: "M 50 55 V 90", type: "vertical" }] },

  // 自然（11字）
  { kanji: "山", onyomi: ["サン"], kunyomi: ["やま"], strokes: 3, category: "自然", strokePaths: [{ path: "M 50 15 V 85", type: "vertical" }, { path: "M 20 45 V 85", type: "vertical" }, { path: "M 80 45 V 85", type: "vertical" }] },
  { kanji: "川", onyomi: ["セン"], kunyomi: ["かわ"], strokes: 3, category: "自然", strokePaths: [{ path: "M 25 20 L 25 85", type: "vertical" }, { path: "M 50 15 L 50 85", type: "vertical" }, { path: "M 75 25 L 75 85", type: "vertical" }] },
  { kanji: "水", onyomi: ["スイ"], kunyomi: ["みず"], strokes: 4, category: "自然", strokePaths: [{ path: "M 50 10 V 90", type: "vertical" }, { path: "M 20 35 L 50 50", type: "diagonal" }, { path: "M 50 50 L 20 85", type: "diagonal" }, { path: "M 50 50 L 80 85", type: "diagonal" }] },
  { kanji: "火", onyomi: ["カ"], kunyomi: ["ひ"], strokes: 4, category: "自然", strokePaths: [{ path: "M 25 45 L 27 48", type: "dot" }, { path: "M 75 45 L 73 48", type: "dot" }, { path: "M 40 20 L 25 85", type: "diagonal" }, { path: "M 60 20 L 75 85", type: "diagonal" }] },
  { kanji: "木", onyomi: ["モク", "ボク"], kunyomi: ["き"], strokes: 4, category: "自然", strokePaths: [{ path: "M 15 35 H 85", type: "horizontal" }, { path: "M 50 10 V 90", type: "vertical" }, { path: "M 50 50 L 20 85", type: "diagonal" }, { path: "M 50 50 L 80 85", type: "diagonal" }] },
  { kanji: "林", onyomi: ["リン"], kunyomi: ["はやし"], strokes: 8, category: "自然", strokePaths: [{ path: "M 10 35 H 45", type: "horizontal" }, { path: "M 28 15 V 85", type: "vertical" }, { path: "M 28 50 L 12 75", type: "diagonal" }, { path: "M 28 50 L 44 75", type: "diagonal" }, { path: "M 55 35 H 90", type: "horizontal" }, { path: "M 72 15 V 90", type: "vertical" }, { path: "M 72 50 L 56 80", type: "diagonal" }, { path: "M 72 50 L 88 80", type: "diagonal" }] },
  { kanji: "森", onyomi: ["シン"], kunyomi: ["もり"], strokes: 12, category: "自然", strokePaths: [{ path: "M 30 25 H 70", type: "horizontal" }, { path: "M 50 10 V 50", type: "vertical" }, { path: "M 50 35 L 35 50", type: "diagonal" }, { path: "M 50 35 L 65 50", type: "diagonal" }, { path: "M 10 60 H 35", type: "horizontal" }, { path: "M 22 50 V 90", type: "vertical" }, { path: "M 22 70 L 12 85", type: "diagonal" }, { path: "M 22 70 L 32 85", type: "diagonal" }, { path: "M 65 60 H 90", type: "horizontal" }, { path: "M 78 50 V 90", type: "vertical" }, { path: "M 78 70 L 68 85", type: "diagonal" }, { path: "M 78 70 L 88 85", type: "diagonal" }] },
  { kanji: "田", onyomi: ["デン"], kunyomi: ["た"], strokes: 5, category: "自然", strokePaths: [{ path: "M 20 20 V 80", type: "vertical" }, { path: "M 20 20 H 80", type: "horizontal" }, { path: "M 80 20 V 80", type: "vertical" }, { path: "M 50 20 V 80", type: "vertical" }, { path: "M 20 50 H 80", type: "horizontal" }] },
  { kanji: "土", onyomi: ["ド", "ト"], kunyomi: ["つち"], strokes: 3, category: "自然", strokePaths: [{ path: "M 20 35 H 80", type: "horizontal" }, { path: "M 50 15 V 80", type: "vertical" }, { path: "M 15 80 H 85", type: "horizontal" }] },
  { kanji: "石", onyomi: ["セキ"], kunyomi: ["いし"], strokes: 5, category: "自然", strokePaths: [{ path: "M 30 20 H 75", type: "horizontal" }, { path: "M 55 20 L 25 55", type: "diagonal" }, { path: "M 25 55 V 80", type: "vertical" }, { path: "M 25 80 H 75", type: "horizontal" }, { path: "M 75 55 V 80", type: "vertical" }] },
  { kanji: "空", onyomi: ["クウ"], kunyomi: ["そら", "あ(く)"], strokes: 8, category: "自然", strokePaths: [{ path: "M 50 10 L 52 13", type: "dot" }, { path: "M 35 20 L 30 35", type: "diagonal" }, { path: "M 65 20 L 70 35", type: "diagonal" }, { path: "M 20 35 H 80", type: "horizontal" }, { path: "M 25 50 V 85", type: "vertical" }, { path: "M 25 50 H 75", type: "horizontal" }, { path: "M 75 50 V 85", type: "vertical" }, { path: "M 25 85 H 75", type: "horizontal" }] },

  // 時間（4字）
  { kanji: "日", onyomi: ["ニチ", "ジツ"], kunyomi: ["ひ", "か"], strokes: 4, category: "時間", strokePaths: [{ path: "M 25 15 V 85", type: "vertical" }, { path: "M 25 15 H 75", type: "horizontal" }, { path: "M 75 15 V 85", type: "vertical" }, { path: "M 25 50 H 75", type: "horizontal" }] },
  { kanji: "月", onyomi: ["ゲツ", "ガツ"], kunyomi: ["つき"], strokes: 4, category: "時間", strokePaths: [{ path: "M 30 15 V 85 L 70 85", type: "bend" }, { path: "M 30 15 H 70", type: "horizontal" }, { path: "M 70 15 V 75", type: "vertical" }, { path: "M 30 50 H 70", type: "horizontal" }] },
  { kanji: "年", onyomi: ["ネン"], kunyomi: ["とし"], strokes: 6, category: "時間", strokePaths: [{ path: "M 35 15 L 30 30", type: "diagonal" }, { path: "M 20 30 H 80", type: "horizontal" }, { path: "M 50 30 V 90", type: "vertical" }, { path: "M 25 50 H 75", type: "horizontal" }, { path: "M 30 65 H 70", type: "horizontal" }, { path: "M 20 80 H 80", type: "horizontal" }] },
  { kanji: "夕", onyomi: ["セキ"], kunyomi: ["ゆう"], strokes: 3, category: "時間", strokePaths: [{ path: "M 35 20 L 25 75", type: "diagonal" }, { path: "M 75 20 L 40 75", type: "diagonal" }, { path: "M 55 45 L 60 60", type: "diagonal" }] },

  // 人・体（12字）
  { kanji: "人", onyomi: ["ジン", "ニン"], kunyomi: ["ひと"], strokes: 2, category: "人・体", strokePaths: [{ path: "M 50 15 L 20 85", type: "diagonal" }, { path: "M 45 45 L 80 85", type: "diagonal" }] },
  { kanji: "大", onyomi: ["ダイ", "タイ"], kunyomi: ["おお(きい)"], strokes: 3, category: "人・体", strokePaths: [{ path: "M 15 35 H 85", type: "horizontal" }, { path: "M 50 15 L 20 85", type: "diagonal" }, { path: "M 50 35 L 80 85", type: "diagonal" }] },
  { kanji: "小", onyomi: ["ショウ"], kunyomi: ["ちい(さい)", "こ"], strokes: 3, category: "人・体", strokePaths: [{ path: "M 50 10 V 90", type: "vertical" }, { path: "M 25 40 L 27 55", type: "dot" }, { path: "M 75 40 L 73 55", type: "dot" }] },
  { kanji: "子", onyomi: ["シ", "ス"], kunyomi: ["こ"], strokes: 3, category: "人・体", strokePaths: [{ path: "M 25 25 H 75 L 30 60", type: "bend" }, { path: "M 50 25 V 85", type: "vertical" }, { path: "M 25 60 H 75", type: "horizontal" }] },
  { kanji: "女", onyomi: ["ジョ"], kunyomi: ["おんな"], strokes: 3, category: "人・体", strokePaths: [{ path: "M 55 15 L 25 55 L 75 80", type: "bend" }, { path: "M 50 45 L 80 15", type: "diagonal" }, { path: "M 20 80 H 80", type: "horizontal" }] },
  { kanji: "男", onyomi: ["ダン", "ナン"], kunyomi: ["おとこ"], strokes: 7, category: "人・体", strokePaths: [{ path: "M 20 15 V 45", type: "vertical" }, { path: "M 20 15 H 80", type: "horizontal" }, { path: "M 80 15 V 45", type: "vertical" }, { path: "M 50 15 V 45", type: "vertical" }, { path: "M 20 45 H 80", type: "horizontal" }, { path: "M 50 45 V 90", type: "vertical" }, { path: "M 25 65 H 75", type: "horizontal" }] },
  { kanji: "口", onyomi: ["コウ", "ク"], kunyomi: ["くち"], strokes: 3, category: "人・体", strokePaths: [{ path: "M 25 20 V 80", type: "vertical" }, { path: "M 25 20 H 75", type: "horizontal" }, { path: "M 75 20 V 80 H 25", type: "bend" }] },
  { kanji: "目", onyomi: ["モク"], kunyomi: ["め"], strokes: 5, category: "人・体", strokePaths: [{ path: "M 25 15 V 85", type: "vertical" }, { path: "M 25 15 H 75", type: "horizontal" }, { path: "M 75 15 V 85", type: "vertical" }, { path: "M 25 42 H 75", type: "horizontal" }, { path: "M 25 65 H 75", type: "horizontal" }] },
  { kanji: "耳", onyomi: ["ジ"], kunyomi: ["みみ"], strokes: 6, category: "人・体", strokePaths: [{ path: "M 30 20 H 70", type: "horizontal" }, { path: "M 30 20 V 85", type: "vertical" }, { path: "M 30 40 H 75", type: "horizontal" }, { path: "M 30 60 H 75", type: "horizontal" }, { path: "M 70 40 V 60", type: "vertical" }, { path: "M 30 85 H 70", type: "horizontal" }] },
  { kanji: "手", onyomi: ["シュ"], kunyomi: ["て"], strokes: 4, category: "人・体", strokePaths: [{ path: "M 20 25 H 80", type: "horizontal" }, { path: "M 25 50 H 75", type: "horizontal" }, { path: "M 50 15 V 90", type: "vertical" }, { path: "M 20 75 H 80", type: "horizontal" }] },
  { kanji: "足", onyomi: ["ソク"], kunyomi: ["あし", "た(りる)"], strokes: 7, category: "人・体", strokePaths: [{ path: "M 25 15 V 45", type: "vertical" }, { path: "M 25 15 H 75", type: "horizontal" }, { path: "M 75 15 V 45", type: "vertical" }, { path: "M 25 30 H 75", type: "horizontal" }, { path: "M 25 45 H 75", type: "horizontal" }, { path: "M 50 45 V 90", type: "vertical" }, { path: "M 20 70 H 80", type: "horizontal" }] },
  { kanji: "力", onyomi: ["リョク", "リキ"], kunyomi: ["ちから"], strokes: 2, category: "人・体", strokePaths: [{ path: "M 55 15 L 25 70 L 50 85", type: "bend" }, { path: "M 75 25 L 40 85", type: "diagonal" }] },

  // 生物（5字）
  { kanji: "犬", onyomi: ["ケン"], kunyomi: ["いぬ"], strokes: 4, category: "生物", strokePaths: [{ path: "M 15 35 H 85", type: "horizontal" }, { path: "M 50 15 L 20 85", type: "diagonal" }, { path: "M 50 35 L 80 85", type: "diagonal" }, { path: "M 70 25 L 72 28", type: "dot" }] },
  { kanji: "虫", onyomi: ["チュウ"], kunyomi: ["むし"], strokes: 6, category: "生物", strokePaths: [{ path: "M 25 20 V 65", type: "vertical" }, { path: "M 25 20 H 75", type: "horizontal" }, { path: "M 50 20 V 65", type: "vertical" }, { path: "M 75 20 V 65", type: "vertical" }, { path: "M 25 65 H 75", type: "horizontal" }, { path: "M 50 65 V 90", type: "vertical" }] },
  { kanji: "花", onyomi: ["カ"], kunyomi: ["はな"], strokes: 7, category: "生物", strokePaths: [{ path: "M 25 15 H 40", type: "horizontal" }, { path: "M 32 15 V 35", type: "vertical" }, { path: "M 60 15 H 75", type: "horizontal" }, { path: "M 68 15 V 35", type: "vertical" }, { path: "M 50 35 L 25 60 L 35 90", type: "bend" }, { path: "M 50 35 L 75 75", type: "diagonal" }, { path: "M 45 60 L 55 75", type: "diagonal" }] },
  { kanji: "草", onyomi: ["ソウ"], kunyomi: ["くさ"], strokes: 9, category: "生物", strokePaths: [{ path: "M 25 15 H 40", type: "horizontal" }, { path: "M 32 15 V 30", type: "vertical" }, { path: "M 60 15 H 75", type: "horizontal" }, { path: "M 68 15 V 30", type: "vertical" }, { path: "M 20 35 H 80", type: "horizontal" }, { path: "M 50 35 V 90", type: "vertical" }, { path: "M 25 55 H 75", type: "horizontal" }, { path: "M 30 70 H 70", type: "horizontal" }, { path: "M 20 85 H 80", type: "horizontal" }] },
  { kanji: "生", onyomi: ["セイ", "ショウ"], kunyomi: ["い(きる)", "う(まれる)"], strokes: 5, category: "生物", strokePaths: [{ path: "M 35 15 L 30 35", type: "diagonal" }, { path: "M 20 35 H 80", type: "horizontal" }, { path: "M 50 25 V 90", type: "vertical" }, { path: "M 25 55 H 75", type: "horizontal" }, { path: "M 15 85 H 85", type: "horizontal" }] },

  // 色（3字）
  { kanji: "赤", onyomi: ["セキ"], kunyomi: ["あか"], strokes: 7, category: "色", strokePaths: [{ path: "M 20 20 H 80", type: "horizontal" }, { path: "M 50 20 V 50", type: "vertical" }, { path: "M 25 35 H 75", type: "horizontal" }, { path: "M 25 50 H 75", type: "horizontal" }, { path: "M 50 50 V 90", type: "vertical" }, { path: "M 50 65 L 25 90", type: "diagonal" }, { path: "M 50 65 L 75 90", type: "diagonal" }] },
  { kanji: "青", onyomi: ["セイ"], kunyomi: ["あお"], strokes: 8, category: "色", strokePaths: [{ path: "M 20 15 H 80", type: "horizontal" }, { path: "M 50 15 V 35", type: "vertical" }, { path: "M 20 35 H 80", type: "horizontal" }, { path: "M 30 50 V 90", type: "vertical" }, { path: "M 30 50 H 70", type: "horizontal" }, { path: "M 70 50 V 90", type: "vertical" }, { path: "M 30 70 H 70", type: "horizontal" }, { path: "M 30 90 H 70", type: "horizontal" }] },
  { kanji: "白", onyomi: ["ハク"], kunyomi: ["しろ"], strokes: 5, category: "色", strokePaths: [{ path: "M 35 15 L 37 18", type: "dot" }, { path: "M 25 30 V 85", type: "vertical" }, { path: "M 25 30 H 75", type: "horizontal" }, { path: "M 75 30 V 85", type: "vertical" }, { path: "M 25 85 H 75", type: "horizontal" }] },

  // 学校・文字（8字）
  { kanji: "学", onyomi: ["ガク"], kunyomi: ["まな(ぶ)"], strokes: 8, category: "学校", strokePaths: [{ path: "M 35 15 L 37 20", type: "dot" }, { path: "M 65 15 L 67 20", type: "dot" }, { path: "M 50 20 V 35", type: "vertical" }, { path: "M 25 35 H 75", type: "horizontal" }, { path: "M 55 35 L 85 50", type: "diagonal" }, { path: "M 15 50 L 45 35", type: "diagonal" }, { path: "M 30 60 V 90", type: "vertical" }, { path: "M 70 60 V 90 H 30", type: "bend" }] },
  { kanji: "校", onyomi: ["コウ"], kunyomi: [], strokes: 10, category: "学校", strokePaths: [{ path: "M 15 30 H 35", type: "horizontal" }, { path: "M 25 15 V 90", type: "vertical" }, { path: "M 25 55 L 15 75", type: "diagonal" }, { path: "M 25 55 L 35 75", type: "diagonal" }, { path: "M 50 15 L 48 20", type: "dot" }, { path: "M 55 25 H 85", type: "horizontal" }, { path: "M 70 25 V 45", type: "vertical" }, { path: "M 50 45 H 90", type: "horizontal" }, { path: "M 70 45 L 50 85", type: "diagonal" }, { path: "M 70 45 L 90 85", type: "diagonal" }] },
  { kanji: "先", onyomi: ["セン"], kunyomi: ["さき"], strokes: 6, category: "学校", strokePaths: [{ path: "M 35 15 L 25 40", type: "diagonal" }, { path: "M 65 15 L 75 40", type: "diagonal" }, { path: "M 20 40 H 80", type: "horizontal" }, { path: "M 50 40 V 60", type: "vertical" }, { path: "M 25 60 H 75", type: "horizontal" }, { path: "M 50 60 V 90", type: "vertical" }] },
  { kanji: "名", onyomi: ["メイ", "ミョウ"], kunyomi: ["な"], strokes: 6, category: "学校", strokePaths: [{ path: "M 35 15 L 25 50", type: "diagonal" }, { path: "M 75 15 L 35 50", type: "diagonal" }, { path: "M 55 50 L 70 65", type: "diagonal" }, { path: "M 25 60 V 90", type: "vertical" }, { path: "M 25 60 H 70", type: "horizontal" }, { path: "M 70 60 V 90 H 25", type: "bend" }] },
  { kanji: "前", onyomi: ["ゼン"], kunyomi: ["まえ"], strokes: 9, category: "学校", strokePaths: [{ path: "M 30 15 L 28 20", type: "dot" }, { path: "M 70 15 L 72 20", type: "dot" }, { path: "M 20 30 H 80", type: "horizontal" }, { path: "M 50 30 V 50", type: "vertical" }, { path: "M 20 55 V 90", type: "vertical" }, { path: "M 20 55 H 45", type: "horizontal" }, { path: "M 45 55 V 90 H 20", type: "bend" }, { path: "M 55 55 H 85", type: "horizontal" }, { path: "M 70 55 V 90", type: "vertical" }] },
  { kanji: "文", onyomi: ["ブン", "モン"], kunyomi: ["ふみ"], strokes: 4, category: "学校", strokePaths: [{ path: "M 50 15 L 52 20", type: "dot" }, { path: "M 20 35 H 80", type: "horizontal" }, { path: "M 50 35 L 20 85", type: "diagonal" }, { path: "M 45 55 L 80 85", type: "diagonal" }] },
  { kanji: "字", onyomi: ["ジ"], kunyomi: ["あざ"], strokes: 6, category: "学校", strokePaths: [{ path: "M 50 10 L 52 15", type: "dot" }, { path: "M 15 25 H 85", type: "horizontal" }, { path: "M 25 45 V 80", type: "vertical" }, { path: "M 25 45 H 75", type: "horizontal" }, { path: "M 75 45 V 80 H 25", type: "bend" }, { path: "M 50 55 V 90", type: "vertical" }] },

  // その他（19字）
  { kanji: "王", onyomi: ["オウ"], kunyomi: [], strokes: 4, category: "その他", strokePaths: [{ path: "M 20 20 H 80", type: "horizontal" }, { path: "M 50 20 V 80", type: "vertical" }, { path: "M 25 50 H 75", type: "horizontal" }, { path: "M 15 80 H 85", type: "horizontal" }] },
  { kanji: "玉", onyomi: ["ギョク"], kunyomi: ["たま"], strokes: 5, category: "その他", strokePaths: [{ path: "M 20 20 H 80", type: "horizontal" }, { path: "M 50 20 V 75", type: "vertical" }, { path: "M 25 45 H 75", type: "horizontal" }, { path: "M 15 75 H 85", type: "horizontal" }, { path: "M 70 60 L 72 63", type: "dot" }] },
  { kanji: "本", onyomi: ["ホン"], kunyomi: ["もと"], strokes: 5, category: "その他", strokePaths: [{ path: "M 15 30 H 85", type: "horizontal" }, { path: "M 50 10 V 90", type: "vertical" }, { path: "M 50 45 L 20 80", type: "diagonal" }, { path: "M 50 45 L 80 80", type: "diagonal" }, { path: "M 25 55 H 50", type: "horizontal" }] },
  { kanji: "休", onyomi: ["キュウ"], kunyomi: ["やす(む)"], strokes: 6, category: "その他", strokePaths: [{ path: "M 30 15 V 90", type: "vertical" }, { path: "M 30 35 L 15 60", type: "diagonal" }, { path: "M 50 20 H 80", type: "horizontal" }, { path: "M 65 20 V 90", type: "vertical" }, { path: "M 65 45 L 50 75", type: "diagonal" }, { path: "M 65 45 L 80 75", type: "diagonal" }] },
  { kanji: "立", onyomi: ["リツ"], kunyomi: ["た(つ)"], strokes: 5, category: "その他", strokePaths: [{ path: "M 50 10 L 52 15", type: "dot" }, { path: "M 20 30 H 80", type: "horizontal" }, { path: "M 35 30 V 60", type: "vertical" }, { path: "M 65 30 V 60", type: "vertical" }, { path: "M 15 85 H 85", type: "horizontal" }] },
  { kanji: "見", onyomi: ["ケン"], kunyomi: ["み(る)"], strokes: 7, category: "その他", strokePaths: [{ path: "M 25 15 V 60", type: "vertical" }, { path: "M 25 15 H 75", type: "horizontal" }, { path: "M 75 15 V 60", type: "vertical" }, { path: "M 25 35 H 75", type: "horizontal" }, { path: "M 25 60 H 75", type: "horizontal" }, { path: "M 35 60 L 20 90", type: "diagonal" }, { path: "M 65 60 L 80 90", type: "diagonal" }] },
  { kanji: "音", onyomi: ["オン", "イン"], kunyomi: ["おと", "ね"], strokes: 9, category: "その他", strokePaths: [{ path: "M 50 10 L 52 15", type: "dot" }, { path: "M 20 25 H 80", type: "horizontal" }, { path: "M 50 25 V 45", type: "vertical" }, { path: "M 25 45 H 75", type: "horizontal" }, { path: "M 25 55 V 90", type: "vertical" }, { path: "M 25 55 H 75", type: "horizontal" }, { path: "M 75 55 V 90", type: "vertical" }, { path: "M 25 72 H 75", type: "horizontal" }, { path: "M 25 90 H 75", type: "horizontal" }] },
  { kanji: "気", onyomi: ["キ"], kunyomi: ["き"], strokes: 6, category: "その他", strokePaths: [{ path: "M 20 20 H 75", type: "horizontal" }, { path: "M 30 35 H 70", type: "horizontal" }, { path: "M 40 50 H 60", type: "horizontal" }, { path: "M 80 20 L 70 50 L 55 90", type: "bend" }, { path: "M 30 65 L 32 68", type: "dot" }, { path: "M 50 65 L 48 85", type: "diagonal" }] },
  { kanji: "天", onyomi: ["テン"], kunyomi: ["あめ", "あま"], strokes: 4, category: "その他", strokePaths: [{ path: "M 15 20 H 85", type: "horizontal" }, { path: "M 20 50 H 80", type: "horizontal" }, { path: "M 50 20 L 20 90", type: "diagonal" }, { path: "M 50 50 L 80 90", type: "diagonal" }] },
  { kanji: "円", onyomi: ["エン"], kunyomi: ["まる(い)"], strokes: 4, category: "その他", strokePaths: [{ path: "M 25 15 V 85 L 75 85", type: "bend" }, { path: "M 25 15 H 75", type: "horizontal" }, { path: "M 75 15 V 75", type: "vertical" }, { path: "M 50 25 V 85", type: "vertical" }] },
  { kanji: "糸", onyomi: ["シ"], kunyomi: ["いと"], strokes: 6, category: "その他", strokePaths: [{ path: "M 55 10 L 35 35", type: "diagonal" }, { path: "M 65 25 L 35 35", type: "diagonal" }, { path: "M 35 35 L 50 50 L 30 65", type: "bend" }, { path: "M 25 75 L 27 78", type: "dot" }, { path: "M 50 75 L 52 78", type: "dot" }, { path: "M 75 75 L 77 78", type: "dot" }] },
  { kanji: "竹", onyomi: ["チク"], kunyomi: ["たけ"], strokes: 6, category: "その他", strokePaths: [{ path: "M 30 15 L 20 45", type: "diagonal" }, { path: "M 30 15 L 35 35", type: "diagonal" }, { path: "M 30 45 V 90", type: "vertical" }, { path: "M 70 15 L 60 45", type: "diagonal" }, { path: "M 70 15 L 75 35", type: "diagonal" }, { path: "M 70 45 V 90", type: "vertical" }] },
  { kanji: "貝", onyomi: ["バイ"], kunyomi: ["かい"], strokes: 7, category: "その他", strokePaths: [{ path: "M 25 15 V 70", type: "vertical" }, { path: "M 25 15 H 75", type: "horizontal" }, { path: "M 75 15 V 70", type: "vertical" }, { path: "M 25 40 H 75", type: "horizontal" }, { path: "M 25 70 H 75", type: "horizontal" }, { path: "M 35 70 L 20 90", type: "diagonal" }, { path: "M 65 70 L 80 90", type: "diagonal" }] },
  { kanji: "車", onyomi: ["シャ"], kunyomi: ["くるま"], strokes: 7, category: "その他", strokePaths: [{ path: "M 20 20 H 80", type: "horizontal" }, { path: "M 25 20 V 65", type: "vertical" }, { path: "M 75 20 V 65", type: "vertical" }, { path: "M 25 42 H 75", type: "horizontal" }, { path: "M 25 65 H 75", type: "horizontal" }, { path: "M 50 15 V 90", type: "vertical" }, { path: "M 15 85 H 85", type: "horizontal" }] },
  { kanji: "金", onyomi: ["キン"], kunyomi: ["かね"], strokes: 8, category: "その他", strokePaths: [{ path: "M 50 10 V 30", type: "vertical" }, { path: "M 25 30 H 75", type: "horizontal" }, { path: "M 50 30 L 20 55", type: "diagonal" }, { path: "M 50 30 L 80 55", type: "diagonal" }, { path: "M 35 55 L 37 60", type: "dot" }, { path: "M 65 55 L 67 60", type: "dot" }, { path: "M 50 55 V 90", type: "vertical" }, { path: "M 15 90 H 85", type: "horizontal" }] },
  { kanji: "雨", onyomi: ["ウ"], kunyomi: ["あめ"], strokes: 8, category: "その他", strokePaths: [{ path: "M 20 20 V 85", type: "vertical" }, { path: "M 20 20 H 80", type: "horizontal" }, { path: "M 80 20 V 85", type: "vertical" }, { path: "M 50 20 V 40", type: "vertical" }, { path: "M 32 50 L 34 55", type: "dot" }, { path: "M 50 50 L 52 55", type: "dot" }, { path: "M 68 50 L 70 55", type: "dot" }, { path: "M 50 65 L 52 70", type: "dot" }] },
  { kanji: "町", onyomi: ["チョウ"], kunyomi: ["まち"], strokes: 7, category: "その他", strokePaths: [{ path: "M 20 15 V 50", type: "vertical" }, { path: "M 20 15 H 45", type: "horizontal" }, { path: "M 45 15 V 50", type: "vertical" }, { path: "M 20 50 H 45", type: "horizontal" }, { path: "M 32 30 H 45", type: "horizontal" }, { path: "M 55 15 H 85", type: "horizontal" }, { path: "M 70 15 V 90", type: "vertical" }] },
  { kanji: "村", onyomi: ["ソン"], kunyomi: ["むら"], strokes: 7, category: "その他", strokePaths: [{ path: "M 15 30 H 45", type: "horizontal" }, { path: "M 30 15 V 90", type: "vertical" }, { path: "M 30 50 L 15 80", type: "diagonal" }, { path: "M 30 50 L 45 80", type: "diagonal" }, { path: "M 60 20 H 85", type: "horizontal" }, { path: "M 55 45 H 90", type: "horizontal" }, { path: "M 72 20 V 90", type: "vertical" }] },
  { kanji: "早", onyomi: ["ソウ"], kunyomi: ["はや(い)"], strokes: 6, category: "その他", strokePaths: [{ path: "M 25 15 V 55", type: "vertical" }, { path: "M 25 15 H 75", type: "horizontal" }, { path: "M 75 15 V 55", type: "vertical" }, { path: "M 25 35 H 75", type: "horizontal" }, { path: "M 25 55 H 75", type: "horizontal" }, { path: "M 50 55 V 90", type: "vertical" }] }
];

// カテゴリー一覧
const categories = [
  { id: "all", name: "すべて", icon: "📚" },
  { id: "数字", name: "数字（すうじ）", icon: "🔢" },
  { id: "方向", name: "方向（ほうこう）", icon: "🧭" },
  { id: "自然", name: "自然（しぜん）", icon: "🌳" },
  { id: "時間", name: "時間（じかん）", icon: "⏰" },
  { id: "人・体", name: "人・体（ひと・からだ）", icon: "👤" },
  { id: "生物", name: "生物（いきもの）", icon: "🌸" },
  { id: "色", name: "色（いろ）", icon: "🎨" },
  { id: "学校", name: "学校・文字（がっこう・もじ）", icon: "🏫" },
  { id: "その他", name: "その他（そのほか）", icon: "✨" }
];

// SVG生成関数（指定した画数までを描画）
function generateStrokeSvg(k, step) {
  if (!k.strokePaths) return k.kanji;
  let paths = '';

  // ガイド（薄いグレー）
  k.strokePaths.forEach(p => {
    paths += `<path d="${p.path}" fill="none" stroke="#eee" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />`;
  });

  // 黒く描画
  for (let i = 0; i < step; i++) {
    if (i < k.strokePaths.length) {
      paths += `<path d="${k.strokePaths[i].path}" fill="none" stroke="#000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />`;
    }
  }

  return `<svg viewBox="0 0 100 100" width="100%" height="100%">${paths}</svg>`;
}

// 状態管理
let selectedKanji = new Set();
let currentCategory = "all";

// DOM要素
const categoryButtonsEl = document.getElementById('category-buttons');
const kanjiGridEl = document.getElementById('kanji-grid');
const selectedCountEl = document.getElementById('selected-count');
const selectAllBtn = document.getElementById('select-all-btn');
const clearAllBtn = document.getElementById('clear-all-btn');
const previewBtn = document.getElementById('preview-btn');
const previewModal = document.getElementById('preview-modal');
const printPreviewEl = document.getElementById('print-preview');
const printContentEl = document.getElementById('print-content');
const printBtn = document.getElementById('print-btn');
const closeModalBtn = document.getElementById('close-modal-btn');

// カテゴリーボタン生成
function renderCategories() {
  categoryButtonsEl.innerHTML = categories.map(cat =>
    `<button class="category-btn ${currentCategory === cat.id ? 'active' : ''}" data-id="${cat.id}">
      ${cat.icon} ${cat.name}
    </button>`
  ).join('');

  categoryButtonsEl.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.id;
      renderCategories();
      renderKanjiGrid();
    });
  });
}

// 漢字グリッド生成
function renderKanjiGrid() {
  const filtered = currentCategory === 'all'
    ? kanjiData
    : kanjiData.filter(k => k.category === currentCategory);

  kanjiGridEl.innerHTML = filtered.map(k =>
    `<div class="kanji-item ${selectedKanji.has(k.kanji) ? 'selected' : ''}" data-kanji="${k.kanji}">
      <span class="kanji-char">${k.kanji}</span>
      <span class="kanji-strokes">${k.strokes}画</span>
    </div>`
  ).join('');

  kanjiGridEl.querySelectorAll('.kanji-item').forEach(item => {
    item.addEventListener('click', () => {
      const kanji = item.dataset.kanji;
      if (selectedKanji.has(kanji)) {
        selectedKanji.delete(kanji);
        item.classList.remove('selected');
      } else {
        selectedKanji.add(kanji);
        item.classList.add('selected');
      }
      updateSelectedCount();
    });
  });
}

// 選択数更新
function updateSelectedCount() {
  selectedCountEl.textContent = selectedKanji.size;
  previewBtn.disabled = selectedKanji.size === 0;
}

// 全選択
selectAllBtn.addEventListener('click', () => {
  const filtered = currentCategory === 'all'
    ? kanjiData
    : kanjiData.filter(k => k.category === currentCategory);

  filtered.forEach(k => selectedKanji.add(k.kanji));
  renderKanjiGrid();
  updateSelectedCount();
});

// 全解除
clearAllBtn.addEventListener('click', () => {
  selectedKanji.clear();
  renderKanjiGrid();
  updateSelectedCount();
});

// 設定取得
function getSettings() {
  const layout = document.querySelector('input[name="layout"]:checked').value;
  const boxes = document.querySelector('input[name="boxes"]:checked').value;
  const showGuide = document.getElementById('show-guide').checked;
  const showReading = document.getElementById('show-reading').checked;
  return { layout: parseInt(layout), boxes: parseInt(boxes), showGuide, showReading };
}

// 印刷ページ生成
function generatePrintPages(forPrint = false) {
  const settings = getSettings();
  const kanjiList = Array.from(selectedKanji).map(k => kanjiData.find(d => d.kanji === k));
  const pages = [];

  const perPage = settings.layout;
  for (let i = 0; i < kanjiList.length; i += perPage) {
    pages.push(kanjiList.slice(i, i + perPage));
  }

  return pages.map((pageKanji, pageIndex) => {
    const kanjiBlocks = pageKanji.map(k => {
      const onyomiText = k.onyomi.length > 0 ? k.onyomi.join('、') : '−';
      const kunyomiText = k.kunyomi.length > 0 ? k.kunyomi.join('、') : '−';

      // 書き順SVG生成
      const strokeBoxes = Array.from({ length: k.strokes }, (_, i) => {
        const step = i + 1;
        const svgs = generateStrokeSvg(k, step);
        return `<div class="stroke-box"><span class="stroke-num">${step}</span>${svgs}</div>`;
      }).join('');

      // 練習マス
      const boxes = Array.from({ length: settings.boxes }, (_, i) =>
        `<div class="practice-box">${settings.showGuide ? `<span class="guide">${k.kanji}</span>` : ''}</div>`
      ).join('');

      return `
        <div class="kanji-block">
          <div class="kanji-info">
            <div class="kanji-display">${k.kanji}</div>
            ${settings.showReading ? `
              <div class="kanji-reading">
                <p>おんよみ: ${onyomiText}</p>
                <p>くんよみ: ${kunyomiText}</p>
                <p>${k.strokes}かく</p>
              </div>
            ` : `<div class="kanji-reading"><p>${k.strokes}かく</p></div>`}
          </div>
          <div class="stroke-order-area">
            <div class="area-label">かきじゅん</div>
            <div class="stroke-boxes">${strokeBoxes}</div>
          </div>
          <div class="practice-area">
            <div class="area-label">れんしゅう</div>
            <div class="practice-boxes">${boxes}</div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="print-page layout-${settings.layout}">
        <div class="print-page-header">
          <h1 class="print-page-title">かんじ れんしゅうプリント</h1>
        </div>
        <div class="print-kanji-section">
          ${kanjiBlocks}
        </div>
        <div class="print-page-footer">
          <span>なまえ: _______________</span>
          <span>ひづけ: _______________</span>
        </div>
      </div>
    `;
  }).join('');
}

// イベントリスナー
previewBtn.addEventListener('click', () => {
  printPreviewEl.innerHTML = generatePrintPages(false);
  previewModal.classList.add('show');
});

closeModalBtn.addEventListener('click', () => {
  previewModal.classList.remove('show');
});

printBtn.addEventListener('click', () => {
  printContentEl.innerHTML = generatePrintPages(true);
  window.print();
});

// 初期化
renderCategories();
renderKanjiGrid();
updateSelectedCount();
