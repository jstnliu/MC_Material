import SearchForm from '../../components/SearchForm/SearchForm'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as jikanAPI from '../../utilities/jikan-api'

export default function SearchAnimePage() {

    const [animeName, setAnimeName] = useState('')

  return (
    <>
        <div>SearchAnimePage</div>
        <SearchForm />
    </>
  )
}
