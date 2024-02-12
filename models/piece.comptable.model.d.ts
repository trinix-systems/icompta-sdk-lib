import { EcritureModel } from "./ecriture.model";
import { JournalComptableModel } from "./journal.comptable.model";
import { OperationModel } from "./operation.model";
import { TypePieceModel } from "./type.piece.model";
import { ModelEntity } from "@trinix/app-utility";
export declare class PieceComptableModel extends ModelEntity {
    code: string;
    fkTypePiece: string;
    fkEntreprise: string;
    fkCentre: string;
    fkPieceParent: string;
    exercice: string;
    fkJournalComptable: string;
    fkOperation: string;
    fkCompte: string;
    reference: string;
    libelle: string;
    montant: number;
    montantDevise: number;
    fkDevise: string;
    tauxChange: number;
    ecritures: EcritureModel[];
    status: boolean;
    dateCreat: Date | null;
    dateValeur: Date | null;
    fkAgentCreat: string;
    dateEcheance: Date | null;
    dateValidation: Date | null;
    fkAgentValidation: string;
    avisValidation: AvisPieceComptable;
    mentionValidation: string;
    typePiece: TypePieceModel | null;
    operation: OperationModel | null;
    journalComptable: JournalComptableModel | null;
    static fromEntity(snapshot: any): PieceComptableModel;
    copy(): PieceComptableModel;
}
export declare enum AvisPieceComptable {
    REJETEE = "REJETEE",
    VALIDEE = "VALIDEE",
    EN_ATTENTE = "ATTENTE"
}
