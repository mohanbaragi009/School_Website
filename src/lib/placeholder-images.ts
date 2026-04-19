
import data from '@/app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

export function getPlaceholderById(id: string): string {
  const img = PlaceHolderImages.find(p => p.id === id);
  return img?.imageUrl || `https://picsum.photos/seed/${id}/600/400`;
}
