
// for é melhor utilizado quando sabemos o tamanho do intervalo, ou seja quando chegar a 10 ele para

for (var i = 0; i <= 10; i++){
    console.log(i + " feito com for")
};   


// while é melhor utilizado quando não sabemos o tamanho do intervalo
var j = 5000;
while (j >= 50){
    console.log(j + " feito com while")
    j /= 2;
}