import React from 'react'
import {
  DataTable,
  TableSelectAll,
  TableBatchActions,
  TableBatchAction
} from 'carbon-components-react'
import { Email16 } from '@carbon/icons-react'
import { HEADERS } from '../constants'

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableSelectRow,
  TableToolbar
} = DataTable

const headers = HEADERS.map(header => ({ key: header[0], header: header[1] }))

function EmailTable({ jobs, canBatchActions }) {
  if (jobs.length === 0) {
    return null
  }

  return (
    <DataTable
      headers={headers}
      rows={jobs.map(row => ({ ...row, id: `${row.id}` }))}
      render={({
        rows,
        headers,
        getHeaderProps,
        getSelectionProps,
        getBatchActionProps,
        selectedRows
      }) => (
        <TableContainer
          style={{
            marginTop: 32
          }}
        >
          {canBatchActions && (
            <TableToolbar>
              <TableBatchActions {...getBatchActionProps()}>
                <TableBatchAction
                  renderIcon={Email16}
                  onClick={() => console.log(selectedRows)}
                >
                  발송
                </TableBatchAction>
                <TableBatchAction onClick={() => console.log(selectedRows)}>
                  배너타입 발송
                </TableBatchAction>
              </TableBatchActions>
            </TableToolbar>
          )}
          <Table>
            <TableHead>
              <TableRow>
                {canBatchActions && <TableSelectAll {...getSelectionProps()} />}
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  {canBatchActions && (
                    <TableSelectRow {...getSelectionProps({ row })} />
                  )}
                  <TableCell>{row.cells[0].value}</TableCell>
                  <TableCell>
                    <img src={row.cells[2].value} alt="" width={125} />
                  </TableCell>
                  <TableCell>{row.cells[1].value}</TableCell>
                  <TableCell>{row.cells[3].value}</TableCell>
                  <TableCell>{row.cells[4].value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  )
}

export default EmailTable
