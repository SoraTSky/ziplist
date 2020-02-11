const list1 = ['a', 'b', 'c'];
const list2 = [1,2,3];

function zipList(list1, list2){
  let result = [];
  let i = 0;
  while (i < list1.length){
    result.push(list1[i], list2[i]);
  }
  return result;
}

console.log(zipList(list1,list2));

function zipListTheSimpleWay(list1, list2){
  return _.flatten[_.zip(list1,list2)];
}

console.log(zipListTheSimpleWay(list1,list2));