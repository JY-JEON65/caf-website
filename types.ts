
export const MENU_ITEMS = [
  'Home',
  'Products',
  'Design & Construct',
  'Projects',
  'CA storage',
  'Research & Development',
  'Storage systems',
  'ABOUT US', // 새 메뉴 추가
  'MEDIA', // 새 메뉴 추가
] as const;

export type Page = typeof MENU_ITEMS[number];
