import React, { FC, ReactNode } from 'react';

import './Modal.css';

export type Picture = {
  src: string;
  name: string;
  description: string;
};

export type Props = JSX.IntrinsicElements['div'] & {
  slides: Array<Picture>;
  open: boolean;
  setOpen(value: boolean): void;
  slideIndex: number;
  setSlideIndex(value: number): void;
};

const Modal: FC<Props> = ({
  className,
  children,
  style,
  slides,
  open,
  setOpen,
  slideIndex,
  setSlideIndex,
}) => {
  let baseStyle = 'modal';
  if (open) {
    baseStyle += ' modal-open';
  } else {
    baseStyle += ' modal-close';
  }
  const classNames = className ? `${baseStyle}  ${className}` : `${baseStyle}`;

  function closeModal() {
    setOpen(false);
  }

  function next() {
    const max = slides.length - 1;
    if (slideIndex === max) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }

  function previous() {
    const max = slides.length - 1;
    if (slideIndex === 0) {
      setSlideIndex(max);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  }

  function renderTop() {
    const list: Array<ReactNode> = [];

    const len = slides.length;
    slides.forEach((element, index) => {
      const { src, name } = element;
      list.push(
        <div className={slideIndex === index ? 'flex-container column' : 'hidden'} key={name}>
          <div className="numbertext">
            {index + 1} / {len}
          </div>
          <div className="flex-container flex-one">
            <img src={src} alt={name} />
          </div>
        </div>,
      );
    });

    return list;
  }

  function renderBottom() {
    const list: Array<ReactNode> = [];

    slides.forEach((element, index) => {
      const { src, name } = element;
      list.push(
        <div className="column" key={name}>
          <input type="image" src={src} onClick={() => setSlideIndex(index)} alt={name} />
        </div>,
      );
    });

    return list;
  }

  return (
    <div className={classNames} style={style}>
      <button className="close cursor" onClick={() => closeModal()} type="button">
        <i className="fas fa-times" />
      </button>
      <div className="modal-content">
        <div className="modal-top flex-container">{renderTop()}</div>

        <div className="prev">
          <button onClick={() => previous()} type="button">
            &#10094;
          </button>
        </div>
        <div className="next">
          <button onClick={() => next()} type="button">
            &#10095;
          </button>
        </div>

        <div className="caption-container">
          <p id="caption">{slides[slideIndex].description}</p>
        </div>

        <div className="flex-container columns">{renderBottom()}</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
