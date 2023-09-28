import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const About: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="work-time-container">
            <div className="fixed-container-about">
                <div className="about-menu">
                    <div className="wrapper-about">
                        <p className="text-about">
                            {t('sectionThree.information.mobileVariant.firstText')} «
                            <span className="comp-text-about">{t('sectionThree.header.comp')}</span>
                            » {t('sectionThree.information.mobileVariant.lastText')}
                            {t('sectionThree.information.textTwo')}
                            {t('sectionThree.information.textThree')}
                            {t('sectionThree.information.textFour')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
