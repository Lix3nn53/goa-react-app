import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './Crates.css';
import Gallery from '../../../../components/Gallery';
import CrateCard from './CrateCard';
import cosmeticImg from '../../../../img/store/crate_cosmetic.png';

const Crates: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="crates flex-container column">
      <CrateCard
        name="Cosmetic Crate"
        image={<img src={cosmeticImg} alt="cosmetic" />}
        buttons={[
          { amount: '20', before: '$60.00', after: '$40.00' },
          { amount: '10', before: '$30.00', after: '$20.00' },
          { amount: '5', before: '$15.00', after: '$10.00' },
          { amount: '1', after: '$3.00' },
        ]}
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat condimentum lacus in maximus. Nulla non aliquam felis. Sed ut commodo neque. Praesent venenatis dictum mollis. Ut ligula dui, aliquet et pellentesque non, sodales at libero. Nunc consequat risus eu odio bibendum tempor. Ut sapien augue, tempor a neque nec, hendrerit vestibulum nulla. Maecenas at fermentum orci. Pellentesque luctus nulla est, at euismod turpis dignissim at. Suspendisse vehicula orci quis rhoncus convallis. Fusce id lacus eget tortor feugiat fermentum ac a dui. Vestibulum ac sagittis justo."
      />
      <CrateCard
        name="Legendary Crate"
        image={<img src={cosmeticImg} alt="cosmetic" />}
        buttons={[
          { amount: '20', before: '$80.00', after: '$60.00' },
          { amount: '10', before: '$40.00', after: '$30.00' },
          { amount: '5', before: '$20.00', after: '$15.00' },
          { amount: '1', after: '$4.00' },
        ]}
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat condimentum lacus in maximus. Nulla non aliquam felis. Sed ut commodo neque. Praesent venenatis dictum mollis. Ut ligula dui, aliquet et pellentesque non, sodales at libero. Nunc consequat risus eu odio bibendum tempor. Ut sapien augue, tempor a neque nec, hendrerit vestibulum nulla. Maecenas at fermentum orci. Pellentesque luctus nulla est, at euismod turpis dignissim at. Suspendisse vehicula orci quis rhoncus convallis. Fusce id lacus eget tortor feugiat fermentum ac a dui. Vestibulum ac sagittis justo."
      />
      <CrateCard
        name="Rare Crate"
        image={<img src={cosmeticImg} alt="cosmetic" />}
        buttons={[
          { amount: '20', before: '$60.00', after: '$40.00' },
          { amount: '10', before: '$30.00', after: '$20.00' },
          { amount: '5', before: '$15.00', after: '$10.00' },
          { amount: '1', after: '$3.00' },
        ]}
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat condimentum lacus in maximus. Nulla non aliquam felis. Sed ut commodo neque. Praesent venenatis dictum mollis. Ut ligula dui, aliquet et pellentesque non, sodales at libero. Nunc consequat risus eu odio bibendum tempor. Ut sapien augue, tempor a neque nec, hendrerit vestibulum nulla. Maecenas at fermentum orci. Pellentesque luctus nulla est, at euismod turpis dignissim at. Suspendisse vehicula orci quis rhoncus convallis. Fusce id lacus eget tortor feugiat fermentum ac a dui. Vestibulum ac sagittis justo."
      />
    </div>
  );
};

export default Crates;
