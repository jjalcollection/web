export function chunk<T>(arr: T[], size: number): T[][] {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunkedItem = arr.slice(i, i + size);
    chunkedArr.push(chunkedItem);
  }
  return chunkedArr;
}

export function findStartNode(
  scrollTop: number,
  nodePositions: number[],
  itemCount: number,
) {
  let start = 0;
  let end = itemCount || 0;

  while (end - start > 1) {
    const middle = Math.floor((start + end) / 2);

    if (nodePositions[middle] <= scrollTop) {
      start = middle;
    } else {
      end = middle;
    }
  }

  return end === itemCount ? end - 1 : end;
}

export function findEndNode(
  nodePositions: number[],
  startNode: number,
  itemCount: number,
  height: number,
) {
  let endNode = startNode;

  while (
    endNode < itemCount &&
    nodePositions[endNode] <= nodePositions[startNode] + height
  ) {
    endNode++;
  }

  return endNode;
}

export function getItemPositions(itemCount: number, itemHeight: number) {
  return Array.from({ length: itemCount }, (_, i) => i * itemHeight);
}
