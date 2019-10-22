function verifica() {
  if (document.forms[0].email.value.length == 0) {
    alert('Por favor, informe o seu EMAIL.');
	document.frmEnvia.email.focus();
    return false;
  }
  return true;
}
 
function checarEmail(){
if( document.forms[0].email.value=="" 
   || document.forms[0].email.value.indexOf('@')==-1 
     || document.forms[0].email.value.indexOf('.')==-1 )
	{
	   alert("Por favor, informe um E-MAIL válido!");
	   return false;
	}
}

function validarSenha(){
	senha1 = document.frmEnvia.senha1.value
	senha2 = document.frmEnvia.senha2.value

	if(senha1 == senha2){
		alert("SENHAS IGUAIS")
	}
	else{
		alert("SENHAS DIFERENTES")
	}
}
