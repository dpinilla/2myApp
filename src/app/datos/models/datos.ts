export class Datos{
    datId: any
    datNombre: string
    datApellido: string
    datEdad: any
    datDeporte: string
    datImagen: string

    constructor(datId:any, datNombre: string, datApellido: string,
                datEdad: any, datDeporte: string,
                datImagen: string)
    {
        this.datId = datId
        this.datNombre = datNombre
        this.datApellido = datApellido
        this.datEdad = datEdad
        this.datDeporte = datDeporte
        this.datImagen = datImagen     
    }
}