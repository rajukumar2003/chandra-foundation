"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useRouter } from "next/router";

export default function CtaSection() {
  const {translations} = useLanguage();
  const router = useRouter();

  const handleClick = () => {
    router.push('/contactUs');
  };
  return (
    <section className="py-24 bg-gradient-to-b from-green-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="items-center"
          >
            {/* Text Content */}
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
                {translations.cta.title}
              </h2>
              {/* <p className="text-xl text-gray-600">
                Let's create the{" "}
                <span className="text-green-600 font-semibold">DIFFERENCE</span>{" "}
                our community needs
              </p> */}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 text-xl text-gray-600 italic"
              >
                {translations.cta.quote}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white group"
                >
                  {translations.cta.join}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
