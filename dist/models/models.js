"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.PostingModel = exports.DeviceModel = exports.BrandModel = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const Brand_interface_1 = require("../interfaces/Brand.interface");
const Device_interface_1 = require("../interfaces/Device.interface");
const Posting_interface_1 = require("../interfaces/Posting.interface");
const User_interface_1 = require("../interfaces/User.interface");
exports.BrandModel = Brand_interface_1.Brand.init({
    brandId: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    brandKey: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    brandName: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    timestamps: false,
});
exports.DeviceModel = Device_interface_1.Device.init({
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
    },
    deviceKey: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    deviceName: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    deviceImage: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    connectivity: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    launchDate: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    dimensions: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    weight: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    build: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    sim: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    display: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    size: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    resolution: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    protection: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    os: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    chipset: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    cpu: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    gpu: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    cardSlot: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    internalStorage: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    cameraMain: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    videoMain: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    cameraSelfie: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    videoSelfie: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    speakers: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    jack: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    features: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    batteryType: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    batteryCharge: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
}, { sequelize: database_1.default, timestamps: false });
exports.PostingModel = Posting_interface_1.Posting.init({
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
    },
    userEmail: {
        type: sequelize_1.DataTypes.TEXT,
        unique: false,
        allowNull: false,
    },
    deviceKey: {
        type: sequelize_1.DataTypes.TEXT,
        unique: false,
        allowNull: false,
    },
    comments: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
}, { sequelize: database_1.default, timestamps: false });
exports.UserModel = User_interface_1.User.init({
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
    },
    email: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    firstName: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    city: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, { sequelize: database_1.default, timestamps: false });
exports.DeviceModel.hasMany(exports.PostingModel, {
    sourceKey: 'deviceKey',
    foreignKey: 'deviceKey'
});
exports.UserModel.hasMany(exports.PostingModel, {
    sourceKey: 'email',
    foreignKey: 'userEmail',
});
exports.PostingModel.belongsTo(exports.DeviceModel, {
    foreignKey: 'deviceKey',
    targetKey: 'deviceKey',
});
exports.PostingModel.belongsTo(exports.UserModel, {
    foreignKey: 'userEmail',
    targetKey: 'email',
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.sync();
}))();
