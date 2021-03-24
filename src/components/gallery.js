/** @jsx jsx */
import { jsx } from 'theme-ui'

const Gallery = () => (
<div> 
  <div className="row">
    <div className="column">
      <img src="/assets/image1.jpg"></img>
    </div>
    <div className="column">
      <img src="/assets/image2.jpg"></img>
    </div>
    <div className="column">
      <img src="/assets/image3.jpg"></img>
    </div>
  </div>
  
  <div className="row">
    <div className="column">
      <img src="/assets/image4.jpg"></img>
    </div>
    <div className="column">
      <img src="/assets/image5.jpg"></img>
    </div>
    <div className="column">
      <img src="/assets/image6.jpg"></img>
    </div>
  </div>
</div>

)

export default Gallery