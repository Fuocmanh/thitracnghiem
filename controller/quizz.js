// demo chuyển câu hỏi, nộp bài và hiển thị kết quả
// next câu hỏi 
function nextq() {
  var q1 = document.getElementById("q1");
  var q2 = document.getElementById("q2");
  var a1 = document.getElementById("a1");
  var a2 = document.getElementById("a2");
  var buttonnext = document.getElementById("nextbtn");
  var submitbtn = document.getElementById("submitbtn");
  var sq = document.getElementById("success-q");
  // var i= 1;
  // if(i==1){
  q1.style.display = "none";
  q2.style.display = "block";
  a1.style.display = "none";
  a2.style.display = "block";
  buttonnext.style.display = "none";
  submitbtn.style.display = "block";
  sq.innerHTML = "2/10 câu";
  sq.style.width = "20%";
  // i++;
  // }
}
// back câu hỏi
function backq() {
  var q1 = document.getElementById("q1");
  var q2 = document.getElementById("q2");
  var a1 = document.getElementById("a1");
  var a2 = document.getElementById("a2");
  var buttonnext = document.getElementById("nextbtn");
  var submitbtn = document.getElementById("submitbtn");
  // var sq= document.getElementById("success-q")
  // var i= 2;
  // if(i==2){
  q1.style.display = "block";
  q2.style.display = "none";
  a1.style.display = "block";
  a2.style.display = "none";
  buttonnext.style.display = "block";
  submitbtn.style.display = "none";
  // sq.innerHTML="1/10 câu";
  // sq.style.width="10%";
  //   i++;
  // }
}

// nộp bài
function nopq() {
  var pageq = document.getElementById("pageq");
  var ketqua = document.getElementById("ketqua");
  ketqua.style.display = "block";
  pageq.style.display = "none";
}

// demo nên cần reset các thay đổi
function reset() {
  var q1 = document.getElementById("q1");
  var q2 = document.getElementById("q2");
  var a1 = document.getElementById("a1");
  var a2 = document.getElementById("a2");
  var buttonnext = document.getElementById("nextbtn");
  var submitbtn = document.getElementById("submitbtn");
  var pageq = document.getElementById("pageq");
  var ketqua = document.getElementById("ketqua");
  var sq = document.getElementById("success-q");
  sq.innerHTML = "1/10 câu";
  sq.style.width = "10%";
  ketqua.style.display = "none";
  pageq.style.display = "block";
  q1.style.display = "block";
  q2.style.display = "none";
  a1.style.display = "block";
  a2.style.display = "none";
  buttonnext.style.display = "block";
  submitbtn.style.display = "none";
}
