"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AvisPieceComptable = exports.PieceComptableModel = void 0;
var ecriture_model_1 = require("./ecriture.model");
var journal_comptable_model_1 = require("./journal.comptable.model");
var operation_model_1 = require("./operation.model");
var type_piece_model_1 = require("./type.piece.model");
var app_utility_1 = require("@trinix/app-utility");
var PieceComptableModel = /** @class */ (function (_super) {
    __extends(PieceComptableModel, _super);
    function PieceComptableModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = "";
        _this.fkTypePiece = "";
        _this.fkEntreprise = "";
        _this.fkCentre = "";
        _this.fkPieceParent = "";
        _this.exercice = "";
        _this.fkJournalComptable = "";
        _this.fkOperation = "";
        _this.fkCompte = "";
        _this.reference = "";
        _this.libelle = "";
        _this.montant = 0;
        _this.montantDevise = 0;
        _this.fkDevise = "";
        _this.tauxChange = 0;
        _this.ecritures = [];
        _this.status = false;
        _this.dateCreat = null;
        _this.dateValeur = null;
        _this.fkAgentCreat = "";
        _this.dateEcheance = null;
        _this.dateValidation = null;
        _this.fkAgentValidation = "";
        _this.avisValidation = AvisPieceComptable.EN_ATTENTE;
        _this.mentionValidation = "";
        _this.typePiece = null;
        _this.operation = null;
        _this.journalComptable = null;
        return _this;
    }
    PieceComptableModel.fromEntity = function (snapshot) {
        var obj = new PieceComptableModel();
        if (snapshot.code)
            obj.code = snapshot.code;
        if (snapshot.fkEntreprise)
            obj.fkEntreprise = snapshot.fkEntreprise;
        if (snapshot.fkCentre)
            obj.fkCentre = snapshot.fkCentre;
        if (snapshot.fkPieceParent)
            obj.fkPieceParent = snapshot.fkPieceParent;
        if (snapshot.fkTypePiece)
            obj.fkTypePiece = snapshot.fkTypePiece;
        if (snapshot.fkCompte)
            obj.fkCompte = snapshot.fkCompte;
        if (snapshot.fkDevise)
            obj.fkDevise = snapshot.fkDevise;
        if (snapshot.fkJournalComptable)
            obj.fkJournalComptable = snapshot.fkJournalComptable;
        if (snapshot.fkOperation)
            obj.fkOperation = snapshot.fkOperation;
        if (snapshot.exercice)
            obj.exercice = snapshot.exercice;
        if (snapshot.montant)
            obj.montant = Number(snapshot.montant);
        if (snapshot.montantDevise)
            obj.montantDevise = Number(snapshot.montantDevise);
        if (snapshot.reference)
            obj.reference = snapshot.reference;
        if (snapshot.libelle)
            obj.libelle = snapshot.libelle;
        if (snapshot.tauxChange)
            obj.tauxChange = Number(snapshot.tauxChange);
        if (snapshot.fkAgentValidation)
            obj.fkAgentValidation = snapshot.fkAgentValidation;
        if (snapshot.avisValidation)
            obj.avisValidation = snapshot.avisValidation;
        if (snapshot.mentionValidation)
            obj.mentionValidation = snapshot.mentionValidation;
        if (snapshot.dateValidation)
            obj.dateValidation = new Date(snapshot.dateValidation);
        if (snapshot.dateValeur)
            obj.dateValeur = new Date(snapshot.dateValeur);
        if (snapshot.dateEcheance)
            obj.dateEcheance = new Date(snapshot.dateEcheance);
        if (snapshot.status)
            obj.status = snapshot.status instanceof Boolean ? snapshot.status : snapshot.status;
        if (snapshot.fkAgentCreat)
            obj.fkAgentCreat = snapshot.fkAgentCreat;
        if (snapshot.dateCreat)
            obj.dateCreat = new Date(snapshot.dateCreat);
        if (snapshot.typePiece)
            obj.typePiece = type_piece_model_1.TypePieceModel.fromEntity(snapshot.typePiece);
        if (snapshot.journalComptable)
            obj.journalComptable = journal_comptable_model_1.JournalComptableModel.fromEntity(snapshot.journalComptable);
        if (snapshot.ecritures) {
            for (var _i = 0, _a = snapshot.ecritures; _i < _a.length; _i++) {
                var compte = _a[_i];
                obj.ecritures.push(ecriture_model_1.EcritureModel.fromEntity(compte));
            }
        }
        if (snapshot.operation) {
            obj.operation = operation_model_1.OperationModel.fromEntity(snapshot.operation);
        }
        return obj;
    };
    PieceComptableModel.prototype.copy = function () {
        var obj = new PieceComptableModel();
        obj.code = this.code;
        obj.fkEntreprise = this.fkEntreprise;
        obj.fkCentre = this.fkCentre;
        obj.fkTypePiece = this.fkTypePiece;
        obj.dateEcheance = this.dateEcheance;
        obj.fkCompte = this.fkCompte;
        obj.fkDevise = this.fkDevise;
        obj.fkJournalComptable = this.fkJournalComptable;
        obj.fkOperation = this.fkOperation;
        obj.exercice = this.exercice;
        obj.montant = this.montant;
        obj.montantDevise = this.montantDevise;
        obj.reference = this.reference;
        obj.libelle = this.libelle;
        obj.tauxChange = this.tauxChange;
        obj.fkPieceParent = this.fkPieceParent;
        obj.fkAgentValidation = this.fkAgentValidation;
        obj.avisValidation = this.avisValidation;
        obj.mentionValidation = this.mentionValidation;
        obj.dateValidation = this.dateValidation;
        obj.dateValeur = this.dateValeur;
        obj.status = this.status;
        obj.fkAgentCreat = this.fkAgentCreat;
        obj.dateCreat = this.dateCreat;
        return obj;
    };
    return PieceComptableModel;
}(app_utility_1.ModelEntity));
exports.PieceComptableModel = PieceComptableModel;
var AvisPieceComptable;
(function (AvisPieceComptable) {
    AvisPieceComptable["REJETEE"] = "REJETEE";
    AvisPieceComptable["VALIDEE"] = "VALIDEE";
    AvisPieceComptable["EN_ATTENTE"] = "ATTENTE";
})(AvisPieceComptable = exports.AvisPieceComptable || (exports.AvisPieceComptable = {}));
