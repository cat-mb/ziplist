// Function using a loop
function zipList<T, U>(list1: T[], list2: U[]): (T | U)[] {
  if (list1.length !== list2.length) {
      throw new Error('Lists must be of equal length');
  }

  const result: (T | U)[] = [];
  for (let i = 0; i < list1.length; i++) {
      result.push(list1[i]);
      result.push(list2[i]);
  }
  return result;
}

// Function using Array methods
function zipListTheFunctionalWay<T, U>(list1: T[], list2: U[]): (T | U)[] {
  if (list1.length !== list2.length) {
      throw new Error('Lists must be of equal length');
  }

  return list1
      .reduce((acc: (T | U)[], curr: T, idx: number) => {
          return [...acc, curr, list2[idx]];
      }, []);
}

// Test cases
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));

// Additional test case with different types
console.log(zipList(['x', 'y'], [true, false]));
console.log(zipListTheFunctionalWay(['x', 'y'], [true, false]));