import React from 'react'
import './App.css'
import Video from './components/Video'
import videoMetadata from './metadata/videos.json'

export default function App() {
  const videos = videoMetadata

  return (
    <div className='app'>
      <div className='container'>
        {videos.map((video, index) => {
          return (
            <Video
              key={index}
              channel={video.channel}
              description={video.description}
              song={video.song}
              likes={video.likes}
              shares={video.shares}
              messages={video.messages}
              url={video.url}
            />
          )
        })}
      </div>
    </div>
  )
}
