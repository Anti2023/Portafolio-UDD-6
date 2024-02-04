import CardProjects from "@/components/CardProjects"


const projts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 sm:px-20 xl:px-40 items-center h-screen">
        <CardProjects 
          title="Landing de venta"
          description=""
          bgCardImage=""
          urlDespliegue="https://cosmic-sunburst-bef9f6.netlify.app"
          urlRepositorio="https://github.com/Anti2023/P1UDD_Landing_Page.git"
        />
        <CardProjects 
          title="Aplicación CRUD"
          description=""
          bgCardImage=""
          urlDespliegue="https://charming-paletas-c07634.netlify.app"
          urlRepositorio="https://github.com/Anti2023/UDD_P2_CRUD.git"
        />
        <CardProjects 
          title="Tablero de datos (Dashboard)"
          description=""
          bgCardImage=""
          urlDespliegue="https://reliable-shortbread-96bfc2.netlify.app"
          urlRepositorio="https://github.com/Anti2023/Dashboard-API.git"
        />
        <CardProjects 
          title="Restaurant APP"
          description=""
          bgCardImage=""
          urlDespliegue="https://lambent-rabanadas-7165f6.netlify.app"
          urlRepositorio=""
        />
        <CardProjects 
          title="E-commerce"
          description=""
          bgCardImage=""
          urlDespliegue=""
          urlRepositorio=""
        />
    </div>
  )
}

export default projts