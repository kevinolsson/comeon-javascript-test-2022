import { useMemo } from 'react'
import { useAppSelector } from 'state/hooks'
import { RootState } from "state/store"

export const useAuth = () => {
  console.log({ state: useAppSelector((state) => state) });
  const user = useAppSelector((state: RootState) => state.auth.player)

  return useMemo(() => ({ user }), [user])
}
