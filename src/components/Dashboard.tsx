import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Home, BriefcaseIcon, ListIcon, UserIcon, BellIcon } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    icon: Home,
    path: "/dashboard"
  },
  {
    title: "Post Job",
    icon: BriefcaseIcon,
    path: "/dashboard/post-job"
  },
  {
    title: "Job Listings",
    icon: ListIcon,
    path: "/dashboard/jobs"
  },
  {
    title: "Profile",
    icon: UserIcon,
    path: "/dashboard/profile"
  },
  {
    title: "Notifications",
    icon: BellIcon,
    path: "/dashboard/notifications"
  }
];

export const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.path}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
};