import { Container } from "./DetailTemplate.css";
import { DetailContentsHeader } from "../DetailContentsHeader";

export const DetailTemplate = () => {
  return (
    <div className={Container}>
      <DetailContentsHeader />
    </div>
  );
};
