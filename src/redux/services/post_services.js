import {set_Post, add_Post, set_Loading} from '../actionPost/actionPost';
import urlApi from './UrlRequest'

export const NewPost =(post) => async (dispatch) =>
{
    debugger;
    try {
        const requestOptions = {
            method: 'POST',
            mode:'cors',
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({...post})
        };
        debugger;
        fetch(urlApi+'/blog', requestOptions)
            .then(res => res.json())
            .then(data => {
                const res = {data};
                dispatch(add_Post(res));
            })
            .catch((e)=>{
                
                console.log(e);
            });
           
        } catch{
        dispatch(set_Loading(false));
        console.log('Error!');
    }
} 