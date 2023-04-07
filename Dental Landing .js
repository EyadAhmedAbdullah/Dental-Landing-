
// botton dark mood icon sit 
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const header = document.querySelector('header');
const nav = document.querySelector('nav');


toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
    
    // mood sun

        body.style.background = 'white';
        body.style.color = 'black';

        nav.style.background = 'white';
        nav.style.transition = '2s';


        header.style.background = '#DBEFFA';
        body.style.transition = '2s';
    }else{
        // mood dark
        body.style.background = 'rgb(36 36 36)';
        body.style.color = 'white';

        nav.style.background = 'black';
        nav.style.transition = '2s';


        header.style.background = '#DBEFFA';
        body.style.transition = '2s';
    }
});


// loding for sit 
var my_loding = document.querySelector(".min-lod");
    window.addEventListener("load" , function(){
        my_loding.style.display = "none" ;

})


// form falditon send with email 

function SendMail(){

    var params = {
  
        from_name :document.getElementById("full_name").value,
        email_id :document.getElementById("full_email").value,
        message  :document.getElementById("full_textarea").value
}
    emailjs.send('service_8qzu07n', 'template_a39yg8b',  params).then(function(res){
        alert(" 'A Successful Operation Welcome To Our World...'  ");
    })
}
 