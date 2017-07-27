function uniqueHash(string) {
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

exports.default = uniqueHash;
