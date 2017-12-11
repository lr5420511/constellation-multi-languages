"use strict";

const out = module.exports;

out.GetContellation = function(year, month, date, lang) {
    if (typeof year !== "number" || typeof month !== "number" || typeof date !== "number") {
        throw new Error("GetContellation: The time information isn't vaild");
    }
    let currentTime = new Date();
    currentTime.setFullYear(year, month - 1, date);
    if (currentTime.getFullYear() !== year || currentTime.getMonth() + 1 !== month || currentTime.getDate() !== date) {
        throw new Error("GetContellation: The time information isn't vaild");
    }
    if (!out.GetContellation.LangVersion.hasOwnProperty(lang) || typeof out.GetContellation.LangVersion[lang] === "undefined") {
        throw new Error("GetContellation: The current language version isn't exist");
    }
    let currentContellation = out.GetContellation.LangVersion[lang];
    let conResult;
    if ((month === 3 && date > 20) || (month === 4 && date < 20)) {
        conResult = currentContellation[out.GetContellation.Contellation.Aries];
    } else if ((month === 4 && date > 19) || (month === 5 && date < 21)) {
        conResult = currentContellation[out.GetContellation.Contellation.Taurus];
    } else if ((month === 5 && date > 20) || (month === 6 && date < 22)) {
        conResult = currentContellation[out.GetContellation.Contellation.Gemini];
    } else if ((month === 6 && date > 21) || (month === 7 && date < 23)) {
        conResult = currentContellation[out.GetContellation.Contellation.Cancer];
    } else if ((month === 7 && date > 22) || (month === 8 && date < 23)) {
        conResult = currentContellation[out.GetContellation.Contellation.Leo];
    } else if ((month === 8 && date > 22) || (month === 9 && date < 23)) {
        conResult = currentContellation[out.GetContellation.Contellation.Virgo];
    } else if ((month === 9 && date > 22) || (month === 10 && date < 24)) {
        conResult = currentContellation[out.GetContellation.Contellation.Libra];
    } else if ((month === 10 && date > 23) || (month === 11 && date < 23)) {
        conResult = currentContellation[out.GetContellation.Contellation.Scorpio];
    } else if ((month === 11 && date > 22) || (month === 12 && date < 22)) {
        conResult = currentContellation[out.GetContellation.Contellation.Sagittarius];
    } else if ((month === 12 && date > 21) || (month === 1 && date < 20)) {
        conResult = currentContellation[out.GetContellation.Contellation.Capricornus];
    } else if ((month === 1 && date > 19) || (month === 2 && date < 19)) {
        conResult = currentContellation[out.GetContellation.Contellation.Aquarius];
    } else {
        conResult = currentContellation[out.GetContellation.Contellation.Pisces];
    }
    return typeof conResult === "undefined" ? "return error value" : conResult;
};

out.GetContellation.LangVersion = {};
out.GetContellation.Contellation = {
    Aries: "Aries",
    Taurus: "Taurus",
    Gemini: "Gemini",
    Cancer: "Cancer",
    Leo: "Leo",
    Virgo: "Virgo",
    Libra: "Libra",
    Scorpio: "Scorpio",
    Sagittarius: "Sagittarius",
    Capricornus: "Capricornus",
    Aquarius: "Aquarius",
    Pisces: "Pisces"
};

require("./lang-total");