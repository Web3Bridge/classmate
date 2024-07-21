"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import tableData from "../../utils/StudentList.json";
import { Button } from "../ui/button";
import useRequestNameCorrection from "@/hooks/nameEditingHooks/useRequestNameCorrection";

type tableDataType = {
  id: number;
  name: string;
  address: string;
};

const MentorLists = () => {
  const defaultData: tableDataType[] = useMemo(() => tableData, []);

  const columns = useMemo<ColumnDef<tableDataType>[]>(
    () => [
      {
        accessorKey: "id",
        header: () => "S/N",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "name",
        header: () => "Name",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "address",
        header: () => "Address",
        cell: (info) => info.getValue(),
      },
      {
        accessorFn: (row) => row.id,
        id: "id",
        cell: ({ row }) => (
          <div className="px-1">
            <input
              type="checkbox"
              className="accent-color1"
              value={row.id}
              checked={row.getIsSelected()}
              onChange={row.getToggleSelectedHandler()}
              disabled={!row.getCanSelect()}
            />
          </div>
        ),
        header: () => <span>Action</span>,
      },
    ],
    []
  );

  const [data, _setData] = useState(() => [...defaultData]);

  const [globalFilter, setGlobalFilter] = useState("");

  const [rowSelection, setRowSelection] = React.useState({});

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const {
    requestNameCorrection,
    isWriting: isWritingtoStudents,
    isConfirming: isConfirmingtoStudents,
  } = useRequestNameCorrection();

  const handleRequestNameChange = () => {
    requestNameCorrection();
  };

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
      rowSelection,
      globalFilter,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <section className="w-full py-6 flex flex-col">
      <main className="w-full flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="uppercase text-color2 md:text-2xl font-bold text-xl">
            Mentors List
          </h1>
          <h4 className="text-lg tracking-wider text-color2">
            {" "}
            List of mentors in your programme
          </h4>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="w-full mb-2 flex flex-col md:flex md:flex-row md:justify-between ">
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={setGlobalFilter}
              debounceTime={500}
              className="border py-2.5 px-3 rounded md:w-1/2 w-full caret-color1 outline-none border-color1 text-base bg-color1/5 text-color3"
              placeholder="Search all columns..."
            />
            <div>
              <button
                className="border px-3 py-1 rounded bg-color2 text-gray-200 capitalize mt-2 md:mt-0 hover:bg-color1 transition-all ease-in-out"
                onClick={handleRequestNameChange}
              >
                request name change
              </button>
            </div>
          </div>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  className="bg-color2 hover:bg-color2 text-gray-300"
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        className="w-[100px] font-semibold text-gray-300"
                        key={header.id}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            className="border rounded px-3 bg-color2 text-gray-200 py-1"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </Button>
          <Button
            className="border rounded px-3 bg-color2 text-gray-200 py-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </Button>
          <Button
            className="border rounded px-3 bg-color2 text-gray-200 py-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </Button>
          <Button
            className="border rounded px-3 bg-color2 text-gray-200 py-1"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </Button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong className="text-color2">
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount().toLocaleString()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-10 caret-color1 outline-none border-color1 text-sm bg-color1/5 text-color3"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="py-1 px-2 outline-none rounded border border-color1 text-sm bg-color1/5 text-color3"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </main>
    </section>
  );
};

export default MentorLists;

const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounceTime = 500,
  className,
  ...inputProps
}: {
  value: string;
  onChange: (value: string) => void;
  debounceTime?: number;
  className?: string;
  placeholder?: string;
  inputProps?: any;
}) => {
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange(debouncedValue);
    }, debounceTime);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [debouncedValue, onChange, debounceTime]);

  const handleInputChange = (event: any) => {
    setDebouncedValue(event.target.value);
  };

  return (
    <input
      {...inputProps}
      value={debouncedValue}
      onChange={handleInputChange}
      className={className}
      placeholder={inputProps.placeholder}
    />
  );
};
