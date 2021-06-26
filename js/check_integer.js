/**
 * Variable Scope
 * What will be the output of the three log statements
 * and in what order?
 */
(() => {
    let one, two;
    try {
      throw new Error(321);
    } catch (one) {
      two = 321;
      console.log(one);//123
    }
    console.log(one);//undef
    console.log(two);//321
  })();