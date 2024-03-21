import { useLayoutEffect, useState } from "react"

const useFetchSubmissions = () => {
  const [codeSubmissions, setCodeSubmissions] = useState([])

  const handleReadCodeSubmissions = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_NODE_APP_URL}/api/codesubmission/read`)
      const data = await res.json()
      if (!data.data) return null
      setCodeSubmissions(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  useLayoutEffect(() => {
    handleReadCodeSubmissions()
  }, [])
  return codeSubmissions
}

export default useFetchSubmissions
