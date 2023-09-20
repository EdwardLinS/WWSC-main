import './RefereeTraining.css';

import { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import CountrySelect from '../../../components/CountrySelect/CountrySelect';


import { useFirestore } from '../../../hooks/useFirestore';

export default function RefereeTraining({ uid }) {
  const [date, setDate] = useState('')
  const [course, setCourse] = useState('')
  const [organization, setOrganization] = useState('')
  const [instructor, setInstructor] = useState('')
  const [location, setLocation] = useState('')

  const { addDocument, response } = useFirestore(`users/${uid}/records`)

  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
      date,
      course,
      organization,
      instructor,
      location,
      uid
    })

    reset()
  }

  const reset = () => {
    setDate('')
    setCourse('')
    setOrganization('')
    setInstructor('')
    setLocation('')
  }

  useEffect(() => {
    console.log("response", response.success);
    if (response.success) {
      setDate('')
      setCourse(null)
      setOrganization('')
      setInstructor('')
      setLocation('')
    }
  }, [response.success])

  return (
    <div className="referee-home">
      <div className="container train-container">
        <div className="training" style={{ marginTop: "1vw" }}>
          <form className="train-form" onSubmit={handleSubmit}>
            <div className="train-content">
              <h2>Input Training Record</h2>
              <label className='train-input'>
                <span>Training Date:*</span>
                <input
                  required
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  className='edit-field'
                />
              </label>
              <label className='train-input'>
                <span>Training Course:*</span>
                <select
                  required
                  onChange={(e) => setCourse(e.target.value)}
                  value={course}
                  className='edit-field'
                >
                  <option value="" selected disabled hidden>Choose a course</option>
                  <option value="G3 Course">G3 Course</option>
                  <option value="G4 Course">G4 Course</option>
                </select>
              </label>
              <label className='train-input'>
                <span>Organization:*</span>
                <input
                  required
                  type="text"
                  onChange={(e) => setOrganization(e.target.value)}
                  value={organization}
                  className='edit-field'
                />
              </label>
              <label className='train-input'>
                <span>Instructor:*</span>
                <input
                  required
                  type="text"
                  onChange={(e) => setInstructor(e.target.value)}
                  value={instructor}
                  className='edit-field'
                />
              </label>
              <label className='location-input'>
                <span>Location:*</span>
                <CountrySelect location={location} setLocation={setLocation} />
              </label>
            </div>
            <div className="form-button">
              <Button outline type="button" color="danger" onClick={reset}>Reset</Button>
              <Button outline color="primary" size="lg">Submit</Button>
            </div>
          </form>
        </div>
      </div>


    </div>
  )
}
