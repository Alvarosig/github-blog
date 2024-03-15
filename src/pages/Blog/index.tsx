import { ChangeEvent, useState } from "react"
import { Card } from "../../components/Card"
import { Search } from "../../components/Search"
import { Summary } from "../../components/Summary"

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearchChange (event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.currentTarget.value)
  }

  return (
    <div className="max-xl:px-32 max-md:px-20 max-sm:px-8">
      <Summary />
      <Search onSearchChange={handleSearchChange}/>
      <Card searchTerm={searchTerm}/>
    </div>
  )
}
