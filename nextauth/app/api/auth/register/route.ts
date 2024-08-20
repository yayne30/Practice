import { NextResponse } from "next/server";

export  async function POST(request:Request) {


    try{
        const {email , password , name ,confirmPassword} = await request.json();
        const apiResponse = await fetch('https://akil-backend.onrender.com/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
              name,
              confirmPassword,
              role:"user"
            }),
          });

          console.log({email , password , name ,confirmPassword})

        
          if (!apiResponse.ok) {
            const errorData = await apiResponse.json();
            console.log(errorData)
          }
          else{
            console.log('success')
            
                       
          }    }
    catch(e){
        console.log({e})
    }

    return NextResponse.json({message:"success"})
    
}