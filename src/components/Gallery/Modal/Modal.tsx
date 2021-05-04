import React, { FC, ReactNode, useState } from 'react';

import './Modal.css';

export type Picture = {
  src: string;
  name: string;
};

export type Props = JSX.IntrinsicElements['div'] & {
  slides: Array<Picture>;
  open: boolean;
  setOpen(value: boolean): void;
};

const Modal: FC<Props> = ({ className, children, style, slides, open, setOpen }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [captionText, setCaptionText] = useState(slides[0].name);

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
    setCaptionText(slides[slideIndex].name);
  }

  function previous() {
    const max = slides.length - 1;
    if (slideIndex === 0) {
      setSlideIndex(max);
    } else {
      setSlideIndex(slideIndex - 1);
    }
    setCaptionText(slides[slideIndex].name);
  }

  function renderTop() {
    const list: Array<ReactNode> = [];

    const len = slides.length;
    slides.forEach((element, index) => {
      const { src, name } = element;
      list.push(
        <div className={slideIndex === index ? '' : 'hidden'}>
          <div className="numbertext">
            {index + 1} / {len}
          </div>
          <img src={src} alt={name} />
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
        <div className="column">
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
        {renderTop()}

        <button className="prev" onClick={() => previous()} type="button">
          &#10094;
        </button>
        <button className="next" onClick={() => next()} type="button">
          &#10095;
        </button>

        <div className="caption-container">
          <p id="caption">{captionText}</p>
        </div>

        <div className="flex-container columns">{renderBottom()}</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
