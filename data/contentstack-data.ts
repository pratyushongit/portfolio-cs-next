export interface HeroSection {
  hero_words: string;
}

export interface NavItem {
  name: string;
  link: string;
}

export interface Navigation {
  nav_items: NavItem[];
}

export interface TechLists {
  left_lists: string[];
  right_lists: string[];
}

export interface GridItem {
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

export interface Project {
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface Company {
  name: string;
  img: string;
  nameImg: string;
}

export interface WorkExperience {
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}

export interface SocialMedia {
  img: string;
}
