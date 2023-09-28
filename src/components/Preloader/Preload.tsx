import CircleLoader from 'react-spinners/CircleLoader';
import s from './preloader.module.scss';
import { FC } from 'react';

const Preload: FC = () => {
    return (
        <div className={s.containerPreloader}>
            <CircleLoader color="rgba(54, 142, 214, 1)" />
        </div>
    );
};
export default Preload;
