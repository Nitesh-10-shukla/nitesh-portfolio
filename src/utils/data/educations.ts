export type Education = {
  id: number;
  title: string;
  institution: string;
  duration: string;
};

export const educations: Education[] = [
  {
    id: 1,
    title: "B.Tech in Computer Science",
    institution: "Goel Institute of Technology and Management, Lucknow",
    duration: "2017 — 2021",
  },
  {
    id: 2,
    title: "Intermediate",
    institution: "The Indian Public Inter College",
    duration: "2016 — 2017",
  },
  {
    id: 3,
    title: "High School",
    institution: "Green Land Public School",
    duration: "2014 — 2015",
  },
];
