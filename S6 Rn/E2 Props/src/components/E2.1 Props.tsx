import Divider from './Divider'
import {Text, View} from 'react-native';

type CatProps={
    name: string
}

const Cat =(props:CatProps)=>
{
    return (
        <View>
            <Text>Hello, I am {props.name}</Text>
        </View>
    )
}

const Cafe =()=>
{
    return (
        <View>
            <Cat name="Maru"></Cat>
              <Cat name="Jellylorum" />
      <Cat name="Spot" />
        </View>
    )
}

export default function Props()
    {
        return(
            <>
            <Cafe/>
            
            <Divider/>
            </>
        )
    }
