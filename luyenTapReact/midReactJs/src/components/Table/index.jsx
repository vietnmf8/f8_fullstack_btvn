import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

const ProductTable = ({title, products, columns, loading, onAddProduct, onEditProduct, onDeleteProduct}) => {
    return (
        <Paper sx={{padding: '30px'}}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    {title}
                </Typography>

                {onAddProduct && (
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={onAddProduct}
                    >
                        Thêm mới
                    </Button>
                )}
            </Box>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((column, index) => (
                                    <TableCell
                                        key={index}

                                    >
                                        {column.label}
                                    </TableCell>
                                ))
                            }

                            {
                                (onEditProduct || onDeleteProduct) && (
                                    <TableCell>Thao tác</TableCell>
                                )
                            }
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            loading ? (
                                <TableRow>
                                    <TableCell>
                                        Đang tải...
                                    </TableCell>
                                </TableRow>
                            ) : products.length === 0 ? (
                                <TableRow>
                                    <TableCell>Không có dữ liệu</TableCell>
                                </TableRow>
                            ) : (
                                products.map((row, index) => (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}
                                    >
                                        {
                                            columns.map((column, index) => {
                                                const value = row[column.name]
                                                return (
                                                    <TableCell key={index}>
                                                        {column.format
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                )
                                            })
                                        }

                                        {
                                            (onEditProduct || onDeleteProduct) && (
                                                <TableCell align="right">
                                                    {
                                                        onEditProduct && (
                                                            <Button
                                                                variant="outlined"
                                                                color="primary"
                                                                size="small"
                                                                onClick={() => onEditProduct(row)}
                                                                sx={{ mr: 1 }}
                                                            >
                                                                Sửa
                                                            </Button>
                                                        )
                                                    }
                                                    {
                                                        onDeleteProduct && (
                                                            <Button
                                                                variant="outlined"
                                                                size="small"
                                                                onClick={() => onDeleteProduct(row.id)}
                                                                color={'error'}
                                                            >

                                                                Xoá
                                                            </Button>
                                                        )
                                                    }
                                                </TableCell>
                                            )
                                        }
                                    </TableRow>
                                ))
                            )

                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default ProductTable;