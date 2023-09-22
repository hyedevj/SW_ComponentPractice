import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      //value가 함수이면 함수로 처리, 아니면 그래로 value 넘김
      const valueToStore = typeof value === "function" ? value(storedValue) : value
      setStoredValue(valueToStore)
      // localStorage는 string만 저장 가능하기 때문에 JSON.stringfy해야됨
      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage