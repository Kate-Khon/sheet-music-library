import { Link } from "react-router-dom"

export const Collection = ({ list }) => {
  const location = window.location.hash.split('/');
  location.shift();

  const fullPath = window.location.href.split('/').slice(5);
  const mainPath = 'https://kate-khon.github.io/sheet-music-library/#/';
  const pathList = {};

  for (let i = 1; i <= fullPath.length; i++) {
    pathList[i - 1] = fullPath.slice(0, i).join('/');
  }

  return (
    <>
      <div className="breadcrumbs">
        <div className="breadcrumbs__container">
          {location.map((link, i) => (
            i < (location.length - 1)
              ? <a href={`${mainPath}${pathList[i]}`}> {link} &gt;&gt;</a>
              : <a href={`${mainPath}${pathList[i]}`}> {link}</a>
          ))}
        </div>
      </div>
      <ul className="library">
        {list.map((item) => (
          <li key={item.path} className="library__element">
            <Link to={item.path} className="itemLink">
              {item.author}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}