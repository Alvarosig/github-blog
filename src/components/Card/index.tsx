export function Card() {
  return (
    <div className="flex gap-8 flex-wrap xl:px-72 w-full mb-40">
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <article
            key={index}
            className="flex flex-col gap-5 p-8 h-[260px] w-[416px] bg-base-post shadow-lg rounded-[10px] hover:ring-2 hover:ring-base-border cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <h3 className="font-bold text-base-title text-xl">
                JavaScript data types and data structures
              </h3>
              <span className="font-normal text-base-span text-sm whitespace-nowrap">
                Há 1 dia
              </span>
            </div>

            <p className="font-normal text-base text-base-text overflow-hidden overflow-ellipsis text-wrap line-clamp-5">
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </article>
        )
      })}
    </div>
  )
}
