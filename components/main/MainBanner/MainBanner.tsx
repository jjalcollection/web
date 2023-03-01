import { MainSearch } from "../MainSearch";
import { MainTagList } from "../MainTagList";
import { Container, Inner, Title } from "./MainBanner.css";

export const MainBanner = () => {
  return (
    <div className={Container}>
      <div className={Inner}>
        <h2 className={Title}>JJAL Collection</h2>
        <MainSearch />
        <MainTagList />
      </div>
    </div>
  );
};
