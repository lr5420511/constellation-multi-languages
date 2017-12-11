"use strict";

const con = require("../constellation").GetContellation;

let ruVersion = con.LangVersion["lang-ru"] = {};
ruVersion[con.Contellation.Aries] = "овен";
ruVersion[con.Contellation.Taurus] = "телец";
ruVersion[con.Contellation.Gemini] = "близнецы";
ruVersion[con.Contellation.Cancer] = "рак";
ruVersion[con.Contellation.Leo] = "лео";
ruVersion[con.Contellation.Virgo] = "вирго";
ruVersion[con.Contellation.Libra] = "весы";
ruVersion[con.Contellation.Scorpio] = "скорпион";
ruVersion[con.Contellation.Sagittarius] = "стрелец";
ruVersion[con.Contellation.Capricornus] = "козерог";
ruVersion[con.Contellation.Aquarius] = "водолей";
ruVersion[con.Contellation.Pisces] = "рыбы";