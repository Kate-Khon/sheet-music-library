import './Library.scss';
import { Link } from "react-router-dom";

export const Library = () => {
  return (
    <>
      <ul className="library">
        <li className="library__element">
          <Link to="liturgy" className="itemLink">
            Liturgy
          </Link>
        </li>
      </ul>
    </>
  )
}