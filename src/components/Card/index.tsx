import { useContent } from "../../contexts/ContentContext"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export function Card() {
  const { posts } = useContent()

  return (
    <div className="flex gap-8 flex-wrap xl:px-72 w-full mb-40">
      {posts?.items.map((post) => {
        return (
          <button
            key={post.id}
            className="flex flex-col gap-5 p-8 h-[260px] w-[416px] bg-base-post shadow-lg rounded-[10px] hover:ring-2 hover:ring-base-border cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <h3 className="font-bold text-base-title text-xl text-left">
                {post.title}
              </h3>
              <span className="font-normal text-base-span text-sm whitespace-nowrap">
                {formatDistanceToNow(post.created_at, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>

            <p className="font-normal text-base text-base-text truncate whitespace-normal line-clamp-5 text-left">
              {post.body}
            </p>
          </button>
        )
      })}
    </div>
  )
}
