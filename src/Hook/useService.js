import { useEffect, useState } from "react"

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('./fakeDb.json')
        .then(res => res.json())
        .then( data => setServices(data))
    },[])
    return [services];
}
export default useService;