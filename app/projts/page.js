import CardProjects from "@/components/CardProjects"


const projts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 sm:px-20 xl:px-40 items-center h-screen">
        <CardProjects 
          title="Landing de venta"
          description="Desarrolo de un sitio para la venta de 1 producto"
          bgCardImage="https://res.cloudinary.com/dgughebwk/image/upload/v1707090818/Captura_de_pantalla_2024-02-04_001857_n75qdb.png"
          urlDespliegue="https://cosmic-sunburst-bef9f6.netlify.app"
          urlRepositorio="https://github.com/Anti2023/P1UDD_Landing_Page.git"
        />
        <CardProjects 
          title="Aplicación CRUD"
          description="App donde el usuario puede agregar, cambiar, actualizar y borrar datos"
          bgCardImage="https://res.cloudinary.com/dgughebwk/image/upload/v1707091841/Captura_de_pantalla_2024-02-04_210347_vg1uoj.png"
          urlDespliegue="https://charming-paletas-c07634.netlify.app"
          urlRepositorio="https://github.com/Anti2023/UDD_P2_CRUD.git"
        />
        <CardProjects 
          title="Tablero de datos (Dashboard)"
          description="Se conecta a una API y presenta datos en una interfaz."
          bgCardImage="https://res.cloudinary.com/dgughebwk/image/upload/v1707091842/Captura_de_pantalla_2024-02-04_210429_nuzo3c.png"
          urlDespliegue="https://reliable-shortbread-96bfc2.netlify.app"
          urlRepositorio="https://github.com/Anti2023/Dashboard-API.git"
        />
        <CardProjects 
          title="Restaurant APP"
          description="Aplicación con la presentación de un restaurant"
          bgCardImage="https://res.cloudinary.com/dgughebwk/image/upload/v1707091842/Captura_de_pantalla_2024-02-04_210532_ropccj.png"
          urlDespliegue="https://lambent-rabanadas-7165f6.netlify.app"
          urlRepositorio=""
        />
        <CardProjects 
          title="E-commerce"
          description="Proyecto 5 Aplicación de Comercio Electrónico"
          bgCardImage="https://res.cloudinary.com/dgughebwk/image/upload/v1707091842/Captura_de_pantalla_2024-02-04_210917_blgzcd.png"
          urlDespliegue=""
          urlRepositorio=""
        />
    </div>
  )
}

export default projts