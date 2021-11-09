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
  size?: 'small' | 'large';
};

const Gallery: FC<Props> = ({ className, children, style, pictures, size }) => {
  const [open, setOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const baseStyle = 'gallery';
  const classNames = className ? `${baseStyle}  ${className}` : `${baseStyle}`;

  const itemStyle = size ? `item ${size} flex-container row` : 'item flex-container row';

  function renderPictures() {
    const list: Array<ReactNode> = [];

    pictures.forEach((element, index) => {
      const { src, name } = element;
      list.push(
        <div className={itemStyle} key={name}>
          <button
            type="button"
            onClick={() => {
              setOpen(!open);
              setSlideIndex(index);
            }}
          >
            <figure className="flex-container row">
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
