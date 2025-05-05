import { FC } from 'react';

import { WorkMF, WorkSat } from '../../Svg';
import { useTranslation } from 'react-i18next';

const WorkTime: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="work-time-container">
            <div className="work-time">
                <ul className="work-time-list">
                    <li className="work-time-item">
                        <div className="work-time-wrapper">
                            <WorkMF className="workSvg" />
                            <div className="work-time-info">
                                <h2 className="work-time-day">{t('hero.buttons.work.first')}</h2>
                                <p className="work-time-hours">8:00-17:00</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WorkTime;
