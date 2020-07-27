import m from 'mithril';
import { css } from 'emotion';

import Images from '../models/Images.js';

let mousePos = [0, 0];

export default () => {
  let activeImages = Object.fromEntries(
    Images.all.map(({ key }) => [key, false]),
  );

  return {
    view: () => {
      const activeImage = Images.all.find((image) => activeImages[image.key]);
      return m(
        'div',
        {
          onmousemove: (e) => {
            mousePos = [e.clientX, e.clientY];
          },
          class: css({ position: 'relative' }),
        },
        activeImage &&
          m('img', {
            class: css({
              position: 'fixed',
              pointerEvents: 'none',
              top: '0',
              left: '0',
              width: '10rem',
              height: '10rem',
            }),
            style: {
              transform: `translate(calc(${mousePos[0]}px - 50%), calc(${mousePos[1]}px - 50%))`,
            },
            src: activeImage.src,
          }),
        m(
          'ul',
          {
            class: css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#eef',
              width: '100vw',
              minHeight: '100vh',
              padding: 0,
              margin: 0,
              flexDirection: 'column',
              listStyle: 'none',
            }),
          },
          Images.all.map((image) =>
            m(
              'li',
              {
                onmouseover: () => void (activeImages[image.key] = true),
                onmouseleave: () => void (activeImages[image.key] = false),
                class: css({
                  fontSize: '4rem',
                  fontWeight: 600,
                  letterSpacing: '-0.05ch',
                  padding: '0.5rem 0',
                }),
              },
              image.title,
            ),
          ),
        ),
      );
    },
  };
};
