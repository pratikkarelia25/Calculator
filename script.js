const clear = document.getElementById('clear');
const screen = document.getElementById('screen')

function clearScreen(){
    if(screen.value=='undefined'){
        screen.value="";
    }
    screen.value="";
}

function result(){
    screen.value = eval(result.value);
}

function liveScreen(button){
    screen.value += button;
}