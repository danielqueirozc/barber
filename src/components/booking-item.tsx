import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

// TODO: Receber agendamento como prop
export function BookingItem() {
  return (
    <>
      <h2 className="uppercase font-bold mt-6 mb-3 text-gray-400 text-xs">
        agendamentos
      </h2>
      <Card className="mt-6 p-0">
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge>Confirmado</Badge>

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
    </>
  );
}
