import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Summary() {
  return (
    <section className="xl:px-72 -mt-[100px]">
      <header className="p-8 flex gap-8 rounded-[10px] bg-base-profile items-center shadow-xl mb-[72px] relative">
        <img src="/public/eu.jpg" className="size-[148px] rounded-lg" />

        <div className="flex flex-col gap-6 flex-1">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl text-base-title">Meu nome</h2>
              <span className="flex items-center gap-2 font-bold text-blue cursor-pointer hover:border-b-2 hover:border-blue transition ease-linear delay-0">
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </div>

            <p className="text-base text-base-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              provident in? Illum, hic nostrum tenetur laboriosam a ut ratione
              eius obcaecati sit assumenda, harum quibusdam laborum sequi itaque
              tempore adipisci earum.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-base-label text-lg"
              />
              <span className="text-base text-base-subtitle">Username</span>
            </div>

            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faBuilding}
                size="1x"
                className="text-base-label"
              />
              <span className="text-base text-base-subtitle">Rocketseat</span>
            </div>

            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faUserGroup}
                size="1x"
                className="text-base-label"
              />
              <span className="text-base text-base-subtitle">
                32 seguidores
              </span>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}
