import { useEffect, useState } from "react";
import icon from './assets/refresh.png'

function Activity({activity, index}) {

    const [result, setResult] = useState('')

    useEffect(() => {
        getActivity();
    }, [])

    const getActivity = async () => {
        const response = await fetch(`https://bored.api.lewagon.com/api/activity?type=${activity}`);
        const data = await response.json();
        // console.log(data);
        setResult(data.activity)
    }


    return (
        <div className={`item number-${index}`}>

            <div className="item_content">
               <h3>{activity}</h3>
              <button onClick={getActivity}><img src={icon} alt="refresh" width="20px"/></button>
            </div>

            <p className="activity">{result}</p>

        </div>
    )
}

export default Activity