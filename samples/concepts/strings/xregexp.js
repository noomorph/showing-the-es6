let str = '/2012/10/Page.html';
let parts = str.match(XRegExp.rx` 
     ^ # match at start of string only
     / (?<year> [^/]+ ) # capture top dir as year
     / (?<month> [^/]+ ) # capture subdir as month
     / (?<title> [^/]+ ) # file name base
     \.html? # file name extension: .htm or .html
     $ # end of string
 `);

print(parts.year); // 2012
