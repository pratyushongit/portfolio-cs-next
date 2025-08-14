import {
  NavItem,
  GridItem,
  Project,
  Testimonial,
  Company,
  WorkExperience,
  SocialMedia,
} from "./contentstack-data";
import Stack from "@/lib/contentstack";

export const getHeroWords = async (): Promise<string> => {
  try {
    const result: any = await Stack.contentType("hero_section")
      .entry("blt93c434aa992ab9ce")
      .fetch();
    return result;
  } catch (error) {
    console.error("Error fetching hero words:", error);
    return "Transforming Concepts into Seamless User Experiences";
  }
};

export const getNavItems = async (): Promise<NavItem[]> => {
  try {
    const Query = Stack.contentType("navigation").entry("navigation_entry");
    const result: any = await Query.fetch();
    return result.nav_items || [];
  } catch (error) {
    console.error("Error fetching nav items:", error);
    return [
      { name: "About", link: "#about" },
      { name: "Projects", link: "#projects" },
      { name: "Testimonials", link: "#testimonials" },
      { name: "Contact", link: "#contact" },
    ];
  }
};

export const getTechLists = async (): Promise<{
  leftLists: string[];
  rightLists: string[];
}> => {
  try {
    const Query = Stack.contentType("tech_lists").entry("tech_lists_entry");
    const result: any = await Query.fetch();
    return {
      leftLists: result.left_lists || [],
      rightLists: result.right_lists || [],
    };
  } catch (error) {
    console.error("Error fetching tech lists:", error);
    return {
      leftLists: ["ReactJS", "Express", "Typescript"],
      rightLists: ["VueJS", "NuxtJS", "GraphQL"],
    };
  }
};

export const getGridItems = async (): Promise<GridItem[]> => {
  try {
    const Query = Stack.contentType("grid_items").entry().query();
    const result: any = await Query.find();
    return result || [];
  } catch (error) {
    console.error("Error fetching grid items:", error);
    return [];
  }
};

export const getProjects = async (): Promise<Project[]> => {
  try {
    const Query = Stack.contentType("projects").entry().query();
    const result: any = await Query.find();
    return result || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const Query = Stack.contentType("testimonials").entry().query();
    const result: any = await Query.find();
    return result || [];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};

export const getCompanies = async (): Promise<Company[]> => {
  try {
    const Query = Stack.contentType("companies").entry().query();
    const result: any = await Query.find();
    return result || [];
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
};

export const getWorkExperience = async (): Promise<WorkExperience[]> => {
  try {
    const Query = Stack.contentType("work_experience").entry().query();
    const result: any = await Query.find();
    return result || [];
  } catch (error) {
    console.error("Error fetching work experience:", error);
    return [];
  }
};

export const getSocialMedia = async (): Promise<SocialMedia[]> => {
  try {
    const Query = Stack.contentType("social_media").entry().query();
    const result: any = await Query.find();
    return result || [];
  } catch (error) {
    console.error("Error fetching social media:", error);
    return [];
  }
};
