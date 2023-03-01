import { useState } from "react";
import { MainTagItem } from "../MainTagItem";
import { Container } from "./MainTagList.css";

const tempArr = [
  "전체",
  "솔로",
  "빡침",
  "분노",
  "놀람",
  "눈물",
  "표정",
  "병맛",
  "섭섭",
];

export const MainTagList = () => {
  const [selected, setSelected] = useState(tempArr[0]);

  const onClick = (tag: string) => {
    setSelected(tag);
  };

  return (
    <div className={Container}>
      {tempArr.map((tag) => (
        <MainTagItem
          onClick={() => onClick(tag)}
          key={tag}
          tag={tag}
          selected={selected === tag}
        />
      ))}
    </div>
  );
};
