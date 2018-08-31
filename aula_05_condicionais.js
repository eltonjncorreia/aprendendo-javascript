function retornaSexo(sexo){
    if (sexo == 'M'){
        return "Masculino";

    } if (sexo === 'F'){
        return "Feminino";
    } else {
        return 'Outro';   
    }

};

var resultado = retornaSexo('F');
console.log(resultado);
   