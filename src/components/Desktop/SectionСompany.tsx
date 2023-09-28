import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Company: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="wrapper-text-company">
            <h2 className="header-company">
                {t('sectionThree.header.tov')}{' '}
                <span className="subHeader-company">“{t('sectionThree.header.comp')}”</span>
            </h2>
            <p className="text-sec-company">
                <span> {t('sectionThree.information.textOne')}</span>
                <span>{t('sectionThree.information.textTwo')}</span>
                <span>{t('sectionThree.information.textThree')}</span>
                <span>{t('sectionThree.information.textFour')}</span>
            </p>
        </div>
    );
};

export default Company;
