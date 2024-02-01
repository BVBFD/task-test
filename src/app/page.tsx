"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [totalDatas, setTotalDatas] = useState<PostType[]>([]);
  const [totalPages, setTotalPages] = useState<number>();

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showPageNumber, setShowPageNumber] = useState(5);

  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [showDataRowsHTML, setShowDataRowsHTML] = useState<JSX.Element[]>();

  const goToPage = (num: number) => {
    const startRowIndex = (num - 1) * rowsPerPage;
    const lastRowIndex = startRowIndex + rowsPerPage;
    const showDataRows = totalDatas.slice(startRowIndex, lastRowIndex);

    const htmlArr = showDataRows.map((row) => (
      <div className={styles.dataRow}>{row.title}</div>
    ));

    setShowDataRowsHTML(htmlArr);
    setCurrentPageNumber(num);
  };

  const renderPagination = () => {
    const paginationNumBox = [];

    paginationNumBox.push(
      <button
        onClick={() => goToPage(1)}
        key={"<<"}
        disabled={currentPageNumber === 1}
      >
        {"<<"}
      </button>
    );

    paginationNumBox.push(
      <button
        onClick={() => goToPage(currentPageNumber - 1)}
        key={"<"}
        disabled={currentPageNumber === 1}
      >
        {"<"}
      </button>
    );

    const startRangeNum =
      Math.floor((currentPageNumber - 1) / showPageNumber) * showPageNumber + 1;
    const endRangeNum = Math.min(
      startRangeNum + (showPageNumber - 1),
      totalPages as number
    );

    for (let i = startRangeNum; i <= endRangeNum; i += 1) {
      paginationNumBox.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          disabled={i === currentPageNumber}
          className={i === currentPageNumber ? `${styles.clicked}` : ""}
        >
          {i}
        </button>
      );
    }

    paginationNumBox.push(
      <button
        onClick={() => goToPage(currentPageNumber + 1)}
        key={">"}
        disabled={currentPageNumber === totalPages}
      >
        {">"}
      </button>
    );

    paginationNumBox.push(
      <button
        onClick={() => goToPage(totalPages as number)}
        key={">>"}
        disabled={currentPageNumber === totalPages}
      >
        {">>"}
      </button>
    );

    return paginationNumBox;
  };

  useEffect(() => {
    const getTotalDatas = async () => {
      const res = await fetch("/data/posts.json");
      const totalDatas = await res.json();
      setTotalDatas(totalDatas);
      setTotalPages(Math.ceil(totalDatas.length / rowsPerPage));
    };

    getTotalDatas();
  }, []);

  useEffect(() => {
    goToPage(1);
  }, [totalPages]);

  return (
    <>
      <section className={styles.container}>
        <main>{showDataRowsHTML}</main>
        <footer>{totalPages && renderPagination()}</footer>
      </section>
    </>
  );
}
