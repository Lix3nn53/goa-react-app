import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../../../../components/Card';
import Button from '../../../../components/Button';

export type Props = {
  rank: string;
  price: string;
  chat_tag: React.ReactNode;
  bonus_slot: string;
};

const Ranks: FunctionComponent<Props> = ({ rank, price, chat_tag, bonus_slot }) => {
  const { t } = useTranslation();

  return (
    <Card
      className="flex-one"
      header={<p>{rank}</p>}
      footer={
        <div className="ranks-footer">
          <p>$ {price}</p>
          <Button type="button" primary>
            BUY NOW <i className="fas fa-shopping-cart" />
          </Button>
        </div>
      }
    >
      <ul>
        <li>Chat Tag: {chat_tag}</li>
        <li>Bonus Character Slot: +{bonus_slot}</li>
        <li>
          Daily Crates
          <i className="fas fa-times-circle" />
        </li>
        <li>
          Beta Access
          <i className="fas fa-check-circle" />
        </li>
      </ul>
    </Card>
  );
};

export default Ranks;
