import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../../../../components/Card';
import Button from '../../../../components/Button';
import ButtonBelt from '../../../../components/ButtonBelt';
import ButtonBeltButton, {
  ButtonBeltButtonType,
} from '../../../../components/ButtonBelt/ButtonBeltButton';

type ButtonProps = {
  amount: string;
  after: string;
  before?: string;
};

const CrateCardButton: FunctionComponent<ButtonProps> = ({ amount, before, after }) => {
  const { t } = useTranslation();

  return (
    <ButtonBeltButton type="button">
      <p className="amount">{amount}x</p>
      {before ? <p className="before-discount">{before}</p> : <p className="before-discount">-</p>}
      <p className="after-discount">{after}</p>
      <p className="buy">
        Buy Now <i className="fas fa-shopping-cart" />
      </p>
    </ButtonBeltButton>
  );
};

export type Props = {
  name: string;
  image: React.ReactNode;
  buttons: ButtonProps[];
  description: string;
};

const CrateCard: FunctionComponent<Props> = ({ name, image, buttons, description }) => {
  const { t } = useTranslation();

  function renderButtons(): ButtonBeltButtonType[] {
    const arr: ButtonBeltButtonType[] = [];

    buttons.forEach((button) => {
      arr.push(
        <CrateCardButton amount={button.amount} before={button.before} after={button.after} />,
      );
    });

    return arr;
  }

  return (
    <Card className="flex-one" header={<div className="flex-container h-100">{image}</div>}>
      <div className="flex-container column crate-card-body">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="flex-container row crate-card-buttons">
          <ButtonBelt buttons={renderButtons()} secondary />
        </div>
      </div>
    </Card>
  );
};

export default CrateCard;
