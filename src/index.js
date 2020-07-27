import m from 'mithril';
import { injectGlobal } from 'emotion';
import { between } from 'polished';
import UserList from './views/UserList.js';
import UserForm from './views/UserForm.js';
import Layout from './views/Layout.js';
import Counters from './views/Counters.js';
import HoverIndex from './views/HoverIndex.js';
import PerfTest from './views/PerfTest.js';

m.route(document.body, '/list', {
  '/list': {
    render: () => m(Layout, m(UserList)),
  },
  '/edit/:id': {
    render: ({ attrs }) => m(Layout, m(UserForm, attrs)),
  },
  '/counters': Counters,
  '/hover-index': HoverIndex,
  '/perf-test': PerfTest,
});

injectGlobal({
  html: {
    fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,sans-serif',
    fontSize: between('12px', '16px', '320px', '1280px'),
  },
});
