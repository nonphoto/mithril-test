import m from 'mithril';
import { css } from 'emotion';

const flex = (styles, ...other) =>
  m('div', { class: css({ display: 'flex', ...styles }) }, ...other);

export default {
  view: () =>
    flex(
      {
        alignItems: 'center',
        justifyContent: 'center',
        background: '#eef',
        width: '100vw',
        height: '100vh',
      },
      'hello',
    ),
};
