var input = document.getElementById('input')

function button(number){

    input.value+=number
}
function clrAll(){
    input.value=""
}
function delChar(){
    input.value=input.value.slice(0,-1)
}
function square(){
    input.value=input.value*input.value
}
function equal(){
    input.value=eval(input.value)
}