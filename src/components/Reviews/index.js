import './index.css'

const Reviews = () => (
  <div className="review-container">
    <h1 className="h12">Reviews</h1>
    <div className="con">
      <img
        className="rv"
        alt="r"
        src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-4.15.34-PM.jpg"
      />
      <button className="button" type="button">
        Write a review
      </button>
    </div>
    <div className="row">
      <img
        alt="logo"
        className="pic-1"
        src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-7.44.35-PM.jpg"
      />
      <div className="column">
        <p className="para">
          "Truly a Proffesional <span>people</span> to get your{' '}
          <span>service</span> done with them".
        </p>
        <img
          className="rv"
          alt="r"
          src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-4.15.34-PM.jpg"
        />
      </div>
    </div>
    <div className="row">
      <img
        alt="logo"
        className="pic-1"
        src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-7.57.38-PM.jpg"
      />
      <div className="column">
        <p className="para">
          "The <span>quality </span>of their <span>work </span>is impeccable and
          simply amazing!"
        </p>
        <img
          className="rv"
          alt="r"
          src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-4.15.34-PM.jpg"
        />
      </div>
    </div>
    <div className="row">
      <img
        alt="logo"
        className="pic-1"
        src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-7.57.37-PM.jpg"
      />
      <div className="column">
        <p className="para">
          "Great <span> ambience,</span> fully equipped. superb
          professionals..."
        </p>
        <img
          className="rv"
          alt="r"
          src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-4.15.34-PM.jpg"
        />
      </div>
    </div>
  </div>
)
export default Reviews
