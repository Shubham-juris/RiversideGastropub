import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function ContactInfo() {
  return (
    <motion.div 
      className='d-flex flex-column align-items-center'
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
        <h2 className='fs-1 mb-3 text-uppercase fw-bold'>Where to find us</h2>
        
        <p className='mb-4 d-flex align-items-center'>
          <FaMapMarkerAlt className='me-2 text-danger' />#3 1177 1st St SW Medicine Hat,AB, 
          canada,Alberta

        </p>
        
        <p className='mb-4 d-flex align-items-center'>
          <FaPhoneAlt className='me-2 text-primary' /> +1 825-540-1711
        </p>
        
        <p className='mb-5 d-flex align-items-center'>
          <FaEnvelope className='me-2 text-warning' /> riversidegsatropub01@gmail.com
        </p>

        <h3 className='text-capitalize'>Opening hours</h3>
        <p className="m-0">Mon - Fri: 09:00 - 17:00</p>
        <p>Sat - Sun: 10:00 - 15:00</p>
        <section className="bg-white py-10 px-4">
 

</section>

        
    </motion.div>
  );
}

export default ContactInfo;
