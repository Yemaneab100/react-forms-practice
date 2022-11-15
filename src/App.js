import { useState } from 'react'
import './App.css'

const initialFormState = {
  fullName: '',
  address: '',
  phoneNumber: '',
  email: '',
  complaint: '',
  contact: 'Email',
  agreement: false

}
export default function App() {
  //TODO: Add your state fields here
  const [formState, setFormState] = useState(initialFormState)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submited', formState)
    setFormState(initialFormState)
  }

  const handleCHange = (event) => {
    const targetValue = event.target.value
    const targetName = event.target.name
    const targetType = event.target.type
    const targetChecked = event.target.value

    if (targetName === 'name') {
      setFormState({ ...formState, fullName: targetValue })
    }
    if (targetName === 'address') {
      setFormState({ ...formState, address: targetValue })
    }
    if (targetName === 'phone') {
      setFormState({ ...formState, phoneNumber: targetValue })
    }
    if (targetName === 'email') {
      setFormState({ ...formState, email: targetValue })
    }

    if(targetName === 'complaint'){
      setFormState({ ...formState, complaint: targetValue })
    }

    if(targetName === 'contact'){
      setFormState({ ...formState, contact: targetValue })
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              required
              value={formState.fullName}
              onChange={handleCHange}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={formState.address}
              onChange={handleCHange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formState.phoneNumber}
              onChange={handleCHange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleCHange}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={formState.complaint}
              onChange={handleCHange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone"
               checked={formState.contact === "phone"}
               onChange={handleCHange}/>
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" 
              checked={formState.contact === "email"}
              onChange={handleCHange}/>
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post"
              checked={formState.contact === "post"}
              onChange={handleCHange} />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none"
              checked={formState.contact === "none"}
              onChange={handleCHange} />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  )
}
