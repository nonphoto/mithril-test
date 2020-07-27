import m from 'mithril';

const range = (n) => [...Array(n).keys()];

export default () => {
  let t = 0;
  let running = false;

  const render = () => {
    t = performance.now();
    m.redraw();
    if (running) {
      requestAnimationFrame(render);
    }
  };

  const start = () => {
    console.log('start');
    running = true;
    render();
  };

  const stop = () => {
    running = false;
  };

  return {
    oncreate: start,
    onremove: stop,
    view: () =>
      m(
        'div',
        { style: { overflow: 'hidden', display: 'flex', flexWrap: 'wrap' } },
        range(100).map((i) =>
          m('div', {
            style: {
              background: 'gray',
              width: '4rem',
              height: '4rem',
              borderRadius: '100vw',
              border: 'solid white 2px',
              transform: `translate(${Math.cos(t * 0.01 + i) * 20}px, ${
                Math.sin(t * 0.01 + i) * 20
              }px)`,
            },
          }),
        ),
      ),
  };
};
