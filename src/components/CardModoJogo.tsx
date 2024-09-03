'use client'
import { createRoomId } from "@/lib/bingo";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


const formServerSchema = z.object({
  username: z.string().min(2).max(50),
  qtdNumbersBingo: z.number().min(75).positive(),
  qtdNumbersCard: z.number().min(25).positive(),
  valueCard: z.number().min(0.05).positive(),
  timeCallNumbers: z.number().min(3).int().positive()
})

const formClienteSchema = z.object({
  username: z.string().min(2).max(50),
  roomId: z.number().min(999999).positive(),
})

export default function CardModoJogo() {

  const formServer = useForm<z.infer<typeof formServerSchema>>({
    resolver: zodResolver(formServerSchema),
    defaultValues: {
      username: "",
      qtdNumbersBingo: 75,
      qtdNumbersCard: 25,
      valueCard: 0.1,
      timeCallNumbers: 5
    },
  })

  const formCliente = useForm<z.infer<typeof formClienteSchema>>({
    resolver: zodResolver(formClienteSchema),
  })

  async function onSubmitServer(values: z.infer<typeof formServerSchema>) {
    try {
      const response = await fetch('http://localhost:3000/api/room',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:`${values}`
      })
      
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  }

  function onSubmitCliente(values: z.infer<typeof formClienteSchema>) {
    console.log(values)
  }


  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Descricao</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {/* <Button onClick={handleCreateRoom}>Criar uma sala</Button>
          */}
          <Dialog  >
            <DialogTrigger asChild>
              <Button>Entrar em um Pusher</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when youre done.
                </DialogDescription>
              </DialogHeader>
              <Form {...formServer}>
                <form onSubmit={formServer.handleSubmit(onSubmitServer)} className="space-y-4">
                  <FormField
                    control={formServer.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="nome de usuario" {...field} />
                        </FormControl>
                        <FormDescription>
                          Nome de usuario
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formServer.control}
                    name="qtdNumbersBingo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantidade de numeros</FormLabel>
                        <FormControl>
                          <Input type="number" min={75} step={1} placeholder="Quantidade de numeros" {...field} />
                        </FormControl>
                        <FormDescription>
                          Quantidade de numeros do bingo
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formServer.control}
                    name="qtdNumbersCard"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Numeros da Cartela</FormLabel>
                        <FormControl>
                          <Input type="number" min={25} step={1} placeholder="Numeros da Cartela" {...field} />
                        </FormControl>
                        <FormDescription>
                          Quantidade de numeros da cartela
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formServer.control}
                    name="valueCard"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Valor da Cartela</FormLabel>
                        <FormControl>
                          <Input type="number" min={0.05} step={0.05} placeholder="Valor da Cartela" {...field} />
                        </FormControl>
                        <FormDescription>
                          Valor por cada cartela
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formServer.control}
                    name="timeCallNumbers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tempo de chamada</FormLabel>
                        <FormControl>
                          <Input type="number" min={0.05} step={0.05} placeholder="Tempo de chamada" {...field} />
                        </FormControl>
                        <FormDescription>
                          Tempo entre cada chamada de bolas
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Enviar</Button>
                </form>
              </Form>

            </DialogContent>
          </Dialog>

          <Dialog  >
            <DialogTrigger asChild>
              <Button>Entrar em um Pusher</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when youre done.
                </DialogDescription>
              </DialogHeader>
              <Form {...formCliente}>
                <form onSubmit={formCliente.handleSubmit(onSubmitCliente)} className="space-y-4">
                  <FormField
                    control={formCliente.control}
                    name="roomId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>roomId</FormLabel>
                        <FormControl>
                          <Input placeholder="room Id" {...field} />
                        </FormControl>
                        <FormDescription>
                          Room Id
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formCliente.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="username" {...field} />
                        </FormControl>
                        <FormDescription>
                          Username
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Enviar</Button>
                </form>
              </Form>

            </DialogContent>
          </Dialog>


        </div>
      </CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  )
}