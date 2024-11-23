import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon, MailIcon, UserIcon } from 'lucide-react'
export default function Register({showPassword, togglePasswordVisibility}:any) {

    return (
      <div className="flex items-center justify-center w-11/12 mx-auto mt-20 dark:bg-gray-900">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Bienvenido</CardTitle>
            <CardDescription>Crea una cuenta</CardDescription>
          </CardHeader>
          <CardContent>            <form>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <div className="relative">
                      <Input id="name" type="text" required />
                      <UserIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Input id="email" type="email" placeholder="m@example.com" required />
                      <MailIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="******"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <EyeOffIcon className="h-4 w-4 text-gray-400" />
                        ) : (
                          <EyeIcon className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6" type="submit">
                  Registrarse
                </Button>
              </form>
          </CardContent>
      </Card>
    </div>
    );
}