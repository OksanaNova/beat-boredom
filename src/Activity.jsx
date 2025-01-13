import { useEffect, useState } from "react";

function Activity({activity}) {

    const [result, setResult] = useState('')

    useEffect(() => {
        getActivity();
    }, [])

    const getActivity = async () => {
        const response = await fetch(`http://bored.api.lewagon.com/api/activity?type=${activity}`);
        const data = await response.json();
        // console.log(data);
        setResult(data.activity)
    }


    return (
        <div className="container_activity">
            <div className="item">
              <h3>{activity}</h3>
              <p>{result}</p>
            </div>
        </div>
    )
}

export default Activity