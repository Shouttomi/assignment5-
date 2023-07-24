


export function JsonConverter(data: any): any {
    try {
      const store = JSON.stringify(data);
      return JSON.parse(store);
    } catch (error) {
      console.error('Error converting JSON data:', error);
      return null;
    }
  }