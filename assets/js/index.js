var nome = document.querySelector('#nome');
var email = document.querySelector("#email");
var tel = document.querySelector("#tel");
var mensagem = document.querySelector("#msg");
var okNome = false;
var okEmail = false;
var okTel = false;
var okMsg = false;

function validaNome(){

    let txtNome = document.querySelector("#txtNome");

    if(nome.value.length <= 2){

        txtNome.innerHTML = "Nome Inválido";
        txtNome.style.color = "red";
        okNome = false;

    }else {

        txtNome.innerHTML ="";
        okNome = true;

    }
}

function validaEmail(){

    let txtEmail = document.querySelector("#txtEmail");

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){

        txtEmail.innerHTML = "Email inválido.";
        txtEmail.style = "red";
        okEmail = false;

    }else{

        txtEmail.innerHTML = "";
        okEmail = true;

    }

}

function validaTel(){

    let txtTel = document.querySelector("#txtTel");

    if(tel.value.length < 12 || tel.value.length > 15){

        txtTel.innerHTML = "Telefone inválido.";
        txtTel.style = "red";
        okTel = false;

    }else{

        txtTel.innerHTML = "";
        okTel = true;

    }
    
}

function validaMensagem(){

    let txtMensagem = document.querySelector("#txtMensagem") 
;
    if(mensagem.value.length >= 100){

        txtMensagem.innerHTML = "O máximo de caracteres são 100.";
        txtMensagem.style.color = "red";
        txtMensagem.style.display = "block";
        okMsg = false;     

    }else{

        txtMensagem.style.display = "none";
        okMsg = true;

    }

}


function enviar(){

    if(okNome == true && okEmail == true && okTel == true && okMsg == true){

        alert("Mensagem enviada com sucesso!");

    }else{

        alert("Por favor, insira as informações corretamente.");

    }

}