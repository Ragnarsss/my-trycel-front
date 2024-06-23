"use client";
// Librerías externas
import Link from "next/link";
import { List, Send } from "lucide-react";
import { FaVoteYea } from "react-icons/fa";
import { TbBrandDaysCounter } from "react-icons/tb";
import { LuClipboardEdit } from "react-icons/lu";
import { RiArrowDownSLine } from "react-icons/ri";

// Componentes locales

// Componentes UI
import { Button } from "./ui/button";
import Badge from "./Badge";

const MainContent = () => {
  return (
    <section className="pb-12 min-h-min xl:pt-10 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Vota aqui!
            </div>
            <h1 className="h1 mb-4">
              Votaciones para el nuevo centro de alumnos
            </h1>
            <p className="subtitle mx-auto max-w-[490px] xl:mx-0">
              Vota por tu lista de estudiantes para el nuevo directorio del
              centro de alumnos este semestre aqui en nuestro portal oficial de
              votaciones.
            </p>
            {/** Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/vote">
                <Button className="gap-x-2">
                  Vota aqui! <Send size={18} />
                </Button>
              </Link>
              <Link href="/list">
                <Button variant="secondary" className="gap-x-2">
                  <List size={18} />
                  <span>Ver Listas</span>
                </Button>
              </Link>
            </div>
          </div>
          {/** Image */}
          <div className="hidden xl:flex relative">
            {/** Badge 1 */}
            <Badge
              icon={<LuClipboardEdit />}
              containerStyles="absolute top-[10%] -left-[45rem]"
              endCountNum={5}
              endCountText=""
              badgeText="Listas inscritas"
            />
            {/** Badge 2 */}
            <Badge
              icon={<FaVoteYea />}
              containerStyles="absolute top-[10%] -left-[30rem]"
              endCountNum={66}
              endCountText="%"
              badgeText="Votos totales"
            />
            {/** Badge 3 */}
            <Badge
              icon={<TbBrandDaysCounter />}
              containerStyles="absolute top-[10%] -left-[13rem]"
              endCountNum={7}
              endCountText=""
              badgeText="Dias restantes"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
