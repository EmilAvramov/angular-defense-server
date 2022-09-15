"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = void 0;
const normalize = (entry) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54;
    return {
        deviceKey: (_a = entry.data) === null || _a === void 0 ? void 0 : _a.key,
        deviceName: (_b = entry.data) === null || _b === void 0 ? void 0 : _b.device_name,
        deviceImage: (_c = entry.data) === null || _c === void 0 ? void 0 : _c.device_image,
        connectivity: (_f = (_e = (_d = entry.data) === null || _d === void 0 ? void 0 : _d.more_specification[0]) === null || _e === void 0 ? void 0 : _e.data[0]) === null || _f === void 0 ? void 0 : _f.data[0],
        launchDate: (_g = entry.data) === null || _g === void 0 ? void 0 : _g.release_date,
        dimensions: (_k = (_j = (_h = entry.data) === null || _h === void 0 ? void 0 : _h.more_specification[2]) === null || _j === void 0 ? void 0 : _j.data[0]) === null || _k === void 0 ? void 0 : _k.data[0],
        weight: (_o = (_m = (_l = entry.data) === null || _l === void 0 ? void 0 : _l.more_specification[2]) === null || _m === void 0 ? void 0 : _m.data[1]) === null || _o === void 0 ? void 0 : _o.data[0],
        build: (_r = (_q = (_p = entry.data) === null || _p === void 0 ? void 0 : _p.more_specification[2]) === null || _q === void 0 ? void 0 : _q.data[2]) === null || _r === void 0 ? void 0 : _r.data[0],
        sim: (_u = (_t = (_s = entry.data) === null || _s === void 0 ? void 0 : _s.more_specification[2]) === null || _t === void 0 ? void 0 : _t.data[3]) === null || _u === void 0 ? void 0 : _u.data[0],
        display: (_x = (_w = (_v = entry.data) === null || _v === void 0 ? void 0 : _v.more_specification[3]) === null || _w === void 0 ? void 0 : _w.data[0]) === null || _x === void 0 ? void 0 : _x.data[0],
        size: (_0 = (_z = (_y = entry.data) === null || _y === void 0 ? void 0 : _y.more_specification[3]) === null || _z === void 0 ? void 0 : _z.data[1]) === null || _0 === void 0 ? void 0 : _0.data[0],
        resolution: (_3 = (_2 = (_1 = entry.data) === null || _1 === void 0 ? void 0 : _1.more_specification[3]) === null || _2 === void 0 ? void 0 : _2.data[2]) === null || _3 === void 0 ? void 0 : _3.data[0],
        protection: (_6 = (_5 = (_4 = entry.data) === null || _4 === void 0 ? void 0 : _4.more_specification[3]) === null || _5 === void 0 ? void 0 : _5.data[3]) === null || _6 === void 0 ? void 0 : _6.data[0],
        os: (_9 = (_8 = (_7 = entry.data) === null || _7 === void 0 ? void 0 : _7.more_specification[4]) === null || _8 === void 0 ? void 0 : _8.data[0]) === null || _9 === void 0 ? void 0 : _9.data[0],
        chipset: (_12 = (_11 = (_10 = entry.data) === null || _10 === void 0 ? void 0 : _10.more_specification[4]) === null || _11 === void 0 ? void 0 : _11.data[1]) === null || _12 === void 0 ? void 0 : _12.data[0],
        cpu: (_15 = (_14 = (_13 = entry.data) === null || _13 === void 0 ? void 0 : _13.more_specification[4]) === null || _14 === void 0 ? void 0 : _14.data[2]) === null || _15 === void 0 ? void 0 : _15.data[0],
        gpu: (_18 = (_17 = (_16 = entry.data) === null || _16 === void 0 ? void 0 : _16.more_specification[4]) === null || _17 === void 0 ? void 0 : _17.data[3]) === null || _18 === void 0 ? void 0 : _18.data[0],
        cardSlot: (_21 = (_20 = (_19 = entry.data) === null || _19 === void 0 ? void 0 : _19.more_specification[5]) === null || _20 === void 0 ? void 0 : _20.data[0]) === null || _21 === void 0 ? void 0 : _21.data[0],
        internalStorage: (_24 = (_23 = (_22 = entry.data) === null || _22 === void 0 ? void 0 : _22.more_specification[5]) === null || _23 === void 0 ? void 0 : _23.data[1]) === null || _24 === void 0 ? void 0 : _24.data[0],
        cameraMain: (_27 = (_26 = (_25 = entry.data) === null || _25 === void 0 ? void 0 : _25.more_specification[6]) === null || _26 === void 0 ? void 0 : _26.data[0]) === null || _27 === void 0 ? void 0 : _27.data[0],
        videoMain: (_30 = (_29 = (_28 = entry.data) === null || _28 === void 0 ? void 0 : _28.more_specification[6]) === null || _29 === void 0 ? void 0 : _29.data[2]) === null || _30 === void 0 ? void 0 : _30.data[0],
        cameraSelfie: (_33 = (_32 = (_31 = entry.data) === null || _31 === void 0 ? void 0 : _31.more_specification[7]) === null || _32 === void 0 ? void 0 : _32.data[0]) === null || _33 === void 0 ? void 0 : _33.data[0],
        videoSelfie: (_36 = (_35 = (_34 = entry.data) === null || _34 === void 0 ? void 0 : _34.more_specification[7]) === null || _35 === void 0 ? void 0 : _35.data[2]) === null || _36 === void 0 ? void 0 : _36.data[0],
        speakers: (_39 = (_38 = (_37 = entry.data) === null || _37 === void 0 ? void 0 : _37.more_specification[8]) === null || _38 === void 0 ? void 0 : _38.data[2]) === null || _39 === void 0 ? void 0 : _39.data[0],
        jack: (_42 = (_41 = (_40 = entry.data) === null || _40 === void 0 ? void 0 : _40.more_specification[8]) === null || _41 === void 0 ? void 0 : _41.data[1]) === null || _42 === void 0 ? void 0 : _42.data[0],
        features: (_45 = (_44 = (_43 = entry.data) === null || _43 === void 0 ? void 0 : _43.more_specification[10]) === null || _44 === void 0 ? void 0 : _44.data[0]) === null || _45 === void 0 ? void 0 : _45.data[0],
        batteryCharge: (_48 = (_47 = (_46 = entry.data) === null || _46 === void 0 ? void 0 : _46.more_specification[11]) === null || _47 === void 0 ? void 0 : _47.data[1]) === null || _48 === void 0 ? void 0 : _48.data[0],
        batteryType: (_51 = (_50 = (_49 = entry.data) === null || _49 === void 0 ? void 0 : _49.more_specification[11]) === null || _50 === void 0 ? void 0 : _50.data[0]) === null || _51 === void 0 ? void 0 : _51.data[0],
        price: (_54 = (_53 = (_52 = entry.data) === null || _52 === void 0 ? void 0 : _52.more_specification[12]) === null || _53 === void 0 ? void 0 : _53.data[4]) === null || _54 === void 0 ? void 0 : _54.data[0],
    };
};
exports.normalize = normalize;
