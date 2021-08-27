import React , { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import useResults from '../../hooks/useResults';
import ResultsList from '../../components/SearchBar/ResultsList';

const SearchScreen = ({ navigation }) => {
    //console.log(props);
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const filterResultByPrice = (price) => {
        // price == '$' || '$$' || '$$$$'
        return results.filter(x => {
            return x.price === price;
        })
    };

    return (
    <View style={{ flex : 1}}>
        <SearchBar 
                term={term}
                onTermChange={newTerm => {
                    setTerm(newTerm);
                }}
                onTermSubmit={() => {
                    searchApi(term)
                }}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            {/* <ResultsList navigation={navigation} results={filterResultByPrice('$')} title="Cost Effective"/>
            <ResultsList navigation={navigation} results={filterResultByPrice('$$')} title="Bit Pricier"/>
            <ResultsList navigation={navigation} results={filterResultByPrice('$$$$')} title="Bit Spender"/> */}

            <ResultsList  results={filterResultByPrice('$')} title="Cost Effective"/>
            <ResultsList  results={filterResultByPrice('$$')} title="Bit Pricier"/>
            <ResultsList  results={filterResultByPrice('$$$$')} title="Bit Spender"/>
        </ScrollView>
    </View>
    )
}

const style = StyleSheet.create({

})

export default SearchScreen;