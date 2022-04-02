import { useMemo } from 'react'
import { useAppSelector } from 'state/hooks'
import { RootState } from "state/store"

export const useAuth = () => {
  const user = useAppSelector((state: RootState) => state.auth.user)

  return useMemo(() => ({ user }), [user])
}
