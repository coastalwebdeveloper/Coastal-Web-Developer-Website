import { supabase } from './supabase'

export interface Work {
  id: number;
  title: string;
  description: string;
  image_url: string;
  tech: string[];
  live_url: string;
  github_url: string;
  created_at?: string;
  updated_at?: string;
}

export const getWorks = async (): Promise<Work[]> => {
  try {
    const { data, error } = await supabase
      .from('works')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching works from Supabase:', error);
      // Fallback to localStorage
      return getWorksFromLocalStorage();
    }
    
    return data || [];
  } catch (error) {
    console.error('Supabase connection failed:', error);
    // Fallback to localStorage
    return getWorksFromLocalStorage();
  }
};

const getWorksFromLocalStorage = (): Work[] => {
  if (typeof window === 'undefined') return defaultWorks;
  
  const stored = localStorage.getItem('coastal_works');
  return stored ? JSON.parse(stored) : defaultWorks;
};

const defaultWorks: Work[] = [
  {
    id: 1,
    title: "E-commerce Store",
    description: "Modern online store with payment integration",
    image_url: "/placeholder.svg",
    tech: ["React", "Node.js", "Stripe"],
    live_url: "#",
    github_url: "#"
  },
  {
    id: 2,
    title: "Restaurant Website",
    description: "Beautiful restaurant site with online ordering",
    image_url: "/placeholder.svg",
    tech: ["React", "Tailwind", "Firebase"],
    live_url: "#",
    github_url: "#"
  },
  {
    id: 3,
    title: "Business Portfolio",
    description: "Professional portfolio for consulting firm",
    image_url: "/placeholder.svg",
    tech: ["React", "TypeScript", "Framer"],
    live_url: "#",
    github_url: "#"
  }
];

export const uploadWorkImage = async (file: File): Promise<string | null> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    
    const { error } = await supabase.storage
      .from('work-images')
      .upload(fileName, file);
    
    if (error) {
      console.error('Error uploading image to Supabase:', error);
      return '/placeholder.svg'; // Fallback to placeholder
    }
    
    const { data } = supabase.storage
      .from('work-images')
      .getPublicUrl(fileName);
    
    return data.publicUrl;
  } catch (error) {
    console.error('Supabase storage connection failed:', error);
    return '/placeholder.svg'; // Fallback to placeholder
  }
};

export const addWork = async (work: Omit<Work, 'id' | 'created_at' | 'updated_at'>): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('works')
      .insert([work]);
    
    if (error) {
      console.error('Error adding work to Supabase:', error);
      // Fallback to localStorage
      return addWorkToLocalStorage(work);
    }
    
    return true;
  } catch (error) {
    console.error('Supabase connection failed:', error);
    // Fallback to localStorage
    return addWorkToLocalStorage(work);
  }
};

const addWorkToLocalStorage = (work: Omit<Work, 'id' | 'created_at' | 'updated_at'>): boolean => {
  try {
    const works = getWorksFromLocalStorage();
    const newWork = { ...work, id: Date.now() };
    const updatedWorks = [...works, newWork];
    localStorage.setItem('coastal_works', JSON.stringify(updatedWorks));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

export const removeWork = async (id: number): Promise<boolean> => {
  try {
    // Get the work to find the image URL
    const { data: work } = await supabase
      .from('works')
      .select('image_url')
      .eq('id', id)
      .single();
    
    // Delete the work from database
    const { error } = await supabase
      .from('works')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error removing work from Supabase:', error);
      // Fallback to localStorage
      return removeWorkFromLocalStorage(id);
    }
    
    // Delete the image from storage if it's not the default placeholder
    if (work?.image_url && !work.image_url.includes('placeholder.svg')) {
      const fileName = work.image_url.split('/').pop();
      if (fileName) {
        await supabase.storage
          .from('work-images')
          .remove([fileName]);
      }
    }
    
    return true;
  } catch (error) {
    console.error('Supabase connection failed:', error);
    // Fallback to localStorage
    return removeWorkFromLocalStorage(id);
  }
};

const removeWorkFromLocalStorage = (id: number): boolean => {
  try {
    const works = getWorksFromLocalStorage();
    const updatedWorks = works.filter(work => work.id !== id);
    localStorage.setItem('coastal_works', JSON.stringify(updatedWorks));
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
};