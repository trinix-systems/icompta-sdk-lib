import { ModelEntity } from "@trinix/app-utility";
export declare class TypePieceModel extends ModelEntity {
    code: string;
    description: string;
    fkAgentCreat: string;
    dateCreat: Date | null;
    status: boolean;
    static fromEntity(snapshot: any): TypePieceModel;
    copy(): TypePieceModel;
}
