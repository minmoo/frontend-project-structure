import React from 'react';
import { render } from '@testing-library/react';
import SignTemplate from '../SignTemplate';

describe('<SignTemplate/>', () => {
  //snapshot test
  test('matches snapshot', () => {
    const utils = render(<SignTemplate children title="타이틀" />);
    expect(utils.container).toMatchSnapshot();
  });

  //props
  test('shows the props correctly', () => {
    const utils = render(<SignTemplate children title="타이틀" />);
    utils.getByText('타이틀');
  });
});
