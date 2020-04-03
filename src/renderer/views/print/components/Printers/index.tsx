import * as React from 'react';
import { StyledPrinters, Printer } from './style';
import { remote } from 'electron';
import { Icon } from '../../app/style';
import { Heading } from '../Typography/style';
import { icons } from '../../../app/constants';
import store from '../../store';
import { observer } from 'mobx-react-lite';

export const Printers = observer(() => {
  const [selected, setSelection] = React.useState(0);

  return (
    <StyledPrinters>
      {store.printers.map((item, index) => (
        <Printer key={index} selected={selected == index} onClick={() => setSelection(index)}>
          <Icon icon={icons.print} opacity={0.7} hoverable={true} selected={selected == index} />
          <Heading>{item.name}</Heading>
        </Printer>
      ))}
    </StyledPrinters>
  );
});
