import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

interface FormData {
    institution: string;
    degree: string;
    fieldOfStudy: string;
}

const EducationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    institution: "",
    degree: "",
    fieldOfStudy: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form data is submitted", formData);
  }

  useEffect(() => {
    console.log(formData)
  },[])
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} =  e.target;
    setFormData(prevData => ({...prevData, [name]: value}));
  }
    return (
    <form onSubmit={handleSubmit}>
        <h2>Education Details</h2>
        <label>
            Institution:
            <input 
            type='text'
            name='institution'
            value={formData.institution}
            onChange={handleChange}
            required
            />
        </label>
        <br />

        <label>
            Degree:
            <input 
            name='degree'
            type='text'
            value={formData.degree}
            onChange={handleChange}
            required
            />
        </label>

        <br />

        <label>
            Field of Study:
            <input 
            name='fieldOfStudy'
            type='text'
            value={formData.fieldOfStudy}
            onChange={handleChange}
            required
            />
        </label>

        <button type='submit'>Submit</button>
    </form>
  )
};


export default EducationForm;
