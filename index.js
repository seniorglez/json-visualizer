import * as React from 'react';
import reactdom from 'react-dom';
import { Button } from '@uda/bento-components';

const Sample = () => (
  <Button>
    Bento rules!
  </Button>
);

reactdom.render(<Sample/>,document.body)