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
exports.RegleEcritureModel = void 0;
var compte_model_1 = require("./compte.model");
var app_utility_1 = require("@trinix/app-utility");
var RegleEcritureModel = /** @class */ (function (_super) {
    __extends(RegleEcritureModel, _super);
    function RegleEcritureModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 0;
        _this.fkEntreprise = "";
        _this.fkCentre = "";
        _this.ordre = 0;
        _this.fkOperation = "";
        _this.fkClasse = "";
        _this.fkCompte = "";
        _this.preciserCompte = false;
        _this.taux = 100;
        _this.debiter = false;
        _this.estContenu = false;
        _this.deduitPrincipal = false;
        _this.status = false;
        _this.dateCreat = null;
        _this.fkAgentCreat = "";
        _this.compte = null;
        return _this;
    }
    RegleEcritureModel.fromEntity = function (snapshot) {
        var obj = new RegleEcritureModel();
        if (snapshot.id)
            obj.id = Number(snapshot.id);
        if (snapshot.fkEntreprise)
            obj.fkEntreprise = snapshot.fkEntreprise;
        if (snapshot.fkCentre)
            obj.fkCentre = snapshot.fkCentre;
        if (snapshot.fkOperation)
            obj.fkOperation = snapshot.fkOperation;
        if (snapshot.debiter)
            obj.debiter = snapshot.debiter instanceof Boolean ? snapshot.debiter : snapshot.debiter > 0;
        if (snapshot.fkClasse)
            obj.fkClasse = snapshot.fkClasse;
        if (snapshot.fkCompte)
            obj.fkCompte = snapshot.fkCompte;
        if (snapshot.taux)
            obj.taux = Number(snapshot.taux);
        if (snapshot.preciserCompte)
            obj.preciserCompte = snapshot.preciserCompte instanceof Boolean ? snapshot.preciserCompte : snapshot.preciserCompte > 0;
        if (snapshot.ordre)
            obj.ordre = Number(snapshot.ordre);
        if (snapshot.status)
            obj.status = snapshot.status instanceof Boolean ? snapshot.status : snapshot.status > 0;
        if (snapshot.dateCreat)
            obj.dateCreat = new Date(snapshot.dateCreat);
        if (snapshot.fkAgentCreat)
            obj.fkAgentCreat = snapshot.fkAgentCreat;
        if (snapshot.deduitPrincipal)
            obj.deduitPrincipal = snapshot.deduitPrincipal instanceof Boolean ? snapshot.deduitPrincipal : snapshot.deduitPrincipal > 0;
        if (snapshot.estContenu)
            obj.estContenu = snapshot.estContenu instanceof Boolean ? snapshot.estContenu : snapshot.estContenu > 0;
        if (snapshot.compte)
            obj.compte = compte_model_1.CompteModel.fromEntity(snapshot.compte);
        return obj;
    };
    RegleEcritureModel.prototype.copy = function () {
        var obj = new RegleEcritureModel();
        obj.id = this.id;
        obj.fkEntreprise = this.fkEntreprise;
        obj.fkCentre = this.fkCentre;
        obj.fkOperation = this.fkOperation;
        obj.fkClasse = this.fkClasse;
        obj.fkCompte = this.fkCompte;
        obj.deduitPrincipal = this.deduitPrincipal;
        obj.estContenu = this.estContenu;
        obj.taux = this.taux;
        obj.preciserCompte = this.preciserCompte;
        obj.ordre = this.ordre;
        obj.status = this.status;
        obj.dateCreat = this.dateCreat;
        obj.fkAgentCreat = this.fkAgentCreat;
        return obj;
    };
    return RegleEcritureModel;
}(app_utility_1.ModelEntity));
exports.RegleEcritureModel = RegleEcritureModel;
