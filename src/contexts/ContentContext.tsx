import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react"
import { api } from "../lib/axios"

interface ProviderProps {
  children: ReactNode
}

interface UserData {
  avatar_url: string
  bio: string
  company?: string
  created_at: string
  followers: number
  html_url: string
  id: number
  login: string
  name: string
  updated_at: string
  url: string
}

interface Posts {
  total_count: number
  incomplete_results: boolean
  items: Item[]
}

interface Item extends UserData {
  url: string
  labels_url: string
  html_url: string
  id: number
  number: number
  title: string
  user: UserData
  labels: string[]
  state: string
  comments: number
  created_at: string
  updated_at: string
  body: string
}

//Arrumar opcional e setar no useState
interface ContentData {
  userData?: UserData
  posts?: Posts
}

const Content = createContext<ContentData>({} as ContentData)

export function ContentProvider({ children }: ProviderProps) {
  const [userData, setUserData] = useState<UserData>()
  const [posts, setPosts] = useState<Posts>()

  async function fetchGithubUserData() {
    const response = await api.get("/users/Alvarosig")

    setUserData(response.data)
  }

  async function fetchPostsData() {
    const response = await api.get("/search/issues", {
      params: {
        q: "repo:Alvarosig/github-blog",
      },
      headers: {
        Accept: 'application/vnd.github+json'
      }
    })

    setPosts(response.data)
  }

  useEffect(() => {
    fetchGithubUserData()
    fetchPostsData()
  }, [])

  return (
    <Content.Provider value={{ userData, posts }}>{children}</Content.Provider>
  )
}

export function useContent(): ContentData {
  return useContext(Content)
}
