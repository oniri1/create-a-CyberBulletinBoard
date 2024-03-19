document.getElementById("next-p").onclick = (e) => {
  console.log(document.getElementById("nameText-p").value);
};

// check = (elem) => {
//   console.log(elem);
//   console.log("실행!");
//   elem.value;
// };

document.getElementById("line-boxs-p").onclick = (e) => {
  document.getElementsByClassName("rock-on-p")[0].classList.remove("rock-on-p");
  e.target.classList.add("rock-on-p");
};

viewImg = (elem) => {
  // 파일 가져오기
  const file = elem.files[0];

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
