import React, { FC, ReactNode, useState } from 'react';

import './Gallery.css';

import Modal from './Modal';

export type Picture = {
  src: string;
  name: string;
  description: string;
};

export type Props = JSX.IntrinsicElements['div'] & {
  pictures: Array<Picture>;
};

const Gallery: FC<Props> = ({ className, children, style, pictures }) => {
  const [open, setOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const baseStyle = 'gallery';
  const classNames = className ? `${baseStyle}  ${className}` : `${baseStyle}`;

  function renderPictures() {
    const list: Array<ReactNode> = [];

    pictures.forEach((element, index) => {
      const { src, name } = element;
      list.push(
        <div className="item" key={name}>
          <button
            type="button"
            onClick={() => {
              setOpen(!open);
              setSlideIndex(index);
            }}
          >
            <figure>
              <img src={src} alt={name} />
              <figcaption>{name}</figcaption>
            </figure>
          </button>
        </div>,
      );
    });

    return list;
  }

  return (
    <div className={classNames} style={style}>
      {renderPictures()}
      <Modal
        open={open}
        setOpen={setOpen}
        slides={pictures}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
      {children}
    </div>
  );
};

export default Gallery;
