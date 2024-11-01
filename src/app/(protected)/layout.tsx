import AuthProvider from "@/providers/auth-provider";
import ContentProvider from "@/providers/content-provider";
import LayoutProvider from "@/providers/layout-provider";
import ThemeProvider from "@/providers/theme-provider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LayoutProvider>
          <ContentProvider>{children}</ContentProvider>
        </LayoutProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default MainLayout;
