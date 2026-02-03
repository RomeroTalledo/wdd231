const openButtom1 = document.querySelector('#openButton1');
const openButtom2= document.querySelector('#openButton2');
const openButtom3 = document.querySelector('#openButton3');

const dialogBox = document.querySelector('#dialogBox');
const dialogBoxText = document.querySelector('#dialogBox div');
const closeButton = document.querySelector('#closeButton');

// "Show the dialog" button opens the dialog modally
openButtom1.addEventListener("click",()=>{
    dialogBoxText.innerHTML="An Apple has 95 calories"
    dialogBox.showModal();
});

openButtom2.addEventListener("click",()=>{
    dialogBoxText.innerHTML="An Orange has 45 calories"
    dialogBox.showModal();
});

openButtom3.addEventListener("click",()=>{
    dialogBoxText.innerHTML="An Banana has 95 calories"
    dialogBox.showModal();
});

closeButton.addEventListener("click",()=>{
    dialogBox.close();
});
