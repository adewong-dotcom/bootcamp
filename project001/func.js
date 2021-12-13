function mensaje(prefijo, formateador){
    function(texto){
        return formateador(prefijo, texto);
    }
}

const formatoBienvenida = function(prefijo, text){
    return prefijo + " " + texto + "!";
}

//const formatoDespedida = (prefijo, texto) => prefijo + " " + texto + "... :(";
const formatoDespedida = (prefijo, texto) => `${prefijo} ${texto}...:(`;

const bienvenida = mensaje("hola", formatoBienvenida);
const despedida = mensaje("adios", formatoDespedida);

console.log(bienvenida("mundo"));
console.log(despedida("mundo"));