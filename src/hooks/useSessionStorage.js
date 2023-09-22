import { useState } from "react"

const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = useSessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = typeof value === "function" ? value(storedValue) : value
      setStoredValue(valueToStore)
      useSessionStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default useSessionStorage