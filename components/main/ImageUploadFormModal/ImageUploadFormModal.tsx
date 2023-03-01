import { Modal } from "@/components/@share/Modal";
import {
  ButtonBox,
  Container,
  FileImage,
  ImageBox,
  SubmitButton,
  Tag,
  TagInput,
  TagList,
  Title,
} from "./ImageUploadFormModal.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  isOpen: boolean;
  onToggleModal: () => void;
}

export const ImageUploadFormModal = ({ isOpen, onToggleModal }: Props) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const onImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      if (e.target.files[0].size > 10000000) {
        alert("파일 용량이 10MB를 초과하였습니다.");
        return;
      }

      const fd = new FormData();
      fd.append("image", e.target.files[0]);
      try {
        // const data = await uploadProfileImageAPI(fd);
        // onChangeProfileImage(data.imageUrl, e.target.files[0].name);
      } catch (err) {
        console.log(err);
        alert("이미지 업로드에 실패했습니다.");
      }
    }
  };

  const onSubmitTag = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tags.includes(inputValue)) {
      toast("태그가 이미 존재합니다.");
      return;
    }

    setTags([...tags, inputValue]);
    setInputValue("");
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (!isOpen) {
      setTags([]);
      setInputValue("");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }
  return (
    <Modal
      width={500}
      height={550}
      isModal={isOpen}
      onToggleModal={onToggleModal}
    >
      <div className={Container}>
        <span className={Title}>짤 업로드</span>
        <label className={ImageBox}>
          +
          <input className={FileImage} type="file" onChange={onImageUpload} />
        </label>

        <div className={TagList}>
          <>
            {tags.map((tag) => (
              <span className={Tag} key={tag}>
                {tag}
              </span>
            ))}
          </>
          {tags.length < 3 && (
            <form onSubmit={onSubmitTag}>
              <input
                className={TagInput}
                placeholder="태그를 입력하세요"
                type="text"
                value={inputValue}
                onChange={onChangeInput}
              />
            </form>
          )}
        </div>

        <div className={ButtonBox}>
          <button className={SubmitButton}>등록</button>
        </div>
      </div>
    </Modal>
  );
};
