const combination = (element) => {
  if (element.length === 0) return [[]];
  const first = element[0];
  const rest = element.slice(1);
  const combWithoutFirst = combination(rest);
  const combsWithFirst = [];
  combWithoutFirst.forEach((comb) => {
    const combWithFirst = [...comb, first];
    combsWithFirst.push(combWithFirst);
  });
  return [...combWithoutFirst, ...combsWithFirst];
  return combWithoutFirst;
};
console.log(combination(["a", "b", "c"]));
