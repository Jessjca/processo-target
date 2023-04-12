function fibonacciSequence(n) {
  // Função que retorna a sequência de Fibonacci até o n-ésimo termo
  let sequence = [0, 1]; // Inicia a sequência com os dois primeiros termos
  while (sequence[sequence.length - 1] < n) { // Continua adicionando termos até chegar em n
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  return sequence;
}

function checkFibonacci() {
  let numero = parseInt(document.getElementById("numero").value);
  let sequenciaFibonacci = fibonacciSequence(numero);

  if (sequenciaFibonacci.includes(numero)) {
    document.getElementById("resultado").value = `O número ${numero} pertence à sequência de Fibonacci!`;
  } else {
    document.getElementById("resultado").value = `O número ${numero} não pertence à sequência de Fibonacci.`;
  }
}