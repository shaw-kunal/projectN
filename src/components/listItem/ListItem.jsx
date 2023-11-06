import React, { useState } from 'react'
import "./listItem.scss"
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownAltOutlined, PostAddRounded } from '@mui/icons-material'
import poster from "../../images/Poster.jpg"
const ListItem = () => {
  const [isHovered, setIsHovered] = useState(false)
  const trailer = "https://imdb-video.media-imdb.com/vi2163260441/1434659607842-pgv4ql-1556354704370.mp4?Expires=1699269120&Signature=odOCJKKo96-cmRjDlWILACpZCAUszUU2yRAd1C5PfLZu4HPjNkjs~-38cDRsy5IqqMCk4H1kJCv6z14QIB2yInnCat6K7UVnXYykBh55QelGd~osLLvn-0srBnzjWnpk8BCalj2Gzq0GEFRL8OIMTqKy0P46itRcFZ6KXfzhame8qikE6EffSYoDlqS4OBqJfzK5PP4BDOMsNfpXI6scBq2SuDG1Ia2X0x~akcQprSM5Xn7bHh8wEsBxPIGHAxUsB29O05VQZZ-WjrKBONPRu9gt~sUUT~WklbEyp4WnFlvlSVdsO5pVWtDaYy0VYf-74AE91IUxmlhiT~iKZ88Dng__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  // "https://imdb-video.media-imdb.com/vi3917261849/1434659607842-pgv4ql-1616202502026.mp4?Expires=1699250054&Signature=lzu~sFu8Gi1Z98Q4aqY2QLiDRdqU7n589LdXoN0M2RhMVkk304MXXRcy~eXhzklvQ0iWdePc9u24pDKsdKeNhrCjZ2wOaYGJUTk2nWK4IxYp03X5wQysy1jnA64oKvql3gcBSXMp~nO1BETPiKTTU9p8l8-Kk5QwgWfD2lpzpdxd8uji919f68JkDRKtXHtd49R0qVcHl4yPsC36auVJ-A-5gA64yAQyx~ief-d-d0LnFMHCD32PPJNVZff1gZ-lQYxoxAMuTu92NoPINrg2pUDZWLXW~CTABZtDEwcF0BLsoUu-dyJSi4uIAmyIpv3PUZyNAH45YXDw-WbJce4N8w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  return (
    <div className="listContainer">
      <div className='listItem'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false) }}
      >

        {
          !isHovered &&
          <img src={poster} alt="" />
        }

        {
          isHovered &&
          <>
            <video src={trailer} autoPlay={true} loop></video>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className='icon'/>
                <Add className='icon'/>
                <ThumbUpAltOutlined className='icon'/>
                <ThumbDownAltOutlined className='icon'/>
              </div>
              <div className="itemInfoTop">
                <span>2 hour 14 min</span>
                <span className='limit'>+16</span>
                <span>2020</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam eaque fugiat, possimu.
              </div>
              <div className="genre">
                Fiction
              </div>
            </div>
          </>

        }

      </div>
    </div>
  )
}

export default ListItem