import { HttpService } from '@nestjs/axios';
import { OperationModel } from './models/operation.model';
import { TypePieceModel } from './models/type.piece.model';
import { PieceComptableModel } from './models/piece.comptable.model';
import { CompteModel } from './models/compte.model';
import { IService } from '@trinix/app-utility';
export declare class IComptaSdkService extends IService {
    private httpService;
    constructor();
    _HOST: string;
    init(httpService: HttpService): void;
    private doPost;
    getOperation(code: string, username: string, token: string): Promise<OperationModel | null>;
    getTypesPiece(username: string, token: string): Promise<TypePieceModel[] | null>;
    preparePieceComptable(operation: OperationModel, refDocument: string, date: string, libelle: string, montant: number, fkDevise: string, tauxChange: number, comptes: string[], fkPiecePrincipale: string): Promise<PieceComptableModel | null>;
    getCompte(code: string, username: string, token: string): Promise<CompteModel | null>;
    getPieceComptable(code: string, username: string, token: string): Promise<PieceComptableModel | null>;
    comptabiliser(payload: PieceComptableModel, username: string, token: string): Promise<PieceComptableModel | null>;
}
