function inverterString() {
  let str = document.getElementById("input-string").value;
  let strInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }

  document.getElementById("resultado").innerHTML = "A string invertida é: " + strInvertida;
}