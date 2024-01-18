import {
    ColumnDef,
    Row,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
    getPaginationRowModel
} from '@tanstack/react-table'


interface GenericListComponentProps<T> {
    data: T[];
    columns: ColumnDef<T>[];
    onRowClick?: (row: Row<T>) => void;
}

const Table = <T extends object>({ data, columns, onRowClick }: GenericListComponentProps<T>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    return (
        <div className="p-2 mt-5 mb-5">
            <table className='table w-75 m-auto ' >
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th style={{ cursor: 'pointer' }} key={header.id} className='col text-center ' onClick={header.column.getToggleSortingHandler()}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (

                        <tr key={row.id} onClick={() => onRowClick && onRowClick(row)}>
                            {row.getVisibleCells().map(cell => (

                                <td key={cell.id} className='text-center'>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
