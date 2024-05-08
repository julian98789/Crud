import { NextResponse } from "next/server";
import { insertUser, selectUser, updateUser, deleteUser } from "../model/user";


export async function  POST(req, res) {
    try {
        const datos = await req.json()
        const result  =  await insertUser(datos) 
        return NextResponse.json(result) 
    } catch (error) {
        return NextResponse.json(error) 
    }
}

export async function  GET(req, res) {
    try {
        const result  = await selectUser() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}

export async function  PUT(req, res) {
    try {
        const result  =  updateUser() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}

export async function  DELETE(req, res) {
    try {
        const result  =  deleteUser() 
        return NextResponse.json(result) 
    } catch (error) {
        console.log(error) 
    }
}