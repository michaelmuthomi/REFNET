import * as React from "react"
import { BreadcrumbComponent } from "@/components"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlignVerticalDistributeStart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {Ceo} from "@/assets/images"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";



export function Header({location = ""}) {
    return (
      <div className="flex justify-between items-center w-full">
        <BreadcrumbComponent location={location} />
        <section className="flex items-center">
          <NavigationMenuComponent />
          <AvatarDemo />
        </section>
      </div>
    );
}

export function AvatarDemo() {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage src={Ceo} alt="CEO" className="object-cover" />
      <AvatarFallback>CO</AvatarFallback>
    </Avatar>
  );
}

"use client";


import { cn } from "@/lib/utils";

export function NavigationMenuComponent() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Administrator</NavigationMenuTrigger>
          <NavigationMenuContent className="shadow-none">
            <ul className="grid w-max gap-3 px-4 w-44 shadow-none">
              <Link to="/" className="py-4 text-left flex items-center gap-2">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/ui-ux-kit/100/logout-256.png"
                  alt=""
                  className="w-6"
                />
                <span>Logout</span>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";