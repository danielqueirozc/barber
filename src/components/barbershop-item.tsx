import Image from "next/image"
import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"

interface BarberShopItemProps {
    barbershop: Barbershop
}

export function BarberShopItem({ barbershop }: BarberShopItemProps) {
    return (
        <Card className="min-w-[167px] p-0 rounded-2xl">
            <CardContent className="p-0 px-1 pt-1">
                <div className="relative h-[159px] w-full">
                    <Image src={barbershop.imageUrl} fill className='object-cover rounded-2xl' alt={barbershop.name} />

                    <Badge className="absolute top-2 left-2" variant="secondary">
                        <StarIcon size={12} className="fill-primary" />
                        <p className="text-xs font-semibold">5,0</p>
                    </Badge>
                </div>

                <div className="px-1 py-3">
                    <h3 className="font-semibold truncate">{barbershop.name}</h3>
                    <p className="text-sm text-gray-400 truncate">{barbershop.address}</p>

                    <Button variant="secondary" className="w-full mt-3">Reservar</Button>
                </div>
            </CardContent>
        </Card>
    )
}