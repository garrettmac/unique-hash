# unique-hash

Useful for saving to
```javascript
import uniqueHash from "unique-hash"
let url = "https://www.npmjs.com/package/unique-hash"

uniqueHash(url)
//>> output 88870086

uniqueHash(url)
//>> output 88870086

uniqueHash(url,{format:"string"})
//>> output "iIIHaAIG"

uniqueHash(url,{format:"string"})
//>> output "iIIHaAIG"

uniqueHash(url,{
  prepend:"prepend",
  append:"append",
  appendDate:"appendDate",
  date:new Date(),
  format:"string"
 }))
 //>> output "prepend/2017/08/27/appendDate/iIIHaAIG/append/"

```

### Parameters

| Parameter | Default | Description |
|------|-----|-----|
| format | "number" | options: "number", "string" or "kebabCase" |
| prepend | "" | string to prepend output path  |
| append | "" |string to append output path  |
| appendDate | "" |  string to center between date and hash id  (eg. output `/YYYY/MM/DD/[HERE]/:hashId`) |
| date | n/a | pass in date to append /YYYY/MM/DD to save path |
| hashId | n/a | override the output hashId, useful if you want to use with date.  |
