export interface ServiceItem {
  id: string;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  description?: string;
  deliverables: string[];
  iconName: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: 'all' | 'youtube' | 'editing' | 'education' | 'motion';
  description: string;
  clientType: string;
  deliverables: string[];
  results: string;
  image: string;
  videoSrc?: string;
  youtubeId?: string;
  youtubeUrl?: string;
}

export interface ShortReel {
  id: string;
  title: string;
  category: string;
  duration: string;
  views: string;
  thumbnail: string;
  videoSrc?: string;
  instagramUrl: string;
  caption: string;
  tags: string[];
}

export interface LocationArea {
  id: string;
  city: string;
  badge: string;
  highlightBox: string;
  description: string;
  buttonText: string;
  subtitle?: string;
  keyServices?: string[];
  distance?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      subheading: string;
      paragraph: string;
    }[];
    takeaways: string[];
  };
}

export interface StudioPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  tag: string;
  description: string;
  specs: string;
}
