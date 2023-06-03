
const inputField=[...
document.querySelectorAll('.chosen-value')];

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
