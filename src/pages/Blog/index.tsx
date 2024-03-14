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
    <>
      <Summary />
      <Search onSearchChange={handleSearchChange}/>
      <Card searchTerm={searchTerm}/>
    </>
  )
}
