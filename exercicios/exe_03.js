function temHabilidade(skill, skills) {
    if (skills.indexOf(skill) > -1){
        console.log(true)
    } else {
        console.log(false)
    }
    
    // ou usando operador ternario
    var verifica = skills.indexOf(skill) > -1 ? true : false
    console.log(verifica)
};   

var skills = ['React', 'Java', 'Javascript', 'React Native', 'f'];

temHabilidade('f', skills)