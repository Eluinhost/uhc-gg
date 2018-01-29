import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'jest-fetch-mock';

// override global fetch to allow mocking in tests
global.fetch = fetchMock;

configure({ adapter: new Adapter() });
