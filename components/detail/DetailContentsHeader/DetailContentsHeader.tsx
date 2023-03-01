import React from "react";
import {
  Container,
  Description,
  Tag,
  TagBox,
} from "./DetailContentsHeader.css";

export const DetailContentsHeader = () => {
  return (
    <div className={Container}>
      <div className={Description}>웃겨 죽는 짤 모음 4탄</div>
      <div className={TagBox}>
        <p className={Tag}>태그</p> <p className={Tag}>태그</p>
        <p className={Tag}>태그</p>
      </div>
    </div>
  );
};
