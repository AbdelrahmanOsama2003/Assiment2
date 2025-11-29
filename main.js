const path = require("node:path")

//function logFileAndDir() {
//  console.log({
//      File: __filename,
//     Dir: path.dirname(__filename)
//  });
//}

//logFileAndDir();
//------------------------------------------------------------------
//function getFileName(filePath) {
//  return path.basename(filePath);
//}

//console.log(getFileName("/user/files/Project.pdf")); 
//------------------------------------------------------------------

function buildPath(object) {
    return path.format(object);
}
console.log(buildPath({
    dir: "/folder",
    name: "app",
    ext: ".js"
}))

//------------------------------------------------------------------

function extension(filePath) {
    return path.extname(filePath);
}
console.log(extension("/docs/readme.md"))

//------------------------------------------------------------------
function parse(f_Path) {
    return {
        Name: path.basename(f_Path, path.extname(f_Path)),
        Ext: path.extname(f_Path)
    };
}
console.log(parse("/home/app/main.js"));

//------------------------------------------------------------------

function absolute(filePath) {
    return path.isAbsolute(filePath)
}
console.log(absolute("/home/user/file.txt"));

//------------------------------------------------------------------
function joins(...segments) {
    return path.join(...segments)

}
console.log(joins("src", "components", "App.js"));

//------------------------------------------------------------------
function resolves(relativePath) {
    return path.resolve(relativePath);

}
console.log(resolves("./index.js"));
//------------------------------------------------------------------
function twopaths(path1, path2) {
    return path.join(path1, path2);

}
console.log(twopaths("/folder1", "folder2/file.txt"));
//------------------------------------------------------------------
const fs = require('node:fs');
//function deleteFile(filePath) {
//   fs.unlink(filePath, (error) => {
//      if (error) {
//         console.error("Error deleting file:", error);
//    } else {
//       console.log("File deleted successfully");
//  }
//    });

//}
//deleteFile("D:\Assigments\abdelrahmanOasma-C45Mon&Thur_12PM_offline-Assigment2-01102219326\note.txt"); 
//------------------------------------------------------------------
function createFolder(folderPath) {
    try {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            console.log("Success");

        } else {
            console.log("Folder already exists");
        }
    } catch (error) {
        console.error("Error creating folder:", error);

    }

};
createFolder("./newFolder")
//------------------------------------------------------------------
const EventEmitter = require('node:events');
//const emitter = new EventEmitter();

//emitter.on('start', () => {
//  console.log("Welcome event triggered");
//});
//emitter.emit("start");
//------------------------------------------------------------------
const emitter = new EventEmitter();
emitter.on('login', (username) => {
    console.log(`User logged in: ${username}`);
});
emitter.emit("login", "Ahmed");
//------------------------------------------------------------------


//------------------------------------------------------------------
function writeFileAsync(path, content) {
    fs.writeFile(path, content, "utf8", function (err) {
        if (err) {
            console.log("Error writing file:", err);
        } else {
            console.log("File saved successfully.");
        }
    });
}

writeFileAsync("./async.txt", "Async save");
//------------------------------------------------------------------
function isDirectory(path) {
    return fs.existsSync(path) && fs.statSync(path).isDirectory();
}

console.log(isDirectory("./notes.txt"));

//------------------------------------------------------------------
const os = require('node:os');

function getSystemInfo() {
    return {
        Platform: os.platform(),
        Arch: os.arch()
    };
}

console.log(getSystemInfo());
