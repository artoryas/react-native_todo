import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export const TodoItem = ({item, onRemoveItem, onToggleItem, onHighlightItem}) => {
    let classNames = [styles.text];
    if (item.important) classNames.push(styles.important);
    if (item.done) classNames.push(styles.done);
    return (
        <TouchableOpacity 
         activeOpacity={0.5}
         onPress={() => onToggleItem(item.id)}
         onLongPress={() => {onHighlightItem(item.id)}}>
            <View style={styles.item}>
                <Text style={classNames}>
                    {item.title}
                </Text>
                <TouchableOpacity style={{padding: 5}} onPress={() => onRemoveItem(item.id)}>
                    <Image style={{marginRight: 20}} source={require('../assets/trash.png')}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 15,
        borderColor: '#eee',
        borderRadius: 3,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    done: {
        textDecorationLine: "line-through"
    },
    important: {
        color: '#17a2b8',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 18
    }
})