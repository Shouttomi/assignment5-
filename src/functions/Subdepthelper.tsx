
interface SubDepartment {
  department: string;
  sub_departments: string[];
}

export function helper(arr:SubDepartment[], i:number) {
    let add:any = {};
    let goat = [];

    arr[i].sub_departments.forEach((item) => {
      add[item] = false;
    });

    goat.push(add);

    return goat;
  };