export interface Token {
    access_token: string;
    expires_in:   number;
    token_type:   string;
}

export interface Parrilla {
    statusCode:      number;
    body:            Body;
    isBase64Encoded: boolean;
}

export interface Body {
    d: D;
}

export interface D {
    results: Result[];
}

export interface Result {
    __metadata: Metadata;
    Vin:        string;
    Rut:        string;
    Fecha:      string;
    Hora:       string;
    Stock:      string;
    Origen:     string;
    Estatus:    string;
    Id:         string;
}

export interface Metadata {
    id:   string;
    uri:  string;
    type: string;
}

export interface ParrillaBO {
    vin:    string;
    rut:    string;
    fecha:  string;
    hora:   string;
    stock:  string;
    origen: string;
    status: string;
}

export interface OkUsuario {
    statusCode:      number;
    headers:        string;
    body:           string;
    isBase64Encoded: boolean;
}


export interface RCliente {
    statusCode:      number;
    body:            Cliente;
    isBase64Encoded: boolean;
}

export interface Cliente {
    documentoIdentidad: string;
    nombreCompleto:     string;
    apellidoPaterno:    string;
    apellidoMaterno:    string;
    correoElectronico:  string;
    region:             string;
    comuna:             string;
    direccion:          string;
    telefono1:          number;
    telefono2:          number;
    telefono3:          number;
}


export interface Vehiculo {
    stock:             string;
    vin:               string;
    patente:           string;
    marca:             string;
    modelo:            string;
    linea:             string;
    anio:              number;
    mantenciones:      Mantencione[];
    trabajosGenerales: any[];
    dyp:               Dyp[];
    caracteristicas:   Caracteristicas;
    campanas:          Campana[];
}

export interface Campana {
    id:               number;
    campana:          string;
    fechaCreacion:    string;
    fechaExpiracion:  string;
    repuestoAsociado: string;
    descripcion:      string;
    realizada:        string;
    fechaRegistro:    string;
}

export interface Caracteristicas {
    color:              string;
    colorInt:           string;
    airBag:             string;
    ac:                 string;
    alarma:             string;
    alfombra:           string;
    alzaVidrios:        string;
    asientosElect:      string;
    butacas:            string;
    cierreCentralizado: string;
    climatizador:       string;
    combustible:        string;
    compBordo:          string;
    consolaCentral:     string;
    ctrlCrucero:        string;
    cuero:              string;
    dirHidraulica:      string;
    espejosElectricos:  string;
    abs:                string;
    llantas:            string;
    moonRoof:           string;
    neblineros:         string;
    radioCD:            string;
    transAutomatica:    string;
    traccion:           string;
}

export interface Dyp {
    id:                        number;
    ot:                        string;
    fecha:                     string;
    km:                        number;
    codConcesionario:          string;
    rutCliente:                string;
    codigo:                    string;
    usuario:                   string;
    fechaRegistro:             string;
    perdidaTotalTipoSiniestro: string;
    perdidaTotalReportado:     string;
    perdidaTotalFecha:         string;
    ciaSeguro:                 string;
    cita:                      string;
    stock:                     string;
}

export interface Mantencione {
    id:               number;
    numeroRev:        number;
    ot:               string;
    fechaMantencion:  string;
    km:               number;
    codConcesionario: string;
    rutCliente:       string;
    codigo:           string;
    usuario:          string;
    fechaRegistro:    string;
    origen:           string;
    stock:            string;
    nomConcesionario: string;
    nomMantencion:    string;
}


