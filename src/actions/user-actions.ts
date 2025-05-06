"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const API_URL = "http://localhost:8080/users"

export async function createUser(initialState: any, formData: FormData){
    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    
    const response = await fetch(API_URL, options)

    if(!response.ok){
        const errors = await response.json()

        return {
            values: {
                email: formData.get("email"),
                password: formData.get("password"),
            },
            errors:{
                email: errors.find( (error: any) => error.field === "email")?.message,
                password: errors.find( (error: any) => error.field === "password")?.message
            }
        }
    }

    redirect("/")
}


export async function login(initialState: any, formData: FormData){
    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

     const response = await fetch("http://localhost:8080/auth/login", options)

     console.log(response)
     if(!response.ok){
         return {
            error: "email ou senha incorreta"
         }
     }

    var json = await response.json()
    var token = json.token

    var cookiesStore = await cookies()
    cookiesStore.set("token", token)

    redirect("/dashboard")
}

