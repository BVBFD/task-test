# Infinite Scroll Y 무한스크롤 Y축 구현 

![infinite-scroll-y](https://github.com/BVBFD/task-test/assets/83178592/496006e2-4837-4b5d-8276-3d141f7f6fa4)

`scrollTop`, `clientHeight`, `scrollTop` 수치 계산해서 Y축 무한 스크롤 구현

1. infinite-scroll-y-nextjs NextJS 혹은 React에서의 코드

```js
useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollHeight, clientHeight, scrollTop } = containerRef.current;

        if (scrollTop + clientHeight >= scrollHeight) {
          getData(fetchData);
        }
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

```

2. infinite-scroll-y-js 브랜치에서 바닐라js 코드

```js
container.addEventListener("scroll", handleScroll);
```

아래의 scrollTop, scrollHeight, clientHeight, offsetHeight 개념을 이해해보자!

* scrollTop, scrollHeight

![scrollTop, scrollHeight](https://github.com/BVBFD/task-test/assets/83178592/81d5e29b-b8d2-4532-a561-2e9fc9bb0d41)


* clientHeight, offsetHeight

![clientHeight, offsetHeight](https://github.com/BVBFD/task-test/assets/83178592/a3ac6bc2-7a18-4094-b5aa-f6faa08dceb0)
