import { useEffect, useState } from "react"

const useFoods = () => {
    const [food,setFood] = useState({})

    useEffect(() => {
        fetch('foods.json') 
        .then(res => res.json())
        .then(data => setFood(data))
    },[])
    return [food , setFood]
}

export default useFoods;