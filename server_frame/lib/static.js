const fs = require("fs");
const path = require("path");

const staticObj = {};

const filePathMaker = (Path) => {
  const directory = fs.readdirSync(Path);
  console.log("다이렉토리@@@@@@@", directory);
  directory.forEach((currPathName) => {
    //폴더 내부의 모든 파일들을 하나하나씩 돈다. currPathName
    console.log(currPathName);

    const findPath = path.join(Path, currPathName); //뷰 폴더 + 파일 이름 = 경로
    const isFile = fs.statSync(findPath).isFile(); //경로에 스탯을 얻고 파일인지 검사
    console.log(isFile);
    if (isFile) {
      //파일이면
      // staticObj[findPath.replace(rootPath, "")] = findPath; //파일 이름 : 경로를 staticObj에 저장
      staticObj[findPath.slice(rootPath.length)] = findPath;
      staticObj[findPath.slice(rootPath.length).replace("index.html", "")] =
        findPath;
    } else {
      //경로는 findPath
      console.log("실행@@@@@@");

      filePathMaker(findPath);
    }
  });
};

const rootPath = path.join(__dirname, "../", "views"); //현재 뷰 폴더의 경로 저장

// console.log(directory);

filePathMaker(rootPath);

console.log(staticObj);

// const rootPath1 = path.join(__dirname, "../", "views", "write1"); //확장자가 없는 파일의 주소
// const isFile = fs.statSync(rootPath1).isFile(); //파일이 맞으면 true
// console.log(isFile);

// staticObj["/index.html"] =
//   "/Users/oniri1/desktop/std/server_STD/views/index.html";

module.exports = staticObj;
