"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import { Button } from "../ui/button";
import useRequestNameCorrection from "@/hooks/nameEditingHooks/useRequestNameCorrection";
import useGetListOfMentors from "@/hooks/adminHooks/useGetListOfMentors";
import { useAccount } from "wagmi";
import { toast } from "sonner";
import useRemoveMentor from "@/hooks/adminHooks/useRemoveMentor";

type tableDataType = {
  name: string;
  address: string;
};

const MentorLists = () => {
  const [selectedAddresses, setSelectedAddresses] = useState<string[]>([]);

  const columns = useMemo<ColumnDef<tableDataType>[]>(
    () => [
      {
        accessorFn: (_, index) => index + 1,
        id: "index",
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
        id: "action",
        cell: ({ row }) => (
          <div className="px-1">
            <input
              type="checkbox"
              className="accent-color1"
              value={row.original.address}
              checked={selectedAddresses.includes(row.original.address)}
              onChange={() => handleCheckboxChange(row.original.address)}
            />
          </div>
        ),
        header: () => <span>Action</span>,
      },
    ],
    [selectedAddresses]
  );

  const handleCheckboxChange = (address: string) => {
    setSelectedAddresses((prevSelected) =>
      prevSelected.includes(address)
        ? prevSelected.filter((addr) => addr !== address)
        : [...prevSelected, address]
    );
  };

  const [data, _setData] = useState<tableDataType[]>([]);

  const [globalFilter, setGlobalFilter] = useState("");

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  /* started handling the request for the change of name */
  const {
    requestNameCorrection,
    isWriting: isWritingtoMentors,
    isConfirming: isConfirmingtoMentors,
  } = useRequestNameCorrection();

  const handleRequestNameChange = () => {
    requestNameCorrection();
  };
  /* Ended handling the request for the change of name */

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
      globalFilter,
    },
    enableRowSelection: true,
    onGlobalFilterChange: setGlobalFilter,
  });

  // getting the list of mentors
  const list = useGetListOfMentors();

  useEffect(() => {
    if (list && list.length > 0) {
      _setData(list);
    }
  }, [list.length, list, _setData]);

  // For evicting students
  const { isConnected } = useAccount()
  const { removeMentors, isConfirming, isConfirmed } = useRemoveMentor(selectedAddresses)

  const handleMentorsRemoval = async () => {

    if (!isConnected) return toast.error("Please connect wallet", { position: "top-right" });
    if (selectedAddresses.length === 0) return toast.error("Please select rows to remove", { position: "top-right" });

    removeMentors()

    isConfirmed && setSelectedAddresses([])

  }

  useCallback(() => {
    if (isConfirmed) setSelectedAddresses([])
  }, [isConfirmed])

  return (
    <section className="w-full py-6 flex flex-col">
      <main className="w-full flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between md:items-center items-start">
          <div className="flex flex-col">
            <h1 className="uppercase text-color2 md:text-2xl font-bold text-xl">
              Mentors List
            </h1>
            <h4 className="text-lg tracking-wider text-color2">
              {" "}
              List of {data.length} mentors in your programme
            </h4>
          </div>
          <Button
            className="border-none outline-none px-3 py-1.5 rounded bg-color1 text-gray-200 capitalize hover:bg-color2 text-sm"
            onClick={handleRequestNameChange}
          >
            request name change
          </Button>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="w-full mb-2 flex md:flex-row flex-col gap-2 md:gap-0 md:items-center items-start justify-between">
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={setGlobalFilter}
              debounceTime={500}
              className="border py-2.5 px-3 rounded md:w-1/2 w-full caret-color1 outline-none border-color1 text-base bg-color1/5 text-color3"
              placeholder="Search all columns..."
            />
            {selectedAddresses.length > 0 && (
              <Button onClick={handleMentorsRemoval} disabled={isConfirming} className="border-none outline-none rounded px-3 bg-color1 hover:bg-color2 text-gray-200 py-1.5">
                {selectedAddresses.length === 1 ? "Remove 1 mentor" : `Remove ${selectedAddresses.length} mentors`}
              </Button>
            )}
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
                    <TableCell className="text-nowrap" key={cell.id}>
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
