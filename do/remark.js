var fs = require('fs'),
    path = require('path'),
    Remarkable = require('remarkable'),
    md = new Remarkable({ html: true });

const MD_REGEX = /\.md$/,
      TEMPLATE_REGEX = /\((.*)\)/,
      IMPORT_REGEX =/```[\s]*(.*)[\s]*```/m,
      BASE_PATH = path.join(__dirname, '..'),
      SLIDES_PATH = path.join(BASE_PATH, 'slides');

function isMarkdown(fileName) {
    return MD_REGEX.test(fileName);
}

function getSlidePath(fileName) {
    return path.join(SLIDES_PATH, fileName);
}

function renameToHtml(fileName) {
    return fileName.replace(MD_REGEX, ".html");
}

function getSlideFiles() {
    return fs.readdirSync(SLIDES_PATH).filter(isMarkdown).map(getSlidePath);
}

function getTemplate(contents) {
    var firstLine = contents.match(/.*/);
    if (!firstLine) { return ''; }

    var templatePath = firstLine[0].match(TEMPLATE_REGEX);
    if (!templatePath) { return ''; }

    templatePath = path.join(BASE_PATH, templatePath[1]);
    return fs.readFileSync(templatePath, 'utf-8') || '';
}

function wrapCode(codeHtml, i) {
    return '<section class="code" data-id="' + i + '">\n' + codeHtml + '\n</section>';
}

function importCode(contents) {
    var i = 0,
        importPath,
        importContents;

    while (importPath = contents.match(IMPORT_REGEX)) {
        importPath = path.join(BASE_PATH, importPath[1] + '.html');
        console.log('importing', importPath);

        importContents = fs.readFileSync(importPath, 'utf-8');
        contents = contents.replace(IMPORT_REGEX, wrapCode(importContents, ++i));
    }

    return contents;
}

function processMarkdown(fileName) {
    var contents = fs.readFileSync(fileName, 'utf-8');
    contents = importCode(contents);

    var template = getTemplate(contents);
    var output = md.render(contents);

    output = template.replace(/(<body.*>)([\s\S]*)(<\/body>)/m, "$1\n" + output + "\n$3");
    fs.writeFileSync(renameToHtml(fileName), output);

    console.log('remarked', fileName);
}

getSlideFiles().forEach(processMarkdown);
