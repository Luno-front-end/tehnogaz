import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="wrapper-text-aboutUs">
            <h2 className="header-aboutUs">{t('sectionTwo.header.header')}</h2>
            <h3 className="subHeader-aboutUs">{t('sectionTwo.header.name')}</h3>
        </div>
    );
};

export default AboutUs;
