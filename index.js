const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callBackFunction) {
      if (!!collection.length){
        for (const element of collection){ 
          callBackFunction(element);
        }
      } else {
        for (const property in collection){
          callBackFunction(collection[property]);
        }
      }
      return collection;
    },

    map: function(collection, callBackFunction) {
      const newArray = [];
      if (!!collection.length){
        for (const element of collection){ 
          newArray.push(callBackFunction(element));
        }
      } else {
        for (const property in collection){
          newArray.push(callBackFunction(collection[property]));
        }
      }
      return newArray;
    },

    reduce: function(collection, callBackFunction, initialValue = 0) {
      let total = (!!initialValue) ? initialValue : collection[0];
      let i = (!!initialValue) ? 0 : 1;

      for (; i < collection.length; i++){
        total = callBackFunction(total, collection[i], collection)
      }
      return total;
    },

    find: function(collection, predicateFunction){
      for (let i = 0; i < collection.length; i++){
        if (!!predicateFunction(collection[i])){
          return collection[i]
        }
      }
    },

    filter: (collection, predicateFunction)=>{
      const returnArray = []
      collection.forEach(element => {
        if (!!predicateFunction(element)){ returnArray.push(element) }
      })
      return returnArray;
    },

    size: (collection) => {
      const size = (!!collection.length) ? collection.length : Object.values(collection).length;
      return size;
    },

    // first: (collection, n = 1) => {
    //   if (n === 1){
    //     return collection[0];
    //   } else {
    //     const newCollection = [];
    //     for (let i = 0; i < n; i++){
    //       newCollection.push(collection[i]);
    //     }
    //     return newCollection;
    //   };
    // },
    first: (array, n = 1) => { return (n === 1) ? array[0] : array.slice(0, n)},

    // last: (array, n) => {
    //   const reversedArray = [...array].reverse()
    //   if (!n){
    //     return reversedArray[0];
    //   } else {
    //     const newArray = [];
    //     for (let i = 0; i < n; i++){
    //       newArray.push(reversedArray[i]);
    //     }
    //     return [...newArray].reverse();
    //   };
    // },

    last: (array, n = 1) => {
        const index = -(n);
        if (index !== -1){
          return array.slice(index);
        } else {
          return [...array].reverse()[0];
        }
    },

    compact: (array) => {
      const compactedArray = [];
      for (const element of array){
        if (!!element){
          compactedArray.push(element);
        }
      }
      return compactedArray;
    },

    
    sortBy: (array, callBackFunction) => {
      const sortedArray = [...array]
      const valueSortedArray = []
      array.forEach(element => {
        valueSortedArray.push(callBackFunction(element)) 
      })
      const sortFail = (ary) => {
        let sortFail = false
        for (let i = 0; i < (ary.length - 1); i++){
            if (!!(ary[i + 1] < ary[i])){
              sortFail = true
            }
        }
        return sortFail
      }
      const sorterFunction = () => {
        for (let i = 1; i < valueSortedArray.length; i++){
          if (valueSortedArray[i] < valueSortedArray[i-1]){
            [valueSortedArray[i], valueSortedArray[i-1]] = [valueSortedArray[i-1], valueSortedArray[i]];
            [sortedArray[i], sortedArray[i-1]] = [sortedArray[i-1], sortedArray[i]];
            }
          }  
      }
    
      while (!!sortFail(valueSortedArray)){
        sorterFunction();
      }
    
      return sortedArray;
    },
    uniq: () => {},
  }
})()

fi.libraryMethod()





const ary = [9, 3,100,4,78,2]