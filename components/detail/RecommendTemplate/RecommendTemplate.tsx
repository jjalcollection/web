import { RecommendFeedList } from "../RecommendFeedList";
import { Container } from "./RecommendTemplate.css";

export const RecommendTemplate = () => {
  return (
    <div className={Container}>
      <RecommendFeedList />
    </div>
  );
};
