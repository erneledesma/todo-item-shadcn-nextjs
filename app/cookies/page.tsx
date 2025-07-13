import { TabsBar } from "@/cookie/components/TabBar"


export const metadata = {
    title: 'Cookies page',
    description: 'Almacena información en el navegador del usuario',

}

export default async function CookiesPage() {


  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Cookies <br className="hidden sm:inline" />
        </h2>
        <TabsBar />
      </div>
    </section>
  )
}
