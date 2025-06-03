import { useTranslation } from "react-i18next";

function DashboardPage() {
  const { t, i18n } = useTranslation('translation');

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Current language: {i18n.language}</p>
      <p>Translation: {t("dashboard.welcome")}</p>
    </div>
  );
}

export default DashboardPage;
