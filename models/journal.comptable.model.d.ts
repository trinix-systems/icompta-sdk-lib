import { ModelEntity } from "@trinix/app-utility";
export declare class JournalComptableModel extends ModelEntity {
    code: string;
    fkEntreprise: string;
    fkCentre: string;
    numero: string;
    description: string;
    status: boolean;
    dateCreat: Date | null;
    fkAgentCreat: string;
    copy(): JournalComptableModel;
    static fromEntity(snapshot: any): JournalComptableModel;
}
