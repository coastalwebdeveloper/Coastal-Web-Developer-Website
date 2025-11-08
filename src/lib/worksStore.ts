export interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

const WORKS_STORAGE_KEY = 'coastal_works';

const defaultWorks: Work[] = [
  {
    id: 1,
    title: "E-commerce Store",
    description: "Modern online store with payment integration",
    image: "/placeholder.svg",
    tech: ["React", "Node.js", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Restaurant Website",
    description: "Beautiful restaurant site with online ordering",
    image: "/placeholder.svg",
    tech: ["React", "Tailwind", "Firebase"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Business Portfolio",
    description: "Professional portfolio for consulting firm",
    image: "/placeholder.svg",
    tech: ["React", "TypeScript", "Framer"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const getWorks = (): Work[] => {
  if (typeof window === 'undefined') return defaultWorks;
  
  const stored = localStorage.getItem(WORKS_STORAGE_KEY);
  return stored ? JSON.parse(stored) : defaultWorks;
};

export const addWork = (work: Omit<Work, 'id'>): void => {
  const works = getWorks();
  const newWork = { ...work, id: Date.now() };
  const updatedWorks = [...works, newWork];
  localStorage.setItem(WORKS_STORAGE_KEY, JSON.stringify(updatedWorks));
};

export const removeWork = (id: number): void => {
  const works = getWorks();
  const updatedWorks = works.filter(work => work.id !== id);
  localStorage.setItem(WORKS_STORAGE_KEY, JSON.stringify(updatedWorks));
};