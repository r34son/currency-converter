import { QueryClientProvider } from 'react-query';
import queryClient from './queryClient';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="App">
      Currency Converter
    </div>
  </QueryClientProvider>
);

export default App;
