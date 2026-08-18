import Divider from './Divider'
import {Text,TextInput, View} from 'react-native';

const Cat =()=>
{
    return(
        <View>
            <Text>I am a cat</Text>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            defaultValue="Name me !"
            />
        </View>
    )
}

function Horse ()
{
    return(

<Text>Horse</Text>
    )
}

const Dog =()=>{
    return (
        <View>
<Text>Welcome</Text>
<Horse/>
<Horse/>
<Horse/>
<Horse/>
        </View>
    )
}

export default function Textinput() {
  return (
    <>
      <Cat />
      <Horse />
      <Dog />
      
      <Divider />
    </>
  );
}