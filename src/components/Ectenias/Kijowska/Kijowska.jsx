import ReactAudioPlayer from 'react-audio-player';

export const Kijowska = () => {
  return (
    <div className="library">
      <h1 className="title">Ektenia wielka Kijowska</h1>

      <a
        className="download-link" 
        href="./kijowska.pdf" 
        download
      >
        Download PDF
      </a>

      <ReactAudioPlayer
        className="player"
        src="./kijowska.wav"
        controls
      />
    </div>
  )
}