'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, FileText, PlusCircle, ArrowLeft, Menu, X, Shield, LogOut } from 'lucide-react';

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isLoginPage = pathname === '/admin/login';

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/admin/logout', {
        method: 'POST',
      });
      const json = await res.json();
      if (json.success) {
        router.push('/admin/login');
      } else {
        alert(json.error || 'Failed to logout');
      }
    } catch (err) {
      console.error(err);
      alert('Error during logout');
    }
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Manage Blogs', href: '/admin/blogs', icon: FileText },
    { name: 'New Blog Post', href: '/admin/blogs/new', icon: PlusCircle },
  ];

  return (
    <div className="h-screen bg-gray-50 flex font-satoshi text-gray-800 overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-white shadow-xl flex-shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-800 gap-3">
          <Shield className="w-6 h-6 text-red-500" />
          <span className="font-bold text-lg tracking-wider text-white">RELIANT ADMIN</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#C10510] text-white shadow-md'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <Link
            href="/"
            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm">Main Website</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Drawer Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="relative flex flex-col w-64 bg-slate-900 text-white shadow-xl h-full">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="h-16 flex items-center px-6 border-b border-slate-800 gap-3">
              <Shield className="w-6 h-6 text-red-500" />
              <span className="font-bold text-lg tracking-wider">RELIANT ADMIN</span>
            </div>
            <nav className="flex-1 py-6 px-4 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-[#C10510] text-white shadow-md'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="p-4 border-t border-slate-800">
              <Link
                href="/"
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium text-sm">Main Website</span>
              </Link>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-8 flex-shrink-0 sticky top-0 z-40">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 md:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-gray-900 hidden md:block">
              {pathname === '/admin' && 'Dashboard Overview'}
              {pathname === '/admin/blogs' && 'Manage Blogs'}
              {pathname === '/admin/blogs/new' && 'Write New Blog'}
              {pathname.startsWith('/admin/blogs/edit') && 'Edit Blog Post'}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm">
                AD
              </div>
              <span className="font-medium text-sm text-gray-700 hidden sm:inline">Administrator</span>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>
        <main className="flex-1 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
