import { useLanguage } from "../contexts/LanguageContext";
import { Mail } from "lucide-react";
import GithubIcon from "./icons/GitHub";
import whatsappIcon from "./icons/Whatsapp";
import linkedinIcon from "./icons/Linkedin";
import { motion } from "framer-motion";

export default function Contact() {
  const { t, language } = useLanguage();

  const socials = [
    {
      icon: GithubIcon,
      href: "https://github.com/WilliamSalcedo",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: linkedinIcon,
      href: "https://www.linkedin.com/in/williamsalcedol/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: whatsappIcon,
      href: "https://wa.me/+573017423827?text=Hola!",
      label: "Whatsapp",
      color: "hover:text-sky-500",
    },
    {
      icon: Mail,
      href: "mailto:wsalcedolacouture@gmail.com",
      label: "Email",
      color: "hover:text-red-500",
    },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <section
        id="contact"
        className="py-20 bg-white dark:bg-gray-900 transition-colors"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              {" "}
              {t("contact.title")}{" "}
            </h2>

            <div className="flex justify-center gap-6 mb-12">
              <a
                href="mailto:wsalcedolacouture@gmail.com"
                className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
              >
                {t("contact.description")}
              </a>
            </div>

            <div className="flex justify-center gap-6 mb-12">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 bg-gray-100 dark:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-current transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
