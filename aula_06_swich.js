function retornaSexo(sexo){
    switch (sexo){
        case 'M':
            return "masculino";
        case "F":
            return "Feminino";
        default:
            return "Outro"
    }
};

var res = retornaSexo('F');
console.log(res)