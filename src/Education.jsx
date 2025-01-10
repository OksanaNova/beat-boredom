import { useState, useEffect } from "react"

function Education() {

    const [education, setEducation] = useState('');

    useEffect(() => {
        const getEducation = async () => {
            const response = await fetch(`https://bored.api.lewagon.com/api/activity?type=education`);
            const data = await response.json();
            console.log(data.activity);
        }
        getEducation()
    }, [])



    return (
        <div>
            <h3>Education</h3>
            <p>Expand your mind, one idea at a time.</p>
            <button >Get Inspired</button>
            <p>{education}</p>

        </div>
    )
}

export default Education