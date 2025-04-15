"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/app/contexts/LanguageContext";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details:
      "74 D 6 Vivekpuri, Maya Market, Barra Baipass, Kanpur Nagar, Uttar Pradesh, 208027",
    action: "Visit us",
    link: "https://www.google.com/maps/place/Chandra+Foundation/@26.4228363,80.3061679,17z/data=!3m1!4b1!4m6!3m5!1s0x399c47089b7e96f7:0xfd4ad40d500c80b!8m2!3d26.4228315!4d80.3087428!16s%2Fg%2F11w3k_qljx?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: "+91 904 485 0387",
    action: "Call us",
    link: "tel:+919044850387",
  },
  {
    icon: Mail,
    title: "Email Address",
    details: "cf.helpinghands@yahoo.com",
    action: "Email us",
    link: "mailto:cf.helpinghands@yahoo.com",
  },
];

export default function ContactPage() {
  const {translations} = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: translations.contact.location.title,
      details:
      title: translations.contact.location.title,
      action: "Visit us",
      link: "https://www.google.com/maps/place/Chandra+Foundation/@26.4228363,80.3061679,17z/data=!3m1!4b1!4m6!3m5!1s0x399c47089b7e96f7:0xfd4ad40d500c80b!8m2!3d26.4228315!4d80.3087428!16s%2Fg%2F11w3k_qljx?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+91 904 485 0387",
      action: "Call us",
      link: "tel:+919044850387",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "cf.helpinghands@yahoo.com",
      action: "Email us",
      link: "mailto:cf.helpinghands@yahoo.com",
    },
  ];

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
            {translations.contact.subheading}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {translations.contact.description}
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
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  {info.title}
                </h3>
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
            {translations.contact.form.title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
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
                    <svg
                      className="animate-spin ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
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
                    {translations.contact.form.send}
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
              {translations.contact.findUs}
            </h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1786.5080383119996!2d80.3078191104706!3d26.42295777350184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47089b7e96f7%3A0xfd4ad40d500c80b!2sChandra%20Foundation!5e0!3m2!1sen!2sin!4v1737581370533!5m2!1sen!2sin"
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
                {translations.contact.address}
              </p>
              <p>
                {translations.contact.workingHours}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
