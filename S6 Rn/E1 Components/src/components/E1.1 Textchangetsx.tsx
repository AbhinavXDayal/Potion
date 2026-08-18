import Divider from './Divider'
import { Text } from 'react-native'

const Hello = () => {
  const Name = 'Abhi'
  return (<Text>Hello World ! I'm {Name}</Text>)
}

const FullName = (
  FirstName: string,
  SecondName: string,
  ThirdName: string,
 ) =>{
  return FirstName + ' ' + SecondName + ' ' + ThirdName;
};

const Names=()=>{
  return <Text>Hello, I am {FullName('Rum', 'Tum', 'Tugger')}</Text>};

export default function Textchange() {
  return (
    <>
      <Hello />
      <Names />
      
      <Divider />
    </>
  );
}