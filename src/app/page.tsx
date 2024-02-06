"use client";

import { useThemeMode } from "@/context/ThemeContext";
import styles from "./page.module.css";

export default function Home() {
  const { mode, toggle } = useThemeMode();

  return (
    <main className={styles.container}>
      <button
        className={
          mode === "light" ? `${styles.test}` : `${styles.test} ${styles.dark}`
        }
        onClick={toggle}
      >
        {mode === "light" ? "Go To Dark" : "Go To White"}
      </button>
    </main>
  );
}
