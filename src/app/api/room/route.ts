import { TConfigRoom, TRoom, createRoomId, rooms,config } from "@/lib/bingo";
import { NextRequest, NextResponse } from "next/server";

type TResponseCreateRoom = {
    roomId:number,
    room:number,
    password:number,
    qtdNumbersBingo: number
    qtdNumbersCard: number
    valueCard: number
    timeCallNumbers: number
}

const POST = async (req: Request) => {

    const body = await req.json()

    const data: TConfigRoom = body

    const roomId = createRoomId()
    const password = createRoomId()

    const create_data: TRoom = {
        room: roomId,
        private: true,
        password: password.toString()
    }

    const create_room = await rooms.create(create_data)

    if (create_room?.status === 201 && create_room.statusText === 'Created') {
        const create_config_room = await config.create(data,create_room.data[0].id)
        if(create_config_room?.status === 201 && create_config_room.statusText === 'Created'){
            const dataResponse:TResponseCreateRoom = {
                roomId:create_room.data[0].id,
                room:create_room.data[0].room,
                password:create_room.data[0].password,
                qtdNumbersBingo:create_config_room.data[0].qtdNumbersBingo,
                qtdNumbersCard:create_config_room.data[0].qtdNumbersCard,
                timeCallNumbers:create_config_room.data[0].timeCallNumbers,
                valueCard:create_config_room.data[0].valueCard
            }
            return NextResponse.json(dataResponse)
        }

    }


}

const GET = async () => {

    const response = await rooms.all()

    return Response.json(response)
}


export { POST, GET }