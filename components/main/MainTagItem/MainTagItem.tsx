import { Item, SelectedItem } from "./MainTagItem.css";

interface Props {
  tag: string;
  selected: boolean;
  onClick: () => void;
}

export const MainTagItem = ({ tag, selected, onClick }: Props) => {
  return (
    <div onClick={onClick} className={selected ? SelectedItem : Item}>
      {tag}
    </div>
  );
};
