import Image from "next/image";
import { Header } from "@/components/header.";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { db } from "@/lib/prisma";
import { BarberShopItem } from "@/components/barbershop-item";
import { searchOptions } from "@/constants/search";
import { BookingItem } from "@/components/booking-item";

export default async function Home() {
  const barbershops = await db.barbershop.findMany();
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  console.log(barbershops);

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

        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {searchOptions.map((option) => (
            <Button className="" variant="secondary" key={option.name}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.name}
              />
              {option.name}
            </Button>
          ))}
        </div>

        <div className="relative w-full h-[150px] mt-6">
          <Image
            src="/banner-01.png"
            fill
            className="object-cover rounded-b-xl"
            alt="banner"
          />
        </div>

        <BookingItem />

        <h2 className="uppercase font-bold mt-6 mb-3 text-gray-400 text-xs">
          recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => {
            return (
              <BarberShopItem key={barbershop.id} barbershop={barbershop} />
            );
          })}
        </div>

        <h2 className="uppercase font-bold mt-6 mb-3 text-gray-400 text-xs">
          populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => {
            return (
              <BarberShopItem key={barbershop.id} barbershop={barbershop} />
            );
          })}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent>
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}
