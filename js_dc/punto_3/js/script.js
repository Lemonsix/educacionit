let table = [];
document.getElementById("myBtn").addEventListener("click", () => addRow()); //llamar por callback

function addRow() {
  //declaracion de objeto proyecto
  const proyecto = {
    energyType: document.getElementById("energia").value,
    description: document.getElementById("descripcion").value,
    generatedEnergy: Number(document.getElementById("energiaGenerada").value),
    budget: parseFloat(document.getElementById("presupuesto").value),
    estimatedTime: Number(document.getElementById("tiempo").value),
  };
  proyecto.effectivity = proyecto.generatedEnergy / (proyecto.budget * proyecto.estimatedTime);
  table.push(proyecto);

//agrega el nuevo proyecto al html
  let htmlTable = document.querySelector('#table'),
  row = htmlTable.insertRow(1);
  Object.keys(proyecto).reverse().forEach(key => {
    row.insertCell(key).innerHTML = proyecto[key];
  });

//resetea el formulario
  let formFields = document.getElementById('formId');
  formFields.reset();

//compara el valor nuevo con el ultimo valor mas efectivo
  let mostEffectiveValue = 0;
  let mostEffectiveProyect;
  for (let item of table){
    if (item.effectivity>mostEffectiveValue){
      mostEffectiveProyect=item;
      mostEffectiveValue=item.effectivity;
    }
  }

  //hacer promedio de los 3 tipos de energia
  let tempArray=table.filter(function(objectProyecto){
    return objectProyecto.energyType=="Eólica";
  });
  let avgTemp = tempArray.reduce((total, next) => total + next.effectivity, 0) / tempArray.length;
  document.getElementById("eolicaAvg").innerHTML=` ${avgTemp}`;


 tempArray=table.filter(function(objectProyecto){
    return objectProyecto.energyType=="Hidroeléctrica";
  });
  avgTemp = tempArray.reduce((total, next) => total + next.effectivity, 0) / tempArray.length;
  document.getElementById("hidroelectricaAvg").innerHTML=` ${avgTemp}`;

  tempArray=table.filter(function(objectProyecto){
    return objectProyecto.energyType=="Solar";
  });
  avgTemp = tempArray.reduce((total, next) => total + next.effectivity, 0) / tempArray.length;
  document.getElementById("solarAvg").innerHTML=` ${avgTemp}`;

  //Appendear el proyecto mas efectivo
document.getElementById("effectivitySection").innerHTML=
`La energía ${mostEffectiveProyect.energyType} es la mas recomendada, con una efectividad de ${mostEffectiveProyect.effectivity}.`

}
