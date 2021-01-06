// example https://github.com/urbandataanalytics/bento-components/blob/develop/src/components/Table/Table.stories.js

import * as React from 'react';
import reactdom from 'react-dom';
import { Table, IconGlobal } from '@uda/bento-components';
/*
Work Arround for 'theme.color is undefined' bug.

I have to do the import in this way because the compiled files of the library do not export AppTheme

some context:

AppTheme is the Bento's custom ThemeProvider (https://styled-components.com/docs/api#themeprovider) and it have to inject 
the bento's default theme into all styled components. So if this app can't import AppTheme, "theme" will not be available 
in this context therefore theme.color will not be available either
*/
import AppTheme from './node_modules/@uda/bento-components/lib/themes/index'
const decoratorStyles = {
  padding: '2rem'
};

const columnDefs = [
  {
    headerName: (
      <>
        <IconGlobal />
        Make
      </>
    ),
    field: 'make',
    sortable: true,
    variant: 'primary'
  },
  {
    headerName: 'Model',
    align: 'center',
    field: 'model',
    sortable: true,
    highlight: true,
    variant: 'primary'
  },
  {
    headerName: 'Price',
    field: 'price',
    sortable: true,
    align: 'right',
    variant: 'secondary'
  }
];
const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Fiesta', price: 32000 },
  { make: 'Porsche', model: '911', price: 72000 },
  { make: 'Mitsubishi', model: 'Pajero', price: 22000 }
];

const Sample = () => (
  <AppTheme>
    <div style={decoratorStyles}>
      <Table columns={columnDefs} 
        rows={rowData}
        domLayout="autoHeight" />
    </div>
  </AppTheme>
);

reactdom.render(<Sample/>,document.body)