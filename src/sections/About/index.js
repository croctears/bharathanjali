import React from 'react';
import './style.css';

class About extends React.Component {
  render() {
    return (
      <div id='about'>
        {/* <h1 className='text-center mb-5'>Bharathanjali</h1> */}
        <div className='container'>
            <div className='row'>
                
                <div className='col-md-7 col-lg-7 col-12 pr-5'>
                    <div class="historyContent text-left">
                        <div class="titleArea text-right">
                            <h1 class="commonTittle">About Us</h1>
                            <p class="subTitle">Bharatanjali</p>
                        </div>
                        <p>Bharathanjali is a premier Bharatnatyam organization that is committed to promoting and preserving the art of Bharatnatyam. We strive to create an environment that is conducive to learning, growth, and exploration. Our aim is to provide students with the opportunity to learn the intricacies of this beautiful art form and develop a deeper appreciation for it. We believe that Bharatnatyam is not just a dance form, but a way of life that helps us connect with our cultural roots and express ourselves through the medium of dance.</p>

                        <p>At Bharathanjali, we are dedicated to imparting high-quality training in Bharatnatyam to students of all ages and skill levels. Our team of experienced teachers is passionate about sharing their knowledge and love for this art form with others. We offer a comprehensive curriculum that covers both theoretical and practical aspects of Bharatnatyam, and our classes are designed to provide a well-rounded education that is both enriching and engaging.</p>
                    </div>
                </div>
                <div className='col-md-5 col-lg-5 col-12  gurus-section pt-5'>
                    <h4 className='guru-section-title'>GURUS</h4>
                    <div className='row'>
                        <div className='col-4'>
                            <img src='/images/gurus/2.jpg' alt='Prathima Shridhar' className='img-fluid' />
                        </div>
                        <div className='col-8'>
                            <h5>Prathima Shridhar</h5>
                            <p className='mb-0 font-weight-bold guru-title'>Founder and Artistic Director</p>
                            <p className='about-guru'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-4'>
                            <img src='/images/gurus/4.jpg' alt='Shridhar Holla' className='img-fluid' />
                        </div>
                        <div className='col-8'>
                            <h5>Shridhar Holla</h5>
                            <p className='mb-0 font-weight-bold guru-title'>Founder and Artistic Director</p>
                            <p className='about-guru'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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