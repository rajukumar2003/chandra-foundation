'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    details: '74 d 6 VIVEKPURI, MAYA MARKET, BARRA BAIPASS, KANPUR NAGAR, UTTAR PRADESH, PIN: 208027',
    action: 'Visit us',
    link: 'https://maps.google.com'
  },
  {
    icon: Phone,
    title: 'Phone Number',
    details: '+91 904 48 50387',
    action: 'Call us',
    link: 'tel:+919044850387'
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: 'cf.helpinghands@yahoo.com',
    action: 'Email us',
    link: 'mailto:cf.helpinghands@yahoo.com'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const { name, email, subject, message } = formData;
  
    // Construct the mailto link
    const mailtoLink = `mailto:cf.helpinghands@yahoo.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
  
    // Open the user's default mail client
    window.location.href = mailtoLink;
  
    // Simulate form submission (optional, for the loading effect)
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/50 to-white py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Get in Touch with Our Family
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out to us for any inquiries, suggestions, or support. 
            We&apos;re here to help and appreciate your involvement in our mission.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">{info.title}</h3>
                <p className="text-gray-600 mb-4">{info.details}</p>
                <a
                  href={info.link}
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                >
                  {info.action}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    Sending...
                    <svg className="animate-spin ml-2 h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              Find Us Here
            </h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603!3d28.5151483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 text-gray-600">
              <p className="mb-2">
                <strong>Address:</strong> 123 Charity Lane, Compassion City, CC 12345
              </p>
              <p>
                <strong>Working Hours:</strong> Monday - Saturday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

