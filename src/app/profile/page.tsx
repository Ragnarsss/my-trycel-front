import { FC } from "react";

interface Props {
  nombre: string;
  carrera: string;
  haVotado: boolean;
}

// Paso 2: Modificar el componente Page para aceptar las nuevas props
const Page: FC<Props> = ({ nombre, carrera, haVotado }) => {
  return (
    <div className="container mx-auto">
      <h1 className="h1 flex justify-center mb-10">Perfil</h1>
      <div className="flex flex-col items-center min-h-screen">
        <p className="text-lg my-2">{nombre ? nombre : "Nombre de usuario"}</p>
        <p className="text-lg my-2">
          Carrera: {carrera ? carrera : "Carrera universitaria"}
        </p>
        <p
          className={`font-semibold ${
            haVotado ? "text-green-500" : "text-red-500"
          }`}
        >
          {haVotado ? "Ha votado" : "No ha votado"}
        </p>
        <div className="mt-4">
          <p>Contenido del perfil</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
