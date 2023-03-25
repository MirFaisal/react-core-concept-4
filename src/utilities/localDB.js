const setData = (id) => {
  // checking is shopping cart is avoiale in local-storeg
  let shoppingCart;
  const storedCart = localStorage.getItem("shopping-cart");

  /*if has valu before than added. than the shopping card convirt to object.
   becouse for set new value. */
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    /* if shopping-card has no value. than the shopping cart set to empty object. 
    becouse for set present value. */
    const shoppingCart = {};
  }

  // get the quantitye of product.
  const currentQuantity = shoppingCart[id];

  /* if curentQuentity contain any value before new valu add.
   then one more valu added with current value*/
  if (currentQuantity) {
    const newQuantity = currentQuantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    /*
    if currentQuentity has no value. 
    then present producet value is set default valu 1
     */

    shoppingCart[id] = 1;
  }
  // when the function will call. the empty object set.
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// remove function
const removeFromCart = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

// total price
const getTotalPrice = (product) => {
  const productPriceReduce = (prv, curr) => prv + curr.price;
  const total = product.reduce(productPriceReduce, 0);
  return total;
};

export { getTotalPrice as getTotal, removeFromCart, setData };
