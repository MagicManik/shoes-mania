import { useEffect, useState } from "react"

const useCustomers = () => {
    const [customers, setCutomers] = useState([])

    useEffect(() => {
        fetch('customers.json')
            .then(res => res.json())
            .then(data => setCutomers(data))
    }, [])

    return [customers, setCutomers];
}

export default useCustomers;