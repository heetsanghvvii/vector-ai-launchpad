import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Section } from "./Section";

const WA_URL = "https://wa.me/91XXXXXXXXXX";
const EMAIL = "hello@vectorai.co";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Tell us what you need").max(1000),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = (_values: FormValues) => {
    toast.success("Thanks — we'll reply within 2 hours.");
    form.reset();
  };

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Ready to move faster?
          </h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground">
            WhatsApp us, email us, or fill this form. We reply within 2 hours.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full">
              <a href={WA_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp us
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-border bg-transparent text-foreground hover:bg-card"
            >
              <a href={`mailto:${EMAIL}`}>
                <Mail className="mr-1 h-4 w-4" /> {EMAIL}
              </a>
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What do you need?</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Tell us about your project…"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full rounded-full">
                Send message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Section>
  );
}
