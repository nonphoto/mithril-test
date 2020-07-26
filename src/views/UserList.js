import m from 'mithril';
import User from '../models/User.js';

export default {
  oninit: User.loadList,
  view: () =>
    m(
      '.user-list',
      User.list.map(({ firstName, lastName, id }) =>
        m(
          m.route.Link,
          {
            class: 'user-list-item',
            href: '/edit/' + id,
          },
          `${firstName} ${lastName}`,
        ),
      ),
    ),
};
