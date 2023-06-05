
const inputField=[...
document.querySelectorAll('.chosen-value')];
const checkBox=[...
document.querySelectorAll('.check-box')];
const inputText=[...
document.querySelectorAll('.input-text')];

const closeDropdown=()=>{
    dropdown.classList.remove('open');
}
for (let d = 0; d < inputField.length; d++) {
    const dropdown=document.querySelector('.value-list'+d);
    const dropdownArray=[...
    document.querySelectorAll('#item-list'+d)];
    let valueArray=[];
    dropdownArray.forEach(item=>{
        valueArray.push(item.textContent);
    });
inputField[d].addEventListener('input',()=>{
    dropdown.classList.add('open');
    let inputValue=inputField[d].value.toLowerCase();
    let valueSubstring;
    if(inputValue.length>0){
        for (let j=0;j<valueArray.length;j++) {
            if(!(inputValue.substring(0,inputValue.length)===valueArray[j].substring(0,inputValue.length).toLowerCase())){
                dropdownArray[j].classList.add('closed');
            }else{
                dropdownArray[j].classList.remove('closed');
            }
        }
    }else{
        for(let i=0;i<dropdownArray.length;i++){
            dropdownArray[i].classList.remove('closed');
        }
    }
    
});

dropdownArray.forEach(item=>{
    item.addEventListener('click',(evt)=>{
        inputField[d].value=item.textContent;
        dropdownArray.forEach(dropdown=>{
            dropdown.classList.add('closed');
        });
    });
})

    inputField[d].addEventListener('focus',()=>{
        inputField[d].placeholder='Введите';
        dropdown.classList.add('open');
        dropdownArray.forEach(dropdown=>{
            dropdown.classList.remove('closed');
        });
    });

    inputField[d].addEventListener('blur',()=>{
        inputField[d].placeholder='Выберите фильтр';
        dropdown.classList.remove('open');
    });
    
    document.addEventListener('click',(evt)=>{
        const isDropdown=dropdown.contains(evt.target);
        const isInput=inputField[d].contains(evt.target);
        if(!isDropdown && !isInput){
            dropdown.classList.remove('open');
        }
    });

}

if(window.location.pathname=="/login"){
    document.getElementById('login').style.display="none";
}
if(window.location.pathname=="/registration"){
    document.getElementById('login').style.display="none";
}

const clear=document.querySelector('.clear');
clear.addEventListener('click',()=>{
    inputField[0].value='';
    inputField[1].value='';
    inputText[0].value='';
    inputText[1].value='';
    for (let b = 0; b < checkBox.length; b++) {
        checkBox[b].checked=false;       
    }
    for (let i = 0; i < inputBody.length; i++) {
        inputBody[i].classList.remove('active');
    }
    for (let i = 0; i < inputBodyBigger.length; i++) {
        inputBodyBigger[i].classList.remove('active');
    }
})


const inputBody=[...
    document.querySelectorAll('.img-box')];
const inputBodyBigger=[...
    document.querySelectorAll('.img-box-bigger')];
for (let k = 0; k < inputBody.length; k++) {
    inputBody[k].addEventListener('click',()=>{
        if(inputBody[k].classList.value=="img-box active"){
            inputBody[k].classList.remove('active');
            console.log(inputBody[k].classList.value)
        }else{
            inputBody[k].classList.add('active');
            console.log(inputBody[k].classList.value)
        }
    })
}
for (let k = 0; k < inputBodyBigger.length; k++) {
    inputBodyBigger[k].addEventListener('click',()=>{
        if(inputBodyBigger[k].classList.value=="img-box-bigger active"){
            inputBodyBigger[k].classList.remove('active');
            console.log(inputBodyBigger[k].classList.value)
        }else{
            inputBodyBigger[k].classList.add('active');
            console.log(inputBodyBigger[k].classList.value)
        }
    })
}
