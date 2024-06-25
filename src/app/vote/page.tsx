"use client";

import Listing from "@/components/Listing";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";

const ceals = [
  {
    value: "lista a",
    label: "CEAL Mechones",
  },
  {
    value: "lista b",
    label: "CEAL 2do Año",
  },
  {
    value: "lista c",
    label: "CEAL 3er Año",
  },
  {
    value: "lista d",
    label: "CEAL 4to Año",
  },
];

export default function VotePage() {
  const [agree, setAgree] = useState(false);

  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  useEffect(() => {
    console.log(agree);
  }, [agree]);

  useEffect(() => {
    // Simulando la carga de candidatos y la verificación del estado de autenticación
    // async function fetchData() {
    //   const candidatesData = await getCandidates();
    //   setCandidates(candidatesData);
    //   setUserLoggedIn(isAuthenticated());
    // }
    // fetchData();
  }, []);

  //Llamado a la api de votar
  const submitVote = async (selected: string) => {};

  const handleSelect = (value: string) => {
    setSelectedCandidate(value);
    console.log(`elemento ${value}`);
  };

  const handleCheck = () => {
    setAgree(!agree);
  };

  const handleVote = async () => {
    if (userLoggedIn && selectedCandidate) {
      await submitVote(selectedCandidate);
      alert("Voto realizado con éxito");
    } else {
      alert("Debe estar logueado para votar");
    }
  };

  if (!userLoggedIn) {
    return <div>Debe estar logueado para votar</div>;
  }

  return (
    <section className="container mx-auto">
      <h1 className="h1 flex justify-center mb-10">Votar</h1>
      <div className="flex flex-col items-center min-h-screen">
        <Listing items={[]} handleSelect={handleSelect} />
        <div className="items-top flex space-x-2 my-10">
          <Checkbox checked={agree} onCheckedChange={handleCheck} />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Acepto los terminos y responsabilidades
            </label>
            <p className="text-sm text-muted-foreground">
              Esta es mi decision y estoy votando voluntariamente
            </p>
          </div>
        </div>
        <Button
          title="Votar"
          onClick={() => handleVote()}
          disabled={!agree || !selectedCandidate}
        >
          Votar
        </Button>
      </div>
    </section>
  );
}
