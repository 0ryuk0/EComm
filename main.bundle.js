webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,body{\r\n    margin: 0;\r\n}\r\n\r\napp-header span{\r\n    font-size: 15px;\r\n    margin-right: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n/* The side navigation menu */\r\n.sidenav {\r\n    height: 92vh; /* 100% Full-height */\r\n    width: 0; /* 0 width - change this with JavaScript */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Stay on top */\r\n    top: 8vh;\r\n    left: 0;\r\n    background-color: #f5f4f4; /* Black*/\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    padding: 16px 0px 16px 0px; /* Place content 60px from the top */\r\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s\r\n}\r\n\r\n.sidenav a:hover, .offcanvas a:focus{\r\n    color: darkgray;\r\n}\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n.sidenav .cart{\r\n    padding: 0px 10px 0 10px;\r\n    border-bottom: 1px solid #dbdbdb;\r\n}\r\n.menu-right{\r\n    float: right;\r\n    color: #355e7d;\r\n    cursor: pointer;\r\n}\r\n.filter-options{\r\n    height: 0px;\r\n    margin-top: -100vh;\r\n    /* transition: .5s; */\r\n}\r\n.filter-options p:nth-child(1){\r\n    padding: 3px 10px 3px 10px;\r\n    color: #e5e5e5;\r\n    background-color: #355e7d;\r\n    font-size: 12px;\r\n}\r\n\r\n.filter-options p{\r\n    padding: 3px 10px 3px 20px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin: 1px;\r\n}\r\n.sidenav .filter{\r\n    padding: 10px 10px 0 10px;\r\n    border-bottom: 1px solid #dbdbdb;\r\n    min-height: 40px;\r\n}\r\n\r\n#main {\r\n    transition: margin-left .5s;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n\r\n.active{\r\n    color: #355e7d;\r\n    background-color: #ccccce;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header>\n    <span class=\"glyphicon glyphicon-menu-hamburger\" (click)=\"toggleNav()\">\n    </span>\n</app-header>\n<div id=\"mySidenav\" class=\"sidenav\">\n    <div class=\"cart\">\n        <p>Profile <span class=\"glyphicon glyphicon-menu-right menu-right\"></span></p>\n    </div>\n    <div class=\"filter\">\n        <p> Filter <span class=\"glyphicon glyphicon-filter menu-right\" (click)=\"toggleFilter()\"></span></p>\n        <div id=\"filter-accordian\" class=\"filter-options row\">\n            <p>Categories</p>\n            <p [class.active]=\"filter.isSports\" (click)=\"filterWith('sports', 'isSports')\">Sports</p>\n            <p [class.active]=\"filter.isClothing\" (click)=\"filterWith('clothing', 'isClothing')\">Clothing</p>\n            <p [class.active]=\"filter.isGrooming\" (click)=\"filterWith('grooming', 'isGrooming')\">Grooming</p>\n            <p [class.active]=\"filter.isAccessories\" (click)=\"filterWith('accessories', 'isAccessories')\">Accessories</p>\n            <p [class.active]=\"filter.isElectronics\" (click)=\"filterWith('electronics', 'isElectronics')\">Electronics</p>\n        </div>\n    </div>\n</div>\n<div id=\"main\">\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_product_service__ = __webpack_require__("../../../../../src/app/core/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_router, _productService) {
        this._router = _router;
        this._productService = _productService;
        this.title = 'e-comm Prototype';
        this.filterObj = [];
        this.filter = {};
    }
    ;
    AppComponent.prototype.toggleNav = function () {
        if (document.getElementById("mySidenav").style.width == "250px") {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
        else {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
    };
    ;
    AppComponent.prototype.toggleFilter = function () {
        if (document.getElementById("filter-accordian").style.height == "auto") {
            document.getElementById("filter-accordian").style.height = "0";
            document.getElementById("filter-accordian").style.marginTop = "-100vh";
        }
        else {
            document.getElementById("filter-accordian").style.height = "auto";
            document.getElementById("filter-accordian").style.marginTop = "10px";
        }
    };
    ;
    AppComponent.prototype.filterWith = function (key, active) {
        console.log(key, this.filterObj.indexOf(key));
        if (this.filterObj.indexOf(key) === -1) {
            this.filterObj.push(key);
            this.filter[active] = true;
        }
        else {
            this.filterObj.splice(this.filterObj.indexOf(key), 1);
            this.filter[active] = false;
        }
        console.log(this.filterObj);
        this._productService.filterArgArray = this.filterObj;
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_product_service__["a" /* ProductService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__features_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/features/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__features_product_details_product_details_component__ = __webpack_require__("../../../../../src/app/features/product-details/product-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__features_login_login_component__ = __webpack_require__("../../../../../src/app/features/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_product_service__ = __webpack_require__("../../../../../src/app/core/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_carousel_product_carousel_component__ = __webpack_require__("../../../../../src/app/shared/carousel/product-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_modal_modal_component__ = __webpack_require__("../../../../../src/app/shared/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__features_cart_cart_component__ = __webpack_require__("../../../../../src/app/features/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_login_service__ = __webpack_require__("../../../../../src/app/core/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__shared_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__shared_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__features_product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__features_product_details_product_details_component__["a" /* ProductDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__features_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shared_carousel_product_carousel_component__["a" /* ProductCarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared_modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_14__features_cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_16__shared_pipes_filter_pipe__["a" /* ProductFilter */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* AppRouting */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__core_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_15__core_login_service__["a" /* LoginService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APP_ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/features/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_login_login_component__ = __webpack_require__("../../../../../src/app/features/login/login.component.ts");



var APP_ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__features_login_login_component__["a" /* LoginComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_1__features_product_list_product_list_component__["a" /* ProductListComponent */] }
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/core/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    LoginService.prototype.getAuth = function (params) {
        // return this._http.post('cdslc', params)
        //   .map((res: Response) => {
        //     res.json()
        //   })
        //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };
    ;
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this.cartCountSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.cartCount$ = this.cartCountSource.asObservable();
        this.showSideBar = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.showSideBar$ = this.showSideBar.asObservable();
        this.cart = [];
        this.filterArgs = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.filterArgs$ = this.filterArgs.asObservable();
    }
    ProductService.prototype.getProductList = function () {
        return this._http.get('asset/product-list.json')
            .map(function (res) {
            res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ;
    Object.defineProperty(ProductService.prototype, "cartMetadata", {
        set: function (data) {
            if (data) {
                this.cart.push(data);
                this.cartCountSource.next(this.cart);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ProductService.prototype, "cartMetaData", {
        get: function () {
            return this.cart;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ProductService.prototype.showSidePane = function (isPane) {
        this.showSideBar.next(isPane);
    };
    ;
    Object.defineProperty(ProductService.prototype, "filterArgArray", {
        set: function (arr) {
            this.filterArgs.next(arr);
        },
        enumerable: true,
        configurable: true
    });
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cart works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/features/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cart',
        template: __webpack_require__("../../../../../src/app/features/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CartComponent);

//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login_main{\r\n    height: 80vh;\r\n    text-align: center;\r\n}\r\n.login_block{\r\n    position: relative;\r\n    top: 20vh;\r\n}\r\n.login_block input{\r\n    margin-bottom: 10px;\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n    border: 1px solid #e5e5e5;\r\n    width: 20%;\r\n    outline: none;\r\n}\r\n.login_block button{\r\n    background-color: #355e7d;\r\n    border: none;\r\n    color: #ffffff;\r\n    padding: 5px 20px 5px 20px;\r\n    border-radius: 3px;\r\n    font-size: 12px;\r\n    outline: none;\r\n}\r\n.background_login img{\r\n    width: 100%;\r\n    margin-top: 10%;\r\n    opacity: 0.6;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login_main\">\n  <div class=\"login_block\">\n    <section>\n      <input type=\"text\" [(ngModel)]=\"userId\" placeholder=\"User Id\" value=\"test-user\" (blur) =\"loginParams(userId, 'userId')\"><br>\n      <!-- #<input type=\"password\" placeholder=\"Password\" value=\"user@123\"><br> -->\n      <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" value=\"test-password\" (blur)=\"loginParams(password, 'password')\"><br>\n      <button value=\"Login\" (click)=\"login()\">Login</button><br>\n    </section>\n    <div class=\"background_login\">\n      <img src=\"assets/images/background.jpg\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_login_service__ = __webpack_require__("../../../../../src/app/core/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_router, _loginService) {
        this._router = _router;
        this._loginService = _loginService;
        this.params = { userId: '', password: '' };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        // this._loginService.getAuth(this.params)
        //   .subscribe((res) => {
        //     console.log(res);
        this._router.navigate(['./products']);
        console.log(this.params);
        // },(err) => {
        //   console.log(err);
        // });
    };
    ;
    LoginComponent.prototype.loginParams = function (value, whichOne) {
        console.log(whichOne + ':' + value);
        this.params[whichOne] = value;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/features/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/product-details/product-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-details_main{\r\n    text-align: left;\r\n    margin-top: 20px;\r\n}\r\n\r\n.product-details_main img{\r\n    width: 30%;\r\n}\r\n\r\n.btn{\r\n    /* padding: 5px;\r\n    background-color: #355e7d;\r\n    color: #ffffff;\r\n    border-radius: 2px; */\r\n    background-color: #355e7d;\r\n    border: none;\r\n    color: #ffffff;\r\n    padding: 5px 20px 5px 20px;\r\n    border-radius: 3px;\r\n    font-size: 12px;\r\n    outline: none;\r\n}\r\n\r\n.btn_main{\r\n    margin-top: 20px;\r\n}\r\n\r\n.product_details p{\r\n    font-size: 12px;\r\n}\r\n\r\n.product_details p span{\r\n    color:grey;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/product-details/product-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product-details_main row\">\n  <!-- <img src=\"assets/images/product1.jpg\"> -->\n  <div class=\"col-xs-6 col-md-4 col-sm-6 col-lg-4\">\n      <!-- <app-product-carousel [images]=\"\"></app-product-carousel> -->\n  </div>\n  <div class=\"col-xs-6 col-md-4 col-sm-6 col-lg-4 product_details\">\n      <p>Product: <span>product</span></p>\n      <p>Description:   <span> description</span></p>\n      <p>Material:  <span>material</span></p>\n      <p>SKU:  <span>SKU70747582495</span></p>\n      <p>Price:  <span>{{item.price}}</span></p>\n      <p>Product:  <span>product</span></p>\n      <p>Product:   <span>product</span></p>\n      <!-- <div>\n          <span class=\"btn btn_add\">Add to Cart</span>\n          <span class=\"btn\" (click)=\"redirectTo()\">Back</span>\n        </div> -->\n  </div>\n  \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/features/product-details/product-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(_router) {
        this._router = _router;
        this.item = {};
        console.log('product-details', this.product);
        this.item = this.product;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
    };
    ProductDetailsComponent.prototype.redirectTo = function () {
        this._router.navigate(['./products']);
    };
    return ProductDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ProductDetailsComponent.prototype, "product", void 0);
ProductDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-product-details',
        template: __webpack_require__("../../../../../src/app/features/product-details/product-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/product-details/product-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], ProductDetailsComponent);

var _a;
//# sourceMappingURL=product-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-list_main{\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    height: 90vh;\r\n}\r\n.product-item_main{\r\n    height: 60vh;\r\n}\r\n.product-item{\r\n    padding: 10px 10px 2px 10px;\r\n    margin-top: 20px;\r\n    background-color: #f5f4f4;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\r\n    cursor: pointer;\r\n    height: 56vh;\r\n}\r\n\r\n.product-img{\r\n    width: 100%;\r\n}\r\n\r\n.product-item:hover{\r\n    box-shadow: 0 3px 6px rgb(187, 213, 232);\r\n}\r\n\r\nhr{\r\n    margin: 10px 0 5px 0;\r\n}\r\n\r\n.product-item p{\r\n    margin: 0 0 5px;\r\n    font-size: 11px;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.product-item p span{\r\n    color: grey;\r\n}\r\n\r\n.product-item h5{\r\n    font-weight: 600;\r\n}\r\n.product-item img{\r\n    width: 100%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product-list_main\">\n  <div  class=\"product-item_main col-xs-4 col-md-3 col-sm-3 col-lg-2\" *ngFor=\"let product of products | productfilter: filterArgs\">\n      <div class=\"product-item\" (click)=\"redirectToDetails(product)\">\n        <img src=\"{{product.images}}\"> <!-- {{product.images}} -->\n        <h5>{{product.productTitle}}</h5><hr>\n        <p>Description: <span>{{product.productDescription}}</span></p>\n        <p>Reviews: <span>{{product.reviews}}</span></p>\n        <p>User Ratings: <span>{{product.userRatings}}</span></p>\n      </div>\n  </div>\n</div>\n\n<app-modal [closable]=true [visible]=\"isShowDetails\" [data]=\"selectedProduct\" (dialogEvents)=\"detailModalEvents($event)\"></app-modal>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/features/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_product_service__ = __webpack_require__("../../../../../src/app/core/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = (function () {
    function ProductListComponent(_productService, _router) {
        var _this = this;
        this._productService = _productService;
        this._router = _router;
        this.selectedProduct = {};
        this.filterArgs = [];
        this.products = [
            {
                "productId": "0001",
                "category": "sports",
                "productTitle": "BasketBall",
                "productDescription": "Winners train,losers complain",
                "images": "assets/images/basketball.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Spot On",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5",
                },
                "reviews": ["athletic feeling"],
                "userRatings": "5",
                "price": "23.12  "
            },
            {
                "productId": "0002",
                "category": "clothing",
                "productTitle": "Blazer",
                "productDescription": "Defines your Class",
                "images": "assets/images/blazer.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Fashion In",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5",
                },
                "reviews": ["looks great"],
                "userRatings": "4",
                "price": "23.12  "
            },
            {
                "productId": "0003",
                "category": "accessories",
                "productTitle": "Watch",
                "productDescription": "Have you ever worn a real watch?",
                "images": "assets/images/watch.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Techno Inc",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5",
                },
                "reviews": ["looks elegant"],
                "userRatings": "4",
                "price": "40.12  "
            },
            {
                "productId": "0004",
                "category": "accessories",
                "productTitle": "Perfume",
                "productDescription": "Long Lasting Fragrance",
                "images": "assets/images/perfume.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Allure In",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5",
                },
                "reviews": ["smells good"],
                "userRatings": "4",
                "price": "67.12  "
            },
            {
                "productId": "0005",
                "category": "accessories",
                "productTitle": "Footwear",
                "productDescription": "Free to be casual",
                "images": "assets/images/footwear.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Spot On",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5",
                },
                "reviews": ["light & durable"],
                "userRatings": "4",
                "price": "78.23  "
            },
            {
                "productId": "0006",
                "category": "electronics",
                "productTitle": "Laptop",
                "productDescription": "Making technology work for you",
                "images": "assets/images/laptop.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Techno Inc",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5",
                },
                "reviews": ["very light"],
                "userRatings": "4",
                "price": "230.12  "
            },
            {
                "productId": "0007",
                "category": "sports",
                "productTitle": "Racket",
                "productDescription": "Just hit it",
                "images": "assets/images/racket.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Spot On",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5",
                },
                "reviews": ["Nice stroke"],
                "userRatings": "4",
                "price": "56.12  "
            },
            {
                "productId": "0008",
                "category": "grooming",
                "productTitle": "Deodrant",
                "productDescription": "Spray more. Get more",
                "images": "assets/images/deodrant.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Allure In",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5",
                },
                "reviews": ["lasts long"],
                "userRatings": "4",
                "price": "45.90  "
            },
            {
                "productId": "0009",
                "category": "clothing",
                "productTitle": "Denim",
                "productDescription": "Fashion for the senses",
                "images": "assets/images/denim.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Fashion Inn",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5",
                },
                "reviews": ["casual look"],
                "userRatings": "4",
                "price": "29.12  "
            },
            {
                "productId": "0010",
                "category": "electronics",
                "productTitle": "Speakers",
                "productDescription": "Stereo Sound Effect",
                "images": "assets/images/speaker.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Techno Inc",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5"
                },
                "reviews": ["Hometheatre Feel"],
                "userRatings": "4",
                "price": "2450.12  "
            },
            {
                "productId": "0011",
                "category": "clothing",
                "productTitle": "Cotton Shirt",
                "productDescription": "100 percent cotton",
                "images": "assets/images/cottonShirt.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Fashion Inn",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5"
                },
                "reviews": ["Light feel"],
                "userRatings": "4",
                "price": "678.12  "
            },
            {
                "productId": "0012",
                "category": "sports",
                "productTitle": "Baseball bat",
                "productDescription": "Baseball Soul",
                "images": "assets/images/baseball.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Spot On",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5"
                },
                "reviews": ["Strong Hold"],
                "userRatings": "4",
                "price": "79.12  "
            },
            {
                "productId": "0013",
                "category": "electronics",
                "productTitle": "Smart TVs",
                "productDescription": "Light-Smart LED",
                "images": "assets/images/smart-tv.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Techno Inc",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5"
                },
                "reviews": ["Pleasant for eyes"],
                "userRatings": "4",
                "price": "52.12  "
            },
            {
                "productId": "0014",
                "category": "clothing",
                "productTitle": "Shorts",
                "productDescription": "Feel the Comfort",
                "images": "assets/images/shorts.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Fashion Inn",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5"
                },
                "reviews": ["Great Comfort"],
                "userRatings": "4",
                "price": "36.12  "
            },
            {
                "productId": "0015",
                "category": "electronics",
                "productTitle": "Smartphones",
                "productDescription": "Keep your World Moving",
                "images": "assets/images/smartphone.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Techno Inc",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5"
                },
                "reviews": ["smooth screentouch"],
                "userRatings": "4",
                "price": "487.12  "
            },
            {
                "productId": "0016",
                "category": "sports",
                "productTitle": "Sports Shoes",
                "productDescription": "Athletic shoes with spikes",
                "images": "assets/images/sports.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Spot On",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5"
                },
                "reviews": ["Professional Sportsman Feel"],
                "userRatings": "4",
                "price": "567.12  "
            },
            {
                "productId": "0017",
                "category": "accessories",
                "productTitle": "Leather Shoes",
                "productDescription": "Be your own label",
                "images": "assets/images/leather.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Spot On",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5"
                },
                "reviews": ["Gentleman Stuff"],
                "userRatings": "4",
                "price": "24.09  "
            },
            {
                "productId": "0018",
                "category": "grooming",
                "productTitle": "Trimmer",
                "productDescription": "From zero Trim to Full Beard",
                "images": "assets/images/trimmer.png",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Techno Inc",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5"
                },
                "reviews": ["stubble to full, all purpose"],
                "userRatings": "4",
                "price": "23.12  "
            },
            {
                "productId": "0019",
                "category": "accessories",
                "productTitle": "HeadPhones",
                "productDescription": "Noise Cancellation HeadPhones",
                "images": "assets/images/headphone.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Techno Inc",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5"
                },
                "reviews": ["enjoy the music, gives you your own space"],
                "userRatings": "4",
                "price": "349.12  "
            },
            {
                "productId": "0020",
                "category": "grooming",
                "productTitle": "Hair Oil",
                "productDescription": "A totally organic experience",
                "images": "assets/images/hair.jpg",
                "manufacturedOn": "02-07-2017",
                "manufacturedBy": "Allure In",
                "sellerDetails": {
                    "id": "1",
                    "name": "Srinath",
                    "address": "350 5th Avenue, New York, ",
                    "branches": "1",
                    "ratings": "5"
                },
                "reviews": ["Never let your scalp dry"],
                "userRatings": "4",
                "price": "23.12  "
            }
        ];
        this.subscription = _productService.filterArgs$.subscribe(function (args) {
            _this.filterArgs = args;
            console.log('filter args:', args, _this.filterArgs, _this.subscription);
        });
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProductList();
        this._productService.showSidePane(true);
    };
    ProductListComponent.prototype.getProductList = function () {
        // this._productService.getProductList()
        //   .subscribe((products) => {
        //     this.products = products;
        //   })
    };
    ;
    ProductListComponent.prototype.redirectToDetails = function (product) {
        // this._router.navigate(['./details']);
        this.isShowDetails = true;
        this.selectedProduct = product;
    };
    ProductListComponent.prototype.detailModalEvents = function (event) {
        if (event === 'close') {
            this.isShowDetails = false;
        }
        else {
            console.log(event);
            if (event) {
            }
        }
    };
    ;
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/features/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/product-list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProductListComponent);

var _a, _b;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/carousel/product-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel{\r\n    overflow: hidden;\r\n    /* width: 46%; */\r\n    position: relative;\r\n    left: 4%;\r\n}\r\n.slides{\r\n    list-style:none;\r\n    position:relative;\r\n    width:500%; /* Number of panes * 100% */\r\n    overflow:hidden; /* Clear floats */\r\n        /* Slide effect Animations*/\r\n    -webkit-animation:carousel 30s infinite;\r\n    animation:carousel 30s infinite;\r\n}\r\n.slides > li{\r\n    position:relative;\r\n    float:left;\r\n    width: 20%; /* 100 / number of panes */\r\n}\r\n.carousel img{\r\n    display:block;\r\n    width:100%;\r\n    max-width:100%;\r\n}\r\n.carousel h2{\r\n    margin-bottom: 0;\r\n    font-size:1em;\r\n    padding:1.5em 0.5em 1.5em 0.5em;\r\n    position:absolute;\r\n    right:0px;\r\n    bottom:0px;\r\n    left:0px;\r\n    text-align:center;\r\n    color:#fff;\r\n    background-color:rgba(0,0,0,0.75);\r\n    text-transform: uppercase;\r\n}\r\n\r\n@-webkit-keyframes carousel{\r\n    0%    { left:-5%; }\r\n    11%   { left:-5%; }\r\n    12.5% { left:-105%; }\r\n    23.5% { left:-105%; }\r\n    25%   { left:-205%; }\r\n    36%   { left:-205%; }\r\n    37.5% { left:-305%; }\r\n    48.5% { left:-305%; }\r\n    50%   { left:-405%; }\r\n    61%   { left:-405%; }\r\n    62.5% { left:-305%; }\r\n    73.5% { left:-305%; }\r\n    75%   { left:-205%; }\r\n    86%   { left:-205%; }\r\n    87.5% { left:-105%; }\r\n    98.5% { left:-105%; }\r\n    100%  { left:-5%; }\r\n}\r\n\r\n@keyframes carousel{\r\n    0%    { left:-5%; }\r\n    11%   { left:-5%; }\r\n    12.5% { left:-105%; }\r\n    23.5% { left:-105%; }\r\n    25%   { left:-205%; }\r\n    36%   { left:-205%; }\r\n    37.5% { left:-305%; }\r\n    48.5% { left:-305%; }\r\n    50%   { left:-405%; }\r\n    61%   { left:-405%; }\r\n    62.5% { left:-305%; }\r\n    73.5% { left:-305%; }\r\n    75%   { left:-205%; }\r\n    86%   { left:-205%; }\r\n    87.5% { left:-105%; }\r\n    98.5% { left:-105%; }\r\n    100%  { left:-5%; }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/carousel/product-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\n    \n      <ul class=\"slides\">    \n        <li *ngFor=\"let image of images\">\n          <!-- <h2>{{image.title}}</h2> -->\n          <img src=\"{{image}}\" alt=\"\">\n        </li>\n      </ul>\n    \n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/carousel/product-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductCarouselComponent = (function () {
    // public images = [
    //   { "title": "We are covered", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/covered.jpg" },
    //   { "title": "Generation Gap", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/generation.jpg" },
    //   { "title": "Potter Me", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/potter.jpg" },
    //   { "title": "Pre-School Kids", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/preschool.jpg" },
    //   { "title": "Young Peter Cech", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/soccer.jpg" }	
    // ];
    function ProductCarouselComponent() {
        this.images = [];
    }
    ProductCarouselComponent.prototype.ngOnInit = function () {
    };
    return ProductCarouselComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ProductCarouselComponent.prototype, "images", void 0);
ProductCarouselComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-product-carousel',
        template: __webpack_require__("../../../../../src/app/shared/carousel/product-carousel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/carousel/product-carousel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductCarouselComponent);

//# sourceMappingURL=product-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-main{\r\n    background-color: #355e7d;\r\n    padding: 2px;\r\n    color: #ffffff;\r\n    font-family: arial;\r\n}\r\n\r\nh4{\r\n    margin: 15px;\r\n}\r\n\r\nspan{\r\n    float: right;\r\n    padding-right: 10px;\r\n}\r\n.badge{\r\n    position: relative;\r\n    right: -10px;\r\n    background-color: #9e9e9e;\r\n}\r\n.cart-content{\r\n    position: absolute;\r\n    height: auto;\r\n    max-height: 300px;\r\n    width: 20%;\r\n    background-color: #f5f4f4;\r\n    z-index: 9;\r\n    right: 17px;\r\n    top: 6vh;\r\n    padding: 10px 0 0 0;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\r\n    overflow-y: auto;\r\n}\r\n.header-main span{\r\n    cursor: pointer;\r\n}\r\n.cart-list p{\r\n    margin: 0;\r\n    /* background-color: #355e7d;\r\n    color: #e5e5e5; */\r\n    font-size: 12px;\r\n    border-bottom: 1px solid #dbdbdb;\r\n    /* padding: 5px 10px 4px 10px; */\r\n\r\n}\r\n.cart-content ul{\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n\r\n.cart-content ul li{\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.cart-content p{\r\n    padding: 8px 10px 8px;\r\n    margin: 0;\r\n    font-size: 12px;\r\n}\r\n\r\n.cart-list span{\r\n    float: left;\r\n    padding: 1px 10px 1px 16px;\r\n    font-size: 11px;\r\n}\r\n.total{\r\n    background-color: #355e7d;\r\n    color: #ffffff;\r\n    font-size: 13px;\r\n    padding: 9px;\r\n    margin-top:50px;\r\n}\r\n\r\n.product-image{\r\n    display: inline;\r\n}\r\n\r\n.product-image img{\r\n    width: 22%;\r\n    padding: 2px;\r\n    border: 1px solid #dbdbdb;\r\n    margin: 10px;\r\n}\r\n.product-details{\r\n    display:-ms-inline-grid;\r\n    display:inline-grid;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-main\">\n  <h4><ng-content *ngIf=\"isShowHamIcon\"></ng-content>{{title}}\n      <span (click)=\"toggleCartDetails($event)\"><i class=\"glyphicon glyphicon-shopping-cart\"></i></span>\n      <span (click)=\"toggleCartDetails($event)\" class=\"badge\">{{cartCount}}</span>\n  </h4>\n</div>\n\n<div class=\"cart-content\" *ngIf=\"isShowCartList && cartDataList && cartDataList.length > 0\">\n  <p>Your cart has: </p>\n  <ul class=\"cart-list\">\n    <li *ngFor=\"let item of cartDataList\">\n      <p>{{item.productTitle}}</p>\n      <div class=\"product-image\">\n        <img src=\"{{item.images}}\">\n      </div>\n      <div class=\"product-details\">\n          <span>{{item.productDescription}}</span>\n          <span>{{item.price}}  USD</span>\n      </div>\n    </li>\n  </ul>\n  <div class=\"total\">\n    Total: {{cartValue}}  USD\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_product_service__ = __webpack_require__("../../../../../src/app/core/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(_productService) {
        var _this = this;
        this._productService = _productService;
        this.cartCount = 0;
        this.cartDataList = [];
        this.cartValue = 0;
        this.title = "E-Commerce Prototype";
        // this.cartCount = _productService.cartMetaData.length;
        this.subscription = _productService.cartCount$.subscribe(function (cartMeta) {
            console.log('in header:', cartMeta);
            if (cartMeta) {
                _this.cartDataList = cartMeta;
                _this.cartCount = cartMeta.length;
                for (var i = 0; i < cartMeta.length; i++) {
                    _this.cartValue += parseInt(cartMeta[i].price);
                }
            }
        });
        this.subscription1 = _productService.showSideBar$.subscribe(function (isShow) {
            console.log('in header:', isShow);
            _this.isShowHamIcon = isShow;
        });
    }
    ;
    HeaderComponent.prototype.ngOnInit = function () {
    };
    ;
    HeaderComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    ;
    HeaderComponent.prototype.toggleCartDetails = function (e) {
        e.stopPropagation();
        if (this.cartCount > 0) {
            this.isShowCartList = !this.isShowCartList;
        }
    };
    ;
    HeaderComponent.prototype.onClick = function (event) {
        this.isShowCartList = false;
    };
    ;
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.css")],
        host: {
            '(document:click)': 'onClick($event)',
        },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 999;\r\n  }\r\n  img{\r\n    width:100%;\r\n  }\r\n  \r\n  .dialog {\r\n      border-radius: 2px;\r\n      z-index: 1000;\r\n      position: fixed;\r\n      right: 0;\r\n      left: 0;\r\n      top: 20px;\r\n      margin-right: auto;\r\n      margin-left: auto;\r\n      min-height: 69vh;\r\n      /* width: 90%; */\r\n      max-width: 65%;\r\n      background-color: #fff;\r\n      box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .dialog {\r\n      top: 40px;\r\n    }\r\n  }\r\n  \r\n  .dialog-close-btn {\r\n      border-radius: 0;\r\n      width: 46px;\r\n      line-height: 7.7vh;\r\n      font-weight: 600;\r\n      position: absolute;\r\n      font-size: 1em;\r\n      top: 0;\r\n      right: 0;\r\n      background: #6B6d75;\r\n      border: none;\r\n      opacity: 0.3;\r\n      color: #000000;\r\n      outline: none;\r\n    }\r\n\r\n    .dialog-close-btn:hover{\r\n        opacity:0.5;\r\n    }\r\n  \r\n  .dialog-header{\r\n      border-bottom: 1px solid #d5d6d8;\r\n      height: 8vh;\r\n      text-align: left;\r\n      padding:5px;\r\n  }\r\n  .dialog-header-text{\r\n      line-height: 1.25em;\r\n      text-rendering: optimizelegibility;\r\n      letter-spacing: -0.03em;\r\n      color: darkgray;\r\n      font-size: 1.78rem;\r\n      margin: 0;\r\n      padding: 10px 14px;\r\n      \r\n  }\r\n  .dialog-header-text span{\r\n    font-size: 0.6em;\r\n    color: #878787;\r\n  }\r\n  \r\n  .dialog-footer{\r\n      height: 8vh;\r\n      margin-bottom: 0;\r\n      text-align: right;\r\n      background-color: #264358;;\r\n      border-radius: 0 0 2px 2px;\r\n      list-style: none;\r\n    }\r\n\r\n    ul{\r\n        list-style: none;\r\n        font-size: 1.2em;\r\n      }\r\n    li{\r\n    float: right;\r\n    color: #264358;\r\n    font-weight: 600;\r\n    padding: 2.3vh;\r\n    cursor: pointer;\r\n    }\r\n    li:nth-child(1){\r\n        border-radius: 0 0 2px 0;\r\n        background-color: #bfbfbf;\r\n    }\r\n    li:nth-child(1):hover{\r\n        background-color: #e5e5e5;\r\n        }\r\n    li:nth-child(2){\r\n        border-radius: 0;\r\n        background-color: #0094b3;\r\n    }\r\n    li:nth-child(2):hover{\r\n        background-color: #00bce3;\r\n    }\r\n    \r\n  .dialog-body{\r\n    height: 69vh;\r\n    overflow: auto;\r\n    text-align: left;\r\n    padding: 20px;\r\n  }\r\n  \r\n  .disabled{\r\n    opacity: 0.3;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .hide{\r\n    display:none;\r\n  }\r\n  \r\n  .envSelectionSec{\r\n      text-align: center;\r\n      vertical-align: middle;\r\n      font-size: 1.03em;\r\n  }\r\n  .envSelectionSec select{\r\n        width: 10%;\r\n    }\r\n    .product-list_main{\r\n      overflow-x: hidden;\r\n      overflow-y: auto;\r\n      height: 90vh;\r\n  }\r\n  .product-item_main{\r\n      height: 60vh;\r\n  }\r\n  .product-item{\r\n      padding: 10px 10px 2px 10px;\r\n      margin-top: 20px;\r\n      background-color: #f5f4f4;\r\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\r\n      cursor: pointer;\r\n      height: 56vh;\r\n  }\r\n  \r\n  .product-img{\r\n      width: 100%;\r\n  }\r\n  \r\n  .product-item:hover{\r\n      box-shadow: 0 3px 6px rgb(187, 213, 232);\r\n  }\r\n  \r\n  hr{\r\n      margin: 10px 0 5px 0;\r\n  }\r\n  \r\n  .product-item p{\r\n      margin: 0 0 5px;\r\n      font-size: 11px;\r\n      word-wrap: break-word;\r\n  }\r\n  \r\n  .product-item p span{\r\n      color: grey;\r\n  }\r\n  \r\n  .product-item h5{\r\n      font-weight: 600;\r\n  }\r\n  .product-item img{\r\n      width: 100%;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visible\" class=\"dialog\">\n  <div class=\"dialog-header\">\n    <h3 class=\"dialog-header-text\">{{headerText}}</h3>\n    <button *ngIf=\"closable\" title=\"close\" (click)=\"close()\" aria-label=\"close\" class=\"dialog-close-btn\">x</button>\n  </div>\n  <div class=\"dialog-body\">\n    <ng-content></ng-content>\n    <div class=\"product-details_main row\">\n        <!-- <img src=\"assets/images/product1.jpg\"> -->\n        <div class=\"col-12\">\n            <!-- <app-product-carousel [images]=\"\"></app-product-carousel> -->\n            <!-- <img src=\"{{data.images}}\"> -->\n            <div><iframe width=\"1000px\" height=\"600px\" src=\"https://www.abkaro.com\"></iframe></div>\n        </div>\n        <!-- <div class=\"col-xs-6 col-md-4 col-sm-6 col-lg-4 product_details\">\n            <p>Product: <span>{{data.productTitle}}</span></p>\n            <p>Description:   <span> {{data.productDescription}}</span></p>\n            <p>Price:  <span>{{data.price}}</span></p>\n            <p>Review:  <span>{{data.review[0]}}</span></p>\n             <div>\n                <span class=\"btn btn_add\">Add to Cart</span>\n                <span class=\"btn\" (click)=\"redirectTo()\">Back</span>\n              </div>\n        </div> -->\n        \n      </div>\n  </div>\n  <div class=\"dialog-footer\">\n    <ul>\n      <li (click)=\"addToCart()\">\n        Add to Cart\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\" [class.disabled] = \"disabled\"></div>"

/***/ }),

/***/ "../../../../../src/app/shared/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_product_service__ = __webpack_require__("../../../../../src/app/core/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent(_productService) {
        this._productService = _productService;
        this.closable = true;
        this.dialogEvents = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.headerText = 'Product Details';
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.ngAfterViewInit = function () {
    };
    ModalComponent.prototype.close = function () {
        // this.reset();
        this.visible = false;
        this.dialogEvents.next('close');
    };
    ;
    ModalComponent.prototype.addToCart = function () {
        console.log(this.data);
        this._productService.cartMetadata = this.data;
        this.dialogEvents.next(this._productService.cartMetaData);
        this.close();
    };
    return ModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "closable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ModalComponent.prototype, "visible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ModalComponent.prototype, "dialogEvents", void 0);
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-modal',
        template: __webpack_require__("../../../../../src/app/shared/modal/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/modal/modal.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* trigger */])('dialog', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({ transform: 'scale3d(.3, .3, .3)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])(100)
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* transition */])('* => void', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_product_service__["a" /* ProductService */]) === "function" && _b || Object])
], ModalComponent);

var _a, _b;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductFilter = (function () {
    function ProductFilter() {
    }
    ProductFilter.prototype.transform = function (items, args) {
        var filteredList = [];
        console.log('items', items, 'args', args);
        if (args && args.length > 0) {
            var result = [];
            var _loop_1 = function (i) {
                result = items.filter(function (item) { return item.category.indexOf(args[i]) !== -1; });
                for (var j = 0; j < result.length; j++) {
                    filteredList[filteredList.length] = result[j];
                }
            };
            for (var i = 0; i < args.length; i++) {
                _loop_1(i);
            }
            console.log(filteredList);
            return filteredList;
        }
        else {
            return items;
        }
    };
    return ProductFilter;
}());
ProductFilter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'productfilter',
        pure: false
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], ProductFilter);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map