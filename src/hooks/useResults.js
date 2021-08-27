import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    //const [searchTerm, setSearchTerm] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            console.log("hiepns: " +searchTerm);
            console.log('start call api!');
            // fetch('https://api.yelp.com/v3/businesses/search?limit=50&term=&location=san%20jose', {
            //     method: 'GET',
            //     headers: {
            //       'Content-Type': 'application/json',
            //       'Authorization':'Bearer v5btwEwkHD5NYYXAchNQAFNKVH5IWakNqhU62rUJILHKYX9EcQ-5pNqm5dmYHYi6eib07D6JxUa0kNIGow-Xjukw4ACDmTtFSYEoiQWGbrvaM5TK_q5S7CixeXfpYHYx'
            //     },
            //   })
            //   .then(response => response.json())
            //   .then(data => {
            //     console.log('Success:', data);
            //   })
            //   .catch((error) => {
            //     console.error('Error:', error);
            //   });
            
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            }).then((res) => {
                console.log('success');
                setResults(res.data.businesses);
            }).catch((res) => {
                console.log('ccc');
            });
            
        } catch(e) {
            setErrorMessage(e);
            console.log(errorMessage);
        }
    }

    useEffect(() => {
        console.log('start call api!');
        searchApi();
    }, []);

    return [searchApi, results, errorMessage];
}

