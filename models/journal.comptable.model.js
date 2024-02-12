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
exports.JournalComptableModel = void 0;
var app_utility_1 = require("@trinix/app-utility");
var JournalComptableModel = /** @class */ (function (_super) {
    __extends(JournalComptableModel, _super);
    function JournalComptableModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = "";
        _this.fkEntreprise = "";
        _this.fkCentre = "";
        _this.numero = "";
        _this.description = "";
        _this.status = false;
        _this.dateCreat = null;
        _this.fkAgentCreat = "";
        return _this;
    }
    JournalComptableModel.prototype.copy = function () {
        var obj = new JournalComptableModel();
        obj.code = this.code;
        obj.fkEntreprise = this.fkEntreprise;
        obj.fkCentre = this.fkCentre;
        obj.description = this.description;
        obj.status = this.status;
        obj.numero = this.numero;
        obj.dateCreat = this.dateCreat;
        obj.fkAgentCreat = this.fkAgentCreat;
        return obj;
    };
    JournalComptableModel.fromEntity = function (snapshot) {
        var obj = new JournalComptableModel();
        if (snapshot.code)
            obj.code = snapshot.code;
        if (snapshot.fkEntreprise)
            obj.fkEntreprise = snapshot.fkEntreprise;
        if (snapshot.fkCentre)
            obj.fkCentre = snapshot.fkCentre;
        if (snapshot.description)
            obj.description = snapshot.description;
        if (snapshot.numero)
            obj.numero = snapshot.numero;
        if (snapshot.status)
            obj.status = snapshot.status instanceof Boolean ? snapshot.status : snapshot.status > 0;
        if (snapshot.dateCreat)
            obj.dateCreat = new Date(snapshot.dateCreat);
        if (snapshot.fkAgentCreat)
            obj.fkAgentCreat = snapshot.fkAgentCreat;
        return obj;
    };
    return JournalComptableModel;
}(app_utility_1.ModelEntity));
exports.JournalComptableModel = JournalComptableModel;
