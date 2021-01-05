// example https://github.com/urbandataanalytics/bento-components/blob/develop/src/components/Table/Table.stories.js


import * as React from 'react';
import reactdom from 'react-dom';
import { Table, IconGlobal } from '@uda/bento-components';
import { boolean, select } from '@storybook/addon-knobs'

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
    
    <div style = {decoratorStyles}>
      <Table columnsDef={columnDefs} 
        rows={rowData}
        domLayout="autoHeight" />
    </div>
  );

reactdom.render(<Sample/>,document.body)