import { Bubble, Cloud } from '../components/Svg';

export const useRenderInfoCardM = () => {
    const renderIconsInCard = [
        <div className="cloud-card">
            <p className="cloud-card-velue">
                CO<span className="cloud-card-number">2</span>
            </p>
            <Cloud />
        </div>,
        <>
            <div className="cloud-card">
                <p className="cloud-card-velue">Ar</p>
                <Cloud className="cloud" />
            </div>
            <div className="cloud-cardTwo">
                <p className="cloud-card-velueTwo">+</p>
            </div>
            <div className="cloud-cardThree">
                <p className="cloud-card-velueThree">
                    CO<span className="cloud-card-number">2</span>
                </p>
                <Cloud className="cloud" />
            </div>
        </>,
        <div className="cloud-card">
            <p className="cloud-card-velue">
                Ar<span className="cloud-card-number"></span>
            </p>
            <Cloud />
        </div>,
        <div className="cloud-card">
            <p className="cloud-card-velue">
                N<span className="cloud-card-number">2</span>
            </p>
            <Cloud />
        </div>,
        <div className="cloud-card">
            <p className="cloud-card-velue">
                O<span className="cloud-card-number">2</span>
            </p>
            <Bubble />
        </div>,
    ];
    const renderIconsOnCard = [
        <>
            CO<span className="number-card">2</span>
        </>,
        <>
            Ar <span className="plus-card">+</span> CO2
            <span className="number-card"></span>
        </>,
        <>Ar,</>,
        <>
            N<span className="number-card">2</span>
        </>,
        <>
            O<span className="number-card">2</span>
        </>,
    ];
    return { renderIconsInCard, renderIconsOnCard };
};
