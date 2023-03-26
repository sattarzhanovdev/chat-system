import React from 'react'
import { sendMessage, isTyping } from 'react-chat-engine' 
import { AiOutlinePicture } from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'

const MessageForm = (props) => {
  const [ value, setValue ] = React.useState('')
  const { chatId, creds } = props
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const text = value.trim()

    if(text.length > 0) sendMessage(creds, chatId, {text})

    setValue('')
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    isTyping(props, chatId)
  }

  const handleUpload = (e) => {
    sendMessage(creds, chatId, {files: e.target.files, text: ''})
  }

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input 
        type="text" 
        className='message-input'
        placeholder='send a message...'
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className='image-button'>
          <AiOutlinePicture className='picture-icon' />
        </span>
      </label>
      <input 
        type="file" 
        multiple={false}
        id='upload-button'
        style={{display: 'none'}}
        onChange={handleUpload}
      />
      <button type='submit' className='send-button'>
        <RiSendPlane2Line className='send-icon' />
      </button>
    </form>
  )
}

export default MessageForm