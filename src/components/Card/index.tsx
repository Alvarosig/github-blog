import { useContent } from "../../contexts/ContentContext"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useNavigate } from "react-router-dom"

interface CardProps {
  searchTerm: string
}

export function Card({ searchTerm }: CardProps) {
  const navigate = useNavigate()
  const { posts } = useContent()

  const filteredPosts = posts?.items.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleCardClick(postNumber: number) {
    navigate(`/post/${postNumber}`)
  }

  return (
    <div className="flex gap-8 flex-wrap xl:px-72 w-full mb-40">
      {filteredPosts?.map((post) => {
        const postNumber = post.number
        return (
          <button
            key={post.id}
            className="overflow-hidden grid grid-cols-1 text-left gap-4 items-center p-8 h-[260px] w-[416px] bg-base-post shadow-lg rounded-[10px] hover:ring-2 hover:ring-base-border cursor-pointer"
            onClick={() => handleCardClick(postNumber)}
          >
            <div className="flex items-start gap-4">
              <h3 className="font-bold text-base-title text-xl">
                {post.title}
              </h3>
              <span className="font-normal text-base-span text-sm whitespace-nowrap">
                {formatDistanceToNow(post.created_at, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>

            <p className="font-normal text-base text-base-text whitespace-normal line-clamp-2">
              {post.body}
            </p>
          </button>
        )
      })}
    </div>
  )
}
