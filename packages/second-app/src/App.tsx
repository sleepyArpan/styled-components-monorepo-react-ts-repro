import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Wrapper } from './App.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>Hello world from second app</Wrapper>
    </ThemeProvider>
  );
}

export default App;
