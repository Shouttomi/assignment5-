

interface User {
    email: string;
    name: string;
    phone: string;
  }



export const addusertolocalstorage = (user: User): void => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  

  export const removeuserfromlocalstorage = (): void => {
    localStorage.removeItem('user');
  };

  export const getuserfromlocalstorage = (): User | null => {
    const result = localStorage.getItem('user');
    const user = result ? JSON.parse(result) : null;
    return user;
  };
  