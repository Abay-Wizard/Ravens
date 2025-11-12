import React from 'react'
import { motion } from 'framer-motion'
import Joshua from '../assets/images/Joshua.jpeg'
import Abay from '../assets/images/AbayProfilePic.png'
import Rahnia from '../assets/images/Rahnia.jpg'
import Fidel from '../assets/images/Fidel.jpg'
import Beza from '../assets/images/Beza.jpg'

const Team = () => {

  const team = [
    {
      name: 'Joshua Hirwa',
      email: 'j.hirwa@alustudent.com',
      image: Joshua,
      words:
        'Joshua leads the mission toward inclusive education for deaf learners in Rwanda. He focuses on bridging policy gaps, empowering teachers, and ensuring accessibility through innovative learning solutions.',
    },
    {
      name: 'Abay Tessema',
      email: 'a.tessema@alustudent.com',
      image: Abay,
      words:
        'Abay is passionate about using technology to create equal learning opportunities. He works on digital tools and platforms that make education more inclusive for every student, regardless of ability.',
    },
    {
      name: 'Beza Ketia',
      email: 'b.ketia@alustudent.com',
      image: Beza,
      words:
        'Beza focuses on community engagement and awareness. She helps bridge the gap between schools, parents, and organizations to promote understanding and advocacy for deaf education in Rwanda.',
    },
    {
      name: 'Rhania Uwineza Akintore',
      email: 'r.uwinezaa@alustudent.com',
      image:Rahnia ,
      words:
        'Rhania is committed to empowering young learners through mentorship and inclusive programs. She believes education should celebrate diversity and help every learner thrive in their unique way.',
    },
    {
      name: 'Fidel Muhire',
      email: 'f.muhire@alustudent.com',
      image: Fidel,
      words:
        'Fidel drives innovation in accessibility. He focuses on designing assistive tools and training educators to better support deaf and hard-of-hearing students in both digital and physical classrooms.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-12"
      >
        Meet Our Team
      </motion.h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 max-w-xs"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-red-500"
            />
            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{member.email}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{member.words}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Team
