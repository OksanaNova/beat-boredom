import { useEffect, useState } from "react";

function Activity({activity, index}) {

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
        <div className={`item number-${index}`}>
            <h3>{activity}</h3>
            <p className="activity">{result}</p>
        </div>

    )
}

export default Activity