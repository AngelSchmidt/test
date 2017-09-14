//Si la palabra termina en "ar", se le quita los dos ultimos caracteres
//Si la palabra inicia con z, se le a;ade "pe" al final de la palabra
//Si la palabra traducida  tiene 10 o mas letras se ebe partir a la mitad y unir con su guion
//Si la pabalbra original es un palindromo ninguna de las anteriores reglas funciona, y se devuelve la palabra intercalando entre mayusculas y minusculas.

function platzom(str){
    let translation = str;

    if(str.toLowerCase().endsWith('ar')){
        translation = str.slice(0,-2)
    }

    //Si la palabra inicia con z, se le a;ade "pe" al final de la palabra

    if(str.toLowerCase().startsWith('z')){
        translation += 'pe'
    }
    
    let i = str.length;
    let minus = str.toLowerCase()
    if(minus.length >= 10){
        
    }

    let length = translation.length;
    if(length >= 10){
        const fHalf = translation.slice(0, Math.round(length/2))
        const sFalf = translation.slice(Math.round(length/2));
        translation = `${fHalf}-${sHalf}`;
        
    }
    
    const reverse = (str) => str.split('').reverse.join('');
    function minMay(str){
        const l = str.length;
        let translation = "";
        let capitalize = true;
        for(let i = 0; i<length; i++){
            const char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
        }
    }
    
    if(str = reverse(str)){
        return minMay(str);
    }

    return translation;

}

console.log(platzom("programar"));
console.log(platzom("zorro"))