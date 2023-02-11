import './Library.scss';
import { Link } from "react-router-dom";

export const Library = () => {
  const location = window.location.hash.split('/')[1];

  return (
    <>
      <div className="breadcrumbs">
        <div className="breadcrumbs__container">
          <span>{location}</span>
        </div>
      </div>
      <ul className="library">
        <li key="liturgia" className="library__element">
          <Link to="liturgia" className="itemLink">
            Liturgia
          </Link>
        </li>
      </ul>
    </>
  )
}