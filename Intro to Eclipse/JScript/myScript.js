let text_family_size = false;
let footerVisible = false;
let text_size = false;

function changeFontFamily(){
    let changeFont = document.getElementById('changeFont');
    if(!text_family_size) {
        changeFont.style.fontFamily = "Impact,Charcoal,sans-serif";
        changeFont.style.fontSize = "20px";
        text_family_size = true;
    }
    else{
        changeFont.style.fontFamily = "Arial, Helvetica, sans-serif";
        changeFont.style.fontSize = "16px";
        text_family_size = false;
    }
}

function showFooter(){
    let footer = document.getElementById('footer');
    if(!footerVisible){
        footer.innerHTML = "CSCU9N5, 2633872, 2019";
        footerVisible = true;
    }
    else{
        footer.innerHTML = "Intro to Eclipse.";
        footerVisible = false;
    }

}

function modFontSizeMid(){
    let changeFont = document.getElementById('changeFont');
    if(!text_size){
        changeFont.style.fontSize = "125%";
        text_size = true;
    }
    else{
        changeFont.style.fontSize = "100%";
        text_size = false;
    }

}

function modFontSizeLarge(){
    let changeFont = document.getElementById('changeFont');
    if(!text_size){
        changeFont.style.fontSize = "150%";
        text_size = true;
    }
    else{
        changeFont.style.fontSize = "100%";
        text_size = false;
    }
}

function modFontSizeSmall() {
    let changeFont = document.getElementById('changeFont');
    if(!text_size){
        changeFont.style.fontSize = "50%";
        text_size = true;
    }
    else{
        changeFont.style.fontSize = "100%";
        text_size = false;
    }
}