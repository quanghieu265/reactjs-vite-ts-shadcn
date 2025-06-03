import { useTranslation } from 'react-i18next';

function LoginPage() {
  const { t } = useTranslation('translation');
  return (
    <div className="LoginPage">
      <div> Login Page in {t("login")} </div>
    </div>
  );
}

export default LoginPage;
