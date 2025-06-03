# Next js Questions (Test 1)

1. What is Routing ?
2. What is Nested Routing ?
3. what is The use of Layout.tsx ?
4. What is Link ?
5. What is the use of useRouter ?
6. How to skip a Route ?
7. What is dynamic route ?
   1. what is params ?
   2. What is the use of params ?
   3. How to create dataset ?
   4. find method ?

# Small Mini project based on dynamic routing

```tsx
type College = {
  id: number;
  name: string;
  location: string;
  image: string;
};
const colleges: College[] = [
  {
    id: 1,
    name: "IIT Madras - Indian Institute of Technology",
    location: "Madras",
    image:
      "https://media.collegedekho.com/media/uploads/2023/10/11/iit-roorkee-campus-2.jpg",
  },
  {
    id: 2,
    name: "IIT Bombay - Indian Institute of Technology",
    location: "Bombay",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/iit-bombay-and-iit-delhi-are-among-the-worlds-top-150-in-the-qs-world-university-ranking-2025-050625583-16x9_1.jpg?VersionId=ZxoHasJDJYvzGGvYoIDNd2hvWCoqviDe&size=690:388",
  },
  {
    id: 3,
    name: "IIT Kharagpur - Indian Institute of Technology",
    location: "Kharagpur",
    image:
      "https://images.cnbctv18.com/wp-content/uploads/2022/09/IIT-shutterstock-1024x576.jpg",
  },
  {
    id: 4,
    name: "IIT Guwahati - Indian Institute of Technology",
    location: "Guwahati",
    image: "https://iitg.ac.in/freshers/res/images/Guesthouse.JPG",
  },
  {
    id: 5,
    name: "IIT Delhi - Indian Institute of Technology",
    location: "Delhi",
    image: "https://home.iitd.ac.in/images/for-faculty/camp8.jpg",
  },
];

export { colleges };
```
