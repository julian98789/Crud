import { NextResponse } from "next/server";
import { selectUserId,deleteUser,updateUser } from "../../model/user";

export async function  GET(req, {params}) {
    try {
        let result  = await selectUserId(params.id); 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    } 
}

export async function  PUT(req,  {params}) {
    const data = await req.json()
    try {
        const result  = await updateUser(params.id,data) 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}

export async function  DELETE(req, {params}) {
    try {
        const result  = await deleteUser(params.id) 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}