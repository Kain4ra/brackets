module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++)     {
      if (str[i] == bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
        stack.push(str[i]);
        break;
      }
      else if (str[i] == bracketsConfig[j][0] && bracketsConfig[j][0] == bracketsConfig[j][1]) {
        if (count == 0) {
          stack.push(str[i]);
          count++;
          break;
        } else if (count > 0 && str[i] !== stack[stack.length -1]) {
          stack.push(str[i]);
          count++;
          break;
        } else {
          let lastOpenBracket = stack.pop();
          count--;
          if (lastOpenBracket !== bracketsConfig[j][0]) {
            return false;
          }
          break;
        }
      }
      else if (str[i] == bracketsConfig[j][1] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
        let lastOpenBracket = stack.pop();
        if (lastOpenBracket !== bracketsConfig[j][0]) {
          return false;
        }
        break;
      }
    }
  }
  return stack.length == 0 && count == 0;
}
