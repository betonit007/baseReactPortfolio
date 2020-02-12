import React, { useState } from 'react'
import './Contact.css'


const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comments: ''
    })

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const { email, name, comments } = formData;

    const onSubmit = async e => {
        e.preventDefault();
        if (name && email) {
          sendEmail();
          setFormData({name: '', email: '', comments: ''})
        }

    }

    const sendEmail = async () => {
        let reply = await window.emailjs.send(
            'gmail', 'portfolio',
            formData
        )

        console.log(reply);
    }

    return (
        <div id='contact' style={{ height: '100vh' }}>
            <div className="contactContainer">
                <h1 className="large text-primary">
                    Contact Me
            </h1>

                <form className="form" onSubmit={onSubmit}>

                    <div className="form-group">
                        <input type="text"
                            value={name}
                            name='name'
                            placeholder='Name'
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input type="email"
                            value={email}
                            name='email'
                            placeholder='Email'
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <textarea type="textbox"
                            value={comments}
                            name='comments'
                            rows='5'
                            placeholder='Comments'
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>


                    

                    <input type="submit" value="Submit" className='btn' />
                </form>
            </div>
        </div>
    )
}

export default ContactMe