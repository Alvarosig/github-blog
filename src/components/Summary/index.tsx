import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { useContent } from "../../contexts/ContentContext"

export function Summary() {
  const { userData } = useContent()

  return (
    <section className="xl:px-72 -mt-[100px]">
      <header className="p-8 flex max-md:flex-col gap-8 rounded-[10px] bg-base-profile items-center shadow-xl mb-[72px] relative">
        <img
          src={userData?.avatar_url}
          className="size-[148px] max-lg:size-36 object-cover rounded-lg"
        />

        <div className="flex flex-col gap-6 flex-1">
          <div className="flex flex-col gap-2">
            <div className="flex max-sm:flex-col items-center justify-between">
              <h2 className="font-bold text-2xl max-lg:text-xl text-base-title">
                {userData?.name}
              </h2>
              {userData?.html_url && (
                <Link
                  to={userData?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-2 font-bold text-blue max-lg:text-sm cursor-pointer hover:border-b-2 hover:border-blue transition ease-linear delay-0">
                    GITHUB
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </span>
                </Link>
              )}
            </div>

            <p className="text-base text-base-text max-lg:text-sm">{userData?.bio}</p>
          </div>

          <div className="flex items-center gap-6 max-md:justify-center">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-base-label text-lg"
              />
              <span className="text-base text-base-subtitle">
                {userData?.login}
              </span>
            </div>

            {/* <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faBuilding}
                size="1x"
                className="text-base-label"
              />
              <span className="text-base text-base-subtitle">Rocketseat</span>
            </div> */}

            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faUserGroup}
                size="1x"
                className="text-base-label"
              />
              <span className="text-base text-base-subtitle whitespace-nowrap">
                {userData?.followers} seguidores
              </span>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}
