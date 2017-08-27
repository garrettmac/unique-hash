var _=require("lodash")
var moment=require("moment")



// function charHash(string) {
const charHash = (string) => {
  var hash = 0, i, chr, len;
  if (string.length === 0) return hash;
  for (i = 0, len = string.length; i < len; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }

  hash = hash > -1 ?
    '111' + hash.toString() :
    '000' + Math.abs(hash).toString()

  return hash;
}
//
// exports.default = uniqueHash;
//let uh=require("unique-hash").default


const Format = (path) => (path)?path+"/":"";
const getDatePath = (date,formatDate="YYYY/MM/DD") =>(moment(date).isValid())?moment(date).format(formatDate):"";
const getOptionsPath = (options,prop) =>_.get(options,`${prop}`);
// const getOptionsPath = (options,prop) =>Format(_.get(options,`${prop}`));



// const l = (o) =>console.log(o)

export default (str,options={}) => {
// const uniqueHash = (str,options={}) => {


str=str.toString()
let format=_.get(options,"format")

if(format==="kebabCase")return _.kebabCase(str)
if(format==="charHash")return _.charHash(str)

let numberHash=createNumberHash(str)
let letterHash=createLetterHash(numberHash)
let appendString=getOptionsPath(options,"append")

let date=_.get(options,"date")
let hashId=getOptionsPath(options,"hashId")
if(!hashId){
if(format==="string")hashId=letterHash
else hashId=numberHash
}else if(hashId&&appendString) {
	hashId=Format(hashId)
}


let datePath=(date)?getDatePath(date):""
// if(appendString)appendString=Format(appendString)
// else appendString=""

let path=""+Format(getOptionsPath(options,"prepend"))
					 +Format(datePath)
					 +Format(getOptionsPath(options,"appendDate"))
					 +hashId
					 +appendString




return path

	}

/**
* Creates Unique Number for input String
* @method createNumberHash
* @param {string} input - the input string.
* @return {number} - Unique Number
*/
	const createNumberHash=(str)=>{
	    str=_.kebabCase(str)
	  var hash = 0, i, chr, len;
	  if (str.length === 0) return hash;
	  for (i = 0, len = str.length; i < len; i++) {
	    chr   = str.charCodeAt(i);
	    hash  = ((hash << 5) - hash) + chr;//bitwise hash
	    hash |= 0; // Convert to 32bit integer
	  }
	  return Math.abs(hash)//*= -1
	};


	/**
	* Creates Unique Number for input String
	* @method createLetterHash
	* @param {number} number - the output form createNumberHash.
	* @return {string} - Unique string genorated from Unique Number hash
	*/
	const isNumberEven=(n) => n % 2 == 0;
	const createLetterHash = (nums) => {
		let numberArray=(""+nums).split("")
		return numberArray.map((number,i)=>{
		number=parseInt(number)
		let isEven=false
		if(i>0)isEven=isNumberEven(numberArray[i-1])
	  if(isEven)number+=26
   if ( number >= 0 && number <= 25 ) // a-z
    number = number + 97;
  else if ( number >= 26 && number <= 51 ) // A-Z (wont run here cus "(""+nums).split("")" is only 0-9)
    number = number + (65-26);
  else
    // return "X"; // range error
    return number//"X"; // range error
  return String.fromCharCode(number);
  }).join("")


}
//
// l(uniqueHash(url,{
// prepend:"prepend",
// append:"append",
// appendDate:"appendDate",
// hash:"hash",
// date:new Date("Sunday 27 August 201707.00 EDT"),
// format:"string"
// }))
