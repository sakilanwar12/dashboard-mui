import Header from "@/components/partial/header";
import Sidebar from "@/components/partial/sidebar";
import AuthProvider from "@/providers/auth-provider";
import ContentProvider from "@/providers/content-provider";
import LayoutProvider from "@/providers/layout-provider";
import MountedProvider from "@/providers/mounted-provider";
import ThemeProvider from "@/providers/theme-provider";
import { Box, CssBaseline } from "@mui/material";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <MountedProvider>
          <LayoutProvider>
            <CssBaseline />
            <Sidebar />
            <ContentProvider>
              <Header />
              <Box sx={{ mb: "16px" }} />
              {children}
            </ContentProvider>
          </LayoutProvider>
        </MountedProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
