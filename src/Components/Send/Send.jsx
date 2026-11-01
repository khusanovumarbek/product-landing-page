import './Send.css'

const Send = () => {
  return (
    <div className='Send'>
      <h1>Send a message</h1>
      <div className="sinp">
        <input type="text" placeholder='Your Name' />
      </div>
      <div className="sinp">
        <input type="text" placeholder='Your Email' />
      </div>
        <div className="mess">
            <textarea name="mess" id="ymess" placeholder='Your Message'></textarea>
        </div>
        <button onClick={()=>{alert('✔️')}}>Send</button>
    </div>
  )
}

export default Send
