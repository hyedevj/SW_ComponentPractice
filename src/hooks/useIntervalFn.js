import { fn } from "moment"
import { useCallback, useEffect, useRef } from "react"

const useIntervalFn = (fn, ms) => {
  const intervalId = useRef()
  //useRef를 이용하면 중간에 callback함수가 변해도 Interval이 끝나지 않음
  const callback = useRef(fn)

  useEffect(() => {
    callback.current = fn
  }, [fn])

  const run = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current)

    intervalId.current = setInterval(() => {
      callback.current()
    }, ms)
  }, [ms])

  const clear = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current)
  }, [])

  useEffect(() => clear, [clear])

  return [run, clear]
}

export default useIntervalFn