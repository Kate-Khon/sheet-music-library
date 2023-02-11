import { Link } from "react-router-dom";

// Polish titles (eng chars) & Routes (format: name-name-name)
const list = {
  'ektenie-wielkie': 'Ektenie wielkie',
  'antyfony1': 'Antyfony I',
  'ektenie-male-1': 'Ektenie małe I',
  'antyfony2': 'Antyfony II',
  'antyfony3': 'Antyfony III',
  'przyjdzcie-poklonmy-sie': 'Przyjdźcie, pokłońmy się',
}

export const Liturgy = () => {
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
        {Object.keys(list).map(key => (
          <li key={key} className="library__element">
            <Link to={key} className="itemLink">
              {list[key]}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}