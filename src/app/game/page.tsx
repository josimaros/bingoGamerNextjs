import BingoCard from "@/components/BingoCard"
import { generateFakeBingoData } from "@/lib/fake/generateFakeBingoData"

export default function Game() {
    const columns = generateFakeBingoData()
    return (
        <>
            <div className="min-h-dvh">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    <BingoCard columns={columns} />
                    <BingoCard columns={columns} />
                    <BingoCard columns={columns} />
                    <BingoCard columns={columns} />
                </div>
            </div>
        </>
    )
}