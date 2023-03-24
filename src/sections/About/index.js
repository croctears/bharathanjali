import React from 'react';
import './style.css';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1 className='text-center mb-5'>Bharathanjali</h1>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-12 pr-5'>
                    <h4>About Us</h4>
                    <p>Bharathanjali is a premier Bharatnatyam organization that is committed to promoting and preserving the art of Bharatnatyam. We strive to create an environment that is conducive to learning, growth, and exploration. Our aim is to provide students with the opportunity to learn the intricacies of this beautiful art form and develop a deeper appreciation for it. We believe that Bharatnatyam is not just a dance form, but a way of life that helps us connect with our cultural roots and express ourselves through the medium of dance.</p>

                    <p>At Bharathanjali, we are dedicated to imparting high-quality training in Bharatnatyam to students of all ages and skill levels. Our team of experienced teachers is passionate about sharing their knowledge and love for this art form with others. We offer a comprehensive curriculum that covers both theoretical and practical aspects of Bharatnatyam, and our classes are designed to provide a well-rounded education that is both enriching and engaging. Whether you are a beginner or an advanced student, we welcome you to join us on this journey of self-discovery and artistic expression through Bharatnatyam.</p>
                </div>
                <div className='col-md-5 col-lg-6 col-12  gurus-section'>
                    <h4>Gurus</h4>
                    <div className='row'>
                        <div className='col-4'>
                            <img src='/images/gurus/2.jpg' alt='Prathima Shridhar' className='img-fluid' />
                        </div>
                        <div className='col-8'>
                            <h5>Prathima Shridhar</h5>
                            <p className='mb-0 font-weight-bold'>Founder and Artistic Director</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-4'>
                            <img src='/images/gurus/4.jpg' alt='Shridhar Holla' className='img-fluid' />
                        </div>
                        <div className='col-8'>
                            <h5>Shridhar Holla</h5>
                            <p className='mb-0 font-weight-bold'>Founder and Artistic Director</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default About;