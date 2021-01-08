// example https://github.com/urbandataanalytics/bento-components/blob/develop/src/components/Table/Table.stories.js
/**
 * JSON samples
 * 
 * [{"make":"Toyota","model":"Celica","price":35000},{"make":"Ford","model":"Fiesta","price":32000},{"make":"Porsche","model":"911","price":72000},{"make":"Mitsubishi","model":"Pajero","price":22000}]
 * 
 * [{"headerName":"Make","field":"make","sortable":true,"variant":"primary"},{"headerName":"Model","align":"center","field":"model","sortable":true,"highlight":true,"variant":"primary"},{"headerName":"Price","field":"price","sortable":true,"align":"right","variant":"secondary"}]
 * 
 * 
 * sample url(debug):
 * 
 * http://localhost:1234/?columnDefs=[{%22headerName%22:%22Make%22,%22field%22:%22make%22,%22sortable%22:true,%22variant%22:%22primary%22},{%22headerName%22:%22Model%22,%22align%22:%22center%22,%22field%22:%22model%22,%22sortable%22:true,%22highlight%22:true,%22variant%22:%22primary%22},{%22headerName%22:%22Price%22,%22field%22:%22price%22,%22sortable%22:true,%22align%22:%22right%22,%22variant%22:%22secondary%22}]&rowData=[{%22make%22:%22Toyota%22,%22model%22:%22Celica%22,%22price%22:35000},{%22make%22:%22Ford%22,%22model%22:%22Fiesta%22,%22price%22:32000},{%22make%22:%22Porsche%22,%22model%22:%22911%22,%22price%22:72000},{%22make%22:%22Mitsubishi%22,%22model%22:%22Pajero%22,%22price%22:22000}]
 * 
 */
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

function getURLSearchParams() {
  let queryString = window.location.search;
  return new URLSearchParams(queryString);
}

const decoratorStyles = {
  padding: '2rem'
};

const urlParams = getURLSearchParams();
const rowData = JSON.parse(urlParams.get('rowData'));
const columnDefs = JSON.parse(urlParams.get('columnDefs'));

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