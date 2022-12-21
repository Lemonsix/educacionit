let table = [];
document.getElementById("myBtn").addEventListener("click", () => addRow()); //llamar por callback

function addRow() {
  const proyecto = {
    energyType: document.getElementById("energia").value,
    description: document.getElementById("descripcion").value,
    generatedEnergy: Number(document.getElementById("energiaGenerada").value),
    budget: parseFloat(document.getElementById("presupuesto").value),
    estimatedTime: Number(document.getElementById("tiempo").value),
  };
  proyecto.effectivity = proyecto.generatedEnergy / (proyecto.budget * proyecto.estimatedTime);
  table.push(proyecto);
  document.getElementById("tableBody").innerHTML += `
    <tr>
      <td>${proyecto.energyType}</td>
      <td>${proyecto.description}</td>
      <td>${proyecto.generatedEnergy}</td>
      <td>${proyecto.budget}</td>
      <td>${proyecto.estimatedTime}</td>
      <td>${proyecto.effectivity}</td>
    </tr>
    `;
  let mostEffectiveValue = 0;
  let mostEffectiveProyect;
  for (let item of table){
    if (item.effectivity>mostEffectiveValue){
      mostEffectiveProyect=item;
      mostEffectiveValue=item.effectivity;
    }
  }
  //Appendear el proyecto mas efectivo
}
