var btnCriaBox = document.querySelector('button[class=boxRed');

btnCriaBox.onclick = function(){
    var boxs = document.createElement('div');
    // boxs.setAttribute('style', 'width=100px');
    
    boxs.style.width = 150;
    console.log(boxs.style.height = 150);
    boxs.style.marginTop = 100;
    boxs.style.backgroundColor = '#f00';
    console.log(boxs);
    boxs.appendChild(document.createTextNode('criando texto in box'));

    var bodyElement = document.querySelector('div[class=container]');
    bodyElement.appendChild(boxs);

    
}



