export interface IUser {
  name: string
  avatar: string
  event: string
  password: string
}

export interface IGame {
  name: string
  description: string
  icon: string
  categoryIds: [number]
}
export type TGameCollection = IGame[];

export interface ICategory {
  id: number
  name: string
}

export type TCategoryCollection = ICategory[]

export interface ILoginRequest {
  username: string
  password: string
}

export interface IUserResponse {
  data: undefined |  {
    status: 'success'
    player: IUser
  }
}

// React Router V6 has some issues with useLocation & Typescript
interface ILocation {
  hash: string
  key: string
  pathname: string
  search: string
}

export interface IUseLocation extends ILocation {
  state?: {
    from: ILocation
  }
}