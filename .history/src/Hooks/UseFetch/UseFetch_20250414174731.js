import axios from "axios"

export default function UseFetch(){
  const [products , setProduct] = useState(null)
  const [isLoading , setIsLoading] = useState(false)
 useEffect(()=>{
  getMeals()
 },[])

 function geteals(){
  setIsLoading(true)
  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef')
  .then((data)=>{
    setProduct(data.data.meals)
     console.log(data.data.meals)
  }).catch((err)=>{
    console.log(err)
  }).finally(()=>{
    setIsLoading(false)
  })
 } 
}