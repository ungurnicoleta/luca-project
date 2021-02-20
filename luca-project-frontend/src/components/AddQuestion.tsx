import React, { useState } from 'react'

type Props = { 
  saveQuestion: (e: React.FormEvent, formData: IQuestion | any) => void 
}

const AddQuestion: React.FC<Props> = ({ saveQuestion }) => {
  const [formData, setFormData] = useState<IQuestion | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveQuestion(e, formData)}>
      <div>
        <div>
          <label htmlFor='title'>Title</label>
          <input onChange={handleForm} type='text' id='title' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} type='text' id='description' />
        </div>
        <div>
          <label htmlFor='author'>Author</label>
          <input onChange={handleForm} type='text' id='author' />
        </div>
        <div>
          <label htmlFor='author'>Author</label>
          <input onChange={handleForm} type='text' id='author' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add Question</button>
    </form>
  )
}

export default AddQuestion