"use strict";

const con = require("../constellation").GetContellation;

let twVersion = con.LangVersion["lang-tw"] = {};
twVersion[con.Contellation.Aries] = "白羊座";
twVersion[con.Contellation.Taurus] = "金牛座";
twVersion[con.Contellation.Gemini] = "雙子座";
twVersion[con.Contellation.Cancer] = "巨蟹座";
twVersion[con.Contellation.Leo] = "獅子座";
twVersion[con.Contellation.Virgo] = "處女座";
twVersion[con.Contellation.Libra] = "天秤座";
twVersion[con.Contellation.Scorpio] = "天蠍座";
twVersion[con.Contellation.Sagittarius] = "射手座";
twVersion[con.Contellation.Capricornus] = "魔羯座";
twVersion[con.Contellation.Aquarius] = "水瓶座";
twVersion[con.Contellation.Pisces] = "雙魚座";