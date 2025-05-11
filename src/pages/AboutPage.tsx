import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Zap, Heart, BookOpen } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Avenstom Online
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're on a mission to help businesses harness the power of data 
              and technology to drive meaningful growth.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2018, Avenstom Online began with a simple premise: 
                that data, when properly harnessed, can transform businesses of all sizes.
              </p>
              <p className="text-gray-600 mb-6">
                Our founders, with backgrounds in data science, software development, 
                and business consulting, saw firsthand how companies struggled to 
                effectively utilize their data assets. They set out to build a company 
                that would bridge the gap between technical capabilities and business outcomes.
              </p>
              <p className="text-gray-600">
                Today, Avenstom has grown into a full-service data analytics and 
                digital transformation company, serving clients across various 
                industries including finance, healthcare, retail, and manufacturing.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg" 
                  alt="Avenstom team meeting" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Mission, Vision & Values" 
            subtitle="What drives us forward every day"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow p-6 border-t-4 border-primary-500"
            >
              <div className="flex items-center justify-center p-3 bg-primary-100 rounded-lg mb-4 w-16 h-16">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Mission</h3>
              <p className="text-gray-600">
                To empower organizations with data-driven insights and technological 
                solutions that drive innovation, efficiency, and growth.
              </p>
            </motion.div>
            
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow p-6 border-t-4 border-primary-500"
            >
              <div className="flex items-center justify-center p-3 bg-primary-100 rounded-lg mb-4 w-16 h-16">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Vision</h3>
              <p className="text-gray-600">
                To be the trusted partner for organizations seeking to navigate the 
                complexities of the digital age and unlock their full potential.
              </p>
            </motion.div>
            
            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow p-6 border-t-4 border-primary-500"
            >
              <div className="flex items-center justify-center p-3 bg-primary-100 rounded-lg mb-4 w-16 h-16">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Values</h3>
              <p className="text-gray-600">
                Excellence, integrity, innovation, collaboration, and client-centricity 
                form the foundation of everything we do at Avenstom.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="Our talented team of experts is dedicated to your success"
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow text-center overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Alex Morgan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Alex Morgan</h3>
                <p className="text-primary-600 mb-4">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  Former data scientist with 15+ years of experience in technology leadership.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow text-center overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                  alt="Samantha Lee" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Samantha Lee</h3>
                <p className="text-primary-600 mb-4">Chief Data Officer</p>
                <p className="text-gray-600 text-sm">
                  Expert in advanced analytics and machine learning implementations.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow text-center overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" 
                  alt="David Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">David Chen</h3>
                <p className="text-primary-600 mb-4">CTO</p>
                <p className="text-gray-600 text-sm">
                  Specialist in scalable architecture and technology integration.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow text-center overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" 
                  alt="Jennifer Martinez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Jennifer Martinez</h3>
                <p className="text-primary-600 mb-4">Head of Consulting</p>
                <p className="text-gray-600 text-sm">
                  Business strategist with expertise in digital transformation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <div className="text-5xl font-bold text-primary-600 mb-4">200+</div>
              <p className="text-gray-600">Projects Completed</p>
            </motion.div>
            
            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <div className="text-5xl font-bold text-primary-600 mb-4">50+</div>
              <p className="text-gray-600">Team Members</p>
            </motion.div>
            
            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <div className="text-5xl font-bold text-primary-600 mb-4">12</div>
              <p className="text-gray-600">Industry Awards</p>
            </motion.div>
            
            {/* Stat 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <div className="text-5xl font-bold text-primary-600 mb-4">97%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              Join Our Growing Team
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're always looking for talented individuals who are passionate about data, 
              technology, and making a difference for our clients.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="mailto:careers@avenstom.com" 
                className="btn bg-white text-primary-700 hover:bg-gray-100"
              >
                View Careers
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;