const norte = ["Belém","Boa Vista", "Macapá", "Manaus", "Palmas", "Porto Velho", "Rio Branco"]
const nordeste = ["Aracaju", "Fortaleza", "João Pessoa", "Maceió", "Natal", "Recife", "Salvador", "São Luís", "Teresina"]
const centroOeste = ["Brasília", "Campo Grande", "Cuiabá", "Goiânia"]
const sudeste = ["Belo Horizonte", "Rio de Janeiro", "São Paulo", "Vitória"]
const sul = ["Curitiba", "Florianópolis", "Porto Alegre"]

const rotaTest = [["Boa Vista","Salvador"], ["Vitória", "Cuiabá"], ["Rio de Janeiro", "Curitiba"]]


mapStatesRoute = {
  norteNordeste: false,
  norteCentro: false,
  norteSudeste: false,
  norteSul: false,
  nordesteNorte: false,
  nordesteCentro: false,
  nordesteSudeste: false,
  nordesteSul: false,
  centroNorte: false,
  centroNordeste: false,
  centroSudeste: false,
  centroSul: false,
  sudesteNorte: false,
  sudesteNordeste: false,
  sudesteCentro: false,
  sudesteSul: false,
  sulNorte: false,
  sulNordeste: false,
  sulCentro: false,
  sulSudestes: false,
}

const estimateRotes = (rotaTest) => {
  const stateRoutes = mapStatesRoute;
  
  rotaTest.forEach(element => {
    if (norte.includes(element[0])) {
      if (nordeste.includes(element[1])) {
        stateRoutes.norteNordeste = true;
      }
      if (centroOeste.includes(element[1])) {
        stateRoutes.norteCentro = true;
      }
      if (sudeste.includes(element[1])) {
        stateRoutes.norteSudeste = true;
      }
      if (sul.includes(element[1])) {
        stateRoutes.norteSul = true;
      }
    } else if (nordeste.includes(element[0])) {
      if (norte.includes(element[1])) {
        stateRoutes.nordesteNorte = true;
      }
      if (centroOeste.includes(element[1])) {
        stateRoutes.nordesteCentro = true;
      }
      if (sudeste.includes(element[1])) {
        stateRoutes.nordesteSudeste = true;
      }
      if (sul.includes(element[1])) {
        stateRoutes.nordesteSul = true;
      }
    } else if (centroOeste.includes(element[0])) {
      if (norte.includes(element[1])) {
        stateRoutes.centroNorte = true;
      }
      if (nordeste.includes(element[1])) {
        stateRoutes.centroNordeste = true;
      }
      if (sudeste.includes(element[1])) {
        stateRoutes.centroSudeste = true;
      }
      if (sul.includes(element[1])) {
        stateRoutes.centroSul = true;
      }
    } else if (sudeste.includes(element[0])) {
      if (norte.includes(element[1])) {
        stateRoutes.sudesteNorte = true;
      }
      if (nordeste.includes(element[1])) {
        stateRoutes.sudesteNordeste = true;
      }
      if (centroOeste.includes(element[1])) {
        stateRoutes.sudesteCentro = true;
      }
      if (sul.includes(element[1])) {
        stateRoutes.sudesteSul = true;
      }
    } else if (sul.includes(element[0])) {
      if (norte.includes(element[1])) {
        stateRoutes.sulNorte = true;
      }
      if (nordeste.includes(element[1])) {
        stateRoutes.sulNordeste = true;
      }
      if (centroOeste.includes(element[1])) {
        stateRoutes.sulCentro = true;
      }
      if (sudeste.includes(element[1])) {
        stateRoutes.sulSudestes = true;
      }
    }
  });

  console.log(Object.entries(stateRoutes).forEach((value) => {
    if (value[1] === true) {
      console.log(value)
    }
  }))
}

estimateRotes(rotaTest)