import React, {useState,  useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../../api/yelp';

const ResultsShowScreen = (props) => {
    const [result, setResult] = useState(null);
    const { navigation } = props;
    const id = navigation.getParam('id');

    console.log(result);
    const getResult = async (id) => {
        console.log(`Get id detail ${id}`);
        try{
            await yelp.get(`/${id}`).then((res) =>  {
                //console.log(res.data.photos);
                setResult(res.data);
            })
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }

    return(
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(result) => result}
                renderItem={({ item }) => {
                    console.log(item);
                    return <Image
                    style={styles.image}
                    source={{
                        uri: item
                    }}
                />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width:260,
        height:300,
        borderWidth:2,
        resizeMode:'contain',
        margin:8
    }
});

export default ResultsShowScreen;