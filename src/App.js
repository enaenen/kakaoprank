import React, {useEffect} from 'react';
import Paperbase from './Paperbase';

const App = ()=>{
    window.Kakao.init('762a46d7e5b7dbece3eddbb232189a84');

    return (
        <div className="App">
            <Paperbase></Paperbase>
        </div>
    );
}

export default App;