function isValid(s) {
    const stack = [];
    const bracketMap = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.length === 0 || stack[stack.length - 1] !== bracketMap[char]) {
          return false;
        }
        stack.pop();
      }
    }
  
    return stack.length === 0;
  }
  
  module.exports = { isValid };