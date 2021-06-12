const 
    oldText = document.getElementById('oldTxt'),
    newText = document.getElementById('newTxt'),
    moveBtn = document.getElementById('moveBtn'),
    copyBtn = document.getElementById('copyBtn'),
    output = document.getElementById('output');

moveBtn.addEventListener('click', moveText);
copyBtn.addEventListener('click', copyText);
oldText.addEventListener('click', selAll);
newText.addEventListener('click', selAll);

function selAll(){
    this.select();
}

function moveText(){
    let temp = oldText.value;
    newText.value = temp
}
function copyText(){
    let temp = oldText.value;
    copytoClipboard(temp);
}

function copytoClipboard(str){
    const text = document.createElement('textarea');
    text.value = str;
    document.body.appendChild(text);
    text.select();

    document.execCommand('copy');
    document.body.removeChild(text);
    output.innerHTML ='Copied text :  '+text.value;
}