import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'
import * as emailjs from 'emailjs-com'

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      subject: 'Email from portfolio',
      message: '',
      errors: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }

  handleInputChange(event) {
    event.preventDefault()
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({[name]: value})
  }

  validateMail() {
    let errors = {}
    let formIsValid = true

    if (!this.state.name || this.state.name.length < 3) {
      errors.name = 'Minimum 3 characters'
      formIsValid = false
    }

    if (!this.state.subject || this.state.subject.length < 3) {
      errors.subject = 'Minimum 3 characters'
      formIsValid = false
    }

    if (!this.state.message || this.state.message.length < 3) {
      errors.message = 'Minimum 3 characters'
      formIsValid = false
    }

    if (!this.state.email || this.state.email.length < 3) {
      errors.email = 'Minimum 3 characters'
      formIsValid = false
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (!pattern.test(this.state.email)) {
      errors.email = 'This is not a valid email'
      formIsValid = false
    }

    this.setState({errors: errors})

    return formIsValid
  }

  sentMessage(event) {
    event.preventDefault()

    if (!this.validateMail()) {
      return
    }

    var templateParams = {
      from_name: this.state.name + ' (' + this.state.email + ')',
      to_name: 'Evan - Portfolio',
      subject: this.state.subject,
      message_html: this.state.message
    }

    emailjs.send('outlook', 'template_tsqCor1k', templateParams, 'user_x42GvzZR07ZAcpHuTPxlr').then(function(response) {
      console.log('Success!', response.status, response.text)
    }, function(err) {
      console.log(err)
    })

    document.querySelectorAll('input').forEach((node) => {
      node.style.pointerEvents = 'none';
      node.style.backgroundColor = '#ffffff'
      node.placeholder = ''
      node.disabled = true

    })
    document.querySelectorAll('textarea').forEach((node) => {
      node.style.pointerEvents = 'none';
      node.style.backgroundColor = '#ffffff'
      node.placeholder = ''
      node.disabled = true
    })
    document.querySelectorAll('button').forEach((node) => {
      node.parentNode.removeChild(node)
    })

    let node = document.createElement('p')
    let textnode = document.createTextNode('Talk to you soon!')
    node.appendChild(textnode)
    document.querySelector('form').appendChild(node)

    this.setState({name: this.state.name, email: this.state.email, subject: '', message: this.state.message})
  }

  render() {

    return (
      <div className="contact-page">

        <h1>Get in touch</h1>

        <form id={this.props.id} className={this.props.className} name={this.props.name} method={this.props.method} action={this.props.action}>

          <Input type='text' name='name' placeholder="Your name" className='form-control' required='required' onChange={this.handleInputChange.bind(this)} value={this.state.name} error={this.state.errors.name}/>

          <Input type='email' name='email' placeholder='Your email' className='form-control' required='required' onChange={this.handleInputChange.bind(this)} value={this.state.email} error={this.state.errors.email}/>

          {/* <Input type='text' name='subject' placeholder='The subject' className='form-control hidden' required='required' onChange={this.handleInputChange.bind(this)}
            value = {this.state.subject}
            error={this.state.errors.subject}/> */}

          <TextArea placeholder="Send me something nice" name='message' id='message' required='required' className='form-control' rows='4' onChange={this.handleInputChange.bind(this)} value={this.state.message} error={this.state.errors.message}/>

          <Button onClick={this.sentMessage.bind(this)} type='button' name='submit' className='btn btn-primary btn-lg' required='required'/>

        </form>

        <span className="alt-contact">Or, contact me on <a href="https://www.linkedin.com/in/evanamezcua/" className="linkedin squiggle-hover-black"><img src="linkedin-in-brands.svg" alt="linkedin"/></a></span>

      </div>
    )
  }
}

export default Contact
