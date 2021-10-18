import { getGistsFailure, getGistsRequest, getGistsSuccess } from "./actionGist";

export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest);

    try {
        const res = await fetch(API_URL_PUBLIC);
        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);

        };
        const result = await res.json();
        dispatch(getGistsSuccess(result));
    } catch (err) {
        dispatch(getGistsFailure(err.message));
    }
}

import { useCallback, useEffect, useState, useSelector, useDispatch } from "react";
import { API_URL_PUBLIC } from "./GistsConst";
import { CircularProgress } from '@material-ui/core'
import { selectGists, selectGistsError, selectGistsLoading } from "./GistsSelectore";
const gists = [];

export const GistList = () => {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);


    const requestGists = () => {
        dispatch(getAllGists())
    };

    useEffect(() => {
        requestGists();
    }, []);

    const renderGists = useCallback(
        (gist) => <li key={gist.id}>{gist.description}</li>, []
    )
    if (loading) {
        return <CircularProgress />
    }
    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        )
    }
return <ul>{gists.map(renderGist)}</ul>;
}



// import { useCallback, useEffect, useState } from "react";
// import { API_URL_PUBLIC } from "./GistsConst";
// import { CircularProgress } from '@material-ui/core'
// const gists = [];

// export const GistList = () => {
// const [gist, setGist] = useState('');
// const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const requestGists = () => {
//         setLoading = true;
//         fetch(API_URL_PUBLIC)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`Request failed with status ${response.status}`);
//                 }
                       
//                 return response.json;
//             })
    
//         .then((result) => setGist(result))
//             .catch((err) => {
//                 setError(true);
//                 console.log(err);
//             })
//         .finally(()=>setLoading(false))
//   };
    
//     useEffect(() => {
//         requestGists();
//     }, []);

//     const renderGist = useCallback(
//         (gist) => <li key={gist.id}>{gist.description }</li>, []
//     );
//     if (error) {
            
//         return <>
//         <h3>Error</h3>
//         <button onClick={requestGists}>Retry</button>

//         </>
//     }
//     if (loading) {
//         return <CircularProgress />;

//     }
//     return <ul>{ gists.map(renderGist)}</ul>
// }




