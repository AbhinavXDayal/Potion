import Divider from "@/components/Divider";
import {useState} from 'react';
import {Button, Text, View} from 'react-native';

type CatProps={
    name: string
}

const Cat =(props: CatProps)=>
{
    const [IsHungry, SetIsHungry]
    =useState(true);

    return (
        <View>
            <Text>
                I am {props.name} & i am {IsHungry ? 'hungry':'full'}
            </Text>
        </View>
    )
}