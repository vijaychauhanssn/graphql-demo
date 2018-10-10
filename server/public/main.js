(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h1>GraphQL, NodeJs, Express, MongoDB, Angular (v6)</h1>      \r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row pb-5\">\r\n      <div class=\"col-md-6 float-left\">\r\n        <h3>Employee List</h3>\r\n      </div>\r\n      <div class=\"col-md-6 float-right\">\r\n        <!-- Create New User  -->\r\n        <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"openModal(template)\">\r\n        Add Employee  <span class=\"lnr lnr-plus-circle\"></span>\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Modal Template of New User Form -->\r\n    <ng-template #template>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Add New Employee</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Emp Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"name\"  placeholder=\"First Name\" [(ngModel)]=\"name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lname\">Emp Last Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"lname\"  placeholder=\"Last Name\" [(ngModel)]=\"lname\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"address\">Emp Address</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"address\"  placeholder=\"Address\" [(ngModel)]=\"address\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"phone\">Phome</label>\r\n            <input type=\"number\" class=\"form-control\" name=\"phone\"  placeholder=\"Phone\" [(ngModel)]=\"phone\">\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!user.id\" (click)=\"createUser(name, lname, address, phone);\">Create</button>\r\n          <button type=\"button\" class=\"btn btn-default\" *ngIf=\"user.id\" (click)=\"updateUser(name, lname, address, phone);\">Update</button>\r\n        </form>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <!-- List of All Users  -->\r\n  \r\n    <table class=\"table table-bordered table-striped table-hover\">\r\n      <thead >\r\n        <tr>\r\n          <th class=\"text-center table-primary\">Emp Id</th>\r\n          <th class=\"text-center\">Emp First Name</th>\r\n          <th class=\"text-center\">Emp Last Name</th>\r\n          <th class=\"text-center\">Emp Address</th>\r\n          <th class=\"text-center\">Emp Phone</th>\r\n          <th class=\"text-center\">Edit</th>\r\n          <th class=\"text-center\">Delete</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let user of users; let i = index\">\r\n          <td class=\"table-info\">{{ i+1 }}</td>\r\n          <td class=\"table-warning\">{{ user.name }}</td>\r\n          <td class=\"table-success\">{{user.lname}}</td>\r\n          <td class=\"table-success\">{{user.address}}</td>\r\n          <td class=\"table-success\">{{user.phone}}</td>\r\n          <td  class=\"table-success\">\r\n            <!-- Show Edit User Form  -->\r\n            <button class=\"btn btn-dark \" (click)=\"showEditUserForm(user, template)\">\r\n              <span class=\"lnr lnr-pencil\"></span>\r\n            </button>\r\n          </td>\r\n           <td class=\"table-danger\">\r\n            <!-- Remove User  -->\r\n            <button class=\"btn btn-danger\" (click)=\"removeUser(user.id)\">\r\n              <span class=\"lnr lnr-trash\"></span>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container tr {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _global_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-query */ "./src/app/global-query.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(apollo, modalService) {
        this.apollo = apollo;
        this.modalService = modalService;
        this.users = []; // List of Users
        this.user = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    /**
     * Create User
     * @param value     Name of User
     */
    AppComponent.prototype.createUser = function (value, value2, value3, value4) {
        var _this = this;
        this.apollo.mutate({
            mutation: _global_query__WEBPACK_IMPORTED_MODULE_3__["addUser"],
            variables: {
                name: value,
                lname: value2,
                address: value3,
                phone: value4
            },
            update: function (proxy, _a) {
                var addUser = _a.data.addUser;
                // Read the data from our cache for this query.
                var data = proxy.readQuery({ query: _global_query__WEBPACK_IMPORTED_MODULE_3__["Users"] });
                data.users.push(addUser);
                // Write our data back to the cache.
                proxy.writeQuery({ query: _global_query__WEBPACK_IMPORTED_MODULE_3__["Users"], data: data });
            }
        })
            .subscribe(function (_a) {
            var data = _a.data;
            _this.closeFirstModal(); // Close Modal
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    /**
     * Remove User
      * @param id
     */
    AppComponent.prototype.removeUser = function (id) {
        this.apollo.mutate({
            mutation: _global_query__WEBPACK_IMPORTED_MODULE_3__["removeUser"],
            variables: {
                id: id
            },
            update: function (proxy, _a) {
                var removeUser = _a.data.removeUser;
                // Read the data from our cache for this query.
                var data = proxy.readQuery({ query: _global_query__WEBPACK_IMPORTED_MODULE_3__["Users"] });
                var index = data.users.map(function (x) { return x.id; }).indexOf(id);
                data.users.splice(index, 1);
                // Write our data back to the cache.
                proxy.writeQuery({ query: _global_query__WEBPACK_IMPORTED_MODULE_3__["Users"], data: data });
            }
        })
            .subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    /**
     * Edit User Form
     * @param user
     * @param template
     */
    AppComponent.prototype.showEditUserForm = function (user, template) {
        this.name = user.name;
        this.lname = user.lname;
        this.address = user.address;
        this.phone = user.phone;
        this.user = user;
        this.modalRef = this.modalService.show(template);
    };
    /**
     * Update User
     * @param user
     */
    AppComponent.prototype.updateUser = function (user) {
        var _this = this;
        this.apollo
            .mutate({
            mutation: _global_query__WEBPACK_IMPORTED_MODULE_3__["updateUser"],
            variables: {
                id: this.user.id,
                name: user,
                lname: user,
                address: user,
                phone: user,
            },
            update: function (proxy, _a) {
                var updateUser = _a.data.updateUser;
                // Read the data from our cache for this query.
                var data = proxy.readQuery({ query: _global_query__WEBPACK_IMPORTED_MODULE_3__["Users"] });
                var index = data.users.map(function (x) { return x.id; }).indexOf(_this.user.id);
                data.users[index].name = user;
                // Write our data back to the cache.
                proxy.writeQuery({ query: _global_query__WEBPACK_IMPORTED_MODULE_3__["Users"], data: data });
            }
        })
            .subscribe(function (_a) {
            var data = _a.data;
            _this.closeFirstModal();
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    /**
     * ----------------------------------------------------
     * Get All Users
     * ----------------------------------------------------
     * @method getUsers
     */
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        this.apollo.watchQuery({ query: _global_query__WEBPACK_IMPORTED_MODULE_3__["Users"] })
            .valueChanges
            .map(function (result) { return result.data.users; }).subscribe(function (data) {
            _this.users = data;
        });
    };
    // Open Modal
    AppComponent.prototype.openModal = function (template) {
        this.name = '';
        this.lname = '';
        this.address = '';
        this.phone = '';
        this.user = {};
        this.modalRef = this.modalService.show(template);
    };
    // Close Modal
    AppComponent.prototype.closeFirstModal = function () {
        this.modalRef.hide();
        this.modalRef = null;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Apollo

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _graphql_module__WEBPACK_IMPORTED_MODULE_6__["GraphQLModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/global-query.ts":
/*!*********************************!*\
  !*** ./src/app/global-query.ts ***!
  \*********************************/
/*! exports provided: addUser, Users, removeUser, updateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUser", function() { return removeUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Server Mutation Query
 */

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var addUser = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation addUser($name: String!, $lname: String!, $address: String!, $phone: String!) {\n    addUser(name: $name, lname: $lname, address: $address, phone: $phone) {\n      id\n      name\n      lname\n      address\n      phone\n      \n    }\n  }"], ["\n  mutation addUser($name: String!, $lname: String!, $address: String!, $phone: String!) {\n    addUser(name: $name, lname: $lname, address: $address, phone: $phone) {\n      id\n      name\n      lname\n      address\n      phone\n      \n    }\n  }"])));
var Users = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query {\n    users{\n      id\n      name\n      lname\n      address\n      phone\n    }\n  }"], ["\n  query {\n    users{\n      id\n      name\n      lname\n      address\n      phone\n    }\n  }"])));
var removeUser = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  mutation removeUser($id: String!) {\n    removeUser(id: $id) {\n      id\n      name\n      lname\n      address\n      phone\n    }\n  }"], ["\n  mutation removeUser($id: String!) {\n    removeUser(id: $id) {\n      id\n      name\n      lname\n      address\n      phone\n    }\n  }"])));
var updateUser = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  mutation updateUser($id: String!, $name: String!, $lname: String!, $address: String!, $phone:String!) {\n    updateUser(id: $id, name: $name, lname: $lname, address: $address, phone: $phone) {\n      id\n      name\n      lname\n      address\n      phone\n    }\n  }"], ["\n  mutation updateUser($id: String!, $name: String!, $lname: String!, $address: String!, $phone:String!) {\n    updateUser(id: $id, name: $name, lname: $lname, address: $address, phone: $phone) {\n      id\n      name\n      lname\n      address\n      phone\n    }\n  }"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/app/graphql.module.ts":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Apollo



// const uri = 'http://localhost:4000/graphql'; // Development
var uri = 'https://graphql-demo-vijaychauhanssn.herokuapp.com/graphql'; // Production
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule(apollo, httpLink) {
        // create Apollo
        apollo.create({
            link: httpLink.create({ uri: uri }),
            cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]()
        });
    }
    GraphQLModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"],
                apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLinkModule"]
            ]
        }),
        __metadata("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"],
            apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]])
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anurag Thakur\graphql-demo\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map