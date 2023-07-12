"use client"

import { useChat } from "ai/react"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"

export interface ChatProps {}

export function Chat({}: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full pr-4">
            {messages.map(message => {
              return (
                <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                  {message.role === 'user' && (
                    <Avatar>
                      <AvatarFallback>AG</AvatarFallback>
                      <AvatarImage src="https://github.com/arthurgrigoletto.png"/>
                    </Avatar>
                  )}
                  {message.role === 'assistant' && (
                    <Avatar>
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <p className="leading-relaxed">
                    <span className="block font-bold text-slate-700">
                      {message.role === 'user' ? "Usuário" : "AI"}:
                    </span>
                    {message.content}
                  </p>
                </div>
              )
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
            <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
  )
}