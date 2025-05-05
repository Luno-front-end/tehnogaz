import { FC } from 'react';
import { LogoFooter } from '../Svg';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="wrapper-info-footer">
            <div>
                <h2 className="street-head">{t('footer.address.name')}</h2>
                <p className="street-text">{t('footer.address.where')}</p>
                <p className="copyright">© 2022 {t('footer.comp')}</p>
            </div>
            <div className="wrapper-contacts-footer">
                <h3 className="head-contacts-footer">{t('footer.contacts')}</h3>
                <ul className="contacts-footer-list">
                    <li className="contacts-footer-item">
                        <a className="link-contact-footer" href="tel:0978180966">
                            +38-097-818-09-66
                        </a>
                    </li>
                    <li className="contacts-footer-item">
                        <a className="link-contact-footer" href="tel:0953614833">
                            +38-095-361-48-33
                        </a>
                    </li>
                    <li className="contacts-footer-item">
                        <a className="link-contact-footer" href="mailto:tehnogaztorg@ukr.net">
                            tehnogaztorg@ukr.net
                        </a>
                    </li>
                </ul>
            </div>
            <div className="wrapper-logo-footer">
                <LogoFooter className="logo-footer" />
            </div>
            <ul className="work-footer-list">
                <li className="work-footer-item">
                    <p className="work-text-day">{t('footer.work.first')}</p>
                    <p className="work-text-hour">8:00-17:00</p>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
