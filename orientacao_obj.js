// Modelo de abstração:
function Celular(armazenamento, memRam, processador) {
    this.armazenamento = armazenamento;
    this.memRam = memRam;
    this.processador = processador;
}

// Modelo de classe herdeira:
function Motorola(armazenamento, memRam, processador, linha, serie) {
    this.linha = linha;
    this.serie = serie;

    // Chamando is atributos da abstração:
    Celular.call(this, armazenamento, memRam, processador)
}

function Samsung(armazenamento, memRam, processador, linha, serie) {
    this.linha = linha;
    this.serie = serie;

    // Chamando is atributos da abstração:
    Celular.call(this, armazenamento, memRam, processador)
}

// Modelo de classe:
const motorolaEdge40 = new Motorola("256GB", "16GB Ram", "Dimensity 7030", "Edge 40", "Neo");

const motorolaEdge50 = new Motorola("512GB", "24GB Ram", "Snapdragon 8s gen 3", "Edge 50", "Ultra");

const samsungGalaxS24 = new Samsung("256GB", "12GB Ram", "Snapdragon 8 gen 3", "Galaxy S24", "Ultra");

const samsungGalaxyZFold = new Samsung("512GB", "12GB Ram", "Snapdragon 8 Gen 2", "Galaxy Z Fold", "5G");

// chamados de console
console.log(motorolaEdge40);
console.log(motorolaEdge50);
console.log(samsungGalaxS24);
console.log(samsungGalaxyZFold);