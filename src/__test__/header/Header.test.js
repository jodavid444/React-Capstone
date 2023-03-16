import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/pages/Header';

jest.mock('react-redux');

describe('Test component', () => {
  test('Test Header', () => {
    const tree = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  
});
