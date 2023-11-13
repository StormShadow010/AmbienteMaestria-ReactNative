import * as React from 'react';
import { Button, View, Text,Image,TouchableOpacity} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
        <Text>Screen1</Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('Stack')}
            style={{
                backgroundColor:'purple',
            }}
        >
            <Text>Press me!</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Home;
