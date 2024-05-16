import { ChangeEvent, FormEvent, useState } from "react";

interface ExperienceFormData {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
}

const ExperienceForm = () => {
    const [formData, setFormData] = useState<ExperienceFormData>({
        company: "",
        position: "",
        startDate: "",
        endDate: ""
    });
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Experience form data", formData)
    }

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevForm => ({...prevForm, [name]: value}));
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <h2>Experience details</h2>

            <label>
                Company:
                <input 
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChangeInput}
                />
            </label>

            <br />

            <label>
                Position:
                <input 
                name="position"
                type="text"
                value={formData.position}
                onChange={handleChangeInput}
                />
            </label>

            <br />

            <label>
                StartDate:
                <input 
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChangeInput}
                />
            </label>

            <br />

            <label>
                EndDate:
                <input 
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChangeInput}
                />
            </label>

            <button type='submit'>Submit</button>
        </form>
    )
};

export default ExperienceForm;