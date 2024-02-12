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
exports.TypeOperation = exports.TypeCompte = exports.CompteModel = void 0;
var app_utility_1 = require("@trinix/app-utility");
var CompteModel = /** @class */ (function (_super) {
    __extends(CompteModel, _super);
    function CompteModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = "";
        _this.fkEntreprise = "";
        _this.fkCentre = "";
        _this.fkClasse = "";
        _this.fkPoste = "";
        _this.fkCompteParent = "";
        _this.numero = "";
        _this.typeCompte = TypeCompte.BILAN;
        _this.typeOperation = TypeOperation.DEBIT;
        _this.dateCloture = null;
        _this.fkAgentCloture = "";
        _this.motifCloture = "";
        _this.description = "";
        _this.status = false;
        _this.fkAgentCreat = "";
        _this.dateCreat = null;
        _this.initial = 0;
        _this.debit = 0;
        _this.credit = 0;
        _this.solde = 0;
        return _this;
    }
    CompteModel.prototype.copy = function () {
        var obj = new CompteModel();
        obj.fkClasse = this.fkClasse;
        obj.fkPoste = this.fkPoste;
        obj.fkCompteParent = this.fkCompteParent;
        obj.fkEntreprise = this.fkEntreprise;
        obj.fkCentre = this.fkCentre;
        obj.typeCompte = this.typeCompte;
        obj.typeOperation = this.typeOperation;
        obj.numero = this.numero;
        obj.motifCloture = this.motifCloture;
        obj.dateCloture = this.dateCloture;
        obj.dateCreat = this.dateCreat;
        obj.fkAgentCloture = this.fkAgentCloture;
        obj.fkAgentCreat = this.fkAgentCreat;
        obj.description = this.description;
        obj.status = this.status;
        obj.code = this.code;
        obj.credit = this.credit;
        obj.debit = this.debit;
        obj.initial = this.initial;
        obj.solde = this.solde;
        return obj;
    };
    CompteModel.fromEntity = function (snapshot) {
        var obj = new CompteModel();
        if (snapshot.fkClasse)
            obj.fkClasse = snapshot.fkClasse;
        if (snapshot.numero)
            obj.numero = snapshot.numero;
        if (snapshot.fkPoste)
            obj.fkPoste = snapshot.fkPoste;
        if (snapshot.fkCompteParent)
            obj.fkCompteParent = snapshot.fkCompteParent;
        if (snapshot.fkEntreprise)
            obj.fkEntreprise = snapshot.fkEntreprise;
        if (snapshot.fkCentre)
            obj.fkCentre = snapshot.fkCentre;
        if (snapshot.typeCompte)
            obj.typeCompte = snapshot.typeCompte;
        if (snapshot.typeOperation)
            obj.typeOperation = snapshot.typeOperation;
        if (snapshot.motifCloture)
            obj.motifCloture = snapshot.motifCloture;
        if (snapshot.dateCloture)
            obj.dateCloture = new Date(snapshot.dateCloture);
        if (snapshot.fkAgentCloture)
            obj.fkAgentCloture = snapshot.fkAgentCloture;
        if (snapshot.description)
            obj.description = snapshot.description;
        if (snapshot.fkAgentCreat)
            obj.fkAgentCreat = snapshot.fkAgentCreat;
        if (snapshot.dateCreat)
            obj.dateCreat = new Date(snapshot.dateCreat);
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
        return obj;
    };
    return CompteModel;
}(app_utility_1.ModelEntity));
exports.CompteModel = CompteModel;
var TypeCompte;
(function (TypeCompte) {
    TypeCompte["BILAN"] = "BILAN";
    TypeCompte["GESTION"] = "GESTION";
})(TypeCompte = exports.TypeCompte || (exports.TypeCompte = {}));
var TypeOperation;
(function (TypeOperation) {
    TypeOperation["DEBIT"] = "DEBIT";
    TypeOperation["CREDIT"] = "CREDIT";
})(TypeOperation = exports.TypeOperation || (exports.TypeOperation = {}));
