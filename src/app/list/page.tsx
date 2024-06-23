"use client";
import { CEALS } from "@/common/constants";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useState } from "react";

export default function CealListPage() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    if (expandedRow === index) {
      setExpandedRow(null); // Si se hace clic en la fila ya expandida, colapsarla.
    } else {
      setExpandedRow(index); // Expandir la fila clickeada.
    }
  };

  return (
    <section className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col pb-10 items-center pb h2">
        <span>Lista de centros de alumnos</span>
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <Table className="w-full text-sm text-left text-gray-500 dark:text-gray-200 dark:bg-gray-700">
          <TableBody>
            {CEALS.map((item, index) => (
              <>
                <TableRow
                  className="dark:bg-gray-800 dark:border-gray-600"
                  key={index}
                >
                  <TableCell className="px-6 py-4 w-1/4">{item.name}</TableCell>
                  <TableCell className="px-6 py-4 w-1/4">
                    {item.carrera}
                  </TableCell>
                  <TableCell className="px-6 py-4 w-1/4">
                    {item.votes}
                  </TableCell>
                  <TableCell className="px-6 py-4 w-1/4">
                    <Button
                      onClick={() => toggleRow(index)}
                      className="text-sm min-w-[100px]"
                    >
                      {expandedRow === index ? "Ocultar" : "Ver más"}
                    </Button>
                  </TableCell>
                </TableRow>
                {expandedRow === index && (
                  <TableRow>
                    <TableCell colSpan={4} className="p-0">
                      <div className="flex flex-col gap-y-2 bg-gray-100 p-4 border-t border-gray-200 w-full text-black">
                        <div className="flex gap-x-2">
                          <span className="font-medium">Integrantes:</span>
                          <span>{item.integrantes.join(", ")}</span>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
