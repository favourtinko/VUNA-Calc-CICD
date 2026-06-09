'use strict';
function evaluateExpression(expr) {
  // basic safety check
  if (!/^[0-9+\-*/(). \t]+$/.test(expr)) throw new Error('Invalid expression');
  return Function('"use strict"; return (' + expr + ')')();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { evaluateExpression };
}