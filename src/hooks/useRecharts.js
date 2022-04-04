import { useEffect, useState } from "react"

const useRecharts = () => {
    const [recharts, setRecharts] = useState([]);

    useEffect(() => {
        fetch('chartdata.json')
            .then(res => res.json())
            .then(data => setRecharts(data))
    }, [])

    return [recharts, setRecharts];
}

export default useRecharts;