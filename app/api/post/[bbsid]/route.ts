import prisma from "../../../../lib/prismaClient";
import { NextResponse } from "next/server";


export async function GET(req: Request, { params }: { params: { bbsid: string } }) {
    const bbsId = params.bbsid
    const bbsDetailData = await prisma.post.findUnique({
        where: {
            id: parseInt(params.bbsid)
        }
    });
    return NextResponse.json(bbsDetailData);
}