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

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
