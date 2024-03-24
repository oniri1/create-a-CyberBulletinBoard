module.exports = `* {
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #header {
    height: 40px;
    background-color: rgba(0, 0, 255, 0.5);
  }
  
  #menu-container {
    height: 84px;
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  #duo-container {
    height: 48px;
    background-color: rgba(0, 0, 0, 0.8);
    border-top: 1px solid rgba(0, 0, 0, 1);
  }
  
  /* 광고부터 포함 */
  
  #item-container {
    min-height: 1000px;
    background-color: rgba(0, 0, 0, 0.85);
  }
  
  /* 광고 */
  
  #ad-box {
    /* width: 100%; */
    height: 228px;
  
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  
  #ad-items {
    min-width: 95%;
    width: 95%;
    height: 228px;
    background-color: rgba(0, 0, 200, 0.3);
    display: flex;
  }
  
  .ads {
    flex: 1;
    width: auto;
    /* height: 100%; */
    display: flex;
  }
  
  /* #ad1 {
    background: url(imgs/1.gif);
  }
  #ad2 {
    background: url(imgs/2.gif);
  }
  #ad3 {
    background: url(imgs/3.gif);
  }
  #ad4 {
    background: url(imgs/4.gif);
  } */
  /* #ad1,
  #ad2,
  #ad3,
  #ad4 {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  } */
  /* 여기까지 광고 */
  
  /* 필터 */
  #position-fillters {
    /* width: 100%; */
    height: 42px;
    /* background-color: brown; */
  
    display: flex;
    justify-content: space-evenly;
  
    margin-top: 32px;
  }
  
  #fillter-boxs {
    width: 95%;
    /* height: 100%; */
    /* background-color: salmon; */
  
    display: flex;
    justify-content: space-between;
  }
  
  #fillter-box1 {
    /* width: auto; */
    min-width: 400px;
    width: 55%;
    /* background-color: aqua; */
    display: flex;
  
    justify-content: space-between;
  }
  
  /* 라인별 */
  #line-boxs {
    width: auto;
  
    display: flex;
    border: 1px solid gray;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .fillter-box {
    width: 50px;
    background-color: rgba(128, 128, 128, 0.3);
  
    border-left: 1px solid gray;
  
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  
  .text-root-box {
    display: flex;
  
    align-items: center;
  
    text-align: center;
  
    justify-content: center;
  }
  .text-box {
    height: auto;
  }
  
  #left-none {
    border-left: none;
  }
  /* 여기까지 라인별 */
  
  /* 랭크 박스 */
  
  .standard-box {
    width: 100px;
    background-color: rgba(128, 128, 128, 0.3);
    border: 2px solid gray;
    border-radius: 10px;
  
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  
  #certified-box {
    width: 120px;
  }
  
  /*  */
  #fillter-box2 {
    display: flex;
  
    width: 270px;
    justify-content: space-between;
    /* background-color: aqua; */
  }
  
  .write-btn {
    width: 150px;
  }
  
  .rock-on {
    background-color: rgba(0, 255, 255, 0.76);
    color: white;
    font-weight: 900;
  }
  
  /* 게시글 리스트 */
  
  #post-list {
    height: auto;
    background-color: gold;
  }
  .post {
    height: auto;
    border-top: 2px solid gray;
    display: flex;
    border-bottom: 3px solid hotpink;
  }
  .pic-box {
    width: 150px;
  
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  
  .pic-name {
    width: 150px;
    height: auto;
  }
  
  .pic-img {
    height: 150px;
    width: 150px;
    object-fit: cover;
  }
  
  .pic-text {
    width: auto;
    height: auto;
    padding: 5px;
  }
  `;