//다음 버튼
document.getElementById("next-p").onclick = (e) => {
  //제목
  console.log(document.getElementById("nameText-p").value);

  //내용
  console.log(document.getElementById("explanText-p").value);

  const container = document.getElementById("input-img-p");

  console.log(container.children[1].src);

  // 초기화
  //제목
  document.getElementById("nameText-p").value = null;
  //내용
  document.getElementById("explanText-p").value = null;
  container.children[1].remove();
};

//취소하기 버튼
document.getElementById("cancel-p").onclick = (e) => {
  console.log("hi");

  document.getElementById("smoke-p").classList.toggle("hide-p");
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

viewImg = (elem) => {
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
  newImage.style.objectFit = "contain";

  // newImage.style.visibility = "hidden"; //이미지 숨기기

  const container = document.getElementById("input-img-p");

  if (container.children[1]) {
    container.children[1].remove();
    container.appendChild(newImage);
    console.log("hi");
  } else {
    container.appendChild(newImage);
  }

  console.log(container.children);
  console.log(container.children[1].src);
};
