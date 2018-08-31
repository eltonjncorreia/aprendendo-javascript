var usuarios = [
    {
      nome: 'Diego',
      habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
      nome: 'Gabriel',
      habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
  ];

//   O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

function escreveTexto(vetor){
    for (const v of vetor){
        console.log(
            "O "+ v.nome + " possui as habilidades:" + v.habilidades.join(', ')
        )
    }
}

escreveTexto(usuarios)