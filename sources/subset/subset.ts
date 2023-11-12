import { FONTFAMILY, getFontList, subsets } from "./subset-utils";

const jobs = [
  getFontList(FONTFAMILY.NotoSansCJKkr),
  // getFontList(FONTFAMILY.NotoSansCJKjp), // 나중에 사용할 때 주석 해제 하면 됨
  // getFontList(FONTFAMILY.NotoSansCJKsc),
  // getFontList(FONTFAMILY.NotoSansCJKtc),
  // getFontList(FONTFAMILY.NotoSansCJKhk),
];

jobs.forEach((fontList) => {
  subsets(
    // woff
    ["static", "woff", fontList],
    ["glyph", "woff", fontList],
    ["dynamic", "woff", fontList],

    // woff2
    ["static", "woff2", fontList],
    ["glyph", "woff2", fontList],
    ["dynamic", "woff2", fontList]
  );
});
