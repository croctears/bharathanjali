import React, { Component } from 'react';
import './style.css';

export default class Contact extends Component {
  render() {
    return (<div id="contact">
      <div className='container pt-5'>
        

        <div className='row'>
          <div className='col-md-7 col-lg-7 col-12 d-flex flex-column justify-content-center'>

          <div class="studioContent text-right">
            <div class="titleArea d-lg-none d-md-none d-sm-none hidden-lg hidden-md hidden-sm text-right">
              <h1 class="commonTittle">The eovo</h1>
              <p class="subTitle">THE STUDIO</p>
              </div>
              <div className='text-left'>
                <p>Whether you have questions about our dance classes, enrollment process, performances, or any other aspect of our institution, we are here to help.</p>
                <div className="off-white">
                  <p><i class="fa-solid fa-envelope"></i> bharathanjali.mng@gmail.com</p>
                  <p><i class="fa-solid fa-phone"></i> +91-98444 38436</p>
                  <p><i class="fa-solid fa-phone"></i> +91-98444 01834</p>
                </div>

                <h3 className='contact-social-heading'>Social Connect</h3>

                <div className='socialIcons'>
                  <i class="fa-brands fa-square-facebook fa-lg"></i>
                  <i class="fa-brands fa-square-instagram fa-lg"></i>
                </div>

                <div class="titleArea reverse text-right hidden-xs">
                  <h1 class="commonTittle">CONTACT</h1>
                  <p class="subTitle">FILL THE FORM</p>
                </div>
              </div>
          </div>

            {/* <h1>Contact</h1>

            <p>Whether you have questions about our dance classes, enrollment process, performances, or any other aspect of our institution, we are here to help.</p>
            <p><i class="fa-solid fa-envelope"></i> bharathanjali.mng@gmail.com</p>
            <p><i class="fa-solid fa-phone"></i> +91-98444 38436</p>
            <p><i class="fa-solid fa-phone"></i> +91-98444 01834</p>

            <h3>Social Connect</h3>

            <div className='socialIcons'>
              <i class="fa-brands fa-square-facebook fa-lg"></i>
              <i class="fa-brands fa-square-instagram fa-lg"></i>
            </div> */}
          </div>

          <div className='col-md-5 col-lg-5 col-12'>
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
              <button type='submit' className='btn btn-primary w-100 contact-button'>Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>);
  }
}
