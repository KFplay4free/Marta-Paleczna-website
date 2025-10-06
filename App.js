import React, { useState } from "react";
import { motion } from "framer-motion";

const sections = {
  pl: [
    { id: "home", label: "Strona główna", content: "Dobrze, że jesteś." },
    {
      id: "psychologia",
      label: "Psychologia",
      content:
        "Wierzę w proces terapeutyczny, który sprawia, że odzyskujesz siebie i czujesz, że żyjesz..."
    },
    {
      id: "coaching",
      label: "Coaching",
      content:
        "Coaching to sztuka stawiania pytań, by pomóc Ci rozwiązać wyzwanie..."
    },
    {
      id: "szkolenia",
      label: "Szkolenia",
      content:
        "Fundacja „A propos” prowadzi szkolenia dla grup i warsztaty rozwoju osobistego."
    },
    {
      id: "wyjazdy",
      label: "Wyjazdy / Wydarzenia",
      content:
        "Organizujemy wyjazdy well-beingowe dla regeneracji, równowagi i świadomości."
    },
    {
      id: "poznajmy",
      label: "Poznajmy się",
      content:
        "Jestem psychologiem, coachem i trenerką. Od 2019 r. wspieram osoby w trudnościach życiowych."
    },
    {
      id: "kontakt",
      label: "Kontakt",
      content: "Skontaktuj się: kontakt@twojastrona.pl | +48 123 456 789"
    }
  ],
  en: [
    { id: "home", label: "Home", content: "Glad you’re here." },
    {
      id: "psychologia",
      label: "Psychology",
      content:
        "I believe in the therapeutic process that helps you recover yourself and feel truly alive..."
    },
    {
      id: "coaching",
      label: "Coaching",
      content:
        "Coaching is the art of asking questions to help you solve challenges..."
    },
    {
      id: "szkolenia",
      label: "Trainings",
      content:
        "The 'A propos' Foundation provides group trainings and personal development workshops."
    },
    {
      id: "wyjazdy",
      label: "Retreats / Events",
      content:
        "We organize well-being retreats to restore balance, regenerate and deepen self-awareness."
    },
    {
      id: "poznajmy",
      label: "About me",
      content:
        "I am a psychologist, coach, and trainer. Since 2019 I’ve been supporting people through life’s challenges."
    },
    {
      id: "kontakt",
      label: "Contact",
      content: "Get in touch: contact@yourwebsite.com | +48 123 456 789"
    }
  ]
};

export default function PsychologyWebsite() {
  const [lang, setLang] = useState("pl");

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md flex justify-between p-4 z-10">
        <div className="flex space-x-4">
          {sections[lang].map((s) => (
            <button
              key={s.id}
              onClick={() => handleScroll(s.id)}
              className="hover:text-blue-600"
            >
              {s.label}
            </button>
          ))}
        </div>
        <div>
          <button
            onClick={() => setLang(lang === "pl" ? "en" : "pl")}
            className="border px-2 py-1 rounded"
          >
            {lang === "pl" ? "EN" : "PL"}
          </button>
        </div>
      </nav>

      {/* Sections */}
      <div className="pt-20 space-y-32">
        {sections[lang].map((s) => (
          <motion.section
            key={s.id}
            id={s.id}
            className="min-h-screen flex items-center justify-center bg-gray-50 rounded-2xl shadow-md mx-6 p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold text-center">{s.content}</h1>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}
