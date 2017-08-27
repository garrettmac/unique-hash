"use strict";

Object.defineProperty(exports, "__esModule", {
		value: true
});
var _ = require("lodash");
var moment = require("moment");

// function charHash(string) {
var charHash = function charHash(string) {
		var hash = 0,
		    i,
		    chr,
		    len;
		if (string.length === 0) return hash;
		for (i = 0, len = string.length; i < len; i++) {
				chr = string.charCodeAt(i);
				hash = (hash << 5) - hash + chr;
				hash |= 0; // Convert to 32bit integer
		}

		hash = hash > -1 ? '111' + hash.toString() : '000' + Math.abs(hash).toString();

		return hash;
};
//
// exports.default = uniqueHash;
//let uh=require("unique-hash").default


var Format = function Format(path) {
		return path ? path + "/" : "";
};
var getDatePath = function getDatePath(date) {
		var formatDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "YYYY/MM/DD";
		return moment(date).isValid() ? moment(date).format(formatDate) : "";
};
var getOptionsPath = function getOptionsPath(options, prop) {
		return _.get(options, "" + prop);
};
// const getOptionsPath = (options,prop) =>Format(_.get(options,`${prop}`));


// const l = (o) =>console.log(o)

exports.default = function (str) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		// const uniqueHash = (str,options={}) => {


		str = str.toString();
		var format = _.get(options, "format");

		if (format === "kebabCase") return _.kebabCase(str);
		if (format === "charHash") return _.charHash(str);

		var numberHash = createNumberHash(str);
		var letterHash = createLetterHash(numberHash);
		var date = _.get(options, "date");
		var hashId = getOptionsPath(options, "hashId");
		if (!hashId) {
				if (format === "string") hashId = letterHash;else hashId = numberHash;
		}

		var datePath = date ? getDatePath(date) : "";
		var appendString = getOptionsPath(options, "append");
		if (appendString) appendString = Format(appendString);else appendString = "";

		var path = "" + Format(getOptionsPath(options, "prepend")) + Format(datePath) + Format(getOptionsPath(options, "appendDate")) + hashId + appendString;

		return path;
};

/**
* Creates Unique Number for input String
* @method createNumberHash
* @param {string} input - the input string.
* @return {number} - Unique Number
*/


var createNumberHash = function createNumberHash(str) {
		str = _.kebabCase(str);
		var hash = 0,
		    i,
		    chr,
		    len;
		if (str.length === 0) return hash;
		for (i = 0, len = str.length; i < len; i++) {
				chr = str.charCodeAt(i);
				hash = (hash << 5) - hash + chr; //bitwise hash
				hash |= 0; // Convert to 32bit integer
		}
		return Math.abs(hash); //*= -1
};

/**
* Creates Unique Number for input String
* @method createLetterHash
* @param {number} number - the output form createNumberHash.
* @return {string} - Unique string genorated from Unique Number hash
*/
var isNumberEven = function isNumberEven(n) {
		return n % 2 == 0;
};
var createLetterHash = function createLetterHash(nums) {
		var numberArray = ("" + nums).split("");
		return numberArray.map(function (number, i) {
				number = parseInt(number);
				var isEven = false;
				if (i > 0) isEven = isNumberEven(numberArray[i - 1]);
				if (isEven) number += 26;
				if (number >= 0 && number <= 25) // a-z
						number = number + 97;else if (number >= 26 && number <= 51) // A-Z (wont run here cus "(""+nums).split("")" is only 0-9)
						number = number + (65 - 26);else
						// return "X"; // range error
						return number; //"X"; // range error
				return String.fromCharCode(number);
		}).join("");
};
//
// l(uniqueHash(url,{
// prepend:"prepend",
// append:"append",
// appendDate:"appendDate",
// hash:"hash",
// date:new Date("Sunday 27 August 201707.00 EDT"),
// format:"string"
// }))
