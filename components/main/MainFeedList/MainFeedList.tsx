import { useRouter } from "next/router";
import { MainFeedItem } from "../MainFeedItem";
import { Container, Inner } from "./MainFeedList.css";

const makeArr = (length: number) => {
  return Array.from({ length }, (_, i) => i);
};

const tempArr = makeArr(100);

export const MainFeedList = () => {
  const router = useRouter();

  return (
    <div className={Container}>
      <div className={Inner}>
        {tempArr.map((item, index) => (
          <MainFeedItem key={item} onClick={() => router.push(`/${index}`)} />
        ))}
      </div>
    </div>
  );
};
