const user = document.querySelector('.user');

const login = document.querySelector('.user-login');

user.addEventListener('click', function () {
    login.classList.toggle('active');
    login.style.backgroundColor = '#057BBE'
})

let logingbtn = document.querySelector('.logingbtn');
let email = document.querySelector('#email');
let pass = document.querySelector('#pass')

logingbtn.addEventListener('click', function () {

    if (email.value =="" && pass.value =="") {
        alert('Please Enter Email & Password')

    } else {
        alert('You are Login');
    login.style.display='none'
}
});



let form=document.querySelector('.booking-form');
let submit=document.querySelector('#submit');
let books=document.querySelector('.book')

submit.addEventListener('click',function(){
    if(books.value==""){
        alert("Please Fill The Form");

    }else{
        alert(books.value + '  Toor Booked')

    };
})



let btn=document.querySelector(".btn");
let textname=document.querySelector("#textbtn")
let number=document.querySelector("#number")

btn.addEventListener("click",function(){
if(textname.value=="" && number.value==""){
    alert("please fill The Form")

    }else{
        alert("Thank You")
    }
})


let bars=document.querySelector('.bar-icon');
let ul=document.querySelector('ul')

bars.addEventListener('click',function(){
    ul.classList.toggle('show-data')
    console.log(ul);
})

