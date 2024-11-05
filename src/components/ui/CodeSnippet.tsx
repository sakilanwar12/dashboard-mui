import { Card, CardContent, CardHeader } from "@mui/material";

interface CodeSnippetProps {
  children: React.ReactNode;
  title: string;
  code?: string;
}
const CodeSnippet = ({ title, code, children }: CodeSnippetProps) => {
  return (
    <Card>
      <CardHeader title={title} sx={{ pb: 0 }} />
      <CardContent>
        {children}
        {code && <pre>{code}</pre>}
      </CardContent>
    </Card>
  );
};

export default CodeSnippet;
