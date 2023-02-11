export const Item = ({ toShow }) => {
  const path = window.location.hash.split('/')[3];
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
      <div className="library">
        <h1 className="title">{toShow.title}, <br></br> {toShow.author}</h1>

        <a
          className="download-link" 
          href={`./${path}/${toShow.folder}/${toShow.path}.pdf`} 
          download
        >
          Download PDF
        </a>

        <audio 
          className="player"
          src={`./${path}/${toShow.folder}/${toShow.path}.wav`} 
          controls
        ></audio>

        {toShow.uprTitle && (
          <>
          <h2 className="title title--small">{toShow.uprTitle}</h2>

          <a
            className="download-link download-link--small" 
            href={`./${path}/${toShow.folder}/${toShow.uprPath}.pdf`} 
            download
          >
            Download PDF
          </a>
    
          <audio 
            className="player player--small"
            src={`./${path}/${toShow.folder}/${toShow.uprPath}.wav`} 
            controls
          ></audio>
          </>
        )}
      </div>
    </>
  )
}
