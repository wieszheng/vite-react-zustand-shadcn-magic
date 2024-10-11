import { Bell, ChevronDown, Mail, Moon, Search, Settings, User } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Outlet } from "react-router-dom";
const ListItem = ({ className, title, children, ...props }: React.ComponentPropsWithoutRef<"a"> & { title: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
export const Layout = () => {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
        <div className="flex items-center space-x-6">
          <a href="/" className="text-blue-600 font-bold text-xl">
            Smart City
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <a href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    仪表盘
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>工作台</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            工作台概览
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            查看您的工作台概览和最近的活动。
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/workbench/tasks" title="任务管理">
                      管理和跟踪您的日常任务。
                    </ListItem>
                    <ListItem href="/workbench/projects" title="项目管理">
                      查看和管理您参与的所有项目。
                    </ListItem>
                    <ListItem href="/workbench/calendar" title="日程安排">
                      安排您的会议和重要事项。
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    项目集
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/knowledge" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    知识库
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/system" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    系统管理
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-4">
          <Input type="search" placeholder="搜索..." className="w-64" />
          <Button variant="ghost" size="icon"><Settings className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><Bell className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><Mail className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><User className="h-5 w-5" /></Button>
        </div>
      </header>
      <Outlet/>
      {/* 左右布局 */}
      {/* <div className="h-screen flex overflow-hidden">
          <AnimationRoute>
            <Outlet />
          </AnimationRoute>
        </div> */}
    </>
  );
};