import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button, ThemeProvider } from 'react-native-elements';

const SearchBar = (props) => {
    const { term, onTermChange, onTermSubmit } = props;
    return (
        <View style={styles.container}>
            <Icon
                name='search1'
                type='antdesign'
                color='black'
                style={styles.iconStyle}
            />
           <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={(newTerm) => {
                    onTermChange(newTerm);
                }}
                onEndEditing={() => {
                    onTermSubmit();
                }}
           /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems:'center',
        marginBottom: 15
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        width: 50,
        fontSize: 35,
        alignSelf: 'center',
        marginVertical: 15
    }
})

export default SearchBar;