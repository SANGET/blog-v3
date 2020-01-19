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
    n: 'grin-squint',
    s: 'r'
  }
};
