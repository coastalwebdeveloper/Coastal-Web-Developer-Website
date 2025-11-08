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
  const { data, error } = await supabase
    .from('works')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching works:', error);
    return [];
  }
  
  return data || [];
};

export const uploadWorkImage = async (file: File): Promise<string | null> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  
  const { error } = await supabase.storage
    .from('work-images')
    .upload(fileName, file);
  
  if (error) {
    console.error('Error uploading image:', error);
    return null;
  }
  
  const { data } = supabase.storage
    .from('work-images')
    .getPublicUrl(fileName);
  
  return data.publicUrl;
};

export const addWork = async (work: Omit<Work, 'id' | 'created_at' | 'updated_at'>): Promise<boolean> => {
  const { error } = await supabase
    .from('works')
    .insert([work]);
  
  if (error) {
    console.error('Error adding work:', error);
    return false;
  }
  
  return true;
};

export const removeWork = async (id: number): Promise<boolean> => {
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
    console.error('Error removing work:', error);
    return false;
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
};