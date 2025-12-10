import { Moon, Sun, Globe } from "lucide-react";

export default function Header() {
  //const { theme, toggleTheme } = useTheme();
  //const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <h1>Hola</h1>
  );
}
