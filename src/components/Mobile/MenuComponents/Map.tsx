import { FC } from 'react';

/* eslint-disable jsx-a11y/iframe-has-title */
const Map: FC = () => {
    return (
        <div className="googleMap">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.67705149252!2d30.665327315940626!3d50.428488396827774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c520ca7a29af%3A0x247965ef8f5b96d4!2z0YPQuy4g0JHQvtGA0LjRgdC_0L7Qu9GM0YHQutCw0Y8sIDE1LCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1639002670768!5m2!1sru!2sua"
                width="320"
                height="200"
                style={{
                    border: 0,
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translate(-50%)',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px ',
                    maxWidth: '450px',
                }}
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default Map;
