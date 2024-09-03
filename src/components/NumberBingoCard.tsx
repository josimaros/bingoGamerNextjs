"use client"
import { useEffect, useState } from "react"
import { BingoCell } from "./BingoCard"
import { Button } from "./ui/button"

type TNumberBingoCardProps = {
    number:BingoCell
    rowIndex:number
    colIndex:number
}

function checkMarked(
  markedByComputer:boolean,
  markedByUser:boolean){
  if(markedByUser){
    return 'default'
  }
  if(markedByUser && markedByComputer){
    return 'destructive'
  }
  return 'secondary'
}

const NumberBingoCard:React.FC<TNumberBingoCardProps> = ({number,colIndex,rowIndex}) => {
    const [markedByComputer,setMarkedByComputer] = useState<boolean>(number.markedByComputer || false)
    const [markedByUser,setMarkedByUser] = useState<boolean>(number.markedByUser || false)
    const [cardNumber,setCardNumber] = useState<number>(number.number)

    useEffect( () => {},[])



    return (
        <>
         <Button
            onClick={() => setMarkedByUser(true)}
            variant={checkMarked(markedByComputer,markedByUser)}
            key={`cell-${rowIndex}-${colIndex}`}
            className={`flex justify-center items-center border border-gray-300 rounded-full p-2`}
          >
            {cardNumber}
          </Button>
        </>
    )
}
export default NumberBingoCard