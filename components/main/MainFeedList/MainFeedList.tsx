import { MainFeedItem } from "../MainFeedItem";
import { Container } from "./MainFeedList.css";

const makeArr = (length: number) => {
  return Array.from({ length }, (_, i) => i);
};

const tempArr = makeArr(100);

export const MainFeedList = () => {
  return (
    <div className={Container}>
      {tempArr.map((item) => (
        <MainFeedItem key={item} />
      ))}
    </div>
  );
};
