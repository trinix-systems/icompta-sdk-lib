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
exports.OperationModel = void 0;
var journal_comptable_model_1 = require("./journal.comptable.model");
var app_utility_1 = require("@trinix/app-utility");
var regle_ecriture_model_1 = require("./regle.ecriture.model");
var type_piece_model_1 = require("./type.piece.model");
var OperationModel = /** @class */ (function (_super) {
    __extends(OperationModel, _super);
    function OperationModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = "";
        _this.fkEntreprise = "";
        _this.fkCentre = "";
        _this.fkJournal = "";
        _this.fkTypePiece = "";
        _this.description = "";
        _this.fkAgentCreat = "";
        _this.dateCreat = null;
        _this.status = false;
        _this.joursEcheance = 0;
        _this.checkEcheance = false;
        _this.mustTakePiecePrincipale = false;
        _this.regles = [];
        _this.typePiece = null;
        _this.journalComptable = null;
        return _this;
    }
    OperationModel.fromEntity = function (snapshot) {
        var obj = new OperationModel();
        if (snapshot.code)
            obj.code = snapshot.code;
        if (snapshot.fkEntreprise)
            obj.fkEntreprise = snapshot.fkEntreprise;
        if (snapshot.fkCentre)
            obj.fkCentre = snapshot.fkCentre;
        if (snapshot.fkTypePiece)
            obj.fkTypePiece = snapshot.fkTypePiece;
        if (snapshot.fkJournal)
            obj.fkJournal = snapshot.fkJournal;
        if (snapshot.joursEcheance)
            obj.joursEcheance = Number(snapshot.joursEcheance);
        if (snapshot.checkEcheance)
            obj.checkEcheance = snapshot.checkEcheance instanceof Boolean ? snapshot.checkEcheance : snapshot.checkEcheance > 0;
        if (snapshot.mustTakePiecePrincipale)
            obj.mustTakePiecePrincipale = snapshot.mustTakePiecePrincipale instanceof Boolean ? snapshot.mustTakePiecePrincipale : snapshot.mustTakePiecePrincipale > 0;
        if (snapshot.description)
            obj.description = snapshot.description;
        if (snapshot.fkAgentCreat)
            obj.fkAgentCreat = snapshot.fkAgentCreat;
        if (snapshot.dateCreat)
            obj.dateCreat = snapshot.dateCreat;
        if (snapshot.status)
            obj.status = snapshot.status instanceof Boolean ? snapshot.status : snapshot.status > 0;
        if (snapshot.regles) {
            try {
                for (var _i = 0, _a = snapshot.regles; _i < _a.length; _i++) {
                    var regle = _a[_i];
                    obj.regles.push(regle_ecriture_model_1.RegleEcritureModel.fromEntity(regle));
                }
            }
            catch (ex) {
                console.log(ex);
            }
        }
        if (snapshot.journalComptable) {
            try {
                obj.journalComptable = journal_comptable_model_1.JournalComptableModel.fromEntity(snapshot.journalComptable);
            }
            catch (ex) {
                console.log(ex);
            }
        }
        if (snapshot.typePiece) {
            try {
                obj.typePiece = type_piece_model_1.TypePieceModel.fromEntity(snapshot.typePiece);
            }
            catch (ex) {
                console.log(ex);
            }
        }
        return obj;
    };
    OperationModel.prototype.copy = function () {
        var obj = new OperationModel();
        obj.code = this.code;
        obj.fkEntreprise = this.fkEntreprise;
        obj.fkCentre = this.fkCentre;
        obj.fkJournal = this.fkJournal;
        obj.fkTypePiece = this.fkTypePiece;
        obj.checkEcheance = this.checkEcheance;
        obj.joursEcheance = this.joursEcheance;
        obj.description = this.description;
        obj.fkAgentCreat = this.fkAgentCreat;
        obj.dateCreat = this.dateCreat;
        obj.mustTakePiecePrincipale = this.mustTakePiecePrincipale;
        obj.status = this.status;
        return obj;
    };
    return OperationModel;
}(app_utility_1.ModelEntity));
exports.OperationModel = OperationModel;
