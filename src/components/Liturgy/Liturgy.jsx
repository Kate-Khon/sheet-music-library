import { Link } from "react-router-dom";

export const Liturgy = () => {
  return (
    <>
      <ul className="library">
        <li className="library__element">
          <Link to="ectenias" className="itemLink">
            Ectenias
          </Link>
        </li>
      </ul>
    </>
  )
}