const postCSS = require("./postCSS");
const postJs = require("./postJS");
const mainCSS = require("./mainCSS");
const mainJs = require("./mainJS");
const postListMake = require("./postListMake");
const typingJs = require("./typingJs");

module.exports = `<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>${postCSS}</style>
  <style>${mainCSS}</style>
</head>
<body>
<div>
  <div id="header">
    <div id="type1" class="text-root-box">mega cute hamsters site!</div>
  </div>
  <div id="menu-container">
    <!-- <div class="hamster class"><div></div></div>
    <div class="hamster class"><div></div></div>
    <div class="hamster class"><div></div></div>
    <div class="hamster class"><div></div></div> -->
  </div>
  <div id="duo-container"></div>
  <div id="item-container">
    <div id="ad-box">
      <!-- 광고 -->
      <div id="ad-items" style="color: white">
        <div class="ads" id="ad1">
          나중에 움직이는 광고 이미지를 넣을 예정
        </div>
        <div class="ads" id="ad2">
          나중에 움직이는 광고 이미지를 넣을 예정
        </div>
        <div class="ads" id="ad3">
          나중에 움직이는 광고 이미지를 넣을 예정
        </div>
        <div class="ads" id="ad4">
          나중에 움직이는 광고 이미지를 넣을 예정
        </div>
      </div>
    </div>
    <!-- 포지션 필터 -->
    <div id="position-fillters">
      <div id="fillter-boxs">
        <div id="fillter-box1">
          <div id="line-boxs">
            <div class="fillter-box rock-on" id="left-none">전부</div>
            <div class="fillter-box">공격적</div>
            <div class="fillter-box">중립적</div>
            <div class="fillter-box">평화적</div>
          </div>
          <!--  -->
          <div class="standard-box" id="rank-box">움직이는 사진</div>
          <!--  -->
          <div class="standard-box" id="tier-box">연습용 1</div>
          <!--  -->
          <div class="standard-box" id="certified-box">연습용 2</div>
        </div>
        <div id="fillter-box2">
          <div class="standard-box">korea</div>
          <div class="standard-box write-btn rock-on" id="post-btn">
            글 쓰기
          </div>
        </div>
      </div>
    </div>
    <!-- 게시글 -->
    <div id="post-list">
      <!--  -->
      <div class="post">
        <div class="pic-box">
          <div class="pic-name">햄스터 제목</div>
          <img
            class="pic-img"
            src=""
            alt="이미지를 넣어주십쇼!"
            data-keyname="공격적"
          />
        </div>
        <div class="pic-text">
          이 칸은 게시글이 올라왔을 때의 예시 입니다
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</div>
<!-- 포스팅 -->


<form action="http://localhost:3000" method="post">
  <div class="text-root-box-p hide-p" id="smoke-p">
    <div class="text-box-p" id="post-container-p">
      <!-- 햄스터 이름 입력 칸 -->
      <div id="input-name-p">
        <div id="input-name-text-p" style="color: white">
          제목
          <input id="nameText-p" type="text" name="name" placeholder="이름 입력"/>
        </div>
      </div>
      <!-- 햄스터 종류 선택 칸 -->
      <div id="input-tag-p">
        <input type="text" name="tagN" placeholder="공격적 중립적 평화적 중 하나를 입력하세요."/>
      </div>
      <!-- 사진 올리기 -->
      <div id="input-img-p">
        <div style="height: auto; color: white">
          나중에 사진 올리는 기능을 추가할 칸 입니다.
        </div>
        <input style="display:none" type="text" name="imSr" placeholder="이미지" Value="none_img"/>
      </div>

      <div id="input-text-p">
        <div id="input-explan-text-p" style="color: white">
          내용
          <input id="explanText-p" type="text" name="text" placeholder="내용 입력"/>
        </div>
      </div>
      <!-- cancel,next bt -->
      <div id="btn-container-p">
        <button type="reset" id="cancel-p">취소하기</button>
        <button id="next-p">게시하기</button>

      </div>
    </div>
  </div>
</form>




  <script>${postJs}</script>
  <script>${mainJs}</script>
  <script>${postListMake}</script>
  <script>${typingJs}</script>
</body>
</html>`;
