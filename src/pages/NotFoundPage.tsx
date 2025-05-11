import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center py-16">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-9xl font-bold text-primary-200 mb-6"
          >
            404
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold mb-4 text-gray-900"
          >
            Page Not Found
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-md"
          >
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/" 
              className="btn btn-primary"
            >
              <Home className="mr-2 h-5 w-5" /> Go Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn btn-outline"
            >
              <ArrowLeft className="mr-2 h-5 w-5" /> Go Back
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;