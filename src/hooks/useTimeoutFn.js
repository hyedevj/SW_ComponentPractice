// 1. 함수 호출을 통한 방법
import { useCallback, useEffect, useRef } from "react"

const useTimeoutFn = (fn, ms) => {
  const timeoutId = useRef()
  const callback = useRef(fn)

  useEffect(() => {
    callback.current = fn
  }, [fn])

  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current)

    timeoutId.current = setTimeout(() => {
      callback.current()
    }, ms)
  }, [ms])

  const clear = useCallback(() => {   //타임아웃 해제
    timeoutId.current && clearTimeout(timeoutId.current)
  }, [])
  
  //사용하는 컴포넌트가 사라졌을 때, 타임아웃이 남아있어 실행되는 버그 발생할 수도 있음
  useEffect(() => clear, [clear])

  return [run, clear]
}

export default useTimeoutFn