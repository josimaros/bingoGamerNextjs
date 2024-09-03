// components/BingoCard.tsx
import React from 'react';
import NumberBingoCard from './NumberBingoCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export type BingoCell = {
  number: number;
  markedByComputer: boolean;
  markedByUser: boolean;
};

type BingoCardProps = {
  columns: BingoCell[][]; // Array de colunas, onde cada coluna contém um array de células
};

const BingoCard: React.FC<BingoCardProps> = ({ columns }) => {
  // Definindo o número de colunas com base no array recebido
  const numRows = columns[0]?.length || 0; // Número de linhas é baseado na primeira coluna (assumindo que todas têm o mesmo número de linhas)

  return (
    <Card className=" p-4 bg-white  ">
      <CardHeader className='grid grid-cols-5 gap-2'>
        <CardDescription className='col-span-5 w-full text-center'>cartela numero:123456789</CardDescription>
        {/* Cabeçalhos das colunas */}
        <CardTitle className="text-center font-bold text-xl">B</CardTitle>
        <CardTitle className="text-center font-bold text-xl">I</CardTitle>
        <CardTitle className="text-center font-bold text-xl">N</CardTitle>
        <CardTitle className="text-center font-bold text-xl">G</CardTitle>
        <CardTitle className="text-center font-bold text-xl">O</CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-5 gap-2'>
        {/* Renderizando os números da cartela */}
        {Array.from({ length: numRows }).map((_, rowIndex) => (
          columns.map((col, colIndex) => (
            <NumberBingoCard number={col[rowIndex]} colIndex={colIndex} rowIndex={rowIndex} key={`cell-${rowIndex}-${colIndex}`} />
            // <div
            //   key={`cell-${rowIndex}-${colIndex}`}
            //   className={`flex justify-center items-center border border-gray-300 p-2 ${col[rowIndex].markedByComputer ? 'bg-blue-100' : ''} ${col[rowIndex].markedByUser ? 'bg-green-100' : ''}`}
            // >
            //   {col[rowIndex].number}
            // </div>
          ))
        ))}
      </CardContent>
    </Card>
  );
};

export default BingoCard;
