const net = require("net");
const { makeReq } = require("./lib/req");
const { makeResponse, redirect } = require("./lib/res");
//fs.readFileSync //require

const html = require("./postFile/postHTML");

const users = [];

const getMessage = ({ header: { method, path }, body }) => {
  let message = "";
  if (method == "GET") {
    if (path == "/") {
      message = makeResponse("text/html", html);
    } else if (path == "/list") {
      message = makeResponse("application/json", JSON.stringify(users));
    }
  } else if (method == "POST") {
    if (path == "/") {
      users.push(body);
      message = redirect();
    }
  }
  return message;
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    //header : body:
    //데이터는 기본적으로 헤더파일만 가져온다 form에서의 value 들이 추가로 들어온다.
    const req = makeReq(data);
    // console.log(req.header);

    // console.log(req);
    client.write(getMessage(req));
    client.end();
  });
});

server.on("error", (err) => {
  console.log(err);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open of 3000 port");
});
