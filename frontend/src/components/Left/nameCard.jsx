import './nameCard.css'
import React from 'react';


const nameCard = () => {

  const handleClick = () => {
    document.querySelector('.bg-text').style.display = 'none'
    document.querySelector('.leftbar').style.display = 'contents'
    document.querySelector('.mainmid').style.display = 'flow'
    document.querySelector('.right').style.display = 'flow'
  }

  return (
    <div >
      <div className="NameCard" onClick={handleClick}>
        <div className="pic">
          <img src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png" alt="" />
        </div>
        <div className="content">
          <div className="info">
            <h4>Andrea mendoza</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus sit repellendus doloremque aperiam rem?</span>
          </div>
          <div className="time">14m</div>
        </div>
      </div>
    </div>
  )
}

export default nameCard