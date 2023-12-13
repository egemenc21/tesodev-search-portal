import './AddLinkStyles.scss'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import PreviousArrow from '../../assets/PreviousArrow'
import TesoDevLogo from '../../assets/logo.png'
import { toast } from 'react-toastify'

export interface RecordType {
  id: string
  nameSurname: string
  company: string
  email: string
  phone: string
  website: string
  country: string
  city: string
  date: string
  [key: string]: string | number
}

const defaultRecordFields = {
  id: '',
  nameSurname: '',
  country: '',
  city: '',
  email: '',
  website: '',
  date: '',
  phone: '',
  company: '',
}

function AddLink() {
  // const {addNewRecord } = useContext(RecordsContext)
  const [recordFields, setRecordFields] = useState(defaultRecordFields)
  const { nameSurname, country, city, email, website } = recordFields
  const [records, setRecords] = useState<RecordType[]>([])

  useEffect(() => {
    const response = localStorage.getItem('records')
    if (response) setRecords(JSON.parse(response))
  }, [setRecords])

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = nanoid()
    const date = new Date().toLocaleDateString()

    // unfortunately I tried so many options but I could'nt use ulvis for url shortener, I got CORS error all the time
    // const apiUrl = `https://ulvis.net/API/write/get?url=${website}=&private=1]`

    if (!validateInputs()) {
      // Handle validation error, prevent form submission
      return
    }

    // try {
    //   const response = await fetch(apiUrl)
    //   const data = await response.json()
    //   console.log(data,'data')
    //   if (response.ok) {
    const updatedRecordFields = { ...recordFields, id, date }
    //update records
    await records.push(updatedRecordFields)
    localStorage.setItem('records', JSON.stringify(records))

    setRecordFields(defaultRecordFields)

    // } catch (error) {console.error('Error:', error);}
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRecordFields({ ...recordFields, [name]: value })
  }

  const validateInputs = () => {
    const nameSurnameRegex = /^[a-zA-Z ]{4,60}$/
    const countryRegex = /^[a-zA-Z ]{2,40}$/
    const cityRegex = /^[a-zA-Z ]{2,40}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const websiteRegex =
      /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(:[0-9]+)?(\/.*)?$/

    if (!nameSurnameRegex.test(nameSurname)) {
      toast.error('Name and surname should contain at least 4 max 60 character')
      const inputElement = document.getElementById(
        'nameSurname'
      ) as HTMLInputElement
      if (inputElement) inputElement.classList.add('invalid')
      return false
    } else {
      const inputElement = document.getElementById(
        'nameSurname'
      ) as HTMLInputElement
      if (inputElement) inputElement.classList.remove('invalid')
    }

    if (!countryRegex.test(country)) {
      toast.error('Country should contain at least 2 max 40 character')
      const inputElement = document.getElementById(
        'country'
      ) as HTMLInputElement
      if (inputElement) inputElement.classList.add('invalid')
      return false
    } else {
      const inputElement = document.getElementById(
        'country'
      ) as HTMLInputElement
      if (inputElement) inputElement.classList.remove('invalid')
    }

    if (!cityRegex.test(city)) {
      toast.error('City should contain at least 2 max 40 character')
      const inputElement = document.getElementById('city') as HTMLInputElement
      if (inputElement) inputElement.classList.add('invalid')
      return false
    } else {
      const inputElement = document.getElementById('city') as HTMLInputElement
      if (inputElement) inputElement.classList.remove('invalid')
    }

    if (!emailRegex.test(email)) {
      toast.error('Email is not valid')
      const inputElement = document.getElementById('email') as HTMLInputElement
      if (inputElement) inputElement.classList.add('invalid')
      return false
    } else {
      const inputElement = document.getElementById('email') as HTMLInputElement
      if (inputElement) inputElement.classList.remove('invalid')
    }

    if (website && !websiteRegex.test(website)) {
      toast.error('Website is not valid. It should start with "https://".')
      const inputElement = document.getElementById(
        'website'
      ) as HTMLInputElement
      if (inputElement) inputElement.classList.add('invalid')
      return false
    } else {
      const inputElement = document.getElementById(
        'website'
      ) as HTMLInputElement
      if (inputElement) inputElement.classList.remove('invalid')
    }

    return true
  }

  const isFormValid = () => {
    return (
      nameSurname.trim() !== '' &&
      country.trim() !== '' &&
      city.trim() !== '' &&
      email.trim() !== '' &&
      website.trim() !== ''
    )
  }

  return (
    <div className="add-link-container">
      <div className="link-container">
        <Link to="/">
          <img src={TesoDevLogo} alt="Tesodev Logo" />
        </Link>
        <div className="return">
          <Link to="/search/" className="return">
            <PreviousArrow />
          </Link>
          Return to list page
        </div>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Name Surname
          <input
            type="text"
            name="nameSurname"
            id="nameSurname"
            className="base-input"
            value={nameSurname}
            onChange={handleChange}
            required
            placeholder="Enter name and surname"
          />
        </label>
        <label>
          Country
          <input
            type="text"
            name="country"
            id="country"
            className="base-input"
            value={country}
            onChange={handleChange}
            required
            placeholder="Enter a country"
          />
        </label>
        <label>
          City
          <input
            type="text"
            name="city"
            id="city"
            className="base-input"
            value={city}
            onChange={handleChange}
            required
            placeholder="Enter a city"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            id="email"
            className="base-input"
            value={email}
            onChange={handleChange}
            required
            placeholder="Enter an e-mail (abc@xyz.com)"
          />
        </label>
        <label>
          Website
          <input
            type="text"
            name="website"
            id="website"
            className="base-input"
            value={website}
            onChange={handleChange}
            required
            placeholder="Enter a website (https://xyz.com)"
          />
        </label>
        <Button disabled={!isFormValid()}>Add</Button>
      </form>
    </div>
  )
}

export default AddLink
