"use client"
// Stuff
import { FormEvent } from 'react'
// Ui
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
  
export function UserAuthForm() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const username = formData.get('username')
    const password = formData.get('password')
 
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })

    console.log("==============================")
    console.log("Client response:", response)
    console.log("==============================")
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Open Control</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>

      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input name="username" placeholder="username" required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input name="password" placeholder="Password" type="password" required/>
            </div>
          </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button>Login</Button>
      </CardFooter>
      </form>

    </Card>
  )
}