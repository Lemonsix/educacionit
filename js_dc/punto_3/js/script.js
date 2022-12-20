let table = [];
let energyType;
let description;
let generatedEnergy;
let budget;
let estimatedTime;
let effectivity;
let proyecto={
    energyType,
    description,
    generatedEnergy,
    budget,
    estimatedTime,
    effectivity
}

proyecto.energyType="Eolica";
proyecto.description="asdasdasd";
proyecto.generatedEnergy=150;
proyecto.budget=4000;
proyecto.estimatedTime=6;
addRow(proyecto);

function addRow(){
    let newRow=document.createElement("tr");
    newRow.innerHTML=`<td>${proyecto.energyType}</td>
    <td>${proyecto.description}</td>
    <td>${proyecto.generatedEnergy}</td>
    <td>${proyecto.budget}</td>
    <td>${proyecto.estimatedTime}</td>
    <td>${proyecto.effectivity}</td>`;
    //aca deberia insertarlo en la tabla
}


function effectivityCalculation(generatedEnergy,budget,estimatedTime){
    return (generatedEnergy/(budget*estimatedTime));
}

