"use strict";

const con = require("./lib/constellation");

console.log(con.GetContellation(2001, 1, 25, "lang-en"));
console.log(con.GetContellation(1987, 8, 25, "lang-zh"));
console.log(con.GetContellation(1999, 2, 5, "lang-tw"));
console.log(con.GetContellation(1987, 4, 19, "lang-sp"));
console.log(con.GetContellation(1977, 6, 13, "lang-ru"));
console.log(con.GetContellation(1987, 11, 10, "lang-ru"));
console.log(con.GetContellation(1988, 3, 7, "lang-ar"));
console.log(con.GetContellation(2008, 6, 21, "lang-jp"));
console.log(con.GetContellation(2011, 1, 31, "lang-kr"));
console.log(con.GetContellation(2007, 2, 20, "lang-jp"));