var sexo = "M", idade = 12;

var res;
        
if (sexo == "F" || idade > 12){
    res = true

} else {
    res = false
};

//outra maneira mais facil de validade esse resultado é assim
var res = sexo === "M";
console.log(res)