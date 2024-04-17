import { SetStateAction, useEffect, useState } from 'react'

export const useSessionStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.sessionStorage.getItem(key)

      setStoredValue(item ? JSON.parse(item): initialValue)
    } catch (error) {
      setStoredValue(initialValue)
      console.error(error)
    }
  }, [])

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue]);

  const setValue = (value: T | SetStateAction<T>) => {
    try {
      setStoredValue(value)
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}
