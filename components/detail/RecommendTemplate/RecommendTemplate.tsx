import { RecommendFeedList } from "../RecommendFeedList";
import { Container, MoreText } from "./RecommendTemplate.css";

export const RecommendTemplate = () => {
  return (
    <div className={Container}>
      <p className={MoreText}>덤으로 추천해드릴께요!!</p>
      <RecommendFeedList />
    </div>
  );
};
