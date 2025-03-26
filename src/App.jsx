import React, { useState } from 'react'

const App = () => {
  let [Form, setForm] = useState({ fname: "", lname: "", city: "Barisal", gender: "" })

  const InputOnChange = (property, value) => {
    setForm(propertyObj => ({
      ...propertyObj,
      [property]: value
    }))
  }

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(Form)
  }

  return (
    <div className='container'>
      <form onSubmit={formSubmit}>
        <input onChange={(e) => { InputOnChange('fname', e.target.value) }} value={Form.fname} placeholder='First Name' />
        <input onChange={(e) => { InputOnChange('lname', e.target.value) }} value={Form.lname} placeholder='Last Name' />
        <select onChange={(e) => { InputOnChange('city', e.target.value) }} value={Form.city}>
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Barisal">Barisal</option>
        </select>
        <br />
        <input onChange={() => { InputOnChange('gender', 'Male') }} checked={Form.gender === "Male"} type="radio" name='gender' />Male
        <input onChange={() => { InputOnChange('gender', 'Female') }} checked={Form.gender === "Female"} type="radio" name='gender' />Female
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
