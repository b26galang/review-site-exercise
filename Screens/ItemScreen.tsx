import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Item, getAllItems, Review } from '../API/requests';
import { useState, useEffect } from 'react';
import { Props } from "../types";


type ItemProps = {
    items: Item[],
    itemId: number
}

export default function GameScreen({ navigation, route }: Props["item"], props: ItemProps) {


    const [items, setItems] = useState<Item[]>([]);



    return (<ScrollView>
        <Text style={styles.header}>Reviews</Text>

        {/* {props.items.map(item => (
            <View style={styles.container}>
                <Text>{item.reviews.title}</Text>
                <Text>{item.reviews.rating}</Text>
                <Text>{item.reviews.description}</Text>
                <Text>{item.reviews.author}</Text>

            </View>
        ))} */}

    </ScrollView>)

}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        textAlign: 'center',
        width: 300
    },
    image: {
        width: 100,
        height: 100,
        margin: 'auto'
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
    description: {
        marginBottom: 20
    }
})