import { ModelEntity } from "@trinix/app-utility";
export declare class CompteModel extends ModelEntity {
    code: string;
    fkEntreprise: string;
    fkCentre: string;
    fkClasse: string;
    fkPoste: string;
    fkCompteParent: string;
    numero: string;
    typeCompte: TypeCompte;
    typeOperation: TypeOperation;
    dateCloture: Date | null;
    fkAgentCloture: string;
    motifCloture: string;
    description: string;
    status: boolean;
    fkAgentCreat: string;
    dateCreat: Date | null;
    initial: number;
    debit: number;
    credit: number;
    solde: number;
    copy(): CompteModel;
    static fromEntity(snapshot: any): CompteModel;
}
export declare enum TypeCompte {
    BILAN = "BILAN",
    GESTION = "GESTION"
}
export declare enum TypeOperation {
    DEBIT = "DEBIT",
    CREDIT = "CREDIT"
}
