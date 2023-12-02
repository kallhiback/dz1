import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Main</Link>
            </li>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/create">CreateForm</Link>
            </li>
        </ul>
  </nav>
  )
}

export default Navbar