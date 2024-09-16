window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-20px";
  }
}

const msg_btn = document.getElementById('msg-btn');
const msg_body = document.getElementById('msg-form-body');
const msg_btn_close = document.getElementById('msg-btn-close');
// console.log(msg_btn);



msg_btn.addEventListener('click', function(){
  
  if(msg_body.style.visibility == 'visible'){
      msg_body.style.visibility= 'hidden';
 }else{
     msg_body.style.visibility= 'visible'

 };
});

// copyright date
let d = new Date()
const year = d.getFullYear()
document.getElementById("year").innerHTML = year

// animation
