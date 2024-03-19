document.getElementById("post-btn").onclick = () => {
  console.log("a");
  //   poster();
};

const poster = async () => {
  try {
    const postHtml = await (await fetch("./cyber_board_posting.html")).text();

    // 이거 왜 잠겨있음?
    const postCss = await fetch("./cyber_board_posting.html").body;

    console.log(postHtml);
    console.log(postCss);
  } catch (err) {
    console.error(err);
  }
};

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
