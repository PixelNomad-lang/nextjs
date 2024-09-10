"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Contact information
const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+91-917-009-757-6',
    bgColor: 'bg-gradient-to-r from-green-500 to-green-700',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'adarshbalmukundshukla@gmail.com',
    bgColor: 'bg-gradient-to-r from-blue-500 to-blue-700',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'S.R.N Bhadohi, U.P, INDIA - 221303',
    bgColor: 'bg-gradient-to-r from-purple-500 to-purple-700',
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.8, ease: "easeInOut" }}}
      className="py-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row gap-12">
          
          {/* Contact form */}
          <div className="xl:w-1/2 order-2 xl:order-none bg-[#1c1c22] p-8 rounded-xl shadow-lg">
            <form className="flex flex-col gap-6">
              <h3 className="text-4xl text-green-400 font-bold mb-4">Let's Work Together</h3>
              <p className="text-white/70 mb-6">Feel free to reach out to collaborate or inquire about projects. We are excited to work with you!</p>

              <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
                <Input type="text" placeholder="First Name" className="w-full p-3 rounded-lg bg-gray-700 focus:ring-2 focus:ring-green-400" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
                <Input type="text" placeholder="Last Name" className="w-full p-3 rounded-lg bg-gray-700 focus:ring-2 focus:ring-green-400" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
                <Input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-gray-700 focus:ring-2 focus:ring-green-400" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
                <Textarea placeholder="Your message" className="w-full p-3 rounded-lg bg-gray-700 focus:ring-2 focus:ring-green-400" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="self-start transition-transform"
              >
                <Button className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg">
                  Submit
                </Button>
              </motion.div>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex-1 flex flex-col gap-8 items-start xl:items-end order-1 xl:order-none mb-8 xl:mb-0">
            {info.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" } }}
                whileHover={{ scale: 1.05 }}
                className={`${item.bgColor} flex items-center gap-4 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all`}
              >
                <div className="text-white text-3xl">{item.icon}</div>
                <div>
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                  <p className="text-white/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
