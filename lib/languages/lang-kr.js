"use strict";

const con = require("../constellation").GetContellation;

let krVersion = con.LangVersion["lang-kr"] = {};
krVersion[con.Contellation.Aries] = "양자리";
krVersion[con.Contellation.Taurus] = "황소자리";
krVersion[con.Contellation.Gemini] = "쌍둥이좌리";
krVersion[con.Contellation.Cancer] = "게자리";
krVersion[con.Contellation.Leo] = "사자자리";
krVersion[con.Contellation.Virgo] = "처녀좌리";
krVersion[con.Contellation.Libra] = "천칭자리";
krVersion[con.Contellation.Scorpio] = "전갈자리";
krVersion[con.Contellation.Sagittarius] = "사수좌리";
krVersion[con.Contellation.Capricornus] = "염소자리";
krVersion[con.Contellation.Aquarius] = "물병자리";
krVersion[con.Contellation.Pisces] = "물고기자리";