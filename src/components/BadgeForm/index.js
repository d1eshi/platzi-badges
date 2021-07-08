import React from 'react'

export default function BadgeForm ({ onChange: handleChange, onSubmit: handleSubmit, formValues }) {
  const { firstName, lastName, email, jobTitle, twitter } = formValues

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <input className='form-control' onChange={handleChange} type='text' name='firstName' value={firstName} />

          <label htmlFor='lastName'>Last Name</label>
          <input className='form-control' onChange={handleChange} type='text' name='lastName' value={lastName} />

          <label htmlFor='email'>Email</label>
          <input className='form-control' onChange={handleChange} type='email' name='email' value={email} />

          <label htmlFor='jobTitle'>Job Title</label>
          <input className='form-control' onChange={handleChange} type='text' name='jobTitle' value={jobTitle} />

          <label htmlFor='twitter'>Twitter</label>
          <input className='form-control' onChange={handleChange} type='text' name='twitter' value={twitter} />

          <button className='btn btn-primary'>Save</button>
        </div>
      </form>
    </div>
  )
}
