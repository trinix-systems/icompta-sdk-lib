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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.IComptaSdkService = void 0;
var common_1 = require("@nestjs/common");
var dotenv = require("dotenv");
var app_const_1 = require("./utilities/app.const");
var urls_const_1 = require("./utilities/urls.const");
var operation_model_1 = require("./models/operation.model");
var type_piece_model_1 = require("./models/type.piece.model");
var piece_comptable_model_1 = require("./models/piece.comptable.model");
var ecriture_model_1 = require("./models/ecriture.model");
var compte_model_1 = require("./models/compte.model");
var app_utility_1 = require("@trinix/app-utility");
var IComptaSdkService = /** @class */ (function (_super) {
    __extends(IComptaSdkService, _super);
    function IComptaSdkService() {
        var _this = _super.call(this) || this;
        _this._HOST = "";
        try {
            dotenv.config();
            _this._HOST = process.env.ICOMPTA_HOST || "";
        }
        catch (ex) {
            console.log(ex);
        }
        return _this;
    }
    IComptaSdkService.prototype.init = function (httpService) {
        this.httpService = httpService;
        console.log('HttpService injected:', httpService);
    };
    IComptaSdkService.prototype.doPost = function (url, username, token, params) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, result, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params.appKey = username;
                        ;
                        params.appMail = token;
                        console.log("iComptaSDK params : " + JSON.stringify(params));
                        obj = new app_utility_1.HttpDataResponse();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        console.log(this._HOST + urls_const_1.URLConst.getBaseUrl() + url);
                        app_utility_1.AppUtilityControl.controlValueString(this._HOST, "Configurez le host de iCompta");
                        app_utility_1.AppUtilityControl.controlValueString(username, "Renseignez le username iCompta");
                        app_utility_1.AppUtilityControl.controlValueString(token, "Renseignez le token iCompta");
                        return [4 /*yield*/, this.httpService.post(this._HOST + urls_const_1.URLConst.getBaseUrl() + url, params, {
                                auth: {
                                    username: username,
                                    password: token
                                }
                            }).toPromise()];
                    case 2:
                        result = _a.sent();
                        obj = result.data;
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        obj = new app_utility_1.HttpDataResponse();
                        if (ex_1 instanceof app_utility_1.ValueDataException) {
                            obj.error.errorDescription = ex_1.message;
                        }
                        else {
                            console.log(ex_1);
                            obj.error = new app_utility_1.ErrorResponse(app_utility_1.ErrorResponseStatus.KO, app_const_1.AppErrorConst.ERR_HTTP_UNKNOW);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, obj];
                }
            });
        });
    };
    IComptaSdkService.prototype.getOperation = function (code, username, token) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, params, result, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        obj = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        params = {
                            username: username,
                            token: token,
                            code: code
                        };
                        return [4 /*yield*/, this.doPost(URLS.getOperation(), username, token, params)];
                    case 2:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        if (this.error().errorCode == app_utility_1.ErrorResponseStatus.OK) {
                            obj = operation_model_1.OperationModel.fromEntity(result.response);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_2 = _a.sent();
                        this.error().clear();
                        if (ex_2 instanceof app_utility_1.ValueDataException) {
                            this.error().errorDescription = ex_2.message;
                        }
                        else {
                            this.error().errorDescription = app_const_1.AppErrorConst.ERR_HTTP_UNKNOW;
                            console.log(ex_2);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, obj];
                }
            });
        });
    };
    IComptaSdkService.prototype.getTypesPiece = function (username, token) {
        return __awaiter(this, void 0, void 0, function () {
            var list, params, result, _i, _a, snapshot, ex_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.error().clear();
                        list = null;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        params = {
                            username: username,
                            token: token
                        };
                        return [4 /*yield*/, this.doPost(URLS.getTypesPiece(), username, token, params)];
                    case 2:
                        result = _b.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        if (this.error().errorCode == app_utility_1.ErrorResponseStatus.OK) {
                            list = [];
                            for (_i = 0, _a = result.response; _i < _a.length; _i++) {
                                snapshot = _a[_i];
                                list.push(type_piece_model_1.TypePieceModel.fromEntity(snapshot));
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_3 = _b.sent();
                        this.error().clear();
                        if (ex_3 instanceof app_utility_1.ValueDataException) {
                            this.error().errorDescription = ex_3.message;
                        }
                        else {
                            this.error().errorDescription = app_const_1.AppErrorConst.ERR_HTTP_UNKNOW;
                            console.log(ex_3);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, list];
                }
            });
        });
    };
    IComptaSdkService.prototype.preparePieceComptable = function (operation, refDocument, date, libelle, montant, fkDevise, tauxChange, comptes, fkPiecePrincipale) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, _loop_1, i;
            return __generator(this, function (_a) {
                this.error().clear();
                obj = null;
                try {
                    if (operation == null)
                        throw new app_utility_1.ValueDataException("Veuillez renseignez l'opération et ses règles d'écritures");
                    app_utility_1.AppUtilityControl.controlValueList(operation.regles, "Aucune règle d'écriture n'a été trouvée dans cette opération");
                    if (operation.mustTakePiecePrincipale) {
                        app_utility_1.AppUtilityControl.controlValueString(fkPiecePrincipale, "Renseignez la pièce principale");
                    }
                    obj = new piece_comptable_model_1.PieceComptableModel();
                    obj.fkJournalComptable = operation.fkJournal;
                    obj.fkOperation = operation.code;
                    obj.fkEntreprise = operation.fkEntreprise;
                    obj.fkTypePiece = operation.fkTypePiece;
                    obj.fkDevise = fkDevise;
                    obj.fkEntreprise = operation.fkEntreprise;
                    obj.dateValeur = app_utility_1.AppUtilityConvert.convertyyyyMMddToDate(date);
                    obj.libelle = libelle;
                    obj.reference = refDocument;
                    obj.typePiece = operation.typePiece;
                    obj.montantDevise = montant;
                    obj.fkPieceParent = fkPiecePrincipale;
                    obj.tauxChange = tauxChange;
                    obj.montant = obj.montantDevise * tauxChange;
                    _loop_1 = function (i) {
                        var regle = operation.regles[i];
                        var ecriture = new ecriture_model_1.EcritureModel();
                        ecriture.compte = regle.compte;
                        ecriture.fkEntreprise = operation.fkEntreprise;
                        if (!regle.preciserCompte) {
                            ecriture.fkClasse = regle.fkClasse;
                            ecriture.fkCompte = regle.fkCompte;
                            ecriture.fkDevise = fkDevise;
                            ecriture.fkJournalComptable = obj.fkJournalComptable;
                            ecriture.fkOperation = obj.fkOperation;
                            ecriture.dateValeur = obj.dateValeur;
                            ecriture.tauxChange = obj.tauxChange;
                        }
                        else {
                            ecriture.fkClasse = regle.fkClasse;
                            var compte = comptes.filter(function (c) { return c.trim().toLowerCase().startsWith(regle.fkCompte); });
                            if (compte.length > 0)
                                ecriture.fkCompte = compte[0];
                            ecriture.fkDevise = fkDevise;
                            ecriture.fkJournalComptable = obj.fkJournalComptable;
                            ecriture.fkOperation = obj.fkOperation;
                            ecriture.dateValeur = obj.dateValeur;
                            ecriture.tauxChange = obj.tauxChange;
                            var index = comptes.findIndex(function (e) { return ecriture.fkCompte == e; });
                            console.log(comptes);
                            comptes.splice(index, 1);
                            console.log(comptes);
                        }
                        /*
                        if (regle.debiter) {
                            ecriture.debit = (obj.montant * regle.taux / 100);
                        } else {
                            ecriture.credit = (obj.montant * regle.taux / 100);
                        }
                        */
                        if (!regle.estContenu) {
                            ecriture.debit = (regle.debiter) ? (Number(((regle.taux * montant / 100)).toFixed(2))) : 0;
                            ecriture.credit = (!regle.debiter) ? (Number((regle.taux * montant / 100).toFixed(2))) : 0;
                        }
                        else {
                            if (regle.deduitPrincipal) {
                                if (regle.debiter) {
                                    ecriture.debit = (Number(((montant / (1 + ((100 - regle.taux) / 100)))).toFixed(2)));
                                    ecriture.credit = 0;
                                }
                                else {
                                    ecriture.credit = (Number(((montant / (1 + ((100 - regle.taux) / 100)))).toFixed(2)));
                                    ecriture.debit = 0;
                                }
                            }
                            else {
                                if (regle.debiter) {
                                    ecriture.debit = (Number((montant - (montant / (1 + (regle.taux / 100)))).toFixed(2)));
                                    ecriture.credit = 0;
                                }
                                else {
                                    ecriture.credit = (Number((montant - (montant / (1 + (regle.taux / 100)))).toFixed(2)));
                                    ecriture.debit = 0;
                                }
                            }
                            //ecriture.debit = (regle.debiter) ? (Number((montant - (montant / (1 + (regle.taux / 100)))).toFixed(2))) : 0;
                            //ecriture.credit = (!regle.debiter) ? (Number((montant - (montant / (1 + (regle.taux / 100)))).toFixed(2))) : 0;
                        }
                        obj.ecritures.push(ecriture);
                    };
                    for (i = 0; i < operation.regles.length; i++) {
                        _loop_1(i);
                    }
                    obj.operation = new operation_model_1.OperationModel();
                    obj.operation.code = obj.fkOperation;
                    obj.operation.description = operation.description;
                    obj.typePiece = operation.typePiece;
                    obj.fkJournalComptable = operation.fkJournal;
                    obj.journalComptable = operation.journalComptable;
                    this.error().errorCode = app_utility_1.ErrorResponseStatus.OK;
                    this.error().errorDescription = "Ecritures comptable préparées";
                }
                catch (ex) {
                    this.error().clear();
                    obj = null;
                    console.log(ex);
                    if (ex instanceof app_utility_1.ValueDataException) {
                        this.error().errorDescription = ex.message;
                    }
                    else {
                        this.error().errorDescription = app_const_1.AppErrorConst.ERR_HTTP_UNKNOW;
                        console.log("\n\n\n");
                        console.log(ex);
                        console.log("\n\n\n");
                    }
                }
                return [2 /*return*/, obj];
            });
        });
    };
    IComptaSdkService.prototype.getCompte = function (code, username, token) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, params, result, ex_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        obj = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        params = {
                            username: username,
                            token: token,
                            code: code
                        };
                        return [4 /*yield*/, this.doPost(URLS.getCompte(), username, token, params)];
                    case 2:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        if (this.error().errorCode == app_utility_1.ErrorResponseStatus.OK) {
                            obj = compte_model_1.CompteModel.fromEntity(result.response);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_4 = _a.sent();
                        this.error().clear();
                        if (ex_4 instanceof app_utility_1.ValueDataException) {
                            this.error().errorDescription = ex_4.message;
                        }
                        else {
                            this.error().errorDescription = app_const_1.AppErrorConst.ERR_HTTP_UNKNOW;
                            console.log(ex_4);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, obj];
                }
            });
        });
    };
    IComptaSdkService.prototype.getPieceComptable = function (code, username, token) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, params, result, ex_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        obj = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        params = {
                            username: username,
                            token: token,
                            code: code
                        };
                        return [4 /*yield*/, this.doPost(URLS.getPieceComptable(), username, token, params)];
                    case 2:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        if (this.error().errorCode == app_utility_1.ErrorResponseStatus.OK) {
                            obj = piece_comptable_model_1.PieceComptableModel.fromEntity(result.response);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_5 = _a.sent();
                        this.error().clear();
                        if (ex_5 instanceof app_utility_1.ValueDataException) {
                            this.error().errorDescription = ex_5.message;
                        }
                        else {
                            this.error().errorDescription = app_const_1.AppErrorConst.ERR_HTTP_UNKNOW;
                            console.log(ex_5);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, obj];
                }
            });
        });
    };
    IComptaSdkService.prototype.comptabiliser = function (payload, username, token) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, params, result, ex_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        obj = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        params = {
                            username: username,
                            token: token,
                            obj: payload
                        };
                        return [4 /*yield*/, this.doPost(URLS.comptebiliser(), username, token, params)];
                    case 2:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        if (this.error().errorCode == app_utility_1.ErrorResponseStatus.OK) {
                            obj = piece_comptable_model_1.PieceComptableModel.fromEntity(result.response);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_6 = _a.sent();
                        this.error().clear();
                        if (ex_6 instanceof app_utility_1.ValueDataException) {
                            this.error().errorDescription = ex_6.message;
                        }
                        else {
                            this.error().errorDescription = app_const_1.AppErrorConst.ERR_HTTP_UNKNOW;
                            console.log(ex_6);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, obj];
                }
            });
        });
    };
    IComptaSdkService = __decorate([
        (0, common_1.Injectable)()
    ], IComptaSdkService);
    return IComptaSdkService;
}(app_utility_1.IService));
exports.IComptaSdkService = IComptaSdkService;
var URLS = /** @class */ (function () {
    function URLS() {
    }
    URLS.getOperation = function () {
        return "settings/v1/operation/get";
    };
    URLS.getPieceComptable = function () {
        return "operation/v1/piece-comptable/get";
    };
    URLS.getCompte = function () {
        return "operation/v1/compte/get";
    };
    URLS.comptebiliser = function () {
        return "operation/v1/piece-comptable/edit";
    };
    URLS.getTypesPiece = function () {
        return "settings/v1/type-piece/list";
    };
    return URLS;
}());
