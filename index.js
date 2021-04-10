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


    functions: function() {

    },


  }
})()

fi.libraryMethod()
