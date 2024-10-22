const bttnSubmit = document.querySelector('button');
let text = document.querySelector('p')

bttnSubmit.onclick = bttnClick;

function bttnClick(){
    if(text.style.color === "green"){
        text.style.color = "inherit"
    }
    else text.style.color = "green";
}