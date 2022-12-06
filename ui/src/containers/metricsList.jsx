import React from "react";
import {
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material'
import { styled } from '@mui/material/styles'

const Container = styled(TableContainer)({
    maxWidth: 650,
    height: 520
})

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const header = ['Metric', 'Value']

const MetricsList = ({ data = [] }) => {
    return (
        <Container component={Paper}>
            <Table stickyHeader>
                <TableHead>
                    <StyledTableRow key={`${header[0]}`}>
                        {header.map(item => <TableCell key={item}>{item}</TableCell>)}
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => {
                        return (
                            <StyledTableRow key={`${item.title}-${index}`}>
                                <TableCell>
                                    {item.title}
                                </TableCell>
                                <TableCell>
                                    {item.value}
                                </TableCell>
                            </StyledTableRow>
                        )
                    })
                    }
                </TableBody>
            </Table>
        </Container>
    )
}

export default MetricsList