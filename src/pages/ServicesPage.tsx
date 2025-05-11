import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BarChart2, 
  PieChart, 
  Database, 
  Globe, 
  Users, 
  BarChart, 
  TrendingUp,
  Search,
  Code,
  Layout,
  Layers,
  Server,
  Share2,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';

const ServiceFeature: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start"
    >
      <div className="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesPage: React.FC = () => {
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
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive data and technology solutions to help your business thrive in the digital age.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Data Analytics Section */}
      <section id="data-analytics" className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-lg mb-4">
                <BarChart2 className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="section-title">Data Analytics</h2>
              <p className="text-gray-600 mb-8">
                Transform your raw data into actionable insights with our comprehensive 
                analytics solutions. We help you uncover patterns, trends, and opportunities 
                hidden in your data to drive informed business decisions.
              </p>
              
              <div className="space-y-6">
                <ServiceFeature 
                  icon={<BarChart className="h-5 w-5 text-primary-600" />}
                  title="Business Intelligence"
                  description="Intuitive dashboards and reports that make your data accessible and actionable."
                  delay={0.1}
                />
                
                <ServiceFeature 
                  icon={<TrendingUp className="h-5 w-5 text-primary-600" />}
                  title="Predictive Analytics"
                  description="Advanced models that forecast trends and help you stay ahead of market changes."
                  delay={0.2}
                />
                
                <ServiceFeature 
                  icon={<Search className="h-5 w-5 text-primary-600" />}
                  title="Data Discovery"
                  description="Uncover hidden insights and opportunities within your existing data assets."
                  delay={0.3}
                />
                
                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Learn more about our analytics solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
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
                  src="https://images.pexels.com/photos/7947398/pexels-photo-7947398.jpeg" 
                  alt="Data analytics dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Business Consulting Section */}
      <section id="consulting" className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="relative order-1 lg:order-2"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" 
                  alt="Business consulting session" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-lg mb-4">
                <PieChart className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="section-title">Business Consulting</h2>
              <p className="text-gray-600 mb-8">
                Our expert consultants work closely with your team to develop strategies 
                that optimize your operations, improve efficiency, and drive sustainable growth.
              </p>
              
              <div className="space-y-6">
                <ServiceFeature 
                  icon={<Users className="h-5 w-5 text-primary-600" />}
                  title="Digital Transformation"
                  description="Comprehensive strategies to modernize your business processes and technologies."
                  delay={0.1}
                />
                
                <ServiceFeature 
                  icon={<TrendingUp className="h-5 w-5 text-primary-600" />}
                  title="Growth Strategy"
                  description="Data-driven approaches to identify and capitalize on new market opportunities."
                  delay={0.2}
                />
                
                <ServiceFeature 
                  icon={<Search className="h-5 w-5 text-primary-600" />}
                  title="Process Optimization"
                  description="Streamline operations and eliminate inefficiencies to boost productivity and reduce costs."
                  delay={0.3}
                />
                
                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Discover our consulting expertise
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Data Integration Section */}
      <section id="data-integration" className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-lg mb-4">
                <Database className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="section-title">Data Integration</h2>
              <p className="text-gray-600 mb-8">
                Seamlessly connect your disparate data sources to create a unified, accessible 
                data ecosystem. Our integration solutions enable better visibility, collaboration, 
                and decision-making across your organization.
              </p>
              
              <div className="space-y-6">
                <ServiceFeature 
                  icon={<Layers className="h-5 w-5 text-primary-600" />}
                  title="Data Warehousing"
                  description="Centralized repositories that consolidate data from multiple sources for comprehensive analysis."
                  delay={0.1}
                />
                
                <ServiceFeature 
                  icon={<Server className="h-5 w-5 text-primary-600" />}
                  title="ETL Solutions"
                  description="Efficient extract, transform, and load processes to ensure data consistency and quality."
                  delay={0.2}
                />
                
                <ServiceFeature 
                  icon={<Share2 className="h-5 w-5 text-primary-600" />}
                  title="API Development"
                  description="Custom API solutions to enable seamless communication between your systems and applications."
                  delay={0.3}
                />
                
                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Explore our data integration services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
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
                  src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg" 
                  alt="Data integration concept" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Web Development Section */}
      <section id="web-development" className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="relative order-1 lg:order-2"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg" 
                  alt="Web development concept" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-lg mb-4">
                <Globe className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="section-title">Web Development</h2>
              <p className="text-gray-600 mb-8">
                Create powerful, user-friendly web applications and digital experiences 
                that engage your audience and drive results. Our development team combines 
                technical expertise with design thinking to deliver solutions that stand out.
              </p>
              
              <div className="space-y-6">
                <ServiceFeature 
                  icon={<Code className="h-5 w-5 text-primary-600" />}
                  title="Custom Web Applications"
                  description="Scalable, feature-rich applications tailored to your specific business requirements."
                  delay={0.1}
                />
                
                <ServiceFeature 
                  icon={<Layout className="h-5 w-5 text-primary-600" />}
                  title="Responsive Design"
                  description="User-friendly interfaces that provide a seamless experience across all devices."
                  delay={0.2}
                />
                
                <ServiceFeature 
                  icon={<ShieldCheck className="h-5 w-5 text-primary-600" />}
                  title="Secure & Scalable Architecture"
                  description="Robust solutions built with security and future growth in mind."
                  delay={0.3}
                />
                
                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    View our web development offerings
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Our Approach" 
            subtitle="We follow a proven methodology to ensure successful outcomes for every project."
            center
          />
          
          <div className="max-w-3xl mx-auto">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex pb-12"
            >
              <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
                <div className="h-full w-0.5 bg-primary-200"></div>
              </div>
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                1
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Discovery</h3>
                <p className="text-gray-600">
                  We start by deeply understanding your business, goals, and challenges. 
                  This phase includes stakeholder interviews, requirements gathering, 
                  and thorough analysis of your current systems and processes.
                </p>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex pb-12"
            >
              <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
                <div className="h-full w-0.5 bg-primary-200"></div>
              </div>
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                2
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Strategy & Planning</h3>
                <p className="text-gray-600">
                  Based on our discovery findings, we develop a customized strategy and 
                  implementation plan. This includes defining key deliverables, timelines, 
                  and success metrics to ensure alignment with your objectives.
                </p>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative flex pb-12"
            >
              <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
                <div className="h-full w-0.5 bg-primary-200"></div>
              </div>
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                3
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Implementation</h3>
                <p className="text-gray-600">
                  Our experienced team executes the plan with precision, using agile 
                  methodology to deliver incremental value. Regular updates and demonstrations 
                  ensure you're always informed about our progress.
                </p>
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative flex pb-12"
            >
              <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
                <div className="h-full w-0.5 bg-primary-200"></div>
              </div>
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                4
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Testing & Validation</h3>
                <p className="text-gray-600">
                  We rigorously test all deliverables to ensure they meet our high quality 
                  standards and your specific requirements. This includes functional testing, 
                  security validation, and performance optimization.
                </p>
              </div>
            </motion.div>
            
            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative flex"
            >
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex-shrink-0">
                5
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Deployment & Ongoing Support</h3>
                <p className="text-gray-600">
                  Once validated, we implement the solution in your environment and provide 
                  comprehensive training to your team. Our relationship continues with ongoing 
                  support, maintenance, and optimization to ensure long-term success.
                </p>
              </div>
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
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contact us today for a free consultation and learn how our services 
              can transform your business.
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

export default ServicesPage;