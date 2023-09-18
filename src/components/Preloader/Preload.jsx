import CircleLoader from "react-spinners/CircleLoader";
import s from "./preloader.module.scss";

const Preload = () => {
  return <div className={s.containerPreloadder}>

    <CircleLoader color="rgba(54, 142, 214, 1)" />
  </div>;
};
export default Preload;
