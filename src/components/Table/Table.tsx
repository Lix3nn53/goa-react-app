import React, { FC, ReactNode } from 'react';

import './Table.css';

export type Props = JSX.IntrinsicElements['table'] & {
  cells: Array<Array<ReactNode>>;
};

const Table: FC<Props> = ({ className, children, style, cells }) => {
  const baseStyle = 'table';
  const classNames = className ? `${baseStyle}  ${className}` : `${baseStyle}`;

  const renderCells = () => {
    const list: Array<ReactNode> = [];

    cells.forEach((lines, index) => {
      const innerList: Array<ReactNode> = [];
      lines.forEach((str, indexInner) => {
        /* eslint-disable-next-line react/no-array-index-key */
        innerList.push(<td key={`td${indexInner}`}>{str}</td>);
      });
      /* eslint-disable-next-line react/no-array-index-key */
      list.push(<tr key={`tr${index}`}>{innerList}</tr>);
    });

    return list;
  };

  return (
    <table className={classNames} style={style}>
      <tbody>
        {renderCells()}
        {children}
      </tbody>
    </table>
  );
};

export default Table;
