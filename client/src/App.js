import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Content } from "./components/Content";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  );
}

export default App;
