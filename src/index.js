import m from 'mithril';
import UserList from './views/UserList.js';
import UserForm from './views/UserForm.js';
import Layout from './views/Layout.js';

m.route(document.body, '/list', {
  '/list': {
    render: () => m(Layout, m(UserList)),
  },
  '/edit/:id': {
    render: ({ attrs }) => m(Layout, m(UserForm, attrs)),
  },
});
