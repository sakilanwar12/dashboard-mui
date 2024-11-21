// import Header from "@/components/partial/Header";
import AuthProvider from "@/providers/auth-provider";
import ContentProvider from "@/providers/content-provider";
import LayoutProvider from "@/providers/layout-provider";
import ThemeProvider from "@/providers/theme-provider";
import { CssBaseline } from "@mui/material";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LayoutProvider>
          <CssBaseline />

          <ContentProvider>
            {/* <Header /> */}
            {children}
          </ContentProvider>
        </LayoutProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
