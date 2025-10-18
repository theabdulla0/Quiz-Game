import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Award, LogIn, LogOut, Menu } from "lucide-react";

export default function Navbar({ logoSrc }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateAuthState = () =>
      setIsLoggedIn(!!localStorage.getItem("authToken"));
    updateAuthState();
    window.addEventListener("authChanged", updateAuthState);
    window.addEventListener("storage", updateAuthState);
    return () => {
      window.removeEventListener("authChanged", updateAuthState);
      window.removeEventListener("storage", updateAuthState);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.dispatchEvent(new CustomEvent("authChanged"));
    navigate("/login");
  };

  // Link styles
  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2";
  const linkActive = "text-primary bg-primary/10";
  const linkInactive =
    "text-muted-foreground hover:text-foreground hover:bg-muted/50";

  // Reusable Menu Items (desktop or mobile)
  const MenuItems = ({ onItemClick, vertical = false }) => (
    <>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive} ${
                vertical ? "w-full" : ""
              }`
            }
            onClick={onItemClick}
          >
            Home
          </NavLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <NavLink
            to="/result"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive} ${
                vertical ? "w-full" : ""
              }`
            }
            onClick={onItemClick}
          >
            <span className="flex items-center">
              <Award className="w-4 h-4" />
              My Result
            </span>
          </NavLink>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {isLoggedIn ? (
        <NavigationMenuItem>
          <Button
            variant="danger"
            className={`${linkBase} ${vertical ? "w-full justify-start hover:bg-red-500 cursor-pointer" : ""}`}
            onClick={() => {
              handleLogout();
              onItemClick?.();
            }}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </NavigationMenuItem>
      ) : (
        <NavigationMenuItem>
          <Button
            variant="default"
            className={`${linkBase} ${vertical ? "w-full justify-start" : ""}`}
            onClick={() => {
              onItemClick?.();
              navigate("/login");
            }}
          >
            <LogIn className="w-4 h-4" />
            Login
          </Button>
        </NavigationMenuItem>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="mx-auto w-full max-w-7xl flex h-16 items-center justify-between px-4">
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1">
              <MenuItems />
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[260px] p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            >
              <SheetHeader className="mb-2">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <NavigationMenu className="mt-2 w-full">
                <NavigationMenuList className="flex flex-col items-start gap-2">
                  <MenuItems
                    onItemClick={() => setMobileOpen(false)}
                    vertical
                  />
                </NavigationMenuList>
              </NavigationMenu>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
