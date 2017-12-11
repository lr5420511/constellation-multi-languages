"use strict";

const con = require("../constellation").GetContellation;

let enVersion = con.LangVersion["lang-en"] = {};
enVersion[con.Contellation.Aries] = "Aries";
enVersion[con.Contellation.Taurus] = "Taurus";
enVersion[con.Contellation.Gemini] = "Gemini";
enVersion[con.Contellation.Cancer] = "Cancer";
enVersion[con.Contellation.Leo] = "Leo";
enVersion[con.Contellation.Virgo] = "Virgo";
enVersion[con.Contellation.Libra] = "Libra";
enVersion[con.Contellation.Scorpio] = "Scorpio";
enVersion[con.Contellation.Sagittarius] = "Sagittarius";
enVersion[con.Contellation.Capricornus] = "Capricornus";
enVersion[con.Contellation.Aquarius] = "Aquarius";
enVersion[con.Contellation.Pisces] = "Pisces";