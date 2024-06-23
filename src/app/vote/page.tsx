"use client";

import { Listing } from "@/components/Listing";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";

export default function VotePage() {
  const [agree, setAgree] = useState(false);
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Candidato 1" },
    { id: 2, name: "Candidato 2" },
    { id: 3, name: "Candidato 3" },
  ]);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  useEffect(() => {
    // Simulando la carga de candidatos y la verificación del estado de autenticación
    // async function fetchData() {
    //   const candidatesData = await getCandidates();
    //   setCandidates(candidatesData);
    //   setUserLoggedIn(isAuthenticated());
    // }
    // fetchData();
  }, []);

  const submitVote = (selected: string) => {};

  const handleSelectCandidate = (candidateId) => {
    setSelectedCandidate(candidateId);
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
      <h1 className="h1">Votar</h1>
      <Listing />
      <div className="items-top flex space-x-2">
        <Checkbox id="terms1" />
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
      <Button title="Votar">Votar</Button>
    </section>
  );
}
