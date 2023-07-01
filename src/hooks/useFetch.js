import {useCallback, useEffect, useState} from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getData = useCallback(
    
    async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("error fetching data")
        }
        const data = await response.json()
        setData(data)

      } catch (error) {
        setError(error.message)
      }

      finally{
        setLoading(false)
      }
    },
    [url],
  )

  useEffect(() => {
    getData();
  }, [getData])
  
  return {data, loading, error}



}