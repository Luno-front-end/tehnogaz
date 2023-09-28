import { FC } from 'react';
import Slider from './Slider';
import { useTranslation } from 'react-i18next';

const SectionOne: FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="container-sec-text">
                <h2 className="header-secOne">{t('sectionOne.header.header')}</h2>
                <h3 className="subHeader-secOne">{t('sectionOne.header.name')}</h3>
            </div>
            <Slider />
        </>
    );
};

export default SectionOne;
