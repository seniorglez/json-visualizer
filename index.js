import * as React from 'react';
import reactdom from 'react-dom';
import { Table } from '@uda/bento-components';

rowData=[]

const cols = [{ headerName: "precio", field: "precio", align: "center" } , {aquiotracol}]

const Sample = () => (
    
    <div>
      <Table columns={cols} domLayout="autoHeight" />
    </div>
  );

reactdom.render(<Sample/>,document.body)