let btnMostrar = <HTMLButtonElement>document.getElementById("btnMostrar");
const arregloDeNumeros = [2, 4, 8, 5, 7];
let i: number = 0;

function mostrarArreglo(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log(" ", arr[i]);
    console.log("\n ");
  }
}
btnMostrar.addEventListener("click", () => {
  mostrarArreglo(arregloDeNumeros);
});
