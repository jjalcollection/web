import { Container, ItemImage } from "./MainFeedItem.css";

interface Props {
  onClick: () => void;
}

export const MainFeedItem = ({ onClick }: Props) => {
  return (
    <div className={Container} onClick={onClick}>
      <img
        className={ItemImage}
        src="https://cdn.dribbble.com/userupload/4990594/file/still-32ef81593df980b02198b4540d62b7bd.png?compress=1&resize=840x630&vertical=top"
        alt="asd"
      />
    </div>
  );
};
