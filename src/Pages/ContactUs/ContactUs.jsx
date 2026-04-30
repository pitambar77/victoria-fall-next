import React from 'react'
import Banner from '../../components/Banner'
import ContactForm from './ContactForm'
import Information from './Information'

const ContactUs = () => {
  return (
    <>
 <Banner
        title="Contact Us"
        subtitle="For any inquiries, please get in  touch with Victoria Falls Bed & Breakfast"
        imageUrl="/images/contact-us-banner.webp"
      />
      <Information/>
      <ContactForm/>
      <div>
      
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.142194492887!2d25.855958675200245!3d-17.925520583056297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x194feff9da0bf2f9%3A0x8b054663df18d568!2sVictoria%20Falls!5e0!3m2!1sen!2sin!4v1770046642520!5m2!1sen!2sin" width="100%" height="550" ></iframe>
      </div>
    </>
  )
}

export default ContactUs