var validator={
	isText: function(_string)
	{
		return (_string.match(/^[a-zA-Z]+$/));
	},
	isEmail:function(_string)
	{
		expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	    if ( !expr.test(_string) )
	    {
	        return false;
	    }
    return true;
	},
	isValidPassword: function(_string)
	{
		var isValid= true;
		if(_string.length<6 || _string=='098754' || _string=='123456' || _string=='password')
			{
				isValid= false;
			}
		return isValid;
	},
	isVacio: function(_string)
	{
	if(_string=="")
    {
    	return true;
    }
    return false;
	},
	isSelect: function(_string)
	{
		if(_string==0)
			return false
		else
			return true;
	}
}

function toMayus(inputId)
{
	inputId = $('#' + inputId );
	//inputId = document.getElementById(inputId);
	var nombreArray = inputId.val().split("");
    var primeraLetra = String(nombreArray[0]);
    var mayuscula = primeraLetra.toUpperCase();
    var espacio = false;
        
    for(var i=1; i<nombreArray.length; i++) {
         if(espacio){
            mayuscula += nombreArray[i].toUpperCase();
            espacio = false;
            } else {
                mayuscula += nombreArray[i];
                if(nombreArray[i] == " ")
                    espacio = true;
            }
        inputId.val(mayuscula);
        }
        return inputId.val();
}

function fieldsValid(){
	/* Escribe tú código aquí */
	var name= $('#name');
	var lastName= $('#lastname');
	var email= $('#input-email');
	var password= $('#input-password');
	var valor= $('#checkeador').val();
    toMayus('name');
    toMayus('lastname');
    var isvalid=true;

	if (validator.isText(name.val())){
		removeMessage('name');
		}else{
			createMessage('name','el nombre no es válido');
			isvalid= false;
			}
	if (validator.isText(lastName.val())){
		removeMessage('lastname');
		}else{
			createMessage('lastname','el apellido no es válido');
			isvalid= false;
		}
	if (validator.isEmail(email.val())) {
		removeMessage('input-email');
		}else{
			createMessage('input-email','el email no es válido');
			isvalid= false;
		}
	if (validator.isValidPassword(password.val())) {
		removeMessage('input-password');
		}else{
			createMessage('input-password','el password no es válido');
			isvalid= false;
		}
	if (validator.isSelect(valor)) {
		removeMessage('checkeador');
		}else{
			createMessage('checkeador','no eligio una opcion');
			isvalid= false;
		}

	return isvalid;
}
function removeMessage(inputId)
{
	var elemento= $('#' + inputId);
	//if (elemento.next() != null) {
	if (elemento.parent().find('span').length > 0) {
		//elemento.next().remove();
		elemento.parent().find('span').remove();
	}
}
function createMessage(inputId, message)
{
	var elemento= $('#' + inputId);
	if (!elemento.next()) {
		//var span = document.createElement('span');
		//span.innerHTML= message;
		//elemento.parent().append(span);
		elemento.parent().append('<span>'+ message +'</span>');
	}else
	{
		if(elemento.next().is('span'))
		{
			elemento.next().html(message);
		}else{
			elemento.parent().find('span').remove();
			//var span= document.createElement('span');
			//span.innerHTML= message;
			//elemento.parent().append(span);
			elemento.parent().append('<span>'+ message +'</span>');
		}
	}

}

function validateForm(){
	if(fieldsValid()){
		alert("se envio el formulario!!");
	}
}

$( "form.form-signup" ).submit(function(event) {
	event.preventDefault();
});

$('.form-signup input').on('keyup',function(){
	fieldsValid();	
})

$('.form-signup select').change(function(){
	fieldsValid();	
});