import { CompteModel } from "./compte.model";
import { JournalComptableModel } from "./journal.comptable.model";
import { ModelEntity } from "@trinix/app-utility";
export declare class EcritureModel extends ModelEntity {
    code: string;
    exercice: string;
    fkEntreprise: string;
    fkClasse: string;
    fkCentre: string;
    fkPieceComptable: string;
    fkJournalComptable: string;
    fkOperation: string;
    fkCompte: string;
    initial: number;
    debit: number;
    credit: number;
    solde: number;
    fkDevise: string;
    tauxChange: number;
    validated: boolean;
    dito: boolean;
    status: boolean;
    dateCreat: Date | null;
    dateValeur: Date | null;
    fkAgentCreat: string;
    journalComptable: JournalComptableModel | null;
    compte: CompteModel | null;
    copy(): EcritureModel;
    static fromEntity(snapshot: any): EcritureModel;
}