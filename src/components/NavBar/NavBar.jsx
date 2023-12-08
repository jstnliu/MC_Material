import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // delegate to users-service
    userService.logOut()
    // update state will also cause a re-render
    setUser(null)
  }

  return (
    <nav>
      <Link to='/posts' >All Posts</Link>
      &nbsp; | &nbsp;
      <Link to='/search'>Search Anime</Link>
      &nbsp; | &nbsp;
      <span>Hello, { user.name }</span>
      &nbsp;  &nbsp;
      <Link to='' onClick={ handleLogOut }>Log Out</Link>
    </nav>
  )
}
