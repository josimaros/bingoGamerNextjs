import { NextRequest, NextResponse } from "next/server"
import { TRoom, rooms } from "@/lib/bingo";

const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;

    // Verifica se o id é válido
    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    const response = await rooms.byId(parseInt(id,10))
    console.log(response)

    return NextResponse.json(response)
}

export { GET }