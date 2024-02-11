import DataModel from "@/models/mongo";
import { NextResponse } from "next/server";

const DURL ='https://jsonplaceholder.typicode.com/todos'

export const revalidate = 0;

export async function GET(){

    try{

        const data=await DataModel.find()
        const res=await fetch(DURL)
        const todos=await res.json()
        return NextResponse.json(data)


    }
    catch(err){
        return NextResponse.json({message:"error occured"})
    }
}
