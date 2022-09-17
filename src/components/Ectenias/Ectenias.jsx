import { Link } from "react-router-dom"

export const Ectenias = () => {
  return (
    <>
      <ul className="library">
        <li className="library__element">
          <Link to="kijowska" className="itemLink">
            Kijowska
          </Link>
        </li>
      </ul>
    </>
  )
}