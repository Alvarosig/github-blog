export function Header() {
  return (
    <div className="flex justify-center py-16 bg-gradient-to-b from-sky-900 to-base-background">
      <div className="flex justify-between w-full">
        <img src="/effect.svg" className="w-[409px] h-[188px]"/>
        
        <div className="flex flex-col items-center">
          <header className="flex flex-col items-center gap-5">
            <img src="/icon.svg" className="w-11 h-10"/>
            <h1 className="font-coda text-2xl text-blue">GITHUB BLOG</h1>
          </header>
        </div>

        <img src="/effect2.svg" />
      </div>
    </div>
  )
}