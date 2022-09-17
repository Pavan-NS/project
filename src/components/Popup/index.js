import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Share
        </button>
      }
    >
      <div className="popup-container1">
        <h1>
          Sharing <span>Akhil Chakravarthy's</span> Tako Card
        </h1>

        <input
          id="name"
          className="input1"
          type="text"
          placeholder="Full Name"
        />
      </div>
      <div className="radio-container">
        <input id="radio" type="radio" />
        <label htmlFor="radio">WhatsApp</label>
        <input id="radio" type="radio" />
        <label htmlFor="radio">Sms</label>
        <input id="radio" type="radio" />
        <label htmlFor="radio">Email</label>
      </div>
      <input
        id="name"
        className="input1"
        type="text"
        placeholder="Enter Phone Number / Enter Email"
      />
    </Popup>
  </div>
)
export default ReactPopUp
