export function helper(arr, i) {
    let add = {};
    let goat = [];

    arr[i].sub_departments.forEach((i) => {
      add[i] = false;
    });

    goat.push(add);

    return goat;
  };