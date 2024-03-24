const parseHeader = (str) => {
  const arr = str.split("\r\n");
  const [method, path, protocol] = arr[0].split(" ");
  const temp = { method, path, protocol };

  console.log("req.js 6번 줄", temp);

  for (let i = 1; i < arr.length; ++i) {
    //arr[i]번째에서  ": "가 있는 위치를 찾는다.
    const tempIdx = arr[i].indexOf(": ");

    //temp에서 : 를 기준으로 자르고 이름 = 내용을 넣는다. 만약 test: dd 이라면
    //temp[arr[i].slice(0, tempIdx)] = temp[test]="dd"로 해석 할 수 있다 +2인 이유는 ": "가 2개의 범위를 가지고있기 때문이다.
    temp[arr[i].slice(0, tempIdx)] = arr[i].slice(tempIdx + 2);
  }

  return temp;
};

const parseBody = (str) => {
  // console.log("들어가기 전");
  if (str.length == 0) return {};

  // console.log("들어간 후");

  const body = {};
  const bodyArr = str.split("&");

  bodyArr.forEach((item) => {
    console.log("req30줄", item);
    item = item.replaceAll("+", " ");
    console.log("리플@@@@", item);
    const [name, value] = item.split("=");
    body[name] = decodeURI(value);
  });

  console.log("req.js 34번 째 줄", body);
  return body;
};

const makeReq = (data) => {
  const tempStr = data.toString();

  console.log(tempStr);

  const [headerStr, bodyStr] = tempStr.split("\r\n\r\n");

  // console.log(
  //   "@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
  //   headerStr,
  //   "headerEnd@@@@@@@@@",
  //   bodyStr
  // );

  return { header: parseHeader(headerStr), body: parseBody(bodyStr) };
};

module.exports = { makeReq };
