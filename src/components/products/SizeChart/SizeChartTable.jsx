"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Radio,
  RadioGroup,
} from "@heroui/react";
import { useState } from "react";

const rows = [
  {
    key: "1",
    size: "S",
    chest: "38.00",
    length_in: "27.00",
    shoulder_in: "17.5",
  },
  {
    key: "2",
    size: "M",
    chest: "38.00",
    length_in: "27.00",
    shoulder_in: "17.5",
  },
  {
    key: "3",
    size: "L",
    chest: "38.00",
    length_in: "27.00",
    shoulder_in: "17.5",
  },
  {
    key: "4",
    size: "XL",
    chest: "38.00",
    length_in: "27.00",
    shoulder_in: "17.5",
  },
  {
    key: "5",
    size: "XXL",
    chest: "38.00",
    length_in: "27.00",
    shoulder_in: "17.5",
  },
];

const columns = [
  { key: "select", label: "" },
  { key: "size", label: "Size" },
  { key: "chest", label: "Chest" },
  { key: "length_in", label: "Forth Length(in)" },
  { key: "shoulder_in", label: "Across Shoulder(in)" },
];

const SizeChartTable = () => {
  const [selected, setSelected] = useState("2");

  return (
    <RadioGroup
      value={selected}
      onValueChange={setSelected}
      classNames={{ base: "gap-0" }}
    >
      <Table
        removeWrapper
        classNames={{
          table: "bg-transparent",
          th: "bg-transparent text-slate-blue text-sm fnt-medium !py-3",
          td: "text-base font-normal text-raisin-black",
        }}
      >
        <TableHeader columns={columns} className="bg-transparent">
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>

        <TableBody items={rows}>
          {(item) => {
            const isSelected = selected === item.key;
            return (
              <TableRow
                key={item.key}
                className={`bg-transparent cursor-pointer`}
                onClick={() => setSelected(item.key)}
              >
                <TableCell className="bg-transparent !py-3">
                  <Radio
                    value={item.key}
                    classNames={{ wrapper: "bg-transparent" }}
                  />
                </TableCell>

                <TableCell
                  className={`bg-transparent !py-3 ${
                    isSelected ? "font-semibold " : ""
                  }`}
                >
                  {item.size}
                </TableCell>
                <TableCell
                  className={`bg-transparent !py-3 ${
                    isSelected ? "font-semibold " : ""
                  }`}
                >
                  {item.chest}
                </TableCell>
                <TableCell
                  className={`bg-transparent !py-3 ${
                    isSelected ? "font-semibold " : ""
                  }`}
                >
                  {item.length_in}
                </TableCell>
                <TableCell
                  className={`bg-transparent !py-3 ${
                    isSelected ? "font-semibold " : ""
                  }`}
                >
                  {item.shoulder_in}
                </TableCell>
              </TableRow>
            );
          }}
        </TableBody>
      </Table>
    </RadioGroup>
  );
};

export default SizeChartTable;
