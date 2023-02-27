
export type Item = {
    itemId: number,
    name: string,
    description: string,
    image: string,
    reviews: Review[]
}

export type Review = {
    title: string,
    rating: number,
    description: string,
    author: string
}

// set up a function to call the GraphQl query:
export async function getAllItems(): Promise<Item[]> {
    const query = ` 
    query getItems {
        items {
            name
            description
            image
            reviews {
                title
                rating
                description
            }
        }
    }
    `
    const body = JSON.stringify({ query });
    const httpResponse = await fetch('http://127.0.0.1:8000/graphql', { method: "POST", body, headers: { "Content-Type": "application/json" } });
    const responseBody = await httpResponse.json();
    const items: Item[] = responseBody.data.items;
    return items;
}

export async function addItem(addItem: Item): Promise<Item> {
    const mutation = `
    mutation addItem($newItem: ItemInput!) {
        addItem(input: $newItem){
          itemId
          name
          description
          image
        }
      }
    `
    const variables = { newItem: addItem }
    const body = JSON.stringify({ mutation, variables });
    const httpResponse = await fetch("https://e62a-2601-601-a400-c080-3520-3fad-1fb7-263f.ngrok.io/graphql",
        { method: "POST", body, headers: { "Content-Type": "application/json" } });
    const item: Item = await httpResponse.json();
    return item;
}

