import { useCallback, useRef, useState } from "react"

const useRafState = (initialState) => {
  const frame = useRef(0)
  const [state, setState] = useState(initialState)

  const setRafState = useCallback((value) => {
    cancelAnimationFrame(frame.current)

    // 약간의 성능 높여줌
    frame.current = requestAnimationFrame(() => {
      setState(value)
    })
  }, [])

  return [state, setRafState]
}

export default useRafState