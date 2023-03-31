import {
  ButtonBox,
  FileImage,
  ImageBox,
  SubmitButton,
  Tag,
  TagInput,
  TagList,
} from "./ImageUploadFormModal.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { Modal } from "@mantine/core";
import { baseApi } from "@/apis";

interface Props {
  isOpen: boolean;
  close: () => void;
  onToggleModal: () => void;
}

export const ImageUploadFormModal = ({
  isOpen,
  close,
  onToggleModal,
}: Props) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const onImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      if (e.target.files[0].size > 10000000) {
        alert("파일 용량이 10MB를 초과하였습니다.");
        return;
      }

      const fd = new FormData();
      fd.append("images", e.target.files[0]);

      try {
        const data = await baseApi.post("/api/v1/image", fd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
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

  const onSubmitJjal = () => {
    onToggleModal();
    toast("짤이 등록되었습니다.");
  };

  useEffect(() => {
    if (!isOpen) {
      setTags([]);
      setInputValue("");
    }
  }, [isOpen]);

  return (
    <Modal opened={isOpen} onClose={close} title="짤 업로드">
      <div>
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
            <form onSubmit={onSubmitTag} className="my-anchor-element">
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

        <Tooltip
          anchorSelect=".my-anchor-element"
          place="bottom"
          delayHide={1000}
        >
          <span
            style={{
              fontSize: "12px",
            }}
          >
            태그를 입력 후 엔터를 눌러주세요.
          </span>
        </Tooltip>

        <div className={ButtonBox}>
          <button className={SubmitButton} onClick={onSubmitJjal}>
            등록
          </button>
        </div>
      </div>
    </Modal>
  );
};
