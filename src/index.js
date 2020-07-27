import m from 'mithril';
import UserList from './views/UserList.js';
import UserForm from './views/UserForm.js';
import Layout from './views/Layout.js';
import Counters from './views/Counters.js';
import HoverIndex from './views/HoverIndex.js';

m.route(document.body, '/list', {
  '/list': {
    render: () => m(Layout, m(UserList)),
  },
  '/edit/:id': {
    render: ({ attrs }) => m(Layout, m(UserForm, attrs)),
  },
  '/counters': Counters,
  '/hover-index': HoverIndex,
});
