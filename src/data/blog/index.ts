
import { post1 } from './tips-tricks/top-kpop-photo-ideas';
import { post2 } from './tutorials/perfect-fan-photo-guide';
import { post3 } from './behind-scenes/behind-the-scenes-idol-assets';
import { post4 } from './trends/kpop-photo-trends-2025';
import { post5 } from './community/fan-stories-photo-memories';
import { post6 } from './updates/new-features-backgrounds-stickers';
import { post7 } from './tutorials/virtual-photo-booth-setup-2025';
import { post8 } from './tips-tricks/creative-photo-booth-ideas';
import { post9 } from './guides/kpop-beginner-guide';
import { post10 } from './guides/photo-strip-design-tips';
import { post11 } from './trends/virtual-photo-booth-trends-2025';
import { post12 } from './trends/top-wedding-trends-2025';
import { post13 } from './tutorials/perfect-vintage-strip';
import { post14 } from './trends/future-of-events';

// Expansion Pack Imports
import { postWedding1 } from './expansion/wedding-props-2025';
import { postWedding2 } from './expansion/diy-vs-pro-wedding-booth';
import { postWedding3 } from './expansion/diy-wedding-backdrop-guide';
import { postWedding4 } from './expansion/wedding-photobooth-games';
import { postCorporate1 } from './expansion/corporate-event-photobooth-benefits';
import { postCorporate2 } from './expansion/brand-engagement-virtual-booth';
import { postCorporate3 } from './expansion/trade-show-lead-generation-photobooth';
import { postCorporate4 } from './expansion/remote-team-holiday-party-ideas';
import { postDIY1 } from './expansion/ipad-photobooth-setup-guide';
import { postDIY2 } from './expansion/best-photobooth-printers-2025';
import { postDIY3 } from './expansion/photobooth-lighting-guide';
import { postDIY4 } from './expansion/photobooth-software-vs-hardware';
import { postKpop1 } from './expansion/kpop-idol-poses-guide';
import { postKpop2 } from './expansion/history-of-purikura-sticker-photos';
import { postKpop3 } from './expansion/best-kpop-photo-editing-apps';
import { postKpop4 } from './expansion/kpop-photo-display-ideas';

export const blogPosts = [
  postDIY1, postDIY2, postDIY3, postDIY4,
  postKpop1, postKpop2, postKpop3, postKpop4,
  postWedding1, postWedding2, postWedding3, postWedding4,
  postCorporate1, postCorporate2, postCorporate3, postCorporate4,
  post14, post13, post12, post11, post4, post10, post9, post8, post7, post1, post2, post3, post5, post6
];

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
