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
exports.EcritureModel = void 0;
var compte_model_1 = require("./compte.model");
var journal_comptable_model_1 = require("./journal.comptable.model");
var app_utility_1 = require("@trinix/app-utility");
var EcritureModel = /** @class */ (function (_super) {
    __extends(EcritureModel, _super);
    function EcritureModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = "";
        _this.exercice = "";
        _this.fkEntreprise = "";
        _this.fkClasse = "";
        _this.fkCentre = "";
        _this.fkPieceComptable = "";
        _this.fkJournalComptable = "";
        _this.fkOperation = "";
        _this.fkCompte = "";
        _this.initial = 0;
        _this.debit = 0;
        _this.credit = 0;
        _this.solde = 0;
        _this.fkDevise = "";
        _this.tauxChange = 0;
        _this.validated = false;
        _this.dito = false;
        _this.status = false;
        _this.dateCreat = null;
        _this.dateValeur = null;
        _this.fkAgentCreat = "";
        _this.journalComptable = null;
        _this.compte = null;
        return _this;
    }
    EcritureModel.prototype.copy = function () {
        var obj = new EcritureModel();
        obj.fkClasse = this.fkClasse;
        obj.fkEntreprise = this.fkEntreprise;
        obj.fkCentre = this.fkCentre;
        obj.dateCreat = this.dateCreat;
        obj.fkDevise = this.fkDevise;
        obj.tauxChange = this.tauxChange;
        obj.validated = this.validated;
        obj.dito = this.dito;
        obj.fkAgentCreat = this.fkAgentCreat;
        obj.fkPieceComptable = this.fkPieceComptable;
        obj.fkOperation = this.fkOperation;
        obj.fkCompte = this.fkCompte;
        obj.dateValeur = this.dateValeur;
        this.fkJournalComptable = this.fkJournalComptable;
        obj.exercice = this.exercice;
        obj.status = this.status;
        obj.code = this.code;
        obj.credit = this.credit;
        obj.debit = this.debit;
        obj.initial = this.initial;
        obj.solde = this.solde;
        return obj;
    };
    EcritureModel.fromEntity = function (snapshot) {
        var obj = new EcritureModel();
        if (snapshot.fkClasse)
            obj.fkClasse = snapshot.fkClasse;
        if (snapshot.fkEntreprise)
            obj.fkEntreprise = snapshot.fkEntreprise;
        if (snapshot.fkCentre)
            obj.fkCentre = snapshot.fkCentre;
        if (snapshot.dateCreat)
            obj.dateCreat = snapshot.dateCreat;
        if (snapshot.fkDevise)
            obj.fkDevise = snapshot.fkDevise;
        if (snapshot.tauxChange)
            obj.tauxChange = Number(snapshot.tauxChange);
        if (snapshot.validated)
            obj.validated = snapshot.validated instanceof Boolean ? snapshot.validated : snapshot.validated > 0;
        if (snapshot.dito)
            obj.dito = snapshot.dito instanceof Boolean ? snapshot.dito : snapshot.dito > 0;
        if (snapshot.fkAgentCreat)
            obj.fkAgentCreat = snapshot.fkAgentCreat;
        if (snapshot.fkPieceComptable)
            obj.fkPieceComptable = snapshot.fkPieceComptable;
        if (snapshot.fkOperation)
            obj.fkOperation = snapshot.fkOperation;
        if (snapshot.fkCompte)
            obj.fkCompte = snapshot.fkCompte;
        if (snapshot.dateValeur)
            obj.dateValeur = new Date(snapshot.dateValeur);
        if (snapshot.fkJournalComptable)
            snapshot.fkJournalComptable = snapshot.fkJournalComptable;
        if (snapshot.exercice)
            obj.exercice = snapshot.exercice;
        if (snapshot.status)
            obj.status = snapshot.status instanceof Boolean ? snapshot.status : snapshot.status > 0;
        if (snapshot.code)
            obj.code = snapshot.code;
        if (snapshot.credit)
            obj.credit = Number(snapshot.credit);
        if (snapshot.debit)
            obj.debit = Number(snapshot.debit);
        if (snapshot.initial)
            obj.initial = Number(snapshot.initial);
        if (snapshot.solde)
            obj.solde = Number(snapshot.solde);
        if (snapshot.journalComptable) {
            obj.journalComptable = journal_comptable_model_1.JournalComptableModel.fromEntity(snapshot.journalComptable);
        }
        if (snapshot.compte) {
            obj.compte = compte_model_1.CompteModel.fromEntity(snapshot.compte);
        }
        return obj;
    };
    return EcritureModel;
}(app_utility_1.ModelEntity));
exports.EcritureModel = EcritureModel;
