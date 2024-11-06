function stretch(timeLeft) {
  return new Promise ((resolve, reject) => {
   if (timeLeft >= 1000) {
    setTimeout(() => {
      resolve(timeLeft - 1000);
      console.log("done stretching");
      }, 1000)
    } else {
      reject("you don't have enough time to stretch")
    }})
}


function runOnTreadmill(timeLeft) {
  return new Promise ((resolve, reject) => {

   if (timeLeft >= 500) {
    setTimeout(() => {
      resolve(timeLeft - 500);
      console.log("done running on the treadmill");
    }, 500)
    } else {
      reject("you don't have time to run");
    }})
}


function liftWeights(timeLeft) {
  return new Promise ((resolve, reject) => {


    if (timeLeft >= 2000) {
    setTimeout(() => {
      resolve(timeLeft - 2000);
      console.log("done lifting weights");
    }, 2000)
    } else {
      reject ("you don't have time to lift weights");
    }
  })
}


function workout(totalTime) {
  stretch(totalTime)
  .then(timeLeft => runOnTreadmill(timeLeft))
  .then(timeLeft => liftWeights(timeLeft))
  .then((timeLeft) => console.log(`done working out with ${(timeLeft / 1000)} seconds left`))
  .catch(reason => console.log("Error: ", reason));

  return
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
