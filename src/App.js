import React, {useEffect} from 'react';
import Paperbase from './Paperbase';

const App = ()=>{
    useEffect(() => {
        console.log("useEffect")
        const script = document.createElement("script");
        //script.async = true;
        script.src ="//developers.kakao.com/sdk/js/kakao.min.js";
        document.body.appendChild(script);
      },[]);


    return (
        <div className="App">
            <Paperbase></Paperbase>
        </div>
    );
}

export default App;