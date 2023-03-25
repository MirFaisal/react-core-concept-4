const setData = (id) => {
  const currentQuantity = localStorage.getItem(id);

  if (currentQuantity) {
    console.log("already exsist");
    const newQuantity = parseInt(currentQuantity) + 1;
    localStorage.setItem(id, newQuantity);
  } else {
    console.log("added item");
    localStorage.setItem(id, 1);
  }
};

export { setData };
