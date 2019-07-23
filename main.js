var text = document.getElementById('text');

function bold(){
    if(text.style.fontWeight=='bold')
    text.style.fontWeight = 'normal';
    else text.style.fontWeight = 'bold'
}
function italique(){
    if(text.style.fontStyle=='italic')
    text.style.fontStyle = 'normal';
    else text.style.fontStyle = 'italic'
}


function und(){
    if(text.style.textDecoration=='underline')
    text.style.textDecoration = 'none';
    else text.style.textDecoration = 'underline'}


    function sizes(){
        text.style.fontSize=document.getElementById('size').value;
    }
    function fontfam(){

        text.style.fontFamily=document.getElementById('ar').value;
    }