/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();

  nums.forEach((el) => {
    if (map.has(el)) {
      // here i make a mistake
      // i did not set the key so my output is worong
      // let's run again

      // finaly it's success now ! good bye
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
    }
  });

  let map2 = new Map([...map].sort((a, b) => b[1] - a[1]));
  let u = 0;
  let arr = [];

  for (const key of map2.keys()) {
    if (u < k) {
      arr.push(key);
      u++;
    }
  }

  return arr;

  /* // i have practised before this quesiton after practicing then i make video 
    // here what i have done 
    // first i have taken a map and itreated the arry given make group of el by segregating it.
    then taken a another map name map2 sorting by values of each element so from top i can take value to K 


in for loop iterate again map2 and checked for u size  push the key in new arr 
    
    from now on i am uploading all code in github repo will share with video description 
    
    
    
    */
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
