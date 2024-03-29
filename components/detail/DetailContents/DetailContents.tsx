/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import {
  Container,
  ImageWrapper,
  ImageStyle,
  DownloadButtonBox,
} from "./DetailContents.css";
import { saveAs } from "file-saver";
import { ImageDownloadButton } from "@/components/@share/ImageDownloadButton";

export const DetailContents = () => {
  const downloadImage = () => {
    saveAs(
      "https://cdn.dribbble.com/userupload/4990594/file/still-32ef81593df980b02198b4540d62b7bd.png",
      "image.png"
    );
  };

  return (
    <div className={Container}>
      <div className={DownloadButtonBox}>
        <ImageDownloadButton onClick={downloadImage}>짤 저장하기</ImageDownloadButton>
      </div>
      <div className={ImageWrapper}>
        <img
          className={ImageStyle}
          src="https://cdn.dribbble.com/userupload/4990594/file/still-32ef81593df980b02198b4540d62b7bd.png?compress=1&resize=840x630&vertical=top"
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};
