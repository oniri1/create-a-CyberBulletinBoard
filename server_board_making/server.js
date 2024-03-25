const net = require("net");
const fs = require("fs");

const static = require("./lib/static");

const { makeReq } = require("./lib/req");
const { makeResponse, redirect } = require("./lib/res");
const { sendFile } = require("./lib/res");

let postCount = 0;
const users = [
  {
    id: postCount++,
    name: "test1",
    tagN: "공격적",
    imSr: "none_img",
    text: "내용 없음1",
  },
  {
    id: postCount++,
    name: "test2",
    tagN: "공격적",
    imSr: "none_img",
    text: "내용 없음2",
  },
  {
    id: postCount++,
    name: "test3",
    tagN: "중립적",
    imSr: "none_img",
    text: "내용 없음3",
  },
  {
    id: postCount++,
    name: "test4",
    tagN: "평화적",
    imSr: "none_img",
    text: "내용 없음4",
  },
  {
    id: postCount++,
    name: "test5",
    tagN: "중립적",
    imSr: "none_img",
    text: "내용 없음5",
  },
  {
    id: postCount++,
    name: "test6",
    tagN: "평화적",
    imSr: "none_img",
    text: "내용 없음6",
  },
  {
    id: postCount++,
    name: "test7",
    tagN: "중립적",
    imSr: "none_img",
    text: "내용 없음7",
  },
  {
    id: postCount++,
    name: "test8",
    tagN: "공격적",
    imSr: "none_img",
    text: "내용 없음8",
  },
];

const getMessage = ({ header: { method, path, objId }, body }) => {
  let message = "";

  if (method == "GET") {
    if (path == "/number") {
      message = makeResponse(
        "application/json",
        JSON.stringify(users.length / 4)
      );
    } else if (path == "/obj/") {
      users.forEach((item) => {
        if (item["id"] == objId) {
          message = makeResponse("application/json", JSON.stringify(item));
        }
      });
    } else if (path == "/list") {
      message = makeResponse("application/json", JSON.stringify(users));
    } else if (static[path] != undefined) {
      const body = fs.readFileSync(static[path]);
      if (static[path].indexOf(".js") > 0) {
        message = makeResponse("text/javascript", body.toString());
      } else if (static[path].indexOf(".css") > 0) {
        message = makeResponse("text/css", body.toString());
      } else if (static[path].indexOf(".png") > 0) {
        message = sendFile("image/png", body);
      } else if (static[path].indexOf(".jpg") > 0) {
        message = sendFile("image/jpeg", body);
      } else {
        message = makeResponse("text/html", body.toString());
      }
    } else {
      message = makeResponse(
        "text/html",
        fs.readFileSync(static["/"], { encoding: "utf8" })
      );
    }
  } else if (method == "POST") {
    if (path == "/") {
      message = makeResponse(
        "application/json",
        JSON.stringify(
          users
            .slice((body.page - 1) * body.count, body.page * body.count)
            .map((item, idx) => {
              item.id = idx + (body.page - 1) * 4;
              return item;
            })
        )
      );
    } else if (path == "/write") {
      body.id = postCount++;
      users.push(body);
      message = redirect();
    }
  }

  console.log("userssssssssssss", users);
  return message;
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = makeReq(data);
    client.write(getMessage(req));
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open 3000 port");
});
