import React, { Component } from 'react';
import {View, Text, Button, FlatList} from 'react-native';


class OrderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {purchase}=this.props.route.params;
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <FlatList
                    data={this.props.route.params.purchase}
                    renderItem={({item,index})=>(
                        <View style={{
                            backgroundColor:'#000000',
                            marginTop:10,
                            marginHorizontal:20,
                            padding:20,
                            borderRadius:5,
                        }}>
                            <Text style={{color:'#FFFFFF'}}>Nama Barang :{item.name}</Text>
                            <Text style={{color:'#FFFFFF'}}>Harga Barang :{item.price}</Text>
                            <Text style={{color:'#FFFFFF'}}>Jumlah :{item.qty}</Text>
                        </View>
                    )}
                />
                <Button title='Go to Details' 
                onPress={()=>this.props.navigation.navigate('Detail')}/>
            </View>
          );
    }
}
 
export default OrderScreen;