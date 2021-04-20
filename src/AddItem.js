import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

export const AddItem = ({ onSubmit }) => {
    const [value , setValue] = useState('');

    const clickHandler = () => {
        if(value.trim()){
            onSubmit(value);
            setValue('');
        }
    }

    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                onChangeText={setValue}
                value={value}
                placeholder="What needs to be done?"
                autoCorrect={false}
            />
            <Button title="Add Item" onPress={clickHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center'
    },
    input: {
       borderStyle: 'solid',
       borderBottomWidth: 2,
       borderBottomColor: '#17a2b8',
       width: '70%',
       padding: 5,
       fontSize: 20
    },
    btn: {

    }
})