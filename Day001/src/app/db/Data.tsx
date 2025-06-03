type College = {
  id: number;
  name: string;
  location: string;
  image: string;
  description?: string;
};
const colleges: College[] = [
  {
    id: 1,
    name: "IIT Madras - Indian Institute of Technology",
    location: "Madras",
    image:
      "https://media.collegedekho.com/media/uploads/2023/10/11/iit-roorkee-campus-2.jpg",
    description: "This is best iit in india ",
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
  {
    id: 7,
    name: "IIT Roorkee - Indian Institute of Technology",
    location: "Roorkee",
    image:
      "https://t3.ftcdn.net/jpg/02/73/28/46/360_F_273284658_w8mcoqsz5uEG4DMDKrdBL81oKyRzvg9i.jpg",
  },
];

export { colleges };

// type Person = {
//   name : string,
//   age : number,
//   gender : string
// }
// const obj : Person = {
//   name : "Jai Prakash",
//   age : 22,
//   gender : "Male"
// }
