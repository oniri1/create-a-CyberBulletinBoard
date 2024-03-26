const poster = (rootId, name, tag, img, text, idValue) => {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  const picBox = document.createElement("div");
  picBox.classList.add("pic-box");

  const picName = document.createElement("div");
  picName.classList.add("pic-name");
  picName.innerText = "title : " + name;

  const picImg = document.createElement("img");
  picImg.classList.add("pic-img");

  picImg.src = img;
  if (img == undefined) {
    picImg.alt = "이미지 없음";
  } else {
    picImg.alt = "Id :" + img;
  }
  picImg.dataset.keyname = tag;

  const picText = document.createElement("div");
  picText.classList.add("pic-text");
  picText.innerText = "작성 일자 : " + text;

  picBox.appendChild(picName);
  picBox.appendChild(picImg);

  postDiv.appendChild(picBox);
  postDiv.appendChild(picText);

  postDiv.id = idValue;

  document.getElementById(rootId).appendChild(postDiv);
};

let page = 1;
let count = 4;

const getUsers = async () => {
  try {
    const usersRes = await fetch("http://localhost:3000", {
      method: "post",
      mode: "no-cors",
      body: `page=${page}&count=${count}`,
    });
    console.log(usersRes);
    const usersData = await usersRes.text();
    console.log(usersData);
    const userArr = JSON.parse(usersData);
    console.log(userArr);

    const usersElem = document.getElementById("post-list");
    usersElem.innerHTML = "";
    userArr.forEach((item) => {
      poster(
        "post-list",
        item.title,
        item.createdAt,
        item.id,
        item.createdAt,
        item.id
      );
    });
  } catch (err) {
    console.error(err);
  }
};
getUsers();

const getPage = async () => {
  try {
    const countRes = await fetch("http://localhost:3000/number", {
      mode: "no-cors",
    });
    // console.log(countRes);
    const countData = await countRes.text();
    // console.log(countData);
    const pageCount = JSON.parse(countData);
    // console.log("pagecount@@@@@@@@@@", pageCount);

    const pagingElem = document.getElementById("paging");

    for (let i = 0; i < pageCount; ++i) {
      const tempLi = document.createElement("li");
      tempLi.innerHTML = i + 1;

      tempLi.onclick = () => {
        page = i + 1;
        getUsers();
      };
      pagingElem.append(tempLi);
    }
  } catch (err) {
    console.log(err);
  }
};

getPage();
