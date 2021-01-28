import axios from 'react-native-axios';

const freetrendybooks = (category_id, tags) => {
    axios.get('/flapmore/search', {
        params: {
            category_id, 
            tags
        }
    }).then ((res)=> {
        console.log(res, '\n', res.data)
    }).catch (e=> console.log(e))
}

export default freetrendybooks;