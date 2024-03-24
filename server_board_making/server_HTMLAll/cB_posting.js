const poster = (rootId, name, tag, img, text) => {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  const picBox = document.createElement("div");
  picBox.classList.add("pic-box");

  const picName = document.createElement("div");
  picName.classList.add("pic-name");
  picName.innerText = name;

  const picImg = document.createElement("img");
  picImg.classList.add("pic-img");
  picImg.src = img;
  if (img == undefined) {
    picImg.alt = "이미지 없음";
  } else {
    picImg.alt = text;
  }
  picImg.dataset.keyname = tag;

  const picText = document.createElement("div");
  picText.classList.add("pic-text");
  picText.innerText = text;

  picBox.appendChild(picName);
  picBox.appendChild(picImg);

  postDiv.appendChild(picBox);
  postDiv.appendChild(picText);

  document.getElementById(rootId).appendChild(postDiv);
};

const reSet = () => {
  //제목
  document.getElementById("nameText-p").value = null;

  //내용
  document.getElementById("explanText-p").value = null;

  //태크
  document.getElementsByClassName("rock-on-p")[0].classList.remove("rock-on-p");
  document.getElementById("line-boxs-p").children[0].classList.add("rock-on-p");

  //이미지 지우기
  // if (container.children[1]) {
  //   console.log(container.children[1].src);
  //   container.children[1].remove();
  // }
  //이미지 인풋 값 초기화하기
  // if (document.getElementById("inputImg-p").files[0]) {
  //   console.log("지우기");
  //   console.log(document.getElementById("inputImg-p").value);
  //   document.getElementById("inputImg-p").value = null;
  // } else {
  //   console.log(document.getElementById("inputImg-p").value);
  // }
};

const postList = [];

//다음 버튼
document.getElementById("next-p").onclick = (e) => {
  // const container = document.getElementById("input-img-p");
  //제목
  const name = document.getElementById("nameText-p").value;

  //태그
  const tagN = document.getElementsByClassName("rock-on-p")[0].innerText;

  //imgsrc
  const imSr = "none_img";
  // if (container.children[1]) {
  //   imgSrc = container.children[1].src;
  // }

  // console.log("img src@@@@@@@@@@", imgSrc);

  //내용
  const text = document.getElementById("explanText-p").value;

  const postArr = [];

  postArr.push(name);
  postArr.push(tagN);
  postArr.push(imgSrc);
  postArr.push(text);

  postList.push(postArr);
  // poster("post-list", name, tagN, imSr, text);

  console.log(postList);
  // 초기화
  reSet();
};

//취소하기 버튼
document.getElementById("cancel-p").onclick = (e) => {
  console.log("hide");

  document.getElementById("smoke-p").classList.toggle("hide-p");
  reSet();
};

// check = (elem) => {
//   console.log(elem);
//   console.log("실행!");
//   elem.value;
// };

// 태그
document.getElementById("line-boxs-p").onclick = (e) => {
  document.getElementsByClassName("rock-on-p")[0].classList.remove("rock-on-p");
  e.target.classList.add("rock-on-p");
};

//img
const viewImg = (elem) => {
  // 파일 가져오기
  const file = elem.files[0];

  console.log("file@@@@@@", file);

  // 파일의 이름을 찾을 수 있는 값
  // file.name;

  //
  const newImage = document.createElement("img");
  // newImage.setAttribute("class", "img");

  // 이미지의 url을 만들어서 소스로 연결
  newImage.src = URL.createObjectURL(file);

  console.log(newImage.src);

  newImage.style.width = "70%";
  newImage.style.height = "70%";
  newImage.style.marginLeft = "12%";
  newImage.style.marginRight = "12%";
  newImage.style.objectFit = "contain";

  // newImage.style.visibility = "hidden"; //이미지 숨기기

  const container = document.getElementById("input-img-p");

  if (container.children[1]) {
    container.children[1].remove();
    container.appendChild(newImage);
  } else {
    container.appendChild(newImage);
  }

  // console.log(container.children);
  // console.log(container.children[1].src);
};
