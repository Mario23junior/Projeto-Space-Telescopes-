import { EspecificacaoOrbital } from "./EspecificacaoOrbital.model"
import { EstruturaObservacionais } from "./EstruturaObservacionais.model"
import { PropriedadeEstruturais } from "./PropriedadeEstruturais.model"

export interface TelescopeSpace {

    id: Number
    nome: String
    img: String
    tipo: String
    missao: String
    durationMissao: String
    dataDelancamento: String
    status: String

    especificacaoOrbital: EspecificacaoOrbital[]
    propriedadeEstruturais: PropriedadeEstruturais[]
    estruturaObservacionais: EstruturaObservacionais[]


}  