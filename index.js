const mongoose = require("mongoose")


const url = "mongodb://localhost/jorgeDB"

mongoose.connect(url, {
    
})
.then( () =>console.log("Conectado a MongoDB"))
.catch( (e) => console.log("Erro en conectar con mongo: " + e))

const perosnasSquema = mongoose.Schema({
  nombre: String,
  edad: Number,
  pais: String
},{versionKey:false})

const PersonaModel = mongoose.model("personas", perosnasSquema)

/*--MOSTRAR------------------*/
const mostrar = async () => {
    const personas = await PersonaModel.find()
    console.log(personas);
}
/*--MOSTRAR------------------*/



/*-------CREAR REGISTROS----------*/
const crear = async () => {
  const persona = new PersonaModel({
    nombre: "Eivor",
    edad: 34,
    pais: "Noruega"
  })

  const resultado = await persona.save()
  console.log(resultado);
}
/*-------CREAR REGISTROS----------*/



/*-------ACTUALIZAR REGISTROS----------*/
const actualizar = async (id) => {
  const persona = await PersonaModel.updateOne({_id:id},
    {
      $set:{
        nombre: "Eivor Modificado",
        pais: "ESPAÑA MODIFICADO" 
      }
    })
}
/*-------ACTUALIZAR REGISTROS----------*/




/*-------BORRAR REGISTROS----------*/
const eliminar = async (id) => {
  const persona = await PersonaModel.deleteOne({_id:id})
  console.log(persona);
}
/*-------BORRAR REGISTROS----------*/



/*----------LLAMAMOS A LOS PROCEDIMIENTOS----------*/
//mostrar()
//crear()
//actualizar("61e83d0e8a3be9e5abf47654")
eliminar("61e83b98c2df9771599085de")
/*----------LLAMAMOS A LOS PROCEDIMIENTOS----------*/