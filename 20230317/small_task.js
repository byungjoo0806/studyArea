
let objList = [];

function createList(name, age, sex, contents, glasses){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.contents = contents;
    this.glasses = glasses;
}

function addList(){
    let inputs = document.querySelectorAll("input");
    let obj = new createList(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value)
    objList.push(obj);
}

function adding(){
    let text = "";
    objList.forEach(function(i){
        text += `<li>이름 : ${i.name} | 나이 : ${i.age} | 성별 : ${i.sex} | 내용 : ${i.contents} | 안경유무 : ${i.glasses}</li>`;
    });
    console.log(text);
    document.querySelector('#table').innerHTML = text;
}

function buttonPush(){
    addList();
    adding();
}