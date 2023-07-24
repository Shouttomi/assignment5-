export  const countAllSubitems = (checkedItems) => {
    let count = 0;
    for (let key in checkedItems) {
      if (checkedItems.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  };