import { forwardRef, MouseEventHandler } from "react";

interface PropsType {
  onClick(): void;
  href?: string;
  text: string;
}

const NavbarMenuButton = forwardRef<HTMLAnchorElement, PropsType>(
  ({ onClick, href, text }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        {text}
      </a>
    );
  }
);

NavbarMenuButton.displayName = "NavbarMenuButton";

export default NavbarMenuButton;
