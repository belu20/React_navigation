import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
                <Text>Welcome Home Screen</Text>
                <Button title='Go to order' 
                onPress={()=>this.props.navigation.push("Order",{
                    purchase:[
                        {name:'Macbook', price:2000000, qty:2},
                        {name:'IphoneX', price:1500000, qty:3}
                    ]

                })}/>
            </View>
          );
    }
}
 
export default HomeScreen;