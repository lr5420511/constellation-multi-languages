"use strict";

const con = require("../constellation").GetContellation;

let arVersion = con.LangVersion["lang-ar"] = {};
arVersion[con.Contellation.Aries] = " برج الحمل  ";
arVersion[con.Contellation.Taurus] = " برج الثور  ";
arVersion[con.Contellation.Gemini] = " الجوزاء  ";
arVersion[con.Contellation.Cancer] = " السرطان  ";
arVersion[con.Contellation.Leo] = " ليو  ";
arVersion[con.Contellation.Virgo] = " برج العذراء  ";
arVersion[con.Contellation.Libra] = " برج الميزان  ";
arVersion[con.Contellation.Scorpio] = " برج العقرب  ";
arVersion[con.Contellation.Sagittarius] = " القوس  ";
arVersion[con.Contellation.Capricornus] = " الجدي  ";
arVersion[con.Contellation.Aquarius] = " برج الدلو  ";
arVersion[con.Contellation.Pisces] = " الحوت  ";