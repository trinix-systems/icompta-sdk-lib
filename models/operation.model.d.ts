import { JournalComptableModel } from "./journal.comptable.model";
import { ModelEntity } from "@trinix/app-utility";
import { RegleEcritureModel } from "./regle.ecriture.model";
import { TypePieceModel } from "./type.piece.model";
export declare class OperationModel extends ModelEntity {
    code: string;
    fkEntreprise: string;
    fkCentre: string;
    fkJournal: string;
    fkTypePiece: string;
    description: string;
    fkAgentCreat: string;
    dateCreat: Date | null;
    status: boolean;
    joursEcheance: number;
    checkEcheance: boolean;
    mustTakePiecePrincipale: boolean;
    regles: RegleEcritureModel[];
    typePiece: TypePieceModel | null;
    journalComptable: JournalComptableModel | null;
    static fromEntity(snapshot: any): OperationModel;
    copy(): OperationModel;
}
