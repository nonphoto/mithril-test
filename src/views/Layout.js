import m from 'mithril';

export default {
  view: ({ children }) => {
    return m('main.layout', [
      m('nav.menu', [m(m.route.Link, { href: '/list' }, 'Users')]),
      m('section', children),
    ]);
  },
};
