// code your solution here
// Define saturdayFun function with default activity 'roller-skate'
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define mondayWork function with default activity 'go to the office'
  const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`; // Change 'On Monday, I need to' to 'This Monday, I will'
  };
  
  // Define wrapAdjective function
  function wrapAdjective(wrapper = '*') {
    return function (adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  
  // Example usage:
  const excited = wrapAdjective('!!!');
  console.log(excited('awesome')); // Output: "You are !!!awesome!!!"