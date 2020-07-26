import m from 'mithril';

const range = (n) => [...Array(n).keys()];

const Counter = () => {
  let count = 0;
  return {
    view: ({ attrs }) =>
      m('button', { onclick: () => void (count += 1) }, [attrs.n, '-', count]),
  };
};

export default () => {
  let length = 1;
  return {
    view: () =>
      m('div', [
        m('button', { onclick: () => void (length -= 1) }, 'less'),
        m('button', { onclick: () => void (length += 1) }, 'more'),
        ...range(length).map((n) => m(Counter, { n })),
      ]),
  };
};
