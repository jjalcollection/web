import { MainFeedList } from "../MainFeedList";
import { Container } from "./MainTemplate.css";

export const MainTemplate = () => {
  return (
    <div className={Container}>
      <MainFeedList />
    </div>
  );
};
