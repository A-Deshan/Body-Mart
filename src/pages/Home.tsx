import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Trophy, Users, Zap } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/Button';
import { mockProducts } from '../utils/mockData';
import ctaBg from '../assets/cta-bg.jpg';
export function Home() {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" alt="Fitness Background" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Fuel Your Ambition. <br />
                <span className="text-primary-500">Build Your Body.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Premium supplements, top-tier equipment, and personalized
                wellness plans designed to help you reach your peak performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Shop Now
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                    Become a Member
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Trending Gear
                </h2>
                <p className="text-gray-600 mt-2">
                  Top-rated products chosen by our community
                </p>
              </div>
              <Link to="/products" className="hidden md:flex items-center text-primary-600 font-semibold hover:text-primary-700">
                View All <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
            once: true
          }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockProducts.slice(0, 4).map(product => <motion.div key={product.id} variants={item}>
                  <ProductCard product={product} />
                </motion.div>)}
            </motion.div>

            <div className="mt-8 text-center md:hidden">
              <Link to="/products">
                <Button variant="outline" className="w-full">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="py-20 bg-white" id="membership">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Join BodyMart?
              </h2>
              <p className="text-gray-600 text-lg">
                Unlock exclusive benefits and take your fitness journey to the
                next level with our premium membership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
              icon: Trophy,
              title: 'Exclusive Pricing',
              desc: 'Get up to 20% off on all supplements and equipment.'
            }, {
              icon: Zap,
              title: 'Personalized Plans',
              desc: 'Custom workout and meal plans tailored to your specific goals.'
            }, {
              icon: Users,
              title: 'Expert Community',
              desc: 'Access to certified trainers and a supportive community.'
            }].map((benefit, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: idx * 0.2
            }} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-primary-600 py-16 overflow-hidden">
          <div className="absolute inset-0 bg-center bg-cover" style={{
          backgroundImage: `url(${ctaBg})`
        }} />
          <div className="absolute inset-0 bg-primary-700/75" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of members who have already achieved their fitness
              goals with BodyMart.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white !text-black hover:bg-gray-100 hover:!text-white">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
}
