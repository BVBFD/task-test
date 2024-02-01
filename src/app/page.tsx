"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";

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

interface DataType {
  _id: number;
  imgUrl: string;
}

export default function Home() {
  const [data, setData] = useState<Array<DataType>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const getData = async (fetchingData: Array<DataType>) => {
    // HTTP 가상 Network Get Method 로직
    await new Promise<DataType[]>((resolve, reject) =>
      setTimeout(() => {
        resolve(fetchingData);
        reject("Fetch Data Failed!!");
      }, 1000)
    )
      .then((result) => setData([...data, ...result]))
      .catch((error) => console.log(error));
    // HTTP 가상 Network Get Method 로직
  };

  useEffect(() => {
    if (containerRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = containerRef.current;

      if (scrollTop + clientHeight >= scrollHeight) {
        getData(fetchData);
      }
    }
  }, [data]);

  useEffect(() => {
    getData(fetchData);
  }, []);

  return (
    <main className={styles.container} ref={containerRef}>
      {data?.map((dt) => (
        <div className={styles.imgBox}>
          <Image src={`${dt.imgUrl}`} alt={`${dt._id}`} fill />
        </div>
      ))}
    </main>
  );
}
