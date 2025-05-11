import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, PieChart, Database, Globe, Code, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-900 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transforming Data into <span className="text-accent-400">Strategic Insights</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We help businesses leverage their data to make smarter decisions, 
              optimize operations, and drive growth.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                to="/contact" 
                className="btn bg-white text-primary-700 hover:bg-gray-100"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="btn border border-white bg-transparent hover:bg-white/10"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Floating shapes for visual interest */}
        <div className="hidden md:block absolute right-0 top-1/4 transform translate-x-1/3 -rotate-12">
          <motion.div 
            className="w-64 h-64 bg-primary-500 rounded-3xl opacity-20"
            animate={{ 
              rotate: [0, 5, 0, -5, 0],
              y: [0, -10, 0, 10, 0]
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
        </div>
        <div className="hidden md:block absolute left-1/4 bottom-1/4">
          <motion.div 
            className="w-32 h-32 bg-accent-500 rounded-full opacity-20"
            animate={{ 
              x: [0, 15, 0, -15, 0],
              y: [0, 10, 0, -10, 0]
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Services" 
            subtitle="We offer a comprehensive suite of data and technology services to help your business thrive in the digital age."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={BarChart2}
              title="Data Analytics"
              description="Transform your raw data into actionable insights with our advanced analytics solutions."
              delay={0.1}
            />
            <ServiceCard 
              icon={PieChart}
              title="Business Consulting"
              description="Strategic guidance to optimize your operations and drive sustainable growth."
              delay={0.2}
            />
            <ServiceCard 
              icon={Database}
              title="Data Integration"
              description="Seamlessly connect and unify your data from multiple sources for a complete view."
              delay={0.3}
            />
            <ServiceCard 
              icon={Globe}
              title="Web Development"
              description="Create powerful web applications and digital experiences that engage your audience."
              delay={0.4}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="section-title">Why Choose Avenstom Online?</h2>
                <p className="text-gray-600 mb-8">
                  At Avenstom, we combine technical expertise with business acumen to deliver 
                  solutions that drive measurable results. Our approach is collaborative, 
                  transparent, and focused on your long-term success.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Expert Team</h3>
                      <p className="text-gray-600">
                        Our team consists of data scientists, developers, and consultants with decades of combined experience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Tailored Solutions</h3>
                      <p className="text-gray-600">
                        We don't believe in one-size-fits-all. Our solutions are customized to your specific needs and challenges.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Proven Results</h3>
                      <p className="text-gray-600">
                        Our track record speaks for itself, with clients reporting substantial ROI and operational improvements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                      <p className="text-gray-600">
                        We're committed to your success beyond project completion with comprehensive support and maintenance.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg" 
                  alt="Team working together" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 w-48">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary-600">97%</p>
                  <p className="text-sm text-gray-600">Client satisfaction rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Approach" 
            subtitle="We follow a proven process to ensure successful outcomes for every project."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow p-6 h-full border-t-4 border-primary-500">
                <div className="absolute -top-5 left-6 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">Discovery</h3>
                <p className="text-gray-600">
                  We start by thoroughly understanding your business, goals, and challenges through in-depth discussions.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow p-6 h-full border-t-4 border-primary-500">
                <div className="absolute -top-5 left-6 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">Strategy</h3>
                <p className="text-gray-600">
                  We develop a customized plan of action based on your requirements and industry best practices.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow p-6 h-full border-t-4 border-primary-500">
                <div className="absolute -top-5 left-6 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">Implementation</h3>
                <p className="text-gray-600">
                  Our experienced team executes the plan with precision, keeping you informed at every step.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg shadow p-6 h-full border-t-4 border-primary-500">
                <div className="absolute -top-5 left-6 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">Optimization</h3>
                <p className="text-gray-600">
                  We continuously monitor, analyze, and refine our solutions to ensure long-term success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it. Here's what some of our clients have to say about working with us."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Avenstom transformed our approach to data. Their insights helped us cut costs by 23% while improving our customer targeting precision."
              name="Sarah Johnson"
              role="Director of Marketing"
              company="TechNova Inc"
              imageUrl="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"
              delay={0.1}
            />
            
            <TestimonialCard 
              quote="Their team provided exactly what we needed - expert guidance and a customized solution that integrated seamlessly with our existing systems."
              name="Michael Chen"
              role="CTO"
              company="Velocity Finance"
              imageUrl="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              delay={0.2}
            />
            
            <TestimonialCard 
              quote="Working with Avenstom was refreshingly straightforward. They delivered on time, within budget, and exceeded our expectations on quality."
              name="Jessica Rivera"
              role="Operations Manager"
              company="HealthPlus"
              imageUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
              delay={0.3}
            />
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
              Ready to Transform Your Business with Data?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get in touch today for a free consultation and learn how we can help you achieve your business goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;