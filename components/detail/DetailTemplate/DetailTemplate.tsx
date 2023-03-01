import { Container } from "./DetailTemplate.css";
import { DetailContentsHeader } from "../DetailContentsHeader";
import { DetailContents } from "../DetailContents";

export const DetailTemplate = () => {
  return (
    <div className={Container}>
      <DetailContentsHeader />
      <DetailContents />
    </div>
  );
};
