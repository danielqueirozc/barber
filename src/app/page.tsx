import { Header } from "@/components/header.";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
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
      </div>
    </div>
  );
}
