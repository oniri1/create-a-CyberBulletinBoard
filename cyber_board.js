document.getElementById("post-btn").onclick = () => {
  console.log("a");

  document.getElementById("smoke-p").classList.toggle("hide-p");
  //   poster();
};

// 필터 부분 클릭 이벤트
document.getElementById("fillter-box1").onclick = (e) => {
  document.getElementsByClassName("rock-on")[0].classList.remove("rock-on");
  e.target.classList.add("rock-on");
};

// const poster = async () => {
//   try {
//     const postHtml = await (await fetch("./cyber_board_posting.html")).text();

//     // 이거 왜 잠겨있음?
//     const postCss = await fetch("./cyber_board_posting.html").body;

//     console.log(postHtml);
//     console.log(postCss);
//   } catch (err) {
//     console.error(err);
//   }
// };

// const setItemsInArr = async (arr, parentid) => {
//   try {
//     const liHtml = await (await fetch("./item.html")).text();

//     const tempArr = arr.map((item) => {
//       const temp = liHtml.replace("plz-set-text", item);
//       console.log(temp);
//       return temp;
//     });

//     console.log(tempArr);

//     document.getElementById(parentid).innerHTML = tempArr.join("");
//   } catch {
//     console.error(err);
//   }
// };
