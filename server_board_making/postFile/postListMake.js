module.exports = `const getUsers = async () => {
  try {
    const usersRes = await fetch("http://localhost:3000/list", {
      mode: "no-cors",
    });
    console.log(usersRes);
    const usersData = await usersRes.text();
    console.log(usersData);
    const usersArr = JSON.parse(usersData);
    console.log(usersArr);
    const usersElem = document.getElementById("users");
    usersArr.forEach((item) => {
      poster("post-list", item.name, item.tagN, item.imSr, item.text);
    });
  } catch (err) {
    console.error(err);
  }
};

getUsers();
`;
