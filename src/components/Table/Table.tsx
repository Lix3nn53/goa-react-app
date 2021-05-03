import React, { FC, ReactNode } from 'react';

import './Table.css';

export type Props = JSX.IntrinsicElements['div'] & {
  cells: Array<Array<ReactNode>>;
};

const Table: FC<Props> = ({ className, children, style, cells }) => {
  const baseStyle = 'table';
  const classNames = className ? `${baseStyle}  ${className}` : `${baseStyle}`;

  const renderCells = () => {
    const list: Array<ReactNode> = [];

    cells.forEach((lines) => {
      const innerList: Array<ReactNode> = [];
      lines.forEach((str) => {
        innerList.push(<td>{str}</td>);
      });
      list.push(<tr>{innerList}</tr>);
    });

    return list;
  };

  return (
    <table className={classNames} style={style}>
      {renderCells()}
      {children}
    </table>
  );
};

export default Table;
