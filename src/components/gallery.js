/** @jsx jsx */
import { jsx } from 'theme-ui'

const Gallery = () => (
<div> 
  <div className="row">
    <div className="column">
    <a target="_blank" href="https://www.instagram.com/benjamin_interiors/"><img src="/assets/image1.jpg" alt="Instagram Dining Table"></img></a>
    </div>
    <div className="column">
    <a target="_blank" href="https://www.instagram.com/benjamin_interiors/">
      <img src="/assets/image2.jpg" alt="Instagram Bedroom">
    </img></a>
    </div>
    <div className="column">
    <a target="_blank" href="https://www.instagram.com/benjamin_interiors/">
      <img src="/assets/image3.jpg" alt="Instagram Work Desk">
      </img>
      </a>
    </div>
  </div>
  
  <div className="row">
    <div className="column">
      <a target="_blank" href="https://www.instagram.com/benjamin_interiors/"><img src="/assets/image4.jpg" alt="Instagram Living Room"></img></a>
    </div>
    <div className="column">
      <a  target="_blank" href="https://www.instagram.com/benjamin_interiors/">
      <img src="/assets/image5.jpg" alt="Instagram Bathroom"></img>
      </a>
    </div>
    <div className="column">
      <a target="_blank" href="https://www.instagram.com/benjamin_interiors/">
      <img src="/assets/image6.jpg" alt="Instagram Reading Nook"></img>
      </a>
    </div>
  </div>
</div>

)

export default Gallery