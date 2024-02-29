let cnty = document.getElementById('country');
let slt_cnty = document.getElementById('select-country');
let login = document.getElementById('login');
let loginpg = document.getElementById('login-page');
let closebtn = document.getElementById('closebtn');
let registerpg = document.getElementById('register-page');
let register = document.getElementById('register');
let close1 = document.getElementById('closebtn-1')


cnty.addEventListener('click', function(){
    if(slt_cnty.style.visibility == 'hidden'){
        slt_cnty.style.visibility = 'visible';
    }
    else{
        slt_cnty.style.visibility = 'hidden';
    }
})

login.addEventListener('click', function(){
    if(loginpg.style.visibility == 'hidden'){
        loginpg.style.visibility = 'visible';
        console.log(`visible`);
    }
    else{
        loginpg.style.visibility = 'hidden';
        console.log(`hidden`);
    }
})

closebtn.addEventListener('click', function(){
    loginpg.style.visibility = 'hidden';
})

register.addEventListener('click', function(){
    if(registerpg.style.visibility == 'hidden'){
        registerpg.style.visibility = 'visible';
    }
    else{
        registerpg.style.visibility = 'hidden';
    }
})

close1.addEventListener('click', function(){
    registerpg.style.visibility = 'hidden';
})

