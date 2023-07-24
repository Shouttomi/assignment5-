


export  const countAllSubitems = (checkedItems:any) => {
    let count = 0;
    for (let key in checkedItems) {
      if (checkedItems.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  };