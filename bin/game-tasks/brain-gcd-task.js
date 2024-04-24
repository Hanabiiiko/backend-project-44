function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

const brainGcdTask = () => {
  const operand1 = Math.round(Math.random() * 50);
  const operand2 = Math.round(Math.random() * 50);

  const answer = gcd(operand1, operand2);

  return [`${operand1} ${operand2}`, answer]; // basicaly return [question, answer]
};

export default brainGcdTask;
