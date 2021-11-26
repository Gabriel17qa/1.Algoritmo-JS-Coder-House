let nombre = prompt('Hola, como te llamas?')

if(nombre)
{
 alert(' Hola ' + nombre + ' espero te encuentre muy bien en este dia' )
   
}else{

    alert('Por favor ingrese su nombre para que validemos su identidad')
}

let edad = prompt('Eres mayor de edad')

if(edad < 21){

    alert('NO PUEDES INGRESAR POR SER MENOR DE EDAD')
}else{

    alert('BIENVENIDO!')
}





