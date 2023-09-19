const list1 = ['a', 'b', 'c', 'd'];
const list2 = [1, 2, 3, 4];

function zipList(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    result.push(first[i], second[i]);
  }
  return result;
}

console.log(zipList(list1, list2));

const zipListTheSimpleWay = (first, second) => _.flatten(_.zip(first, second));

console.log(zipListTheSimpleWay(list1, list2));
