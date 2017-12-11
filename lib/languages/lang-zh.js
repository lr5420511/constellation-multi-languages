"use strict";

const con = require("../constellation").GetContellation;

let zhVersion = con.LangVersion["lang-zh"] = {};
zhVersion[con.Contellation.Aries] = "白羊座";
zhVersion[con.Contellation.Taurus] = "金牛座";
zhVersion[con.Contellation.Gemini] = "双子座";
zhVersion[con.Contellation.Cancer] = "巨蟹座";
zhVersion[con.Contellation.Leo] = "狮子座";
zhVersion[con.Contellation.Virgo] = "处女座";
zhVersion[con.Contellation.Libra] = "天秤座";
zhVersion[con.Contellation.Scorpio] = "天蝎座";
zhVersion[con.Contellation.Sagittarius] = "射手座";
zhVersion[con.Contellation.Capricornus] = "魔羯座";
zhVersion[con.Contellation.Aquarius] = "水瓶座";
zhVersion[con.Contellation.Pisces] = "双鱼座";