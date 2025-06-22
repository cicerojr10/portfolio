import React, { useState } from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Curriculo() {
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [language, setLanguage] = useState(i18n.language);

  const handleToggleLanguage = () => {
    const newLang = language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang).then(() => {
      setLanguage(newLang);
    });
  };

  return (
    <motion.section
      className="min-h-screen bg-background text-foreground p-8 md:p-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between mb-6">
        <button onClick={toggleTheme} className="bg-muted px-3 py-1 rounded">
          {t("toggle_theme")}
        </button>
        <button
          onClick={handleToggleLanguage}
          className="bg-muted px-3 py-1 rounded"
        >
          {t("toggle_lang")}
        </button>
      </div>

      <div className="mb-6">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
        >
          {t("back_to_site")}
        </button>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1 space-y-6 animate-fade-in">
          <div className="text-center">
            <QRCode value="https://github.com/cicerojr10" size={96} />
            <p className="text-xs mt-2">{t("github")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">{t("personal_info")}</h2>
            <ul className="text-sm space-y-1">
              <li>
                <strong>{t("age")}:</strong> 27
              </li>
              <li>
                <strong>{t("nationality")}:</strong> {t("brazilian")}
              </li>
              <li>
                <strong>{t("marital_status")}:</strong> {t("single")}
              </li>
              <li>
                <strong>{t("location")}:</strong> Curitiba, Brazil
              </li>
              <li>
                <strong>{t("email")}:</strong> cicerojr10@gmail.com
              </li>
              <li>
                <strong>{t("phone")}:</strong> +55 (41) 99896-3098
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">{t("languages")}</h2>
            <ul className="text-sm space-y-1">
              <li>{t("portuguese_native")}</li>
              <li>{t("english_intermediate")}</li>
              <li>{t("italian_basic")}</li>
              <li>{t("french_basic")}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">{t("interests")}</h2>
            <ul className="text-sm space-y-1">
              <li>{t("interest_ai")}</li>
              <li>{t("interest_games")}</li>
              <li>{t("interest_reading")}</li>
            </ul>
          </div>
        </aside>

        <main className="md:col-span-3 space-y-10 animate-fade-in">
          <header className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">Cícero Quintino Júnior</h1>
            <p className="text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold border-b pb-2">{t("about")}</h2>
            <p>{t("about_text")}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold border-b pb-2">{t("featured_projects")}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("proj1")}</li>
              <li>{t("proj2")}</li>
              <li>{t("proj3")}</li>
              <li>{t("proj4")}</li>
              <li>{t("proj5")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold border-b pb-2">{t("education_certifications")}</h2>
            <ul className="list-disc list-inside space-y-4 text-sm">
              <li>{t("cert1")}</li>
              <li>{t("cert2")}</li>
              <li>{t("cert3")}</li>
              <li>{t("cert4")}</li>
              <li>{t("cert5")}</li>
              <li>{t("cert6")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold border-b pb-2">{t("experience")}</h2>
            <ul className="list-disc list-inside space-y-4 text-sm">
              <li>{t("exp1")}</li>
              <li>{t("exp2")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold border-b pb-2">{t("tech_stack_skills")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <span>Java | Spring Boot | JUnit</span>
              <span>Python | Pandas | Matplotlib</span>
              <span>HTML5 | CSS3 | JavaScript</span>
              <span>Git | GitHub | Open Source</span>
              <span>Machine Learning | TensorFlow | Keras</span>
              <span>Databases: Oracle, H2</span>
              <span>REST APIs | Lombok | Maven</span>
              <span>OpenCV | Data Structures</span>
              <span>CI/CD (learning in progress)</span>
            </div>
          </section>

          <footer className="pt-10 border-t text-sm text-muted-foreground">
            <p>
              {t("updated")}{" "}
              <a
                href="https://github.com/cicerojr10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                GitHub
              </a>{" "}
              {t("or_connect")}{" "}
              <a
                href="https://www.linkedin.com/in/cicerojr-techprofessional/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                LinkedIn
              </a>
              .
            </p>
          </footer>
        </main>
      </div>
    </motion.section>
  );
}
