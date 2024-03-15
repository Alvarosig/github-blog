import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useContent } from "../../contexts/ContentContext"
import { Link, useParams } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"

export function DataVisor() {
  const { posts } = useContent()

  const { issueNumber } = useParams()

  return (
    <section className="xl:px-72 lg:px-48 md:px-32 sm:px-5 -mt-[100px]">
      {posts?.items.map((item) => {
        if (item.number.toString() === issueNumber) {
          return (
            <header
              key={item.number}
              className="p-8 flex gap-8 rounded-[10px] bg-base-profile items-center shadow-xl relative"
            >
              <div className="flex flex-col gap-5 w-full">
                <div className="flex justify-between" key={item.number}>
                  <Link
                    to="/"
                    className="flex items-center gap-2 font-bold text-blue cursor-pointer hover:border-b-2 hover:border-blue transition ease-linear delay-0"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                    VOLTAR
                  </Link>
                  <Link
                    to={item.html_url}
                    className="flex items-center gap-2 font-bold text-blue cursor-pointer hover:border-b-2 hover:border-blue transition ease-linear delay-0"
                  >
                    VER NO GITHUB
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Link>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-2xl text-base-title">
                    {item.title}
                  </h2>

                  <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-center gap-8">
                    <div className="flex gap-2 items-center">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-base-label text-lg"
                      />
                      <span className="text-base text-base-span">
                        {item.user.login}
                      </span>
                    </div>

                    <div className="flex gap-2 items-center">
                      <FontAwesomeIcon
                        icon={faCalendarDay}
                        className="text-base-label text-lg"
                      />
                      <span className="text-base text-base-span ">
                        {formatDistanceToNow(item.created_at, {
                          addSuffix: true,
                          locale: ptBR,
                        })}
                      </span>
                    </div>

                    <div className="flex gap-2 items-center">
                      <FontAwesomeIcon
                        icon={faComment}
                        className="text-base-label text-lg"
                      />
                      <span className="text-base text-base-span ">
                        {item.comments} comentários
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          )
        } else {
          return null
        }
      })}
    </section>
  )
}
