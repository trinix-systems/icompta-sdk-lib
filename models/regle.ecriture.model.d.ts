import { CompteModel } from "./compte.model";
import { ModelEntity } from "@trinix/app-utility";
export declare class RegleEcritureModel extends ModelEntity {
    id: number;
    fkEntreprise: string;
    fkCentre: string;
    ordre: number;
    fkOperation: string;
    fkClasse: string;
    fkCompte: string;
    preciserCompte: boolean;
    taux: number;
    debiter: boolean;
    estContenu: boolean;
    deduitPrincipal: boolean;
    status: boolean;
    dateCreat: Date | null;
    fkAgentCreat: string;
    compte: CompteModel | null;
    static fromEntity(snapshot: any): RegleEcritureModel;
    copy(): RegleEcritureModel;
}
