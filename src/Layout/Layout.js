import { Box } from './Layout.styled';

export default function Layout({ children }) {
  return (
    <Box>
      <div>{children}</div>
    </Box>
  );
}
