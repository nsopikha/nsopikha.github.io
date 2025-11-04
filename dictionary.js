// カルデール式 → 漢字
const dict = {
  "haxí": "橋",
  "háxi": "箸",
  "kanji": "漢字",
  "kanji": "感じ",
  "xú": "主"
};

// 漢字 → カルデール式
const reverseDict = Object.fromEntries(
  Object.entries(dict).map(([r, k]) => [k, r])
);
