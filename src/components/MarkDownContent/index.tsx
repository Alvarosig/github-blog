import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useContent } from "../../contexts/ContentContext"
import { useParams } from "react-router-dom"

export function MarkDownContent() {
  const { posts } = useContent()
  const { issueNumber } = useParams()

  const post = posts?.items.find(
    (item) => item.number.toString() === issueNumber
  )

  return (
    <div className="xl:px-72 lg:px-48 md:px-32 sm:px-5">
      <div className="px-8 py-10 whitespace-normal text-wrap">
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ ...props }) => (
              <h1 {...props} className="text-4xl font-bold my-4" />
            ),
            h2: ({ ...props }) => (
              <h2 {...props} className="text-3xl font-bold my-4" />
            ),
            h3: ({ ...props }) => (
              <h3 {...props} className="text-2xl font-bold my-4" />
            ),
            a: ({ ...props }) => (
              <a {...props} className="text-blue hover:underline" />
            ),
            p: ({...props}) => (
              <p {...props} className="text-base-text my-2 leading-[160%]" />
            ),
            code: ({...props}) => (
              <code {...props} className="text-white p-1 bg-[#4F6173] rounded-sm leading-[160%] my-1 break-words" />
            ),
            ul: ({...props}) => (
              <ul {...props} className="ml-12 list-disc" />
            ),
            ol: ({...props}) => (
              <ol {...props} className="ml-12 list-decimal" />
            ),
            li: ({...props}) => (
              <li {...props} className="leading-[160%] my-1" />
            ),
            img: ({...props}) => (
              <img {...props} className="rounded-sm my-3" />
            ),
          }}
        >
          {post ? post.body : "Post não encontrado"}
        </Markdown>
      </div>
    </div>
  )
}
