
export type ItemState = {
    Item: {
        name: string,
        description: string,
        image: string
        reviews: Review[]
    }
    items: Item[]
}

export type Item = {
    name: string,
    description: string,
    image: string
}

export type Review = {
    title: string,
    author: string,
    description: string,
    rating: number
}

export type SetItemNameAction = { type: "SET_NAME", payload: string }
export type SetItemDescriptionAction = { type: "SET_DESCRIPTION", payload: string }
export type SetItemImageAction = { type: "SET_IMAGE", payload: string }
export type AddItemAction = { type: "ADD_ITEM" };

export type ItemAction = SetItemNameAction | SetItemDescriptionAction | SetItemImageAction | AddItemAction;

export function itemReducer(state: ItemState, action: ItemAction): ItemState {
    const nextState: ItemState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "SET_NAME": {
            nextState.Item.name = action.payload;
            return nextState;
        }
        case "SET_DESCRIPTION": {
            nextState.Item.description = action.payload;
            return nextState;
        }
        case "SET_IMAGE": {
            nextState.Item.image = action.payload;
            return nextState;
        }
        case "ADD_ITEM": {
            const item: Item = {
                name: nextState.Item.name,
                description: nextState.Item.description,
                image: nextState.Item.image
            };
            console.log(nextState);
            nextState.items.push(item);
            console.log(nextState.items)
            return nextState;

        }
    }
}