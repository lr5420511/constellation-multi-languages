"use strict";

const con = require("../constellation").GetContellation;

let spVersion = con.LangVersion["lang-sp"] = {};
spVersion[con.Contellation.Aries] = "Aries";
spVersion[con.Contellation.Taurus] = "Tauro";
spVersion[con.Contellation.Gemini] = "Gemini";
spVersion[con.Contellation.Cancer] = "Cáncer";
spVersion[con.Contellation.Leo] = "Leo";
spVersion[con.Contellation.Virgo] = "Virgo";
spVersion[con.Contellation.Libra] = "Libra";
spVersion[con.Contellation.Scorpio] = "Escorpio";
spVersion[con.Contellation.Sagittarius] = "Sagitario";
spVersion[con.Contellation.Capricornus] = "Capricornus";
spVersion[con.Contellation.Aquarius] = "Acuario";
spVersion[con.Contellation.Pisces] = "Piscis";