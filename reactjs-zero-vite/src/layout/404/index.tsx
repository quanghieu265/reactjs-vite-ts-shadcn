import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const { t } = useTranslation('translation');
  const navigate = useNavigate();

  return (
    <div className="container-404">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button onClick={() => navigate("/dashboard")} type="primary">{t("pageNotFound.button")}</Button>}
      />
    </div>
  );
}

export default PageNotFound;
