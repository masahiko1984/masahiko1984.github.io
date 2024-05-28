$(function(){
  AOS.init();

  var swiper = new Swiper(".mySwiper", {
  slidesPerView: "3",
  spaceBetween: 30,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  });

  new TypeIt("#title", {
  String: "Alex MacArthur",
  waitUntilVisible: true,
  loop: true,
})
.pause(3000)
.delete(50,{ delay: 3000 })
.go();

//querySelectorAll을 사용해 해당하는 요소들을 모두 가져온다 (배열형태를 이용하는 것)
//색을 변경할 신호등은 index이다.
//setlnterval(function)을 사용하여 1초마다 함수를 실행
const circles = document.querySelectorAll('.circle');
let activeLight = 0;

setInterval(changeLight, 2000);

function changeLight() {
// class로 지정된 circle red를 circle로 초기화시킨다
circles[activeLight].className = 'circle';  
activeLight++;

if(activeLight > 2) {
  activeLight = 0;
}

//현재의 색을 변경하고자 하는 요소이다.
//getAtrribute를 사용하여 해당 요소의 사용자 정의 속성값인 color를 가져온다.
//변경하고자 하는 요소에 classList.add를 사용해 클래스를 추가한다.
const currentLight = circles[activeLight];
currentLight.classList.add(currentLight.getAttribute('color'));
//getAttribute로 사용자 정의 속성값을 가져올 수 있음
}

})