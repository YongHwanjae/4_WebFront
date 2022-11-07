const inputId = document.getElementById("inputId");

inputId.addEventListener("change", function(){
    const regEx = /^[a-z][\w_-]{5,13}$/;
    // const regEx=/^[a-z][a-zA-Z\d\-\_]{5,13}/;

    if(regEx.test(inputId.value)){
        inputId.style.backgroundColor = "springgreen";
    } else{
        inputId.style.backgroundColor = "red";
        inputId.style.color = "white";
    }
})

const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");
inputPwConfirm.addEventListener("keyup", function(){
    if(inputPw.value.trim().length ==0){
        
        inputPwConfirm.value="";
        // this.value="";
        
        alert("비밀번호를 입력해주세요");
        inputPw.focus();
    }
})

const pwMessage = document.getElementById("pwMessage");

inputPw.addEventListener("keyup", function(){

    if(inputPw.value == inputPwConfirm.value){
        pwMessage.innerText = "비밀번호 일치";
        // pwMessage.style.color = "green"; // 직접 CSS추가

        // 클래스 이용방법
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");


    } else{
        pwMessage.innerText="비밀번호 불일치";
        // pwMessage.style.color="red"; // 직접 CSS추가

        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");

    }
});

inputPwConfirm.addEventListener("keyup", function(){
    if(inputPw.value == inputPwConfirm.value){
        pwMessage.innerText = "비밀번호 일치";
        // pwMessage.style.color = "green"; // 직접 CSS추가

        // 클래스 이용방법
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");


    } else{
        pwMessage.innerText="비밀번호 불일치";
        // pwMessage.style.color="red"; // 직접 CSS추가

        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");

    }

});





const inputName = document.getElementById("inputName");
const nameMessage = document.getElementById("nameMessage");
inputName.addEventListener("change", function(){
    const regEx = /^[가-힣]{2,5}$/;

    if(regEx.test(inputName.value)){
        nameMessage.innerText = "정상입력";
        nameMessage.style.color = "green";
    } else{
        nameMessage.innerText = "한글만 입력하세요";
        nameMessage.style.color = "red";
    }
});


function validate(){
// const inputTel = document.getElementById("inputTel");
// const gender = document.querySelectorAll("[name='gender']");

//     if(gender[0].checked == false && gender[1].checked == false){
//         alert("성별을 선택해주세요.");
//         return false;
//     } else{
//         return true;
//     }


// 방법 1)
    /*
    const gender = document.getElementsByName("gender"); // 요소 2개짜리 배열 
    
    // 라디오 / 체크박스.checked : 체크되면 true/ 아니면 false
    if(!gender[0].checked && !gender[1].checked){
        alert("성별을 선택해주세요.");
        return false;
    }
    */

    // 방법2)
    const gender = document.querySelector("input[name='gender']:checked");
    // 체크된 성별 라디오 버튼만 얻어오기

    if(gender == null){
        alert("성별을 선택해주세요.");
        return false;
    }

    const inputTel = document.getElementById("inputTel");

    const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
    if(!regEx.test(inputTel.value)){
        alert("전화번호의 형식이 올바르지 않습니다.");

        return false;
    }
     return true;



}




