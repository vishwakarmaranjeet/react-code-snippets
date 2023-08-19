import Styles from "./PageNotFound.module.scss";

export function clx(...classes) {
  return classes.join(" ");
}

const PageNotFound = () => {
  return (
    <div className={clx(Styles.container, Styles.border)}>
      <h3>404 page not found.!!!</h3>
    </div>
  );
};
export default PageNotFound;
