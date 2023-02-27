import { NativeStackScreenProps } from "@react-navigation/native-stack";

// The purpose of this file is to set up and declare what our screens are going to be and what their props are:

// define the props for each screen:
export type RootStackParamList = {
    // use undefined to not take in any props
    Home: undefined,
    // The Game screen takes in a itemId which is a number
    Item: { itemId: number }
}

// Set up the types of our props:
export type Props = {
    home: NativeStackScreenProps <RootStackParamList, 'Home'>


    // one sub-type for game page with item id:
    item: NativeStackScreenProps<RootStackParamList, 'Item'>;
}

