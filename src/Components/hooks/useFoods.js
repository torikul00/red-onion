import { useEffect, useState } from "react"

const useFoods = () => {
    const [food,setFoods] = useState({})

    useEffect(() => {
        fetch('foods.json') 
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])
    return [food , setFoods]
}

export default useFoods;