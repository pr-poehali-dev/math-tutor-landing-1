import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов",
  }),
  phone: z.string().min(6, {
    message: "Введите корректный номер телефона",
  }),
  request: z.string().min(10, {
    message: "Опишите ваш запрос (минимум 10 символов)",
  }),
});

const ContactForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      request: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // В реальном проекте здесь будет отправка данных
    alert("Форма отправлена! Мы свяжемся с вами в ближайшее время.");
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-creamy-100">Имя</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Введите ваше имя" 
                  {...field} 
                  className="bg-spacegray-300 border-spacegray-100 focus:border-creamy-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-creamy-100">Телефон</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Введите ваш номер телефона" 
                  {...field} 
                  className="bg-spacegray-300 border-spacegray-100 focus:border-creamy-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="request"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-creamy-100">Запрос</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Опишите ваш запрос (тема, класс, цель)" 
                  {...field} 
                  className="bg-spacegray-300 border-spacegray-100 focus:border-creamy-400 min-h-[120px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-creamy-100 text-spacegray-400 hover:bg-creamy-300"
        >
          Отправить заявку
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
