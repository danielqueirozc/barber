import Image from "next/image";
import { Header } from "@/components/header.";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { db } from "@/lib/prisma";
import { BarberShopItem } from "@/components/barbershop-item";

export default async function Home() {
  const barbershops = await db.barbershop.findMany()

  console.log(barbershops)

  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Ola, Daniel!</h2>
        <p>Sabado, 3 de Maio.</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faca sua busca..." />
          <Button size="icon" variant="outline">
            <SearchIcon />
          </Button>
        </div>

        <div className="relative w-full h-[150px] mt-6">
          <Image
            src="/banner-01.png"
            fill
            className="object-cover rounded-b-xl"
            alt="banner"
          />
        </div>


        <h2 className="uppercase font-bold mt-6 mb-3 text-gray-400 text-xs">
          agendamentos
        </h2>
        <Card className="mt-6 p-0">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge>
                Confirmado
              </Badge>

              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png" />
                </Avatar>

                <p className="text-sm">Barbearia do Daniel</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 px-5">
              <p className="text-sm">Agosto</p>
              <span className="text-2xl">04</span>
              <span className="text-sm">20:00</span>
            </div>
          </CardContent>
        </Card>

        <h2 className="uppercase font-bold mt-6 mb-3 text-gray-400 text-xs">
          recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          { barbershops.map(barbershop => {
              return <BarberShopItem key={barbershop.id} barbershop={barbershop} /> 
            }) 
          }
        </div>
      </div>
    </div>
  );
}

