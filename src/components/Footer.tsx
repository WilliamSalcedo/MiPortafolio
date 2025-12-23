import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} William Salcedo Lacouture. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
