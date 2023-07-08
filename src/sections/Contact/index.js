import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (<div>
      <div className='container pt-5'>
        

        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center'>
            <h1>Contact</h1>

            <p>Whether you have questions about our dance classes, enrollment process, performances, or any other aspect of our institution, we are here to help.</p>
            <p><i class="fa-solid fa-envelope"></i> bharathanjali.mng@gmail.com</p>
            <p><i class="fa-solid fa-phone"></i> +91-98444 38436</p>
            <p><i class="fa-solid fa-phone"></i> +91-98444 01834</p>

            <h3>Social Connect</h3>

            <div className='socialIcons'>
              <i class="fa-brands fa-square-facebook fa-lg"></i>
              <i class="fa-brands fa-square-instagram fa-lg"></i>
            </div>
          </div>

          <div className='col-md-6'>
            <form>
              <div className='form-group'>
                <label for='name'>Name</label>
                <input type='text' className='form-control' id='name' placeholder='Enter name' />
              </div>
              <div className='form-group'>
                <label for='email'>Email address</label>
                <input type='email' className='form-control' id='email' placeholder='Enter email' />
              </div>
              <div className='form-group'>
                <label for='message'>Message</label>
                <textarea className='form-control' id='message' rows='3' placeholder='Enter your message'></textarea>
              </div>
              <button type='submit' className='btn btn-primary w-100'>Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>);
  }
}
