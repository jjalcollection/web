import { RecommendFeedItem } from "../RecommendFeedItem";
import { Container, Inner } from "./RecommendFeedList.css";

const makeArr = (length: number) => {
  return Array.from({ length }, (_, i) => i);
};

const tempArr = makeArr(12);

export const RecommendFeedList = () => {
  return (
    <div className={Container}>
      <div className={Inner}>
        {tempArr.map((item) => (
          <RecommendFeedItem key={item} />
        ))}
      </div>
    </div>
  );
};
