// types.ts (new file for type definitions)
export type MainMenuItem = {
  universityName: string;
  items: Array<{
    type: "dropdown" | "title";
    label: string;
    columns?: number;
    items?: Array<{
      title: string;
      links: Array<{
        label: string;
        href: string;
      }>;
    }>;
    href?: string;
  }>;
};

export type DepartmentMenuItem = {
  name?: string;
  type: "simple";
  label: string;
  href: string;
};
