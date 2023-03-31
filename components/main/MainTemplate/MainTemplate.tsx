import { Button } from "@mantine/core";
import { MainBanner } from "../MainBanner";
import { MainFeedList } from "../MainFeedList";
import { Container } from "./MainTemplate.css";

export const MainTemplate = () => {
  return (
    <div className={Container}>
      <MainBanner />
      <MainFeedList />
    </div>
  );
};
