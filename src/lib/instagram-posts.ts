import { PlaceHolderImages } from './placeholder-images';

export type InstagramPost = {
  id: number;
  imageUrl: string;
  imageHint: string;
  postUrl: string;
};

const igImages = {
  post1: PlaceHolderImages.find(p => p.id === 'instagram-1')!,
  post2: PlaceHolderImages.find(p => p.id === 'instagram-2')!,
  post3: PlaceHolderImages.find(p => p.id === 'instagram-3')!,
  post4: PlaceHolderImages.find(p => p.id === 'instagram-4')!,
  post5: PlaceHolderImages.find(p => p.id === 'instagram-5')!,
};

export const instagramPosts: InstagramPost[] = [
  { id: 1, imageUrl: igImages.post1.imageUrl, imageHint: igImages.post1.imageHint, postUrl: '#' },
  { id: 2, imageUrl: igImages.post2.imageUrl, imageHint: igImages.post2.imageHint, postUrl: '#' },
  { id: 3, imageUrl: igImages.post3.imageUrl, imageHint: igImages.post3.imageHint, postUrl: '#' },
  { id: 4, imageUrl: igImages.post4.imageUrl, imageHint: igImages.post4.imageHint, postUrl: '#' },
  { id: 5, imageUrl: igImages.post5.imageUrl, imageHint: igImages.post5.imageHint, postUrl: '#' },
];
