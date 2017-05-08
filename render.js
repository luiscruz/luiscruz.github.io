const phantom = require('phantom');
var fs = require('fs');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on("onResourceRequested", function(requestData) {
        console.info('Requesting', requestData.url)
    });
    const status = await page.open('http://0.0.0.0:8000/render.html');
    console.log(status);
    const content = await page.property('content');
    fs.writeFile("./index.html", content, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    await instance.exit();
}());