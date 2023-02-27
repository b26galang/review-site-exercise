import { View, Text, Image, StyleSheet, ScrollView, Button, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect, useReducer } from 'react';
import { Item, getAllItems } from '../API/requests';
import { Props } from '../types';
import { itemReducer, ItemState } from '../Reducer/itemReducer';

const initialState: ItemState = {
    Item: {
        name: "",
        description: "",
        image: "",
        reviews: []
    },
    items: []
}

export default function HomeScreen({ navigation }: Props["home"]) {

    const [items, setItems] = useState<Item[]>([]);
    const [itemState, dispatch] = useReducer(itemReducer, initialState)

    useEffect(() => {
        getAllItems()
            // because getAllItems is async, returns a promise, so we use the .then function to 
            // take the resolved value andf assign it to the state
            // .then takes a callback function and says "execute this when the promise is resolved(value is returned)"
            .then(res => {
                console.log(res);
                setItems(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return <ScrollView>
        <Text style={styles.header}>N64 Games</Text>
        {items.map(item => (
            <View style={styles.container}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Item", { itemId: item.itemId })}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                </TouchableOpacity>
            </View>
        ))}
        <hr />

        {/* Form for adding a game */}
        <Text style={styles.form}>Add a Game</Text>
        <Text>Name:</Text>
        <TextInput style={styles.input} onChangeText={(i) => dispatch({ type: "SET_NAME", payload: i })} />

        <Text>Description:</Text>
        <TextInput style={styles.input} onChangeText={(i) => dispatch({ type: "SET_DESCRIPTION", payload: i })} />

        <Text>Image:</Text>
        <TextInput style={styles.input} onChangeText={(i) => dispatch({ type: "SET_IMAGE", payload: i })} />
        <Button title="Add" onPress={() => dispatch({ type: "ADD_ITEM" })} />
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        textAlign: 'center',
        width: 300,
    },
    image: {
        width: 100,
        height: 100,
        margin: 'auto',
        marginBottom: 10
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    input: {
        borderWidth: 1,
        height: 25,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    description: {
        marginBottom: 20
    },
    form: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})