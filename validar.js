function validar(){
	var nombre,apellidos,correo,expresion,expresionNombreApellidos,notificaciones,condiciones;
    nombre=document.getElementById("nombre").value;
	apellidos=document.getElementById("apellidos").value;
	correo=document.getElementById("correo").value;
	notificaciones=document.getElementById("notificaciones").value;
	condiciones=document.getElementById("condiciones")
	expresion=/\w+@\w+\.[a-z]/;
	expresionNombreApellidos=/^[a-zA-ZÀ-ÿ\s]/;

	if(nombre===""||apellidos===""||correo===""){
		alert("Todos los campos son obligatorios");
		return false;
	}
	else if(nombre.length>50){
		alert("El nombre es muy largo");
		return false;
	}
	else if(apellidos.length>50){
		alert("El apellido es muy largo");
		return false;
	}
	else if(!expresionNombreApellidos.test(nombre)){
		alert("El nombre no es valido");
		return false;
	}
	else if(!expresionNombreApellidos.test(apellidos)){
		alert("El apellido no es valido");
		return false;
	}
	else if(!expresion.test(correo)){
		alert("El correo no es valido");
		return false;
	}
}
/*const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}*/ 