import type { Key } from "react";
import React, { Fragment } from "react";

import { useInfiniteScroll } from "./hooks";
import useScrollAware from "./hooks/useScrollAware";
import { chunk, findEndNode, findStartNode, getItemPositions } from "./utils";

export interface VirtualScrollProps<T> {
  data: T[];
  renderItem: (props: T) => JSX.Element;
  columns?: number;
  containerHeight: number;
  itemHeight: number;
  renderAhead?: number;
  rowKey: keyof T;
  loadMore: () => void;
  intersectionObserverOptions?: IntersectionObserverInit;
}

/**
 * @param data - list 데이터
 * @param columns - 열 개수
 * @param containerHeight - Container 전체 높이
 * @param itemHeight - 각 행 높이
 * @param rowKey - 각 행의 고유 키
 * @param renderAhead - 뷰포트 위 아래 여유 행 개수
 * @param loadMore - 스크롤이 끝에 도달했을 때 호출할 함수
 */
export const VirtualScroll = <T extends object>({
  data,
  renderItem,
  columns = 1,
  containerHeight,
  loadMore,
  rowKey,
  itemHeight,
  intersectionObserverOptions,
  renderAhead = 20,
}: VirtualScrollProps<T>) => {
  const chunkedList = chunk(data, columns);
  const itemCount = chunkedList.length;

  const [subscribe] = useInfiniteScroll(loadMore, intersectionObserverOptions);
  const childPositions = getItemPositions(itemCount, itemHeight);
  const { scrollTop } = useScrollAware();
  const totalHeight = childPositions[itemCount - 1] + itemHeight;

  const firstVisibleNode = findStartNode(scrollTop, childPositions, itemCount);
  const lastVisibleNode = findEndNode(
    childPositions,
    firstVisibleNode,
    itemCount,
    containerHeight
  );

  const startNode = Math.max(0, firstVisibleNode - renderAhead);
  const endNode = Math.min(itemCount, lastVisibleNode + renderAhead);
  const offsetY = childPositions[startNode];
  const visibleList = chunkedList.slice(startNode, endNode);

  const getKey = (item: T) => {
    if (rowKey in item) {
      return item[rowKey] as Key;
    } else {
      if (process.env.NODE_ENV === "development") {
        throw new Error("데이터에 uniqueKey가 없습니다.");
      }
    }
  };

  return (
    <>
      <div
        style={{
          overflow: "visible",
          position: "relative",
          height: totalHeight,
        }}
      >
        <div
          style={{
            willChange: "transform",
            transform: `translateY(${offsetY}px)`,
          }}
        >
          {visibleList.map((visibleItem) => (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
              }}
              key={getKey(visibleItem[0])}
            >
              {visibleItem.map((item, idx) => (
                <Fragment key={idx}>{renderItem(item)}</Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div ref={subscribe} />
    </>
  );
};
