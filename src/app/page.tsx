"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";

interface DataType {
  _id: number;
  imgUrl: string;
}

const fetchData = [
  {
    _id: 1,
    imgUrl:
      "https://res.cloudinary.com/dewa3t2gi/image/upload/v1704970199/myportfolioblogproject/s2bqbwyf1vml2beeqdrm.gif",
  },
  {
    _id: 2,
    imgUrl:
      "https://res.cloudinary.com/dewa3t2gi/image/upload/v1677818589/myportfolioblogproject/ta2ew0kg9unlstsv3g3m.gif",
  },
  {
    _id: 3,
    imgUrl:
      "https://res.cloudinary.com/dewa3t2gi/image/upload/v1679554666/myportfolioblogproject/qae9fi8bjtpuoc5qjse7.gif",
  },
  {
    _id: 4,
    imgUrl:
      "https://res.cloudinary.com/dewa3t2gi/image/upload/v1678437768/myportfolioblogproject/qpyzc9k1w06m1ldplwmw.gif",
  },
  {
    _id: 5,
    imgUrl:
      "https://res.cloudinary.com/dewa3t2gi/image/upload/v1676974927/myportfolioblogproject/od9rqmzhmhdmwusqk5qe.gif",
  },
];

export default function Home() {
  const [data, setData] = useState<DataType[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getDatas = async () => {
    setLoading(true);
    try {
      // HTTP Get 메서드 로직 여기에 추가!
      setData([...data, ...fetchData]);
      setPage(page + 1);
      // HTTP Get 메서드 로직 여기에 추가!
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    return;
  };

  useEffect(() => {
    // 초기 데이터 로드
    getDatas();
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <InfiniteScroll
        dataLength={data.length} // 데이터 개수
        next={getDatas} // 다음 데이터 로드 함수
        hasMore={true} // 무한 스크롤링 여부
        loader={<h4>Loading...</h4>} // 로딩중 표시
      >
        {data.map((data, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={data.imgUrl}
              alt={`${data._id}`}
              style={{ objectFit: "contain" }}
              width={700}
              height={300}
            />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
