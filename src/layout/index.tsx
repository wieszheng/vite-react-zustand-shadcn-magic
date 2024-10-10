import { Bell, ChevronDown, Mail, Moon, Search, Settings, User } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      {/* 上下布局 */}
      <header className="flex items-center justify-between px-4 py-2 bg-[#0a0e17] text-white">
        <div className="flex items-center space-x-4">
          <a className="flex items-center space-x-2" href="#">
            <span className="text-2xl font-bold text-blue-500">&lt;/&gt;</span>
            <span className="text-sm font-semibold">Smart City UL</span>
          </a>
          <nav className="hidden md:flex space-x-4">
            <a className="text-sm hover:text-blue-400 " href="#">
              仪表盘
            </a>
            <a className="text-sm hover:text-blue-400 flex items-center" href="#">
              工作台
              <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a className="text-sm hover:text-blue-400 flex items-center" href="#">
              聚集集
              <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a className="text-sm hover:text-blue-400" href="#">
              知识库
            </a>
            <a className="text-sm hover:text-blue-400 font-medium" href="#">
              系统管理
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-8 bg-[#1c2128] border-0 focus-visible:ring-1 focus-visible:ring-gray-400 text-sm"
              placeholder="搜索..."
              type="search"
            />
          </div>
          <button className="p-2 rounded-full hover:bg-gray-800">
            <Moon className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800">
            <Settings className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800">
            <Mail className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800">
            <User className="h-5 w-5" />
          </button>
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