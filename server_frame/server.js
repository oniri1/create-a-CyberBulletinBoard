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
    title: "test1",
    createdAt: new Date().toLocaleString(),
    imSr: "none_img",
    text: "내용 없음1",
  },
  {
    id: postCount++,
    title: "test2",
    createdAt: new Date().toLocaleString(),
    imSr: "none_img",
    text: "내용 없음2",
  },
  {
    id: postCount++,
    title: "test3",
    createdAt: new Date().toLocaleString(),
    imSr: "none_img",
    text: "내용 없음3",
  },
  {
    id: postCount++,
    title: "test4",
    createdAt: new Date().toLocaleString(),
    imSr: "none_img",
    text: "내용 없음4",
  },
  {
    id: postCount++,
    title: "test5",
    createdAt: new Date().toLocaleString(),
    imSr: "none_img",
    text: "내용 없음5",
  },
  {
    id: postCount++,
    title: "test6",
    createdAt: new Date().toLocaleString(),
    imSr: "none_img",
    text: "내용 없음6",
  },
  {
    id: postCount++,
    title: "test7",
    createdAt: new Date().toLocaleString(),
    imSr: "none_img",
    text: "내용 없음7",
  },
  {
    id: postCount++,
    title: "test8",
    createdAt: new Date().toLocaleString(),
    imSr: "none_img",
    text: "내용 없음8",
  },
];

users.reverse();

const getMessage = ({ header: { method, path, objId }, body }) => {
  let message = "";

  if (method == "GET") {
    if (path == "/board") {
      if (static["/board/"] != undefined) {
        message = makeResponse(
          "text/html",
          fs.readFileSync(static["/board/"], {
            encoding: "utf8",
          })
        );
      }
    } else if (path == "/write") {
      if (static["/write/"] != undefined) {
        message = makeResponse(
          "text/html",
          fs.readFileSync(static["/write/"], {
            encoding: "utf8",
          })
        );
      }
    } else if (path == "/number") {
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
            .map((item) => item)
        )
      );
    } else if (path == "/write") {
      console.log(body);
      body.id = postCount++;
      body.createdAt = new Date().toLocaleString();
      users.unshift(body);
      message = redirect();
    } else if (path == "/board") {
      users.forEach((item) => {
        if (item["id"] == body.id) {
          message = makeResponse(
            "application/json",
            JSON.stringify([
              { id: item.id, title: item.title, text: item.text },
            ])
          );
          // } else if (item["id"] == objId) {
          //   message = makeResponse("application/json", JSON.stringify(item));
        }
      });
    }
  }

  return message;
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = makeReq(data);
    client.write(getMessage(req));
    // console.log("userssssssssssss", users);
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open 3000 port");
});
