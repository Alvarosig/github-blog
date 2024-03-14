import { ChangeEvent } from "react"
import { useContent } from "../../contexts/ContentContext"

interface SearchProps {
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Search({ onSearchChange }: SearchProps) {
  const { posts } = useContent()
  
  return (
    <div className="flex flex-col gap-3 mb-12 xl:px-72">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg text-base-subtitle">Publicações</h3>
        <span className="font-normal text-sm text-base-span">
          {posts?.total_count} publicações
        </span>
      </div>

      <form className="flex">
        <input
          className="flex-1 bg-base-input px-4 py-3 rounded-md ring-1 ring-base-border outline-none focus:ring-blue placeholder:text-base-label"
          placeholder="Buscar conteúdo"
          type="search"
          onChange={onSearchChange}
        />
      </form>
    </div>
  )
}
