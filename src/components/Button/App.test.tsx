// Libraries
import * as renderer from 'react-test-renderer';

// Components
import { Button } from '@components';

describe('App', () => {
  test('It should render correctly', () => {
    const component = renderer.create(<Button>Click</Button>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
