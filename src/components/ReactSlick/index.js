import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlick = () => {
  const setting = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider">
      <img
        alt="logo"
        className="logo-1"
        src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-7.13.58-PM.jpg"
      />
      <img
        alt="logo"
        className="logo-1"
        src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-7.13.58-PM.jpg"
      />
      <img
        alt="logo"
        className="logo-1"
        src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-7.13.58-PM.jpg"
      />
    </div>
  )
}
export default ReactSlick
