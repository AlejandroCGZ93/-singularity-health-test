import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { login } from '@/store/slices/authSlice';
import type { AppDispatch, RootState } from '@/store/store';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email('Formato de email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type FormData = z.infer<typeof formSchema>;

export function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { loading } = useSelector((state: RootState) => state.auth);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await dispatch(login(data)).unwrap();
      navigate('/home');
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Correo o contraseña incorrectos',
      });
    }
  };

return (
  <div className="flex h-screen">
    {/* Sección izquierda con logo y fondo */}
    <div className="flex-1 flex items-center justify-center bg-orange-500  p-[300px]">
      <div className="text-center">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
          {/* <img src="/logo.svg" alt="Logo" className="w-24 h-24" /> */}
        </div>
      </div>
    </div>

    {/* Sección derecha con formulario */}
    <div className="flex-1 flex items-center justify-center bg-white">
      <div className="w-[800px] p-8">
        <h1 className="text-3xl font-bold text-center">Bienvenido</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingresa tu correo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Ingresa tu contraseña" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-right">
              <a href="/forgot-password" className="text-sm text-orange-500 hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white"
              disabled={loading || !form.formState.isValid}
            >
              {loading ? 'Iniciando sesión...' : 'INICIAR SESIÓN'}
            </Button>
          </div>
          </form>
        </Form>
        <div className="text-center mt-4">
          <span className="text-sm">¿Aún no tienes cuenta?</span>{' '}
          <a href="/register" className="text-sm text-orange-500 hover:underline">
            Registrarse
          </a>
        </div>
      </div>
    </div>
  </div>
);
}