import { IconProps } from "@deer-ui/core/icon";

type IconMapItem = IconProps;

export const iconMap: {
  [name: string]: IconMapItem | ((isActive: boolean) => IconMapItem);
} = {
  like: (isActive) => ({
    n: 'heart',
    s: isActive ? 's' : `r`
  }),
  visit: {
    n: 'feather',
    s: 'r'
  }
};

export const VisitorListCache = 'visitorList';
export const LikeListCache = 'likeList';
