let table = [];
document.getElementById("formId").addEventListener("submit", addRow);

function addRow() {
  alert("hasta aca llega");
  const proyecto = {
    energyType: document.getElementById("energia").value,
    description: document.getElementById("descripcion").value,
    generatedEnergy: document.getElementById("energiaGenerada").value,
    budget: document.getElementById("presupuesto").value,
    estimatedTime: document.getElementById("tiempo").value,
    //effectivity: (this.generatedEnergy / (this.budget * this.estimatedTime)),
  };
  table.push(proyecto);
  alert(table);
}

//aca tengo que traer los valores del form
