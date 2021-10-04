const norte = ["Belém","Boa Vista", "Macapá", "Manaus", "Palmas", "Porto Velho", "Rio Branco"]
const nordeste = ["Aracaju", "Fortaleza", "João Pessoa", "Maceió", "Natal", "Recife", "Salvador", "São Luís", "Teresina"]
const centroOeste = ["Brasília", "Campo Grande", "Cuiabá", "Goiânia"]
const sudeste = ["Belo Horizonte", "Rio de Janeiro", "São Paulo", "Vitória"]
const sul = ["Curitiba", "Florianópolis", "Porto Alegre"]

const regions = ["norte", "nordeste", "centroOeste", "sudeste", "sul"];

const routeTest = [["Boa Vista","Salvador"], ["Vitória", "Cuiabá"], ["Rio de Janeiro", "Curitiba"]]

const estimateRotes = (routeTest) => {
  const rotas = []
  
  routeTest.forEach(element => {
    if (norte.includes(element[0])) {
      if (nordeste.includes(element[1])) {
        rotas.push(["Norte", "Nordeste"])
      }
      if (centroOeste.includes(element[1])) {
        rotas.push(["Norte", "Centro-oeste"])
      }
      if (sudeste.includes(element[1])) {
        rotas.push(["Norte", "Sudeste"])
      }
      if (sul.includes(element[1])) {        rotas.push(["Norte", "Sul"])
      }
    } else if (nordeste.includes(element[0])) {
      if (norte.includes(element[1])) {
        rotas.push(["Nordeste", "Norte"])
      }
      if (centroOeste.includes(element[1])) {
        rotas.push(["Nordeste", "Centro-Oeste"])
      }
      if (sudeste.includes(element[1])) {
        rotas.push(["Nordeste", "Sudeste"])
      }
      if (sul.includes(element[1])) {
        rotas.push(["Nordeste", "Sul"])
      }
    } else if (centroOeste.includes(element[0])) {
      if (norte.includes(element[1])) {
        rotas.push(["Centro-Oeste", "Norte"])
      }
      if (nordeste.includes(element[1])) {
        rotas.push(["Centro-Oeste", "Nordeste"])
      }
      if (sudeste.includes(element[1])) {
        rotas.push(["Centro-Oeste", "Sudeste"])
      }
      if (sul.includes(element[1])) {
        rotas.push(["Centro-Oeste", "Sul"])
      }
    } else if (sudeste.includes(element[0])) {
      if (norte.includes(element[1])) {
        rotas.push(["Sudeste", "Norte"])
      }
      if (nordeste.includes(element[1])) {
        rotas.push(["Sudeste", "Nordeste"])
      }
      if (centroOeste.includes(element[1])) {
        rotas.push(["Sudeste", "Centro-Oeste"])
      }
      if (sul.includes(element[1])) {
        rotas.push(["Sudeste", "Sul"])
      }
    } else if (sul.includes(element[0])) {
      if (norte.includes(element[1])) {        rotas.push(["Sul", "Norte"])
      }
      if (nordeste.includes(element[1])) {
        rotas.push(["Sul", "Nordeste"])
      }
      if (centroOeste.includes(element[1])) {
        rotas.push(["Sul", "Centro_oeste"])
      }
      if (sudeste.includes(element[1])) {
        rotas.push(["Sul", "Sudeste"])
      }
    }
  });

  console.log(rotas)
}

estimateRotes(routeTest)