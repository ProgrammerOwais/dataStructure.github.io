const permutation = (elements) => {
  if (elements.length === 0) return [[]];
  const first = elements[0];
  const rest = elements.slice(1);
  const perms = permutation(rest);
  const allPermutation = [];
  perms.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const withFirst = [...perm.slice(0, i), first, ...perm.slice(i)];
      allPermutation.push(withFirst);
    }
  });

  return allPermutation;
};
console.log(permutation([1, 2, 3]));
