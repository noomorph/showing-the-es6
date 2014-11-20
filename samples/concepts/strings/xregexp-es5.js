var str = '/2012/10/Page.html';

var parts = str.match(XRegExp(
     '^ # match at start of string only \n' +
     '/ (?<year> [^/]+ ) # capture top dir as year \n' +
     '/ (?<month> [^/]+ ) # capture subdir as month \n' +
     '/ (?<title> [^/]+ ) # file name base \n' +
     '\\.html? # file name extension: .htm or .html \n' +
     '$ # end of string',
     'x'
 ));
