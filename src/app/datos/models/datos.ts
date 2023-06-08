export class Datos{
    datNombre: string
    datApellido: string
    datEdad: any
    datDeporte: string
    datImagen: string

    constructor(datNombre: string, datApellido: string,
                datEdad: any, datDeporte: string,
                datImagen: string)
    {
        this.datNombre = datNombre
        this.datApellido = datApellido
        this.datEdad = datEdad
        this.datDeporte = datDeporte
        this.datImagen = datImagen     
    }
}