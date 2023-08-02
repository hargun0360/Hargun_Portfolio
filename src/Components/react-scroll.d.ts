// react-scroll.d.ts

declare module 'react-scroll' {
    import { ComponentType } from 'react';
  
    export interface LinkProps {
      className?: string;
      href: string;
      to?: string;
      smooth?: boolean;
      duration?: number;
      offset?: number;
      delay?: number;
      isDynamic?: boolean;
      spy?: boolean;
      hashSpy?: boolean;
      activeClass?: string;
      onSetActive?: (to: string) => void;
      onSetInactive?: (to: string) => void;
      ignoreCancelEvents?: boolean;
      onClick?: (event: React.MouseEvent<HTMLElement>) => void;
      containerId?: string | null;
      container?: React.ReactNode | (() => React.ReactNode) | null;
      children?: React.ReactNode;
    }
  
    export const Link: ComponentType<LinkProps>;
  }
  