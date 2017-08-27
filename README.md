<p align="center">
  The best package to create hash ids.
</p>
<p align="center">
  <a href="http://standardjs.com/"><img  src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"></a>
  <a href="http://standardjs.com/"><img  src="	https://img.shields.io/github/downloads/atom/atom/latest/total.svg"></a>
  <a href="https://npmjs.org/package/unique-hash"><img alt="npm version" src="http://img.shields.io/npm/v/unique-hash.svg?style=flat-square"></a>
  <a href="https://npmjs.org/package/unique-hash"><img alt="npm version" src="http://img.shields.io/npm/dm/unique-hash.svg?style=flat-square"></a>
  <a href="https://github.com/garrettmac/unique-hash/pulls?q=is%3Apr+is%3Aclosed"><img alt="PR Stats" src="https://img.shields.io/issuestats/i/github/garrettmac/unique-hash.svg?style=flat-square"></a>
  <a href="https://github.com/garrettmac/unique-hash/issues?q=is%3Aissue+is%3Aclosed"><img alt="Issue Stats" src="https://img.shields.io/issuestats/p/github/garrettmac/unique-hash.svg" style=flat-square"></a>   
 <a><img  src="https://img.shields.io/github/forks/garrettmac/unique-hash.svg"/></a>
 <a><img  src="https://img.shields.io/github/stars/garrettmac/unique-hash.svg"/></a>
 <a><img  src="https://img.shields.io/badge/license-MIT-blue.svg"/>
 <a><img  src="https://img.shields.io/twitter/url/https/github.com/garrettmac/unique-hash.svg?style=social"></a>
 <a href="https://gitter.im/garrettmac/unique-hash?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"><img alt="Join the chat" src="https://badges.gitter.im/garrettmac/unique-hash.svg"></a>



</p>




# unique-hash

Useful for saving to
```javascript
import uniqueHash from "unique-hash"

//or es5
//var uniqueHash = require("unique-hash").default
let url = "https://www.npmjs.com/package/unique-hash"

uniqueHash(url)
//>> output 88870086

uniqueHash(url)
//>> output 88870086

uniqueHash(url,{format:"string"})
//>> output "iIIHaAIG"

uniqueHash(url,{format:"string"})
//>> output "iIIHaAIG"


uniqueHash("John H. Smith")
//>> output 983277668
uniqueHash("John H Smith")
//>> output  983277668
uniqueHash("JohnHSmith")
//>> output 983277668


uniqueHash("John H. Smith",{format:"kebabCase"})
//>> output "john-h-smith"
uniqueHash("John H Smith",{format:"kebabCase"})
//>> output "john-h-smith"
uniqueHash("JohnHSmith",{format:"kebabCase"})
//>> output "john-h-smith"


uniqueHash(url,{
  prepend:"articles",
  date:new Date(),
 })
 //>> output "articles/2017/08/27/88870086"


uniqueHash(url,{
  prepend:"articles",
  append:"videos",
  appendDate:"hot",
  date:new Date(),
  formatDate:"YYYY/DD",
  format:"string"
 })
 //>> output "articles/2017/08/hot/iIIHaAIG/videos"

```

### Parameters

| Parameter | Default | Description |
|------|-----|-----|
| format | "number" | options: "number", "string" or "kebabCase" |
| prepend | "" | string to prepend output path  |
| append | "" |string to append output path  |
| appendDate | "" |  string to center between date and hash id  (eg. output `/YYYY/MM/DD/[HERE]/:hashId`) |
| date | n/a | pass in date to append /YYYY/MM/DD to save path |
| dateFormate | "YYYY/MM/DD" | Date format |
| hashId | n/a | override the output hashId, useful if you want to use with date.  |
