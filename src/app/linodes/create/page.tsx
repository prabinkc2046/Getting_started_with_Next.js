import React from 'react'

export const Create = () => {
  return (
    <div>
        <form>
            <label>
                Region
                <input 
                type='text'  
                />
            </label>

            <button type='submit'>Create Linode</button>
        </form>
    </div>
  )
}

export default Create;