import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
import { HashLink } from 'react-router-hash-link'


const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comments: '',
        success: false
    })

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const { email, name, comments } = formData;

    const [emailSuccess, setEmailSuccess] = useState(false);

    const onSubmit = async e => {
        e.preventDefault();
        if (name && email) {
            sendEmail();
        }
    }

    const sendEmail = async () => {
        let reply = await emailjs.send(
            'gmail', 'portfolio',
            formData, "user_j1oT0peCjK8av8K6tYQBO"
        )
        if (reply.status === 200) {
            setEmailSuccess(true);
            setFormData({ email: '', name: '', comments: '' })
            setTimeout(() => { setEmailSuccess(false) }, 2900)
        }
    }

    return (
        <div id='contact' style={{ height: '100vh' }}>
            <div className="contactContainer">
                <h1>
                    Contact Me
            </h1>
                {emailSuccess &&
                    <div className="sendSuccessContainer">
                        <div className="sendSuccess">Email Sent!</div>
                    </div>
                }
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
            <div className="homeLinkContainer">
                <HashLink smooth to='/#landing'><div className="returnHome">&#187;</div></HashLink>
            </div>
        </div>
    )
}

export default ContactMe