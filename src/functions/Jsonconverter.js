



export function JsonConverter(data){

    const store =  JSON.stringify(data);

    return JSON.parse(store);

}