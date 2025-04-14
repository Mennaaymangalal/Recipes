import React from 'react'

export default function All() {
  const [products , setProduct] = useState(null)
  const [isLoading , setIsLoading] = useState(false)
 useEffect(()=>{
   getAllMeals()
 },[])
 const getAllMeals = async () => {
   try {
     setIsLoading(true)
     const mealPromises = Array.from({ length: 25 }, () =>
       axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
     );
 
     const results = await Promise.all(mealPromises);
     const meals = results.map(res => res.data.meals[0]);
     setProduct(meals);
     setIsLoading(false)
   } catch (err) {
     console.error('Error fetching multiple meals:', err);
   }
 };
  return (
    <>
      
    </>
  )
}
