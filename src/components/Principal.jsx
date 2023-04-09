import React from 'react'

const Principal = () => {
  return (
    <div className='ConteinerPrincipal'>
      <video className='videoP' autoPlay muted loop playsInline >
        <source src='../img/video.mp4' type='video/mp4'/>
      </video>
      <h2>iPhone 14</h2>
      <p className='texto1'>iPhone14 can detect a severe car crash,then call 911 and notify your emergency contacts.3</p>
      <p className='texto2'>Looking for an even more advanced display? iPhone14 Pro hasDynamic
         Island,a magical new way to interact with iPhone.And an Always‑On
         display,which keeps your important info at a glance.</p>
         
    </div>
  )
}

export default Principal
