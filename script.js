
let update = document.getElementById('update');
let input = document.getElementById('text-input');
let ol = document.querySelector("ol");

function inputLength(){
    return input.value.length;
}

function createNewList(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    input.value = "";
    }




update.addEventListener("click",function checkNewList(){
    if(inputLength() > 0){
        createNewList();
    }
})



input.addEventListener("keypress",function checkNewList(){
    if(inputLength() > 0 && event.which === 13){
        createNewList();
    }
})



 

