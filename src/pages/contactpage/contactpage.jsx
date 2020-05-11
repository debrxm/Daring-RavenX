import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

//Components
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';

// Assets
import sendIcon from '../../assets/sendIcon.svg';

import './contactpage.scss';

export default class ContactPage extends Component {
  constructor() {
    super();
    this.state = {
      userFullName: '',
      userEmail: '',
      userPhoneNumber: '',
      userMessage: '',
      isSuccess: false,
    };
  }

  handleChange = (e) => {
    this.name = e.target.name;
    this.setState({
      [this.name]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      userFullName,
      userEmail,
      userPhoneNumber,
      userMessage,
    } = this.state;
    const data = {
      name: userFullName,
      email: userEmail,
      phone: userPhoneNumber,
      messsage: userMessage,
    };
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    try {
      const fetchResponse = await fetch(
        `http://localhost:5000/sendmail`,
        settings
      );
      await fetchResponse.json();
      this.setState({
        isSuccess: true,
        userFullName: '',
        userEmail: '',
        userMessage: '',
      });
    } catch (err) {
      this.setState({ isSuccess: false });
    }
  };
  render() {
    return (
      <div className="contactpage">
        <Helmet>
          <title>Daring RavenX &mdash; Contact</title>
          <meta property="og:title" content="Daring RavenX &mdash; Contact" />
          <meta property="og:type" content="website" />
          <meta name="description" content="" />
          <meta property="og:site_name" content="Daring RavenX" />
          <meta property="og:url" content="https://www.ravenx.com.ng/contact" />
        </Helmet>
        <div className="contact">
          <main>
            <div id="contactHeading">
              <h1>GET IN TOUCH</h1>
              <p>
                Whether you want to get in touch about something you’ve seen on
                my blog, would like to see on my blog or to discuss a book, put
                forward your bookstore for a feature or suggest some content
                you’dlike to see, feel free to get in touch with me at{' '}
                <a
                  href="mailto:jimoh@ravenx.com.ng?Subject=Hello%20Friend"
                  target="_top"
                >
                  jimoh@ravenx.com.ng
                </a>
              </p>
              <p>
                Alternatively, you can find me on{' '}
                <a href="https://www.facebook.com">Facebook</a>,{' '}
                <a href="https://www.twitter.com">Twitter</a> and{' '}
                <a href="https://www.jw.com">Instagram</a>.
              </p>
              <p>
                If you’d like to work with me, find out about the services i
                offer here.
              </p>
            </div>
            <div id="contactForm">
              <form onSubmit={this.handleSubmit}>
                <FormInput
                  type="text"
                  name="userFullName"
                  value={this.state.userFullName}
                  label="Full Name"
                  onChange={this.handleChange}
                />
                <FormInput
                  type="email"
                  name="userEmail"
                  value={this.state.userEmail}
                  label="Your Email"
                  onChange={this.handleChange}
                />
                <textarea
                  type="text"
                  name="userMessage"
                  value={this.state.userMessage}
                  label="Leave a Message"
                  onChange={this.handleChange}
                  placeholder="Leave a Message"
                />
                <CustomButton>
                  <img src={sendIcon} alt="Send Icon" /> Send Message
                </CustomButton>
              </form>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
