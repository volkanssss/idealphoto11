
import { post1 } from './tips-tricks/top-kpop-photo-ideas';
import { post2 } from './tutorials/perfect-fan-photo-guide';
import { post3 } from './behind-scenes/behind-the-scenes-idol-assets';
import { post4 } from './trends/kpop-photo-trends-2023';
import { post5 } from './community/fan-stories-photo-memories';
import { post6 } from './updates/new-features-backgrounds-stickers';
import { post7 } from './tutorials/virtual-photo-booth-setup-2025';
import { post8 } from './tips-tricks/creative-photo-booth-ideas';
import { post9 } from './guides/kpop-beginner-guide';
import { post10 } from './guides/photo-strip-design-tips';
import { post11 } from './trends/virtual-photo-booth-trends-2025';

export const blogPosts = [post11, post10, post9, post8, post7, post1, post2, post3, post4, post5, post6];

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  slug: string;
  author?: {
    name: string;
    avatar: string;
    role: string;
  };
  content?: string;
  tags?: string[]; // Add the tags property as optional
};
