function receivesAFunction(callback) {
    return callback();
  }
  receivesAFunction(function() {return callback});

  //returnsANamedFunction()

  function returnsANamedFunction(){
    return function named(){};
  }returnsANamedFunction(function named(){});


  //returnsAnAnonymousFunction()

  function returnsAnAnonymousFunction() {
    return function(){};
  }
  returnsAnAnonymousFunction(function() {return});