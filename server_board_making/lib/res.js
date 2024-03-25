const makeHeader = (type, length) => `HTTP/1.1 200 Ok
Content-Type: ${type}
Content-Length: ${length}`;

const makeResponse = (type, body) => {
  body = Buffer.from(body);
  return `${makeHeader(type, body.length)}

${body.toString()}`;
};

const redirect = () => {
  return `HTTP/1.1 301 Moved Permenently
Content-Type: text/html
Content-Length: 0
connection: Close
Location: /

`;
};

const sendFile = (type, body) => {
  const headerBuffer = Buffer.from(`${makeHeader(type, body.length)}

`);
  const tempBuffer = Buffer.concat(
    //concat(버퍼[배열],길이)
    [headerBuffer, body],
    headerBuffer.length + body.length
  );
  return tempBuffer;
};

module.exports = { makeResponse, redirect, sendFile };
