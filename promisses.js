/// FAZER REQUISICAO COM JAVASCRIPT PURO
// var minhaPromise = function(){
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/eltonjncorreia');
//         xhr.send(null);

//         xhr.onreadystatechange = function(){
//             if (xhr.readyState === 4){
//                 if (xhr.status  === 200){
//                     resolve(JSON.parse(xhr.responseText));

//                 } else {
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// }

// minhaPromise()
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.warn(error);
//     });

// FAZER REQUEST COM LIB 'Axios'
axios.get('https://api.github.com/users/eltonjncorreia')
    .then(function(response){
        console.log(response.data.avatar_url);
    })
    .catch(function(error){
        console.warn(error);
    });