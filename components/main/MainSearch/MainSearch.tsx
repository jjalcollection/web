import { Container, Input } from "./MainSearch.css";

export const MainSearch = () => {
  return (
    <form className={Container}>
      <input className={Input} type="text" placeholder="짤 검색 ..." />
    </form>
  );
};
