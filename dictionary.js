// カルデール式 → 漢字
const dict = {
  "a": ["あ"],
  "aa": ["ああ"],
  "aakáibu": ["アーカイブ"],
  "áaru": ["Ｒ"],
  "áatisuto": ["アーティスト"],
  "áato": ["アート"],
  "abarabone": ["あばら骨"],
  "abarábone": ["あばら骨"],
  "abiru": ["浴びる"],
  "ábu": ["アブ", "虻"],
  "abura": ["油", "脂"],
  "abunai": ["危ない"],
  "abunái": ["危ない"],
  "ácu": ["圧"],
  "acúi": ["暑い", "熱い"],
  "acumáru": ["集まる"],
  "acuméru": ["集める"],
  "haxí": ["橋"],
  "háxi": ["箸"],
  "kane": ["金"],
  "kanji": ["漢字", "感じ"],
  "kín": ["金"],
  "xú": ["主"],
  "ryóuri": ["料理"],
  "bátaa": ["バター"],
  "cúna": ["ツナ"],
  "cuyobi": ["強火"],
  "furaipan": ["フライパン"],
  "góhan": ["ご飯"],
  "gyuunyuu": ["牛乳"],
  "hámu": ["ハム"],
  "hí": ["火", "日"],
  "honé": ["骨"],
  "itaméru": ["炒める"],
  "jámu": ["ジャム"],
  "júusu": ["ジュース"],
  "kájicu": ["果実"],
  "kíui": ["キウイ"],
  "komé": ["米"],
  "kórokke": ["コロッケ"],
  "kudámono": ["果物"],
  "kyábecu": ["キャベツ"],
  "kyúuri": ["キュウリ"],
  "mi": ["実", "身"],
  "mizu": ["水"],
  "omisoxíru": ["お味噌汁"],
  "oqa": ["お茶"],
  "oqazuke": ["お茶漬け"],
  "pán": ["パン"],
  "píiman": ["ピーマン"],
  "quubi": ["中火"],
  "ráamen": ["ラーメン"],
  "sake": ["酒"],
  "satóu": ["砂糖"],
  "sóba": ["蕎麦"],
  "souséiji": ["ソーセージ"],
  "toufú": ["豆腐"],
  "uínnaa": ["ウインナー"],
  "wáin": ["ワイン"],
  "xáke": ["シャケ"],
  "xió": ["塩"],
  "xouyu": ["醤油"],
  "yakisoba": ["焼きそば"],
  "yaku": ["焼く"],
  "yasai": ["野菜"],
  "yowabi": ["弱火"],
  "yougúruto": ["ヨーグルト"],
  "yaamanízumu": ["ヤーマニズム"],
  "yaamanísuto": ["ヤーマニスト"],
  "áreri póna": ["あれりぽな"],
  "karudeiruxiki": ["カルデール式"],
  "nanqattegána": ["なんちゃって仮名"],
  "n": ["ん"]
};

// 漢字 → カルデール式
const reverseDict = {};
for (const [romaji, kanjiList] of Object.entries(dict)) {
  for (const kanji of kanjiList) {
    if (!reverseDict[kanji]) reverseDict[kanji] = [];
    reverseDict[kanji].push(romaji);
  }
}

function convertToKanji(){
  const input = document.getElementById("toKanji").value.trim();
  const result = dict[input];
  if (Array.isArray(result)) {
    document.getElementById("outKanji").textContent = "候補: " + result.join(", ");
  } else {
    document.getElementById("outKanji").textContent = "(変換候補なし)";
  }
}

function convertToRomaji(){
  const input = document.getElementById("toRomaji").value.trim();
  const result = reverseDict[input];
  if (Array.isArray(result)) {
    document.getElementById("outRomaji").textContent = "候補: " + result.join(", ");
  } else {
    document.getElementById("outRomaji").textContent = "(変換候補なし)";
  }
}
