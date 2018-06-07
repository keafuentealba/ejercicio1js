let valores = () =>{
  let a = document.getElementById("palabra1").value;
  let b = document.getElementById("palabra2").value;
  let resultado = computeAverageLengthOfWords(a, b);
  alert(resultado)
}

const computeAverageLengthOfWords = (palabra1, palabra2) => {

  let valor1 = palabra1.length;
  let valor2 = palabra2.length;

  return (valor1 + valor2) / 2;

}
