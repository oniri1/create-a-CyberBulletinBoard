module.exports = `* {
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  
  #smoke-p {
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  #post-container-p {
    width: 40%;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  /* 1 */
  #input-name-p {
    height: 12%;
    border-bottom: 1px solid gray;
  
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  
  #input-name-text-p {
    width: 90%;
    height: 90%;
  }
  
  /* 2 */
  #input-tag-p {
    height: 10%;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: center;
  }
  
  #line-boxs-p {
    width: auto;
  
    display: flex;
    border: 1px solid gray;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .fillter-box-p {
    width: 50px;
    background-color: rgba(128, 128, 128, 0.3);
  
    border-left: 1px solid gray;
  
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  
  /* 3 */
  #input-img-p {
    height: calc(100% - 12% - 10% - 20% - 12%);
    border-bottom: 1px solid gray;
  
    flex-wrap: wrap;
  }
  #inputImg-p {
    width: 66px;
  }
  
  /* 4 */
  #input-text-p {
    height: 20%;
    border-bottom: 1px solid #808080;
  
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  
  #input-explan-text-p {
    width: 90%;
    height: 90%;
  }
  
  /* 5 */
  #btn-container-p {
    height: 12%;
  
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  #cancel-p,
  #next-p,
  .form-p {
    height: 80%;
    width: 45%;
    border-radius: 25px;
    background-color: aqua;
  
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  #post-bt-p{
    border-radius: 25px;
    background-color: aqua;
  
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  
  /* 텍스트 중앙 맞추기 */
  
  .text-root-box-p {
    position: fixed;
    top: 0;
  
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .text-box-p {
    height: auto;
  }
  
  /* 락온 */
  .rock-on-p {
    background-color: aqua;
    font-weight: 900;
    color: white;
  }
  
  input {
    height: auto;
  }
  
  .hide-p {
    visibility: hidden;
  }
  `;
