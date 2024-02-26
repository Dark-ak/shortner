import type { NextApiRequest, NextApiResponse } from "next";



export async function POST(request: Request) {
    const url =  await request.json()
    console.log(url) 

    const cleanUri = "https://cleanuri.com//api/v1/shorten"

    try {
        const response = await fetch(cleanUri, {
            method:"POST",
            body: JSON.stringify({url: url.url}),
            headers: {"Content-type" : "application/json"}
        })
        
        const data : {result_url : string; error?:string} = await response.json()

        return Response.json(data);
    }catch(error){
        console.log(error)
    }

}