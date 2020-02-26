import Home from './Home';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<Home />', () => {
  let wrapper;
  let homeComponent;

  beforeEach(() => {
    wrapper = setup(Home);
    homeComponent = findByTestAttr(wrapper, 'component-home');
  });

  it('renders without error', () => {
    expect(homeComponent).toHaveLength(1);
  });
});
