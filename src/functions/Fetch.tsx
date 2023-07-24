export async function Fetch(){

    const url = 'https://jsonplaceholder.typicode.com/posts'

    const data = await fetch(url)
    const response = await data.json()

    console.log(response)

   return response
}