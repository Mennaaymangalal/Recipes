import { useEffect, useState } from "react"
import axios from "axios"

export default function useFetch(endpoint) {
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getMeals = async () => {
      try {
        setIsLoading(true)
        const { data } = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + endpoint
        )
        setProducts(data.meals)
        console.log(data.meals)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    getMeals()
  }, [endpoint])

  return { products, isLoading }
}
