let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// const varATemp = varA;

// varA = varB
// varB = varC
// varC = varATemp

// outra forma de resolver

[varA, varB, varC] = [varB, varC, varA]


console.log('%c%s', 'color: #e50000', varA, varB, varC);
