"use strict";

const con = require("../constellation").GetContellation;

let jpVersion = con.LangVersion["lang-jp"] = {};
jpVersion[con.Contellation.Aries] = "おひつじざ";
jpVersion[con.Contellation.Taurus] = "おうしざ";
jpVersion[con.Contellation.Gemini] = "ジェミニ";
jpVersion[con.Contellation.Cancer] = "がん";
jpVersion[con.Contellation.Leo] = "レオ";
jpVersion[con.Contellation.Virgo] = "おとめざ";
jpVersion[con.Contellation.Libra] = "てんびんざ";
jpVersion[con.Contellation.Scorpio] = "さそりざ";
jpVersion[con.Contellation.Sagittarius] = "いてざ";
jpVersion[con.Contellation.Capricornus] = "やぎざ";
jpVersion[con.Contellation.Aquarius] = "みずがめざ";
jpVersion[con.Contellation.Pisces] = "うおざ";