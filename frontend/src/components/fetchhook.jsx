import { useState, useEffect } from "react";

function useFetch(url){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(res => [...res].reverse())
            .then((data) => setData(data));
    }, [url])

    return [data];
}

export default useFetch