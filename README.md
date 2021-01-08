# json-visualizer

Simple js program which can read jsons form url and print them on a cool table.

## Life Cicle

### Run with npm

Deploy it in local server:

```shell
    npm start
```

You can use this url to check that it works:
```url
    http://localhost:1234/?columnDefs=[{%22headerName%22:%22Make%22,%22field%22:%22make%22,%22sortable%22:true,%22variant%22:%22primary%22},{%22headerName%22:%22Model%22,%22align%22:%22center%22,%22field%22:%22model%22,%22sortable%22:true,%22highlight%22:true,%22variant%22:%22primary%22},{%22headerName%22:%22Price%22,%22field%22:%22price%22,%22sortable%22:true,%22align%22:%22right%22,%22variant%22:%22secondary%22}]&rowData=[{%22make%22:%22Toyota%22,%22model%22:%22Celica%22,%22price%22:35000},{%22make%22:%22Ford%22,%22model%22:%22Fiesta%22,%22price%22:32000},{%22make%22:%22Porsche%22,%22model%22:%22911%22,%22price%22:72000},{%22make%22:%22Mitsubishi%22,%22model%22:%22Pajero%22,%22price%22:22000}]
```
