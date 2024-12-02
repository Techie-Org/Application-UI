import { configure } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
expect.addSnapshotSerializer(createSerializer({ noKey: true }));
