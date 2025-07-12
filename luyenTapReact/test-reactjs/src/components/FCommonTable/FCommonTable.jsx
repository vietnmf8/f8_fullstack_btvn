import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Box,
    Typography,
} from "@mui/material";

const FCommonTable = ({
    title,
    data,
    columns,
    onAdd,
    onEdit,
    onDelete,
    loading = false,
}) => {
    return (
        <Paper sx={{ width: "100%", overflow: "hidden", p: 2 }}>
            <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                {onAdd && (
                    <Button variant="contained" color="primary" onClick={onAdd}>
                        Thêm mới
                    </Button>
                )}
            </Box>

            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align || "left"}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            {(onEdit || onDelete) && (
                                <TableCell align="right">Thao tác</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length + 1}
                                    align="center"
                                >
                                    Đang tải...
                                </TableCell>
                            </TableRow>
                        ) : data.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length + 1}
                                    align="center"
                                >
                                    Không có dữ liệu
                                </TableCell>
                            </TableRow>
                        ) : (
                            data.map((row) => (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.id}
                                >
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align || "left"}
                                            >
                                                {column.format
                                                    ? column.format(value, row)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                    {(onEdit || onDelete) && (
                                        <TableCell align="right">
                                            {onEdit && (
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    size="small"
                                                    onClick={() => onEdit(row)}
                                                    sx={{ mr: 1 }}
                                                >
                                                    Sửa
                                                </Button>
                                            )}
                                            {onDelete && (
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    size="small"
                                                    onClick={() =>
                                                        onDelete(row.id)
                                                    }
                                                >
                                                    Xóa
                                                </Button>
                                            )}
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default FCommonTable;
