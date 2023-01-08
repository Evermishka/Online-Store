/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/application/app.ts":
/*!*******************************!*\
  !*** ./js/application/app.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/control */ "./js/common/control.ts");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer */ "./js/application/footer/footer.ts");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header */ "./js/application/header/header.ts");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main */ "./js/application/main/main.ts");




class App extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parendNode, state) {
        super(parendNode, 'div', 'wrapper');
        const header = new _header_header__WEBPACK_IMPORTED_MODULE_2__.Header(this.node, state);
        const main = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'main', 'main');
        const footer = new _footer_footer__WEBPACK_IMPORTED_MODULE_1__.Footer(this.node);
        this.createApp(header, main, 'main-page', state);
    }
    createApp(header, main, screen, state, id) {
        const mainInner = new _main_main__WEBPACK_IMPORTED_MODULE_3__.Main(main.node, screen, state, id);
        mainInner.onProductPage = (id) => {
            mainInner.destroy();
            this.createApp(header, main, 'product-page', state, id);
        };
        mainInner.onCartPage = () => {
            mainInner.destroy();
            this.createApp(header, main, 'cart-page', state);
        };
        mainInner.onMainPage = () => {
            mainInner.destroy();
            this.createApp(header, main, 'main-page', state);
        };
        mainInner.closeCart = () => {
            state.resetData();
            let seconds = 3;
            const cartCloseText = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](mainInner.node, 'p', 'cart_close-text', `Thank you for your order. You will be redirected to the main page in ${seconds.toString()} seconds`);
            const intervalId = setInterval(() => {
                seconds--;
                cartCloseText.node.innerHTML = `Thank you for your order. You will be redirected to the main page in ${seconds.toString()} seconds`;
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId);
                mainInner.destroy();
                this.createApp(header, main, 'main-page', state);
            }, 3000);
        };
        header.onMainPage = () => {
            mainInner.destroy();
            this.createApp(header, main, 'main-page', state);
            state.setData(null, 'resetFilters');
        };
        header.onCartPage = () => {
            mainInner.destroy();
            this.createApp(header, main, 'cart-page', state);
        };
    }
}


/***/ }),

/***/ "./js/application/footer/footer.ts":
/*!*****************************************!*\
  !*** ./js/application/footer/footer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/control */ "./js/common/control.ts");
/* harmony import */ var _github_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github-links */ "./js/application/footer/github-links.ts");


class Footer extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode) {
        super(parentNode, 'footer', 'footer', '');
        new _github_links__WEBPACK_IMPORTED_MODULE_1__.GithubLinks(this.node);
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'year', '2022');
        const rssLink = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'a', 'rss-link', '');
        rssLink.node.href = 'https://rs.school/js/';
    }
}


/***/ }),

/***/ "./js/application/footer/github-links.ts":
/*!***********************************************!*\
  !*** ./js/application/footer/github-links.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubLinks": () => (/* binding */ GithubLinks)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/control */ "./js/common/control.ts");

class GithubLinks extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode) {
        super(parentNode, 'div', 'github', '');
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'github__text', `Created by`);
        const githubLinksWrapper = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'github__links-wrapper', ``);
        const githubLinkEvermiska = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](githubLinksWrapper.node, 'a', 'github__link', 'Evermishka');
        githubLinkEvermiska.node.href = 'https://github.com/Evermishka';
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](githubLinksWrapper.node, 'p', 'github__text-dop', `and`);
        const githubLinkPain4metoo = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](githubLinksWrapper.node, 'a', 'github__link', 'pain4metoo');
        githubLinkPain4metoo.node.href = 'https://github.com/pain4metoo';
    }
}


/***/ }),

/***/ "./js/application/header/header.ts":
/*!*****************************************!*\
  !*** ./js/application/header/header.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/control */ "./js/common/control.ts");
/* harmony import */ var _assets_svg_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/svg/logo.svg */ "./assets/svg/logo.svg");


class Header extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode, state) {
        super(parentNode, 'header', 'header', '');
        const headerInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'header_inner', '');
        const headerLogo = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](headerInner.node, 'img', 'header_logo', '');
        headerLogo.node.src = _assets_svg_logo_svg__WEBPACK_IMPORTED_MODULE_1__;
        headerLogo.node.alt = 'image logo';
        headerLogo.node.onclick = () => this.onMainPage();
        const headerSumBlock = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](headerInner.node, 'div', 'header_inner_sum', '');
        const headerSumText = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](headerSumBlock.node, 'span', 'header_sum_text', 'Cart total');
        let headerSumNumber = state
            .getData('cartData')
            .reduce((accum, current) => accum + current.price * current.amount, 0);
        const headerSum = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](headerSumBlock.node, 'span', 'header_sum', `€${headerSumNumber}.00`);
        let headerCartItemsNumber = state
            .getData('cartData')
            .reduce((accum, current) => accum + current.amount, 0);
        const headerCart = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](headerInner.node, 'div', 'header_cart', '');
        const headerCartItems = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](headerCart.node, 'p', 'header_cart-items', headerCartItemsNumber.toString());
        headerCart.node.onclick = () => this.onCartPage();
        state.onUpdate.add((type) => {
            if (type === 'cartData') {
                let newPrice = state
                    .getData('cartData')
                    .reduce((accum, current) => accum + current.price * current.amount, 0);
                let newAmount = state
                    .getData('cartData')
                    .reduce((accum, current) => accum + current.amount, 0);
                headerSum.node.textContent = `€${newPrice}.00`;
                headerCartItems.node.textContent = newAmount.toString();
            }
        });
    }
}


/***/ }),

/***/ "./js/application/main/cart-page/cart-page.ts":
/*!****************************************************!*\
  !*** ./js/application/main/cart-page/cart-page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": () => (/* binding */ CartPage)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/control */ "./js/common/control.ts");
/* harmony import */ var _cart_products_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-products-list */ "./js/application/main/cart-page/cart-products-list.ts");
/* harmony import */ var _cart_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-summary */ "./js/application/main/cart-page/cart-summary.ts");



class CartPage extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode, state) {
        super(parentNode, 'div', 'cart');
        const productsInCart = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'cart_products');
        const productsInCartWrapper = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](productsInCart.node, 'div', 'cart_products-wrapper');
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](productsInCartWrapper.node, 'div', 'cart_products-title', 'Products In Cart');
        const pagination = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](productsInCartWrapper.node, 'div', 'cart_pagination', 'Pagination');
        //TODO Add pagination component
        const productsList = new _cart_products_list__WEBPACK_IMPORTED_MODULE_1__.CartProductList(productsInCart.node, state);
        const summary = new _cart_summary__WEBPACK_IMPORTED_MODULE_2__.CartSummary(this.node, state);
        summary.closeCart = () => this.closeCart();
    }
}


/***/ }),

/***/ "./js/application/main/cart-page/cart-products-list-controls.ts":
/*!**********************************************************************!*\
  !*** ./js/application/main/cart-page/cart-products-list-controls.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartProductListControls": () => (/* binding */ CartProductListControls)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/control */ "./js/common/control.ts");

class CartProductListControls extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode, state, productData) {
        super(parentNode, 'div', 'products-list_controls');
        const decreaseAmountButton = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'button', 'products-list_decrease-button', '-');
        decreaseAmountButton.node.onclick = () => {
            this.decrease(productData, state, increaseAmountButton.node, productAmount.node);
        };
        const productAmountNumber = state
            .getData('cartData')
            .find((el) => el.id === productData.id).amount;
        const productAmount = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'products-list_product-amount', productAmountNumber.toString());
        const increaseAmountButton = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'button', 'products-list_increase-button', '+');
        if (productAmountNumber === productData.stock) {
            increaseAmountButton.node.disabled = true;
        }
        increaseAmountButton.node.onclick = () => {
            this.increase(productData, state, increaseAmountButton.node, productAmount.node);
        };
    }
    decrease(productData, state, button, productAmount) {
        const product = state.getData('cartData').find((el) => el.id === productData.id);
        if (button.disabled)
            button.disabled = false;
        if (product.amount > 0) {
            state.deleteData(product, 'cartData');
            product.amount -= 1;
            if (product.amount === 0) {
                this.deleteCartItem();
            }
            else {
                productAmount.textContent = product.amount;
                state.setData(product, 'cartData');
            }
        }
    }
    increase(productData, state, button, productAmount) {
        const product = state.getData('cartData').find((el) => el.id === productData.id);
        if (product.amount < productData.stock) {
            state.deleteData(product, 'cartData');
            product.amount += 1;
            productAmount.textContent = product.amount;
            state.setData(product, 'cartData');
            if (product.amount === productData.stock) {
                button.disabled = true;
            }
        }
    }
}


/***/ }),

/***/ "./js/application/main/cart-page/cart-products-list.ts":
/*!*************************************************************!*\
  !*** ./js/application/main/cart-page/cart-products-list.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartProductList": () => (/* binding */ CartProductList)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/control */ "./js/common/control.ts");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/data */ "./js/data/data.ts");
/* harmony import */ var _cart_products_list_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-products-list-controls */ "./js/application/main/cart-page/cart-products-list-controls.ts");



const PRODUCT_IMAGE_WIDTH = 100;
class CartProductList extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode, state) {
        super(parentNode, 'ul', 'products-list');
        state.getData('cartData').forEach((el, index) => {
            const productData = _data_data__WEBPACK_IMPORTED_MODULE_1__.products.find((elem) => elem.id === el.id);
            if (productData) {
                const product = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'li', 'products-list_item', '');
                new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](product.node, 'p', 'products-list_number', (index + 1).toString());
                const productImage = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](product.node, 'img', 'products-list_image');
                productImage.node.src = productData.thumbnail;
                productImage.node.width = PRODUCT_IMAGE_WIDTH;
                const productDetails = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](product.node, 'div', 'products-list_details');
                const productDetailsWrapper = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](productDetails.node, 'div', 'products-list_details-wrapper');
                new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](productDetailsWrapper.node, 'p', 'products-list_title', productData.title);
                new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](productDetailsWrapper.node, 'p', 'cart_rating', productData.rating.toString());
                new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](productDetails.node, 'p', 'products-list_description', productData.description);
                const productInfo = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](product.node, 'div', 'products-list_info');
                new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](productInfo.node, 'p', 'products-list_stock', `Stock: ${productData.stock}`);
                const cartProductListControls = new _cart_products_list_controls__WEBPACK_IMPORTED_MODULE_2__.CartProductListControls(productInfo.node, state, productData);
                cartProductListControls.deleteCartItem = () => product.destroy();
                new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](productInfo.node, 'p', 'products-list_price', `€${productData.price}.00`);
            }
        });
    }
}


/***/ }),

/***/ "./js/application/main/cart-page/cart-promo-codes.ts":
/*!***********************************************************!*\
  !*** ./js/application/main/cart-page/cart-promo-codes.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromoCodes": () => (/* binding */ PromoCodes)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/control */ "./js/common/control.ts");
/* harmony import */ var _data_promo_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/promo-codes */ "./js/data/promo-codes.ts");


class PromoCodes extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode, state) {
        super(parentNode, 'div', 'promo-codes');
        this.appliedCodesWrapper = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'promo-codes_applied');
        this.renderAppliedCodes(state);
        this.promoCodeInput = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'input', 'promo-codes_input');
        this.promoCodeInput.node.type = 'text';
        this.promoCodeInput.node.oninput = () => this.addPromo(this.promoCodeInput.node.value, state);
        this.promoCodeInput.node.placeholder = 'Enter promo code';
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'promo-codes_input-text', `Promo for test: 'RS', 'EPM'`);
    }
    renderAppliedCodes(state) {
        const appliedCodesData = state.getData('promoData');
        if (appliedCodesData.length > 0) {
            if (this.appliedCodesList) {
                this.appliedCodesList.destroy();
            }
            if (!this.appliedCodesTitle) {
                this.appliedCodesTitle = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.appliedCodesWrapper.node, 'p', 'promo-codes_applied-title', 'Applied codes');
            }
            this.appliedCodesList = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.appliedCodesWrapper.node, 'ul', 'promo-codes_applied-list');
            appliedCodesData.forEach((el) => {
                const promoCode = _data_promo_codes__WEBPACK_IMPORTED_MODULE_1__.promoCodes.find((elem) => elem.name === el);
                if (promoCode) {
                    const appliedCodesItem = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.appliedCodesList.node, 'li', 'promo-codes_wrapper');
                    new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](appliedCodesItem.node, 'p', 'promo-codes_text', `${promoCode.name} - ${promoCode.discount}% - `);
                    const removeCodeButton = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](appliedCodesItem.node, 'button', 'promo-codes_button', 'DROP');
                    removeCodeButton.node.onclick = () => this.deletePromo(el, state);
                }
            });
        }
        else {
            if (this.appliedCodesTitle) {
                this.appliedCodesTitle.destroy();
                this.appliedCodesTitle = null;
            }
            if (this.appliedCodesList)
                this.appliedCodesList.destroy();
        }
    }
    addPromo(value, state) {
        const promoCode = _data_promo_codes__WEBPACK_IMPORTED_MODULE_1__.promoCodes.find((el) => el.name === value);
        const appliedPromoCodes = state.getData('promoData');
        if (promoCode && !appliedPromoCodes.find((elem) => elem === promoCode.name)) {
            this.promoCodesWrapper = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'promo-codes_wrapper');
            const promoCodeWrapper = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.promoCodesWrapper.node, 'div', 'promo-codes_inner-wrapper');
            new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](promoCodeWrapper.node, 'p', 'promo-codes_text', `${promoCode.name} - ${promoCode.discount}% - `);
            const addCodeButton = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](promoCodeWrapper.node, 'button', 'promo-codes_button', 'ADD');
            addCodeButton.node.onclick = () => {
                state.setData(promoCode.name, 'promoData');
                this.promoCodeInput.node.value = '';
                promoCodeWrapper.destroy();
                this.renderAppliedCodes(state);
                this.changeTotalSum();
            };
        }
        else {
            if (this.promoCodesWrapper)
                this.promoCodesWrapper.destroy();
        }
    }
    deletePromo(value, state) {
        state.deleteData(value, 'promoData');
        this.renderAppliedCodes(state);
        this.changeTotalSum();
    }
}


/***/ }),

/***/ "./js/application/main/cart-page/cart-summary.ts":
/*!*******************************************************!*\
  !*** ./js/application/main/cart-page/cart-summary.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartSummary": () => (/* binding */ CartSummary)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/control */ "./js/common/control.ts");
/* harmony import */ var _data_promo_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/promo-codes */ "./js/data/promo-codes.ts");
/* harmony import */ var _purchase_cart_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase/cart-modal */ "./js/application/main/cart-page/purchase/cart-modal.ts");
/* harmony import */ var _cart_promo_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-promo-codes */ "./js/application/main/cart-page/cart-promo-codes.ts");




class CartSummary extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode, state) {
        super(parentNode, 'div', 'summary');
        const summaryBlock = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'summary_inner');
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](summaryBlock.node, 'p', 'summary_title', 'Summary');
        const productsAmount = this.calculateAmount(state);
        this.summaryProductsAmount = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](summaryBlock.node, 'p', 'summary_amount', `Products: ${productsAmount.toString()}`);
        this.renderTotalSum(state, summaryBlock);
        const promo = new _cart_promo_codes__WEBPACK_IMPORTED_MODULE_3__.PromoCodes(summaryBlock.node, state);
        promo.changeTotalSum = () => this.renderTotalSum(state, summaryBlock);
        const buyButton = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](summaryBlock.node, 'button', 'cart_button', 'BUY NOW');
        buyButton.node.onclick = () => {
            const cartModal = new _purchase_cart_modal__WEBPACK_IMPORTED_MODULE_2__.CartModal(this.node);
            cartModal.closeModal = () => cartModal.destroy();
            cartModal.closeCart = () => this.closeCart();
        };
        state.onUpdate.add((type) => {
            if (type === 'cartData' || type === 'promoData') {
                const newAmount = this.calculateAmount(state);
                const newPrice = this.calculatePrice(state);
                const newDiscountPrice = this.calculateDiscountPrice(state.getData('promoData'), newPrice);
                this.summaryProductsAmount.node.textContent = `Products: ${newAmount.toString()}`;
                this.summaryTotalPrice.node.textContent = `Total: €${newPrice}.00`;
                if (newDiscountPrice > 0) {
                    this.summaryTotalPriceNew.node.textContent = `Total: €${newDiscountPrice}.00`;
                }
                else {
                    this.summaryTotalPriceNew.node.textContent = '';
                }
            }
        });
    }
    calculateAmount(state) {
        return state.getData('cartData').reduce((accum, current) => accum + current.amount, 0);
    }
    calculatePrice(state) {
        return state
            .getData('cartData')
            .reduce((accum, current) => accum + current.price * current.amount, 0);
    }
    calculateDiscountPrice(data, price) {
        const totalDiscount = data.reduce((acum, el) => {
            const promoCode = _data_promo_codes__WEBPACK_IMPORTED_MODULE_1__.promoCodes.find((elem) => elem.name === el);
            if (promoCode)
                return acum + promoCode.discount;
            return 0;
        }, 0);
        return Math.round(price - (price / 100) * totalDiscount);
    }
    renderTotalSum(state, innerNode) {
        if (!this.summaryTotalPrice) {
            const totalPrice = this.calculatePrice(state);
            this.summaryTotalPrice = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](innerNode.node, 'p', 'summary_price', `Total: €${totalPrice}.00`);
            this.summaryTotalPriceNew = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](innerNode.node, 'p', 'summary_price-new', '');
        }
        this.renderDiscountSum(state, this.calculatePrice(state));
    }
    renderDiscountSum(state, price) {
        const appliedCodesData = state.getData('promoData');
        if (appliedCodesData.length > 0) {
            const totalPriceNew = this.calculateDiscountPrice(appliedCodesData, price);
            this.summaryTotalPrice.node.style.textDecoration = 'line-through';
            this.summaryTotalPriceNew.node.textContent = `Total: €${totalPriceNew}.00`;
            this.summaryTotalPriceNew.node.style.display = 'block';
        }
        else {
            this.summaryTotalPrice.node.style.textDecoration = 'none';
            this.summaryTotalPriceNew.node.style.display = 'none';
            this.summaryTotalPriceNew.node.textContent = '';
        }
    }
}


/***/ }),

/***/ "./js/application/main/cart-page/purchase/cart-modal.ts":
/*!**************************************************************!*\
  !*** ./js/application/main/cart-page/purchase/cart-modal.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModal": () => (/* binding */ CartModal)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./js/common/control.ts");
/* harmony import */ var _data_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/form */ "./js/data/form.ts");
/* harmony import */ var _form_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-line */ "./js/application/main/cart-page/purchase/form-line.ts");
/* harmony import */ var _form_card_number_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-card-number-line */ "./js/application/main/cart-page/purchase/form-card-number-line.ts");
/* harmony import */ var _form_card_expire_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-card-expire-line */ "./js/application/main/cart-page/purchase/form-card-expire-line.ts");
/* harmony import */ var _form_card_cvv_line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-card-cvv-line */ "./js/application/main/cart-page/purchase/form-card-cvv-line.ts");






class CartModal extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode) {
        super(parentNode, 'div', 'purchase');
        const purchaseBg = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'purchase_background');
        purchaseBg.node.onclick = () => this.closeModal();
        this.inputs = [];
        this.errors = {};
        const purchaseForm = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'form', 'purchase_form');
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](purchaseForm.node, 'p', 'purchase_title', 'Personal details');
        this.inputs.push(new _form_line__WEBPACK_IMPORTED_MODULE_2__.FormLine(purchaseForm.node, _data_form__WEBPACK_IMPORTED_MODULE_1__.formData.name));
        this.inputs.push(new _form_line__WEBPACK_IMPORTED_MODULE_2__.FormLine(purchaseForm.node, _data_form__WEBPACK_IMPORTED_MODULE_1__.formData.phone));
        this.inputs.push(new _form_line__WEBPACK_IMPORTED_MODULE_2__.FormLine(purchaseForm.node, _data_form__WEBPACK_IMPORTED_MODULE_1__.formData.address));
        this.inputs.push(new _form_line__WEBPACK_IMPORTED_MODULE_2__.FormLine(purchaseForm.node, _data_form__WEBPACK_IMPORTED_MODULE_1__.formData.email));
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](purchaseForm.node, 'p', 'purchase_title', 'Credit card details');
        this.inputs.push(new _form_card_number_line__WEBPACK_IMPORTED_MODULE_3__.FormCardNumberLine(purchaseForm.node, _data_form__WEBPACK_IMPORTED_MODULE_1__.formData.cardNumber));
        this.inputs.push(new _form_card_expire_line__WEBPACK_IMPORTED_MODULE_4__.FormCardExpireLine(purchaseForm.node, _data_form__WEBPACK_IMPORTED_MODULE_1__.formData.cardExpire));
        this.inputs.push(new _form_card_cvv_line__WEBPACK_IMPORTED_MODULE_5__.FormCardCvvLine(purchaseForm.node, _data_form__WEBPACK_IMPORTED_MODULE_1__.formData.cardCvv));
        const confirmButton = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](purchaseForm.node, 'button', 'purchase_button', 'CONFIRM');
        confirmButton.node.type = 'button';
        confirmButton.node.onclick = () => this.sendForm();
    }
    sendForm() {
        if (this.checkForm())
            this.closeCart();
    }
    checkForm() {
        const results = this.inputs.map((el) => this.checkInput(el, el.name));
        return !results.includes(false);
    }
    checkInput(input, inputName) {
        if (this.isValidInput(input.value, _data_form__WEBPACK_IMPORTED_MODULE_1__.formData[inputName].validation)) {
            this.hideError(inputName);
            return true;
        }
        else {
            this.showError(inputName, input.node);
            input.node.oninput = () => this.checkInput(input, inputName);
            return false;
        }
    }
    isValidInput(input, validation) {
        return validation.test(input);
    }
    showError(name, parentNode) {
        if (!this.errors[name])
            this.errors[name] = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](parentNode, 'span', 'purchase_error', _data_form__WEBPACK_IMPORTED_MODULE_1__.formData[name].error);
    }
    hideError(name) {
        if (this.errors[name]) {
            this.errors[name].destroy();
            delete this.errors[name];
        }
    }
}


/***/ }),

/***/ "./js/application/main/cart-page/purchase/form-card-cvv-line.ts":
/*!**********************************************************************!*\
  !*** ./js/application/main/cart-page/purchase/form-card-cvv-line.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormCardCvvLine": () => (/* binding */ FormCardCvvLine)
/* harmony export */ });
/* harmony import */ var _form_line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-line */ "./js/application/main/cart-page/purchase/form-line.ts");

class FormCardCvvLine extends _form_line__WEBPACK_IMPORTED_MODULE_0__.FormLine {
    constructor(parentNode, formData) {
        super(parentNode, formData);
    }
    setValue() {
        super.setValue();
        this.input.node.addEventListener('input', () => {
            if (this.input.node.value.length > 3) {
                this.input.node.value = this.input.node.value.slice(0, 3);
                this.value = this.input.node.value;
            }
        });
    }
}


/***/ }),

/***/ "./js/application/main/cart-page/purchase/form-card-expire-line.ts":
/*!*************************************************************************!*\
  !*** ./js/application/main/cart-page/purchase/form-card-expire-line.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormCardExpireLine": () => (/* binding */ FormCardExpireLine)
/* harmony export */ });
/* harmony import */ var _form_line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-line */ "./js/application/main/cart-page/purchase/form-line.ts");

class FormCardExpireLine extends _form_line__WEBPACK_IMPORTED_MODULE_0__.FormLine {
    constructor(parentNode, formData) {
        super(parentNode, formData);
    }
    setValue() {
        super.setValue();
        this.input.node.addEventListener('input', () => {
            if (this.input.node.value.length < 2) {
                this.input.node.value = this.input.node.value.replace(/(\/)/g, '');
            }
            if (this.input.node.value.length > 2) {
                if (/(\/)/g.test(this.input.node.value)) {
                    const dividerPos = this.input.node.value.indexOf('/');
                    if (dividerPos > 2) {
                        this.input.node.value = `${this.input.node.value.slice(0, 2)}/${this.input.node.value.slice(dividerPos + 1)}`;
                    }
                }
                else {
                    this.input.node.value = `${this.input.node.value.slice(0, 2)}/${this.input.node.value.slice(2)}`;
                }
            }
            if (this.input.node.value.length > 5) {
                this.input.node.value = this.input.node.value.slice(0, 5);
            }
            this.value = this.input.node.value;
        });
    }
}


/***/ }),

/***/ "./js/application/main/cart-page/purchase/form-card-number-line.ts":
/*!*************************************************************************!*\
  !*** ./js/application/main/cart-page/purchase/form-card-number-line.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormCardNumberLine": () => (/* binding */ FormCardNumberLine)
/* harmony export */ });
/* harmony import */ var _form_line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-line */ "./js/application/main/cart-page/purchase/form-line.ts");

const cardClasses = [
    'purchase_card-input__default',
    'purchase_card-input__amex',
    'purchase_card-input__visa',
    'purchase_card-input__mastercard'
];
class FormCardNumberLine extends _form_line__WEBPACK_IMPORTED_MODULE_0__.FormLine {
    constructor(parentNode, formData) {
        super(parentNode, formData);
        this.input.node.classList.add('purchase_card-input', 'purchase_card-input__default');
        this.changePaymentSystemLogo();
    }
    setValue() {
        super.setValue();
        this.input.node.addEventListener('input', () => {
            if (this.input.node.value.length > 16) {
                this.input.node.value = this.input.node.value.slice(0, 16);
                this.value = this.input.node.value;
            }
        });
    }
    changePaymentSystemLogo() {
        this.input.node.addEventListener('input', () => {
            cardClasses.forEach((elem) => {
                this.input.node.classList.remove(elem);
            });
            switch (this.input.node.value.slice(0, 1)) {
                case '3':
                    this.input.node.classList.add('purchase_card-input__amex');
                    break;
                case '4':
                    this.input.node.classList.add('purchase_card-input__visa');
                    break;
                case '5':
                    this.input.node.classList.add('purchase_card-input__mastercard');
                    break;
                default:
                    this.input.node.classList.add('purchase_card-input__default');
                    break;
            }
        });
    }
}


/***/ }),

/***/ "./js/application/main/cart-page/purchase/form-line.ts":
/*!*************************************************************!*\
  !*** ./js/application/main/cart-page/purchase/form-line.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormLine": () => (/* binding */ FormLine)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./js/common/control.ts");

class FormLine extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode, formData) {
        super(parentNode, 'div', 'purchase_line-wrapper');
        this.name = formData.name;
        this.value = '';
        const label = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'label', 'purchase_label', formData.label);
        label.node.htmlFor = formData.id;
        this.input = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'input', 'purchase_input', '');
        this.input.node.type = formData.type;
        this.input.node.name = formData.name;
        this.input.node.placeholder = formData.placeholder;
        this.input.node.id = formData.id;
        this.setValue();
    }
    setValue() {
        this.input.node.addEventListener('input', () => {
            this.value = this.input.node.value;
        });
    }
}


/***/ }),

/***/ "./js/application/main/main-page/category/category-check.ts":
/*!******************************************************************!*\
  !*** ./js/application/main/main-page/category/category-check.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryCheckbox": () => (/* binding */ CategoryCheckbox)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./js/common/control.ts");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/data */ "./js/data/data.ts");


class CategoryCheckbox extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode, type, state) {
        super(parentNode, 'div', 'category_checkbox', '');
        this.listOfCounterEl = [];
        this.listOfCheckedEl = [];
        this.currentType = type;
        const categoryCheckboxTitle = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'h3', 'category_checkbox_title', '');
        if (type === 'category') {
            categoryCheckboxTitle.node.textContent = 'Category';
        }
        else if (type === 'brand') {
            categoryCheckboxTitle.node.textContent = 'Brand';
        }
        const categoryCheckboxList = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'ul', 'category_checkbox_list', '');
        const productsValue = {};
        const categories = _data_data__WEBPACK_IMPORTED_MODULE_1__.products.forEach((it) => {
            if (type === 'category') {
                if (productsValue[it.category] === undefined) {
                    productsValue[it.category] = 1;
                }
                else {
                    productsValue[it.category] += 1;
                }
            }
            else if (type === 'brand') {
                if (productsValue[it.brand] === undefined) {
                    productsValue[it.brand] = 1;
                }
                else {
                    productsValue[it.brand] += 1;
                }
            }
        });
        for (let key in productsValue) {
            const categoryItem = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](categoryCheckboxList.node, 'li', 'category_item', ``);
            const categoryItemBlock = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](categoryItem.node, 'div', 'category_item_block', '');
            const categoryLabel = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](categoryItemBlock.node, 'label', 'category_item_label', '');
            const categoryRadio = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](categoryLabel.node, 'input', 'category_item_radio');
            categoryRadio.node.type = 'checkbox';
            this.listOfCheckedEl.push(categoryRadio.node);
            categoryRadio.node.onclick = () => {
                if (categoryRadio.node.checked) {
                    this.addGoods(key, state, type);
                }
                else {
                    this.removeGoods(key, state, type);
                }
            };
            const customCheckbox = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](categoryLabel.node, 'span', 'category_custom_check');
            const categoryItemName = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](categoryLabel.node, 'p', 'category_item_text', `${key}`);
            const categoryItemCount = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](categoryItemBlock.node, 'p', 'category_item_count', `${productsValue[key]}/${productsValue[key]}`);
            this.listOfCounterEl.push(categoryItemCount.node);
        }
        state.onUpdate.add((type) => {
            // TODO delete any type;
            if (type === 'resetFilters') {
                this.listOfCheckedEl.forEach((el) => {
                    el.checked = false;
                });
            }
        });
        state.onUpdate.add((type) => {
            if (type === 'sortCount') {
                const getCounts = state.getData('sortCount');
                let counter = 0;
                for (let key in productsValue) {
                    if (this.currentType === 'category') {
                        this.listOfCounterEl[counter].textContent = `${getCounts.category[key]}/${productsValue[key]}`;
                    }
                    else if (this.currentType === 'brand') {
                        this.listOfCounterEl[counter].textContent = `${getCounts.brand[key]}/${productsValue[key]}`;
                    }
                    counter++;
                }
            }
        });
    }
    addGoods(product, state, type) {
        state.setData(product, type);
        this.filtration();
    }
    removeGoods(product, state, type) {
        state.deleteData(product, type);
        this.filtration();
    }
}


/***/ }),

/***/ "./js/application/main/main-page/category/category-input.ts":
/*!******************************************************************!*\
  !*** ./js/application/main/main-page/category/category-input.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryInput": () => (/* binding */ CategoryInput)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./js/common/control.ts");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/data */ "./js/data/data.ts");


class CategoryInput extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode, type, state) {
        super(parentNode, 'div', 'category_range_inner');
        this.type = type;
        const inputBlockTitle = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'h3', 'category_input_title');
        if (type === 'price') {
            inputBlockTitle.node.textContent = 'Price';
        }
        else if (type === 'stock') {
            inputBlockTitle.node.textContent = 'Stock';
        }
        const inputValueBlock = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'category_input_value');
        const maxValue = _data_data__WEBPACK_IMPORTED_MODULE_1__.products.reduce((acc, it) => {
            if (type === 'price') {
                if (it.price > acc) {
                    acc = it.price;
                }
            }
            else if (type === 'stock') {
                if (it.stock > acc) {
                    acc = it.stock;
                }
            }
            return acc;
        }, 0);
        const minValue = _data_data__WEBPACK_IMPORTED_MODULE_1__.products.reduce((acc, it) => {
            if (type === 'price') {
                if (it.price < acc) {
                    acc = it.price;
                }
            }
            else if (type === 'stock') {
                if (it.stock < acc) {
                    acc = it.stock;
                }
            }
            return acc;
        }, maxValue);
        const minInputValue = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](inputValueBlock.node, 'p', 'category_input_min');
        const maxInputValue = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](inputValueBlock.node, 'p', 'category_input_max');
        if (type === 'price') {
            minInputValue.node.textContent = `from €${minValue}`;
            maxInputValue.node.textContent = `to €${maxValue}`;
        }
        else if (type === 'stock') {
            minInputValue.node.textContent = `${minValue}`;
            maxInputValue.node.textContent = `${maxValue}`;
        }
        const inputInner = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'category_input_inner');
        const inputTrack = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](inputInner.node, 'div', 'category_input_track');
        const inputFirst = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](inputInner.node, 'input', 'category_input');
        inputFirst.node.type = 'range';
        inputFirst.node.min = minValue.toString();
        inputFirst.node.max = maxValue.toString();
        inputFirst.node.value = minValue.toString();
        inputFirst.node.oninput = () => inputOne();
        const inputSecond = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](inputInner.node, 'input', 'category_input');
        inputSecond.node.type = 'range';
        inputSecond.node.min = minValue.toString();
        inputSecond.node.max = maxValue.toString();
        inputSecond.node.value = maxValue.toString();
        inputSecond.node.oninput = () => inputTwo();
        state.onUpdate.add((type) => {
            if (type === 'resetFilters') {
                inputFirst.node.value = minValue.toString();
                inputSecond.node.value = maxValue.toString();
                fillColor();
                if (this.type === 'price') {
                    minInputValue.node.textContent = `from €${minValue}`;
                    maxInputValue.node.textContent = `to €${maxValue}`;
                }
                else if (this.type === 'stock') {
                    minInputValue.node.textContent = `${minValue}`;
                    maxInputValue.node.textContent = `${maxValue}`;
                }
            }
        });
        const minGap = 0;
        const inputOne = () => {
            if (parseInt(inputSecond.node.value) - parseInt(inputFirst.node.value) <= minGap) {
                inputFirst.node.value = String(parseInt(inputSecond.node.value) - minGap);
            }
            if (type === 'price') {
                minInputValue.node.textContent = `from €${inputFirst.node.value}`;
                this.setValue({
                    min: +inputFirst.node.value,
                    max: +inputSecond.node.value,
                }, state, type);
            }
            else if (type === 'stock') {
                this.setValue({
                    min: +inputFirst.node.value,
                    max: +inputSecond.node.value,
                }, state, type);
                minInputValue.node.textContent = inputFirst.node.value;
            }
            fillColor();
        };
        const inputTwo = () => {
            if (parseInt(inputSecond.node.value) - parseInt(inputFirst.node.value) <= minGap) {
                inputSecond.node.value = String(parseInt(inputFirst.node.value) + minGap);
            }
            if (type === 'price') {
                maxInputValue.node.textContent = `to €${inputSecond.node.value}`;
                this.setValue({
                    min: +inputFirst.node.value,
                    max: +inputSecond.node.value,
                }, state, type);
            }
            else if (type === 'stock') {
                this.setValue({
                    min: +inputFirst.node.value,
                    max: +inputSecond.node.value,
                }, state, type);
                maxInputValue.node.textContent = inputSecond.node.value;
            }
            fillColor();
        };
        function fillColor() {
            let percent1 = (+inputFirst.node.value / +inputFirst.node.max) * 100;
            let percent2 = (+inputSecond.node.value / +inputSecond.node.max) * 100;
            inputTrack.node.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #0077c0 ${percent1}% , #0077c0 ${percent2}%, #dadae5 ${percent2}%)`;
        }
    }
    setValue(value, state, type) {
        state.setData({
            min: value.min,
            max: value.max,
        }, type);
        this.filtration();
    }
}


/***/ }),

/***/ "./js/application/main/main-page/category/category.ts":
/*!************************************************************!*\
  !*** ./js/application/main/main-page/category/category.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./js/common/control.ts");
/* harmony import */ var _category_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-check */ "./js/application/main/main-page/category/category-check.ts");
/* harmony import */ var _category_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-input */ "./js/application/main/main-page/category/category-input.ts");



class Category extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode, state, products) {
        super(parentNode, 'div', 'category', '');
        this.listProducts = products;
        const categoryBlock = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'category_block');
        const categoryBlockBtns = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](categoryBlock.node, 'div', 'category_block_btn');
        const btnResetFilters = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](categoryBlockBtns.node, 'button', 'category_btn', 'reset filter');
        btnResetFilters.node.onclick = () => this.resetFiltres(state);
        const btnCopyFilters = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](categoryBlockBtns.node, 'button', 'category_btn', 'copy filter');
        const categoryCheck = new _category_check__WEBPACK_IMPORTED_MODULE_1__.CategoryCheckbox(categoryBlock.node, 'category', state);
        categoryCheck.filtration = () => this.filtration(state, products);
        const categoryPrice = new _category_check__WEBPACK_IMPORTED_MODULE_1__.CategoryCheckbox(categoryBlock.node, 'brand', state);
        categoryPrice.filtration = () => this.filtration(state, products);
        const categoryInputPrice = new _category_input__WEBPACK_IMPORTED_MODULE_2__.CategoryInput(categoryBlock.node, 'price', state);
        categoryInputPrice.filtration = () => this.filtration(state, products);
        const categoryInputStock = new _category_input__WEBPACK_IMPORTED_MODULE_2__.CategoryInput(categoryBlock.node, 'stock', state);
        categoryInputStock.filtration = () => this.filtration(state, products);
        state.onUpdate.add((type) => {
            if (type === 'sortOptions' || type === 'sortSearch') {
                this.filtration(state, products);
            }
            if (type === 'resetFilters') {
                this.filtration(state, products);
            }
        });
    }
    resetFiltres(state) {
        state.setData(null, 'resetFilters');
    }
    filtration(state, products) {
        const getCategories = state.getData('category');
        const getBrands = state.getData('brand');
        let sortArr;
        if (getCategories.length && !getBrands.length) {
            sortArr = this.filterCategory(products, getCategories);
        }
        else if (!getCategories.length && getBrands.length) {
            sortArr = this.filterBrand(products, getBrands);
        }
        else {
            if (!getCategories.length && !getBrands.length) {
                sortArr = products;
            }
            else {
                sortArr = this.filterBrand(this.filterCategory(products, getCategories), getBrands);
            }
        }
        let filterPriceAndStock = this.filterPrice(this.filterStock(sortArr, state), state);
        let finishProductList = filterPriceAndStock;
        if (state.getData('sortSearch')) {
            finishProductList = this.sortBySearch(filterPriceAndStock, state);
        }
        else {
            finishProductList = filterPriceAndStock;
        }
        const filterCounts = this.filterCount(this.listProducts, finishProductList);
        const getSortOptions = state.getData('sortOptions');
        if (getSortOptions.isSort) {
            const currentSortArr = finishProductList ? finishProductList : products;
            if (getSortOptions.sortType === 'ASC') {
                finishProductList = this.sortByASC(currentSortArr, getSortOptions.sortValue);
            }
            else if (getSortOptions.sortType === 'DESC') {
                finishProductList = this.sortByDESC(currentSortArr, getSortOptions.sortValue);
            }
        }
        state.setData(finishProductList, 'sortGoods');
        state.setData(filterCounts, 'sortCount');
    }
    sortBySearch(products, state) {
        return products.filter((el) => {
            let searchValue = state.getData('sortSearch');
            for (let key in el) {
                if (key !== 'id' && key !== 'thumbnail' && key !== 'images') {
                    let currentValue = el[key].toString().toLowerCase();
                    if (currentValue.includes(searchValue.toLowerCase())) {
                        return el;
                    }
                }
            }
        });
    }
    sortByASC(sortProducts, sortValue) {
        return sortProducts.sort((a, b) => a[sortValue] - b[sortValue]);
    }
    sortByDESC(sortProducts, sortValue) {
        return sortProducts.sort((a, b) => b[sortValue] - a[sortValue]);
    }
    filterCount(productList, sortProductList) {
        const result = {
            category: {},
            brand: {},
        };
        productList.forEach((el) => {
            result.category[el.category] = 0;
            result.brand[el.brand] = 0;
            sortProductList.forEach((it, i) => {
                if (el.category === it.category) {
                    result.category[el.category] += 1;
                }
                if (el.brand === it.brand) {
                    result.brand[el.brand] += 1;
                }
            });
        });
        return result;
    }
    filterPrice(arr, state) {
        const value = {
            min: state.getData('price').min,
            max: state.getData('price').max,
        };
        return arr.filter((el) => el.price >= value.min && el.price <= value.max);
    }
    filterStock(arr, state) {
        const value = {
            min: state.getData('stock').min,
            max: state.getData('stock').max,
        };
        return arr.filter((el) => el.stock >= value.min && el.stock <= value.max);
    }
    filterCategory(arr, categories) {
        return arr.filter((el) => categories.includes(el.category.toLowerCase()));
    }
    filterBrand(arr, brand) {
        return arr.filter((el) => brand.includes(el.brand.toLowerCase()));
    }
}


/***/ }),

/***/ "./js/application/main/main-page/goods/cart-button.ts":
/*!************************************************************!*\
  !*** ./js/application/main/main-page/goods/cart-button.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartButton": () => (/* binding */ CartButton)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./js/common/control.ts");

var CartButtonText;
(function (CartButtonText) {
    CartButtonText["add"] = "Add to cart";
    CartButtonText["remove"] = "Remove from cart";
})(CartButtonText || (CartButtonText = {}));
class CartButton extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parendNode, product, state) {
        super(parendNode, 'button', 'goods_product_button', state.getData('cartData').find((el) => el.id === product.id)
            ? CartButtonText.remove
            : CartButtonText.add);
        this.node.onclick = () => {
            if (this.node.innerText === CartButtonText.add) {
                this.node.innerText = CartButtonText.remove;
                this.addToCart({ id: product.id, price: product.price, amount: 1 }, state);
            }
            else {
                this.node.innerText = CartButtonText.add;
                this.removeFromCart({ id: product.id, price: product.price, amount: 1 }, state);
            }
        };
    }
    addToCart(productInfo, state) {
        state.setData(productInfo, 'cartData');
    }
    removeFromCart(productInfo, state) {
        state.deleteData(productInfo, 'cartData');
    }
}


/***/ }),

/***/ "./js/application/main/main-page/goods/goods-filters.ts":
/*!**************************************************************!*\
  !*** ./js/application/main/main-page/goods/goods-filters.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoodsFilters": () => (/* binding */ GoodsFilters)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./js/common/control.ts");

class GoodsFilters extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode, state, products) {
        super(parentNode, 'div', 'goods_filter');
        this.sortOptions = [
            'Sort by price ASC',
            'Sort by price DESC',
            'Sort by rating ASC',
            'Sort by rating DESC',
            'Sort by discount ASC',
            'Sort by discount DESC',
        ];
        const inputSort = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'select', 'goods_filter_select');
        for (let i = 0; i < this.sortOptions.length; i++) {
            if (i === 0) {
                const selectItemFirst = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](inputSort.node, 'option', 'goods_filter_option', 'Sort options:');
                selectItemFirst.node.disabled = true;
            }
            const inputSortItem = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](inputSort.node, 'option', 'goods_filter_option', `${this.sortOptions[i]}`);
            inputSortItem.node.value = this.sortOptions[i];
            inputSort.node.onchange = (e) => this.sortByParam(e, state);
        }
        const foundSort = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'goods_filter_count', 'Found: 100');
        foundSort.node.textContent = `Found: ${state.getData('sortGoods').length || products.length}`;
        state.onUpdate.add((type) => {
            if (type === 'sortGoods') {
                foundSort.node.textContent = `Found: ${state.getData('sortGoods').length}`;
            }
            if (type === 'resetFilters') {
                searchSort.node.value = state.getData('sortSearch');
            }
        });
        // TODO delete any type;
        const searchSort = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'input', 'goods_filter_search');
        searchSort.node.type = 'search';
        searchSort.node.placeholder = 'Search product';
        searchSort.node.oninput = () => this.sortBySearch(searchSort.node.value, state);
        searchSort.node.value = state.getData('sortSearch');
        const goodsBlockBtn = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'goods_btns_block');
        const btnSize = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](goodsBlockBtn.node, 'button', 'goods_btn_size goods_btn_size_1', 'size-1');
        btnSize.node.onclick = () => this.changeSize(1);
        const btnSize1 = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](goodsBlockBtn.node, 'button', 'goods_btn_size goods_btn_size_1', 'size-2');
        btnSize1.node.onclick = () => this.changeSize(2);
    }
    sortBySearch(value, state) {
        state.setData(value, 'sortSearch');
    }
    sortByParam(event, state) {
        // TODO delete any type;
        let target = event.target;
        let targetValue = target.value;
        const result = {
            isSort: false,
            sortType: null,
            sortValue: null,
        };
        switch (targetValue) {
            case 'Sort by price ASC':
                result.isSort = true;
                result.sortType = 'ASC';
                result.sortValue = 'price';
                state.setData(result, 'sortOptions');
                break;
            case 'Sort by price DESC':
                result.isSort = true;
                result.sortType = 'DESC';
                result.sortValue = 'price';
                state.setData(result, 'sortOptions');
                break;
            case 'Sort by rating ASC':
                result.isSort = true;
                result.sortType = 'ASC';
                result.sortValue = 'rating';
                state.setData(result, 'sortOptions');
                break;
            case 'Sort by rating DESC':
                result.isSort = true;
                result.sortType = 'DESC';
                result.sortValue = 'rating';
                state.setData(result, 'sortOptions');
                break;
            case 'Sort by discount ASC':
                result.isSort = true;
                result.sortType = 'ASC';
                result.sortValue = 'discountPercentage';
                state.setData(result, 'sortOptions');
                break;
            case 'Sort by discount DESC':
                result.isSort = true;
                result.sortType = 'DESC';
                result.sortValue = 'discountPercentage';
                state.setData(result, 'sortOptions');
                break;
            default:
                result.isSort = false;
                result.sortType = null;
                result.sortValue = null;
                state.setData(result, 'sortOptions');
                return;
        }
    }
}


/***/ }),

/***/ "./js/application/main/main-page/goods/goods-item.ts":
/*!***********************************************************!*\
  !*** ./js/application/main/main-page/goods/goods-item.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoodsItem": () => (/* binding */ GoodsItem)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./js/common/control.ts");
/* harmony import */ var _cart_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-button */ "./js/application/main/main-page/goods/cart-button.ts");


class GoodsItem extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parendNode, product, state) {
        super(parendNode, 'li', 'goods_product', '');
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'goods_product_title', product.title);
        const imageWrapper = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'goods_product_image-wrapper', '');
        const image = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](imageWrapper.node, 'img', 'goods_product_image', '');
        image.node.src = product.thumbnail;
        image.node.width = 200;
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'goods_product_rate goods_product_text', `Rating: ${product.rating}`);
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'goods_product_price goods_product_text', `Price: €${product.price}.00`);
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'goods_product_text', `Brand: ${product.brand}`);
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'goods_product_text', `Stock: ${product.stock}`);
        new _cart_button__WEBPACK_IMPORTED_MODULE_1__.CartButton(this.node, product, state);
        const detailsButton = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'button', 'goods_product_button', 'Details');
        detailsButton.node.onclick = () => this.onProductPage(product.id);
    }
}


/***/ }),

/***/ "./js/application/main/main-page/goods/goods.ts":
/*!******************************************************!*\
  !*** ./js/application/main/main-page/goods/goods.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Goods": () => (/* binding */ Goods)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./js/common/control.ts");
/* harmony import */ var _goods_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods-item */ "./js/application/main/main-page/goods/goods-item.ts");
/* harmony import */ var _goods_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods-filters */ "./js/application/main/main-page/goods/goods-filters.ts");



class Goods extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode, products, state) {
        super(parentNode, 'div', 'goods');
        const goodFilters = new _goods_filters__WEBPACK_IMPORTED_MODULE_2__.GoodsFilters(this.node, state, products);
        goodFilters.changeSize = (size) => {
            this.goodsList.destroy();
            this.createGoods(this.node, state.getData('sortGoods').length > 0 ? state.getData('sortGoods') : products, state, size);
        };
        this.createGoods(this.node, products, state);
        state.onUpdate.add((type) => {
            if (type === 'sortGoods') {
                this.goodsList.destroy();
                this.createGoods(this.node, state.getData('sortGoods'), state);
            }
        });
    }
    createGoods(parentNode, data, state, size = 1) {
        this.goodsList = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](parentNode, 'ul', 'goods_list');
        if (size === 1) {
            this.goodsList.node.style.gridTemplateColumns = 'repeat(3, 1fr)';
        }
        else {
            this.goodsList.node.style.gridTemplateColumns = 'repeat(5, 1fr)';
        }
        const products = data.map((el) => new _goods_item__WEBPACK_IMPORTED_MODULE_1__.GoodsItem(this.goodsList.node, el, state));
        products.forEach((el) => (el.onProductPage = (id) => this.onProductPage(id)));
    }
}


/***/ }),

/***/ "./js/application/main/main.ts":
/*!*************************************!*\
  !*** ./js/application/main/main.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/control */ "./js/common/control.ts");
/* harmony import */ var _main_page_category_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/category/category */ "./js/application/main/main-page/category/category.ts");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/data */ "./js/data/data.ts");
/* harmony import */ var _main_page_goods_goods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/goods/goods */ "./js/application/main/main-page/goods/goods.ts");
/* harmony import */ var _product_page_product_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-page/product-page */ "./js/application/main/product-page/product-page.ts");
/* harmony import */ var _cart_page_cart_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-page/cart-page */ "./js/application/main/cart-page/cart-page.ts");






class Main extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parendNode, screen, state, id) {
        super(parendNode, 'div', 'main_inner');
        switch (screen) {
            case 'main-page':
                const category = new _main_page_category_category__WEBPACK_IMPORTED_MODULE_1__.Category(this.node, state, _data_data__WEBPACK_IMPORTED_MODULE_2__.products);
                const goods = new _main_page_goods_goods__WEBPACK_IMPORTED_MODULE_3__.Goods(this.node, _data_data__WEBPACK_IMPORTED_MODULE_2__.products, state);
                goods.onProductPage = (id) => this.onProductPage(id);
                break;
            case 'product-page':
                const productPage = new _product_page_product_page__WEBPACK_IMPORTED_MODULE_4__.ProductPage(this.node, id, state);
                productPage.onCartPage = () => this.onCartPage();
                productPage.onMainPage = () => this.onMainPage();
                break;
            case 'cart-page':
                const cartPage = new _cart_page_cart_page__WEBPACK_IMPORTED_MODULE_5__.CartPage(this.node, state);
                cartPage.closeCart = () => {
                    cartPage.destroy();
                    this.closeCart();
                };
                break;
            default:
                return;
        }
    }
}


/***/ }),

/***/ "./js/application/main/product-page/breadcrumbs.ts":
/*!*********************************************************!*\
  !*** ./js/application/main/product-page/breadcrumbs.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Breadcrumbs": () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/control */ "./js/common/control.ts");

class Breadcrumbs extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parendNode, product) {
        super(parendNode, 'ul', 'breadcrumbs', '');
        const mainPageItem = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'li', 'breadcrumbs_item');
        const mainPageLink = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](mainPageItem.node, 'a', 'breadcrumbs_link', 'STORE');
        mainPageLink.node.href = '#';
        mainPageLink.node.onclick = () => this.onMainPage();
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'li', 'breadcrumbs_item', product.category.toUpperCase());
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'li', 'breadcrumbs_item', product.brand.toUpperCase());
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'li', 'breadcrumbs_item', product.title.toUpperCase());
    }
}


/***/ }),

/***/ "./js/application/main/product-page/product-card/product-card.ts":
/*!***********************************************************************!*\
  !*** ./js/application/main/product-page/product-card/product-card.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCard": () => (/* binding */ ProductCard)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./js/common/control.ts");
/* harmony import */ var _product_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details */ "./js/application/main/product-page/product-card/product-details.ts");
/* harmony import */ var _product_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-images */ "./js/application/main/product-page/product-card/product-images.ts");
/* harmony import */ var _product_purchase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-purchase */ "./js/application/main/product-page/product-card/product-purchase.ts");




class ProductCard extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parendNode, product, state) {
        super(parendNode, 'div', 'product', '');
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'h1', 'product_title', product.title);
        const productWrapper = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'product_wrapper');
        const productCardWrapper = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](productWrapper.node, 'div', 'product_card-wrapper');
        new _product_images__WEBPACK_IMPORTED_MODULE_2__.ProductImages(productCardWrapper.node, product.images);
        new _product_details__WEBPACK_IMPORTED_MODULE_1__.ProductDetails(productCardWrapper.node, product);
        const productPurchase = new _product_purchase__WEBPACK_IMPORTED_MODULE_3__.ProductPurchase(productWrapper.node, product, state);
        productPurchase.onCartPage = () => this.onCartPage();
    }
}


/***/ }),

/***/ "./js/application/main/product-page/product-card/product-details.ts":
/*!**************************************************************************!*\
  !*** ./js/application/main/product-page/product-card/product-details.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetails": () => (/* binding */ ProductDetails)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./js/common/control.ts");

class ProductDetails extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parendNode, product) {
        super(parendNode, 'div', 'product_details', '');
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'product_rating', `Rating: ${product.rating}`);
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'product_info', `${product.category} / ${product.brand}`);
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'product_description', product.description);
    }
}


/***/ }),

/***/ "./js/application/main/product-page/product-card/product-images.ts":
/*!*************************************************************************!*\
  !*** ./js/application/main/product-page/product-card/product-images.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductImages": () => (/* binding */ ProductImages)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./js/common/control.ts");

const IMAGE_WIDTH = 400;
const CONTROL_WIDTH = 50;
class ProductImages extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parendNode, images) {
        super(parendNode, 'div', 'product_images', '');
        const productImage = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'img', 'product_image');
        productImage.node.src = images[0];
        productImage.node.width = IMAGE_WIDTH;
        const productImageControls = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'product_image-controls');
        images.forEach((el) => {
            const productImageControl = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](productImageControls.node, 'img', 'product_image-control');
            productImageControl.node.src = el;
            productImageControl.node.width = CONTROL_WIDTH;
            productImageControl.node.tabIndex = 0;
            productImageControl.node.onclick = () => {
                productImage.node.src = el;
            };
        });
    }
}


/***/ }),

/***/ "./js/application/main/product-page/product-card/product-purchase.ts":
/*!***************************************************************************!*\
  !*** ./js/application/main/product-page/product-card/product-purchase.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPurchase": () => (/* binding */ ProductPurchase)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/control */ "./js/common/control.ts");
/* harmony import */ var _main_page_goods_cart_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main-page/goods/cart-button */ "./js/application/main/main-page/goods/cart-button.ts");


class ProductPurchase extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parendNode, product, state) {
        super(parendNode, 'div', 'product_purchase', '');
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'product_price', `Price: €${product.price}.00`);
        const cartButton = new _main_page_goods_cart_button__WEBPACK_IMPORTED_MODULE_1__.CartButton(this.node, product, state);
        const buyButton = new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'button', 'goods_product_button', 'Buy now!');
        buyButton.node.onclick = () => {
            if (!(state.getData('cartData').find((el) => el.id === product.id))) {
                cartButton.addToCart({ id: product.id, price: product.price, amount: 1 }, state);
            }
            this.onCartPage();
            // TODO Add opening modal
        };
        new _common_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'product_stock', `Stock: ${product.stock}`);
    }
}


/***/ }),

/***/ "./js/application/main/product-page/product-page.ts":
/*!**********************************************************!*\
  !*** ./js/application/main/product-page/product-page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPage": () => (/* binding */ ProductPage)
/* harmony export */ });
/* harmony import */ var _common_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/control */ "./js/common/control.ts");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/data */ "./js/data/data.ts");
/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumbs */ "./js/application/main/product-page/breadcrumbs.ts");
/* harmony import */ var _product_card_product_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-card/product-card */ "./js/application/main/product-page/product-card/product-card.ts");




class ProductPage extends _common_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parendNode, id, state) {
        super(parendNode, 'div', 'product-page', '');
        const product = _data_data__WEBPACK_IMPORTED_MODULE_1__.products.find((el) => el.id === id);
        if (product) {
            const breadcrumbs = new _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs(this.node, product);
            breadcrumbs.onMainPage = () => this.onMainPage();
            const productCard = new _product_card_product_card__WEBPACK_IMPORTED_MODULE_3__.ProductCard(this.node, product, state);
            productCard.onCartPage = () => this.onCartPage();
        }
    }
}


/***/ }),

/***/ "./js/common/cart-data.ts":
/*!********************************!*\
  !*** ./js/common/cart-data.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartData": () => (/* binding */ CartData)
/* harmony export */ });
class CartData {
    constructor(data) {
        this.value = [];
        data.forEach((elem) => {
            if (typeof elem.id != 'number')
                throw new Error('');
            if (typeof elem.price != 'number')
                throw new Error('');
            if (typeof elem.amount != 'number')
                throw new Error('');
            this.value.push({ id: elem.id, price: elem.price, amount: elem.amount });
        });
    }
    static load() {
        const loaded = localStorage.getItem('savedCartState');
        if (loaded)
            return new CartData(JSON.parse(loaded).value).value;
    }
    save() {
        localStorage.setItem('savedCartState', JSON.stringify(this));
    }
    static getData() {
        const defaultData = [];
        let cartData;
        try {
            const loaded = CartData.load();
            if (loaded) {
                cartData = loaded;
            }
            else {
                cartData = [];
            }
        }
        catch (e) {
            const newData = new CartData(defaultData).value;
            cartData = newData;
        }
        return cartData;
    }
}


/***/ }),

/***/ "./js/common/control.ts":
/*!******************************!*\
  !*** ./js/common/control.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Control {
    constructor(parentNode, tagName = 'div', className = '', content = '') {
        const el = document.createElement(tagName);
        el.className = className;
        el.textContent = content;
        if (parentNode) {
            parentNode.append(el);
        }
        this.node = el;
    }
    destroy() {
        this.node.remove();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Control);


/***/ }),

/***/ "./js/common/promo-data.ts":
/*!*********************************!*\
  !*** ./js/common/promo-data.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromoData": () => (/* binding */ PromoData)
/* harmony export */ });
class PromoData {
    constructor(data) {
        this.value = [];
        data.forEach((elem) => {
            if (typeof elem != 'string')
                throw new Error('');
            this.value.push(elem);
        });
    }
    static load() {
        const loaded = localStorage.getItem('savedPromoState');
        if (loaded)
            return new PromoData(JSON.parse(loaded).value).value;
    }
    save() {
        localStorage.setItem('savedPromoState', JSON.stringify(this));
    }
    static getData() {
        const defaultData = [];
        let cartData;
        try {
            const loaded = PromoData.load();
            if (loaded) {
                cartData = loaded;
            }
            else {
                cartData = [];
            }
        }
        catch (e) {
            const newData = new PromoData(defaultData).value;
            cartData = newData;
        }
        return cartData;
    }
}


/***/ }),

/***/ "./js/common/signal.ts":
/*!*****************************!*\
  !*** ./js/common/signal.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Signal {
    constructor() {
        this.listeners = [];
    }
    add(listener) {
        this.listeners.push(listener);
        console.log(this.listeners);
    }
    remove(listener) {
        this.listeners = this.listeners.filter((elem) => elem !== listener);
    }
    emit(params) {
        this.listeners.forEach((listener) => listener(params));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signal);


/***/ }),

/***/ "./js/common/state.ts":
/*!****************************!*\
  !*** ./js/common/state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "State": () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signal */ "./js/common/signal.ts");

class State {
    constructor(initialState) {
        this.onUpdate = new _signal__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._data = initialState;
    }
    setData(value, key) {
        switch (key) {
            case 'cartData':
                this._data[key].push(value);
                this.onUpdate.emit(key);
                break;
            case 'promoData':
                this._data[key].push(value);
                this.onUpdate.emit(key);
                break;
            case 'category':
                this._data.filters[key].push(value.toLowerCase());
                break;
            case 'brand':
                this._data.filters[key].push(value.toLowerCase());
                break;
            case 'price':
                this._data.filters.price.min = value.min;
                this._data.filters.price.max = value.max;
                this.onUpdate.emit('sortGoods');
                break;
            case 'stock':
                this._data.filters.stock.min = value.min;
                this._data.filters.stock.max = value.max;
                this.onUpdate.emit('sortGoods');
                break;
            case 'sortGoods':
                this._data.filters[key] = value;
                this.onUpdate.emit('sortGoods');
                break;
            case 'sortCount':
                this._data.filters[key] = value;
                this.onUpdate.emit('sortCount');
                break;
            case 'sortOptions':
                this._data.filters[key] = value;
                this.onUpdate.emit('sortOptions');
                break;
            case 'sortSearch':
                this._data.filters[key] = value.toLowerCase();
                this.onUpdate.emit('sortSearch');
                break;
            case 'resetFilters':
                this._data.filters = {
                    category: [],
                    brand: [],
                    price: { min: 10, max: 1749 },
                    stock: { min: 2, max: 150 },
                    sortGoods: [],
                    sortCount: { category: {}, brand: {} },
                    sortOptions: {
                        isSort: false,
                        sortType: null,
                        sortValue: null,
                    },
                    sortSearch: '',
                };
                this.onUpdate.emit('resetFilters');
                break;
            default:
                break;
        }
    }
    deleteData(value, key) {
        switch (key) {
            case 'cartData':
                const indexCart = this._data[key].findIndex((el) => el.id === value.id);
                this._data[key].splice(indexCart, 1);
                this.onUpdate.emit(key);
                break;
            case 'promoData':
                const indexPromo = this._data[key].findIndex((el) => el === value);
                this._data[key].splice(indexPromo, 1);
                this.onUpdate.emit(key);
                break;
            case 'category':
                const indexCategory = this._data.filters[key].findIndex((el) => el === value);
                this._data.filters[key].splice(indexCategory, 1);
                break;
            case 'brand':
                const indexBrand = this._data.filters[key].findIndex((el) => el === value);
                this._data.filters[key].splice(indexBrand, 1);
                break;
            default:
                break;
        }
    }
    getData(key) {
        switch (key) {
            case 'cartData':
                return this._data[key];
            case 'promoData':
                return this._data[key];
            case 'category':
                return this._data.filters[key];
            case 'brand':
                return this._data.filters[key];
            case 'price':
                return this._data.filters.price;
            case 'stock':
                return this._data.filters.stock;
            case 'sortGoods':
                return this._data.filters[key];
            case 'sortCount':
                return this._data.filters[key];
            case 'sortOptions':
                return this._data.filters[key];
            case 'sortSearch':
                return this._data.filters[key];
            default:
                break;
        }
    }
    resetData() {
        const cart = this.getData('cartData');
        cart.forEach((elem) => this.deleteData(elem, 'cartData'));
        const promo = this.getData('promoData');
        promo.forEach((elem) => this.deleteData(elem, 'promoData'));
    }
}


/***/ }),

/***/ "./js/data/data.ts":
/*!*************************!*\
  !*** ./js/data/data.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "products": () => (/* binding */ products)
/* harmony export */ });
const products = [
    {
        id: 1,
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/1/1.jpg',
            'https://i.dummyjson.com/data/products/1/2.jpg',
            'https://i.dummyjson.com/data/products/1/3.jpg',
            'https://i.dummyjson.com/data/products/1/4.jpg',
            'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        ],
    },
    {
        id: 2,
        title: 'iPhone X',
        description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/2/1.jpg',
            'https://i.dummyjson.com/data/products/2/2.jpg',
            'https://i.dummyjson.com/data/products/2/3.jpg',
            'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
        ],
    },
    {
        id: 3,
        title: 'Samsung Universe 9',
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: 'Samsung',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
        images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
    },
    {
        id: 4,
        title: 'OPPOF19',
        description: 'OPPO F19 is officially announced on April 2021.',
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: 'OPPO',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/4/1.jpg',
            'https://i.dummyjson.com/data/products/4/2.jpg',
            'https://i.dummyjson.com/data/products/4/3.jpg',
            'https://i.dummyjson.com/data/products/4/4.jpg',
            'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
        ],
    },
    {
        id: 5,
        title: 'Huawei P30',
        description: 'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: 'Huawei',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/5/1.jpg',
            'https://i.dummyjson.com/data/products/5/2.jpg',
            'https://i.dummyjson.com/data/products/5/3.jpg',
        ],
    },
    {
        id: 6,
        title: 'MacBook Pro',
        description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: 'Apple',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
        images: [
            'https://i.dummyjson.com/data/products/6/1.png',
            'https://i.dummyjson.com/data/products/6/2.jpg',
            'https://i.dummyjson.com/data/products/6/3.png',
            'https://i.dummyjson.com/data/products/6/4.jpg',
        ],
    },
    {
        id: 7,
        title: 'Samsung Galaxy Book',
        description: 'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25,
        stock: 50,
        brand: 'Samsung',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/7/1.jpg',
            'https://i.dummyjson.com/data/products/7/2.jpg',
            'https://i.dummyjson.com/data/products/7/3.jpg',
            'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
        ],
    },
    {
        id: 8,
        title: 'Microsoft Surface Laptop 4',
        description: 'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        stock: 68,
        brand: 'Microsoft Surface',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/8/1.jpg',
            'https://i.dummyjson.com/data/products/8/2.jpg',
            'https://i.dummyjson.com/data/products/8/3.jpg',
            'https://i.dummyjson.com/data/products/8/4.jpg',
            'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
        ],
    },
    {
        id: 9,
        title: 'Infinix INBOOK',
        description: 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
        price: 1099,
        discountPercentage: 11.83,
        rating: 4.54,
        stock: 96,
        brand: 'Infinix',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/9/1.jpg',
            'https://i.dummyjson.com/data/products/9/2.png',
            'https://i.dummyjson.com/data/products/9/3.png',
            'https://i.dummyjson.com/data/products/9/4.jpg',
            'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
        ],
    },
    {
        id: 10,
        title: 'HP Pavilion 15-DK1056WM',
        description: 'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
        price: 1099,
        discountPercentage: 6.18,
        rating: 4.43,
        stock: 89,
        brand: 'HP Pavilion',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
        images: [
            'https://i.dummyjson.com/data/products/10/1.jpg',
            'https://i.dummyjson.com/data/products/10/2.jpg',
            'https://i.dummyjson.com/data/products/10/3.jpg',
            'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
        ],
    },
    {
        id: 11,
        title: 'perfume Oil',
        description: 'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
        price: 13,
        discountPercentage: 8.4,
        rating: 4.26,
        stock: 65,
        brand: 'Impression of Acqua Di Gio',
        category: 'fragrances',
        thumbnail: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/11/1.jpg',
            'https://i.dummyjson.com/data/products/11/2.jpg',
            'https://i.dummyjson.com/data/products/11/3.jpg',
            'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
        ],
    },
    {
        id: 12,
        title: 'Brown Perfume',
        description: 'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml',
        price: 40,
        discountPercentage: 15.66,
        rating: 4,
        stock: 52,
        brand: 'Royal_Mirage',
        category: 'fragrances',
        thumbnail: 'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/12/1.jpg',
            'https://i.dummyjson.com/data/products/12/2.jpg',
            'https://i.dummyjson.com/data/products/12/3.png',
            'https://i.dummyjson.com/data/products/12/4.jpg',
            'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
        ],
    },
    {
        id: 13,
        title: 'Fog Scent Xpressio Perfume',
        description: 'Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men',
        price: 13,
        discountPercentage: 8.14,
        rating: 4.59,
        stock: 61,
        brand: 'Fog Scent Xpressio',
        category: 'fragrances',
        thumbnail: 'https://i.dummyjson.com/data/products/13/thumbnail.webp',
        images: [
            'https://i.dummyjson.com/data/products/13/1.jpg',
            'https://i.dummyjson.com/data/products/13/2.png',
            'https://i.dummyjson.com/data/products/13/3.jpg',
            'https://i.dummyjson.com/data/products/13/4.jpg',
            'https://i.dummyjson.com/data/products/13/thumbnail.webp',
        ],
    },
    {
        id: 14,
        title: 'Non-Alcoholic Concentrated Perfume Oil',
        description: 'Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil',
        price: 120,
        discountPercentage: 15.6,
        rating: 4.21,
        stock: 114,
        brand: 'Al Munakh',
        category: 'fragrances',
        thumbnail: 'https://i.dummyjson.com/data/products/14/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/14/1.jpg',
            'https://i.dummyjson.com/data/products/14/2.jpg',
            'https://i.dummyjson.com/data/products/14/3.jpg',
            'https://i.dummyjson.com/data/products/14/thumbnail.jpg',
        ],
    },
    {
        id: 15,
        title: 'Eau De Perfume Spray',
        description: 'Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality',
        price: 30,
        discountPercentage: 10.99,
        rating: 4.7,
        stock: 105,
        brand: 'Lord - Al-Rehab',
        category: 'fragrances',
        thumbnail: 'https://i.dummyjson.com/data/products/15/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/15/1.jpg',
            'https://i.dummyjson.com/data/products/15/2.jpg',
            'https://i.dummyjson.com/data/products/15/3.jpg',
            'https://i.dummyjson.com/data/products/15/4.jpg',
            'https://i.dummyjson.com/data/products/15/thumbnail.jpg',
        ],
    },
    {
        id: 16,
        title: 'Hyaluronic Acid Serum',
        description: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
        price: 19,
        discountPercentage: 13.31,
        rating: 4.83,
        stock: 110,
        brand: "L'Oreal Paris",
        category: 'skincare',
        thumbnail: 'https://i.dummyjson.com/data/products/16/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/16/1.png',
            'https://i.dummyjson.com/data/products/16/2.webp',
            'https://i.dummyjson.com/data/products/16/3.jpg',
            'https://i.dummyjson.com/data/products/16/4.jpg',
            'https://i.dummyjson.com/data/products/16/thumbnail.jpg',
        ],
    },
    {
        id: 17,
        title: 'Tree Oil 30ml',
        description: 'Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,',
        price: 12,
        discountPercentage: 4.09,
        rating: 4.52,
        stock: 78,
        brand: 'Hemani Tea',
        category: 'skincare',
        thumbnail: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/17/1.jpg',
            'https://i.dummyjson.com/data/products/17/2.jpg',
            'https://i.dummyjson.com/data/products/17/3.jpg',
            'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
        ],
    },
    {
        id: 18,
        title: 'Oil Free Moisturizer 100ml',
        description: 'Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.',
        price: 40,
        discountPercentage: 13.1,
        rating: 4.56,
        stock: 88,
        brand: 'Dermive',
        category: 'skincare',
        thumbnail: 'https://i.dummyjson.com/data/products/18/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/18/1.jpg',
            'https://i.dummyjson.com/data/products/18/2.jpg',
            'https://i.dummyjson.com/data/products/18/3.jpg',
            'https://i.dummyjson.com/data/products/18/4.jpg',
            'https://i.dummyjson.com/data/products/18/thumbnail.jpg',
        ],
    },
    {
        id: 19,
        title: 'Skin Beauty Serum.',
        description: 'Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m',
        price: 46,
        discountPercentage: 10.68,
        rating: 4.42,
        stock: 54,
        brand: 'ROREC White Rice',
        category: 'skincare',
        thumbnail: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/19/1.jpg',
            'https://i.dummyjson.com/data/products/19/2.jpg',
            'https://i.dummyjson.com/data/products/19/3.png',
            'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
        ],
    },
    {
        id: 20,
        title: 'Freckle Treatment Cream- 15gm',
        description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
        price: 70,
        discountPercentage: 16.99,
        rating: 4.06,
        stock: 140,
        brand: 'Fair & Clear',
        category: 'skincare',
        thumbnail: 'https://i.dummyjson.com/data/products/20/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/20/1.jpg',
            'https://i.dummyjson.com/data/products/20/2.jpg',
            'https://i.dummyjson.com/data/products/20/3.jpg',
            'https://i.dummyjson.com/data/products/20/4.jpg',
            'https://i.dummyjson.com/data/products/20/thumbnail.jpg',
        ],
    },
    {
        id: 21,
        title: '- Daal Masoor 500 grams',
        description: 'Fine quality Branded Product Keep in a cool and dry place',
        price: 20,
        discountPercentage: 4.81,
        rating: 4.44,
        stock: 133,
        brand: 'Saaf & Khaas',
        category: 'groceries',
        thumbnail: 'https://i.dummyjson.com/data/products/21/thumbnail.png',
        images: [
            'https://i.dummyjson.com/data/products/21/1.png',
            'https://i.dummyjson.com/data/products/21/2.jpg',
            'https://i.dummyjson.com/data/products/21/3.jpg',
        ],
    },
    {
        id: 22,
        title: 'Elbow Macaroni - 400 gm',
        description: 'Product details of Bake Parlor Big Elbow Macaroni - 400 gm',
        price: 14,
        discountPercentage: 15.58,
        rating: 4.57,
        stock: 146,
        brand: 'Bake Parlor Big',
        category: 'groceries',
        thumbnail: 'https://i.dummyjson.com/data/products/22/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/22/1.jpg',
            'https://i.dummyjson.com/data/products/22/2.jpg',
            'https://i.dummyjson.com/data/products/22/3.jpg',
        ],
    },
    {
        id: 23,
        title: 'Orange Essence Food Flavou',
        description: 'Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item',
        price: 14,
        discountPercentage: 8.04,
        rating: 4.85,
        stock: 26,
        brand: 'Baking Food Items',
        category: 'groceries',
        thumbnail: 'https://i.dummyjson.com/data/products/23/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/23/1.jpg',
            'https://i.dummyjson.com/data/products/23/2.jpg',
            'https://i.dummyjson.com/data/products/23/3.jpg',
            'https://i.dummyjson.com/data/products/23/4.jpg',
            'https://i.dummyjson.com/data/products/23/thumbnail.jpg',
        ],
    },
    {
        id: 24,
        title: 'cereals muesli fruit nuts',
        description: 'original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji',
        price: 46,
        discountPercentage: 16.8,
        rating: 4.94,
        stock: 113,
        brand: 'fauji',
        category: 'groceries',
        thumbnail: 'https://i.dummyjson.com/data/products/24/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/24/1.jpg',
            'https://i.dummyjson.com/data/products/24/2.jpg',
            'https://i.dummyjson.com/data/products/24/3.jpg',
            'https://i.dummyjson.com/data/products/24/4.jpg',
            'https://i.dummyjson.com/data/products/24/thumbnail.jpg',
        ],
    },
    {
        id: 25,
        title: 'Gulab Powder 50 Gram',
        description: 'Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds',
        price: 70,
        discountPercentage: 13.58,
        rating: 4.87,
        stock: 47,
        brand: 'Dry Rose',
        category: 'groceries',
        thumbnail: 'https://i.dummyjson.com/data/products/25/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/25/1.png',
            'https://i.dummyjson.com/data/products/25/2.jpg',
            'https://i.dummyjson.com/data/products/25/3.png',
            'https://i.dummyjson.com/data/products/25/4.jpg',
            'https://i.dummyjson.com/data/products/25/thumbnail.jpg',
        ],
    },
    {
        id: 26,
        title: 'Plant Hanger For Home',
        description: 'Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf',
        price: 41,
        discountPercentage: 17.86,
        rating: 4.08,
        stock: 131,
        brand: 'Boho Decor',
        category: 'home-decoration',
        thumbnail: 'https://i.dummyjson.com/data/products/26/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/26/1.jpg',
            'https://i.dummyjson.com/data/products/26/2.jpg',
            'https://i.dummyjson.com/data/products/26/3.jpg',
            'https://i.dummyjson.com/data/products/26/4.jpg',
            'https://i.dummyjson.com/data/products/26/5.jpg',
            'https://i.dummyjson.com/data/products/26/thumbnail.jpg',
        ],
    },
    {
        id: 27,
        title: 'Flying Wooden Bird',
        description: 'Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm',
        price: 51,
        discountPercentage: 15.58,
        rating: 4.41,
        stock: 17,
        brand: 'Flying Wooden',
        category: 'home-decoration',
        thumbnail: 'https://i.dummyjson.com/data/products/27/thumbnail.webp',
        images: [
            'https://i.dummyjson.com/data/products/27/1.jpg',
            'https://i.dummyjson.com/data/products/27/2.jpg',
            'https://i.dummyjson.com/data/products/27/3.jpg',
            'https://i.dummyjson.com/data/products/27/4.jpg',
            'https://i.dummyjson.com/data/products/27/thumbnail.webp',
        ],
    },
    {
        id: 28,
        title: '3D Embellishment Art Lamp',
        description: '3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)',
        price: 20,
        discountPercentage: 16.49,
        rating: 4.82,
        stock: 54,
        brand: 'LED Lights',
        category: 'home-decoration',
        thumbnail: 'https://i.dummyjson.com/data/products/28/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/28/1.jpg',
            'https://i.dummyjson.com/data/products/28/2.jpg',
            'https://i.dummyjson.com/data/products/28/3.png',
            'https://i.dummyjson.com/data/products/28/4.jpg',
            'https://i.dummyjson.com/data/products/28/thumbnail.jpg',
        ],
    },
    {
        id: 29,
        title: 'Handcraft Chinese style',
        description: 'Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate',
        price: 60,
        discountPercentage: 15.34,
        rating: 4.44,
        stock: 7,
        brand: 'luxury palace',
        category: 'home-decoration',
        thumbnail: 'https://i.dummyjson.com/data/products/29/thumbnail.webp',
        images: [
            'https://i.dummyjson.com/data/products/29/1.jpg',
            'https://i.dummyjson.com/data/products/29/2.jpg',
            'https://i.dummyjson.com/data/products/29/3.webp',
            'https://i.dummyjson.com/data/products/29/4.webp',
            'https://i.dummyjson.com/data/products/29/thumbnail.webp',
        ],
    },
    {
        id: 30,
        title: 'Key Holder',
        description: 'Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',
        price: 30,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: 'Golden',
        category: 'home-decoration',
        thumbnail: 'https://i.dummyjson.com/data/products/30/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/30/1.jpg',
            'https://i.dummyjson.com/data/products/30/2.jpg',
            'https://i.dummyjson.com/data/products/30/3.jpg',
            'https://i.dummyjson.com/data/products/30/thumbnail.jpg',
        ],
    },
    {
        id: 31,
        title: 'Mornadi Velvet Bed',
        description: 'Mornadi Velvet Bed Base with Headboard Slats Support Classic Style Bedroom Furniture Bed Set',
        price: 40,
        discountPercentage: 17,
        rating: 4.16,
        stock: 140,
        brand: 'Furniture Bed Set',
        category: 'furniture',
        thumbnail: 'https://i.dummyjson.com/data/products/31/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/31/1.jpg',
            'https://i.dummyjson.com/data/products/31/2.jpg',
            'https://i.dummyjson.com/data/products/31/3.jpg',
            'https://i.dummyjson.com/data/products/31/4.jpg',
            'https://i.dummyjson.com/data/products/31/thumbnail.jpg',
        ],
    },
    {
        id: 32,
        title: 'Sofa for Coffe Cafe',
        description: 'Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe',
        price: 50,
        discountPercentage: 15.59,
        rating: 4.74,
        stock: 30,
        brand: 'Ratttan Outdoor',
        category: 'furniture',
        thumbnail: 'https://i.dummyjson.com/data/products/32/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/32/1.jpg',
            'https://i.dummyjson.com/data/products/32/2.jpg',
            'https://i.dummyjson.com/data/products/32/3.jpg',
            'https://i.dummyjson.com/data/products/32/thumbnail.jpg',
        ],
    },
    {
        id: 33,
        title: '3 Tier Corner Shelves',
        description: '3 Tier Corner Shelves | 3 PCs Wall Mount Kitchen Shelf | Floating Bedroom Shelf',
        price: 700,
        discountPercentage: 17,
        rating: 4.31,
        stock: 106,
        brand: 'Kitchen Shelf',
        category: 'furniture',
        thumbnail: 'https://i.dummyjson.com/data/products/33/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/33/1.jpg',
            'https://i.dummyjson.com/data/products/33/2.jpg',
            'https://i.dummyjson.com/data/products/33/3.jpg',
            'https://i.dummyjson.com/data/products/33/4.jpg',
            'https://i.dummyjson.com/data/products/33/thumbnail.jpg',
        ],
    },
    {
        id: 34,
        title: 'Plastic Table',
        description: 'V﻿ery good quality plastic table for multi purpose now in reasonable price',
        price: 50,
        discountPercentage: 4,
        rating: 4.01,
        stock: 136,
        brand: 'Multi Purpose',
        category: 'furniture',
        thumbnail: 'https://i.dummyjson.com/data/products/34/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/34/1.jpg',
            'https://i.dummyjson.com/data/products/34/2.jpg',
            'https://i.dummyjson.com/data/products/34/3.jpg',
            'https://i.dummyjson.com/data/products/34/4.jpg',
            'https://i.dummyjson.com/data/products/34/thumbnail.jpg',
        ],
    },
    {
        id: 35,
        title: '3 DOOR PORTABLE',
        description: 'Material: Stainless Steel and Fabric  Item Size: 110 cm x 45 cm x 175 cm Package Contents: 1 Storage Wardrobe',
        price: 41,
        discountPercentage: 7.98,
        rating: 4.06,
        stock: 68,
        brand: 'AmnaMart',
        category: 'furniture',
        thumbnail: 'https://i.dummyjson.com/data/products/35/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/35/1.jpg',
            'https://i.dummyjson.com/data/products/35/2.jpg',
            'https://i.dummyjson.com/data/products/35/3.jpg',
            'https://i.dummyjson.com/data/products/35/4.jpg',
            'https://i.dummyjson.com/data/products/35/thumbnail.jpg',
        ],
    },
    {
        id: 36,
        title: 'Sleeve Shirt Womens',
        description: 'Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized',
        price: 90,
        discountPercentage: 10.89,
        rating: 4.26,
        stock: 39,
        brand: 'Professional Wear',
        category: 'tops',
        thumbnail: 'https://i.dummyjson.com/data/products/36/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/36/1.jpg',
            'https://i.dummyjson.com/data/products/36/2.webp',
            'https://i.dummyjson.com/data/products/36/3.webp',
            'https://i.dummyjson.com/data/products/36/4.jpg',
            'https://i.dummyjson.com/data/products/36/thumbnail.jpg',
        ],
    },
    {
        id: 37,
        title: 'ank Tops for Womens/Girls',
        description: 'PACK OF 3 CAMISOLES ,VERY COMFORTABLE SOFT COTTON STUFF, COMFORTABLE IN ALL FOUR SEASONS',
        price: 50,
        discountPercentage: 12.05,
        rating: 4.52,
        stock: 107,
        brand: 'Soft Cotton',
        category: 'tops',
        thumbnail: 'https://i.dummyjson.com/data/products/37/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/37/1.jpg',
            'https://i.dummyjson.com/data/products/37/2.jpg',
            'https://i.dummyjson.com/data/products/37/3.jpg',
            'https://i.dummyjson.com/data/products/37/4.jpg',
            'https://i.dummyjson.com/data/products/37/thumbnail.jpg',
        ],
    },
    {
        id: 38,
        title: 'sublimation plain kids tank',
        description: 'sublimation plain kids tank tops wholesale',
        price: 100,
        discountPercentage: 11.12,
        rating: 4.8,
        stock: 20,
        brand: 'Soft Cotton',
        category: 'tops',
        thumbnail: 'https://i.dummyjson.com/data/products/38/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/38/1.png',
            'https://i.dummyjson.com/data/products/38/2.jpg',
            'https://i.dummyjson.com/data/products/38/3.jpg',
            'https://i.dummyjson.com/data/products/38/4.jpg',
        ],
    },
    {
        id: 39,
        title: 'Women Sweaters Wool',
        description: "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women' S Crop Top Sweater",
        price: 600,
        discountPercentage: 17.2,
        rating: 4.55,
        stock: 55,
        brand: 'Top Sweater',
        category: 'tops',
        thumbnail: 'https://i.dummyjson.com/data/products/39/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/39/1.jpg',
            'https://i.dummyjson.com/data/products/39/2.jpg',
            'https://i.dummyjson.com/data/products/39/3.jpg',
            'https://i.dummyjson.com/data/products/39/4.jpg',
            'https://i.dummyjson.com/data/products/39/thumbnail.jpg',
        ],
    },
    {
        id: 40,
        title: 'women winter clothes',
        description: 'women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set',
        price: 57,
        discountPercentage: 13.39,
        rating: 4.91,
        stock: 84,
        brand: 'Top Sweater',
        category: 'tops',
        thumbnail: 'https://i.dummyjson.com/data/products/40/thumbnail.jpg',
        images: ['https://i.dummyjson.com/data/products/40/1.jpg', 'https://i.dummyjson.com/data/products/40/2.jpg'],
    },
    {
        id: 41,
        title: 'NIGHT SUIT',
        description: 'NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.',
        price: 55,
        discountPercentage: 15.05,
        rating: 4.65,
        stock: 21,
        brand: 'RED MICKY MOUSE..',
        category: 'womens-dresses',
        thumbnail: 'https://i.dummyjson.com/data/products/41/thumbnail.webp',
        images: [
            'https://i.dummyjson.com/data/products/41/1.jpg',
            'https://i.dummyjson.com/data/products/41/2.webp',
            'https://i.dummyjson.com/data/products/41/3.jpg',
            'https://i.dummyjson.com/data/products/41/4.jpg',
            'https://i.dummyjson.com/data/products/41/thumbnail.webp',
        ],
    },
    {
        id: 42,
        title: 'Stiched Kurta plus trouser',
        description: 'FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN',
        price: 80,
        discountPercentage: 15.37,
        rating: 4.05,
        stock: 148,
        brand: 'Digital Printed',
        category: 'womens-dresses',
        thumbnail: 'https://i.dummyjson.com/data/products/42/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/42/1.png',
            'https://i.dummyjson.com/data/products/42/2.png',
            'https://i.dummyjson.com/data/products/42/3.png',
            'https://i.dummyjson.com/data/products/42/4.jpg',
            'https://i.dummyjson.com/data/products/42/thumbnail.jpg',
        ],
    },
    {
        id: 43,
        title: 'frock gold printed',
        description: 'Ghazi fabric long frock gold printed ready to wear stitched collection (G992)',
        price: 600,
        discountPercentage: 15.55,
        rating: 4.31,
        stock: 150,
        brand: 'Ghazi Fabric',
        category: 'womens-dresses',
        thumbnail: 'https://i.dummyjson.com/data/products/43/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/43/1.jpg',
            'https://i.dummyjson.com/data/products/43/2.jpg',
            'https://i.dummyjson.com/data/products/43/3.jpg',
            'https://i.dummyjson.com/data/products/43/4.jpg',
            'https://i.dummyjson.com/data/products/43/thumbnail.jpg',
        ],
    },
    {
        id: 44,
        title: 'Ladies Multicolored Dress',
        description: 'This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.',
        price: 79,
        discountPercentage: 16.88,
        rating: 4.03,
        stock: 2,
        brand: 'Ghazi Fabric',
        category: 'womens-dresses',
        thumbnail: 'https://i.dummyjson.com/data/products/44/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/44/1.jpg',
            'https://i.dummyjson.com/data/products/44/2.jpg',
            'https://i.dummyjson.com/data/products/44/3.jpg',
            'https://i.dummyjson.com/data/products/44/4.jpg',
            'https://i.dummyjson.com/data/products/44/thumbnail.jpg',
        ],
    },
    {
        id: 45,
        title: 'Malai Maxi Dress',
        description: 'Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff',
        price: 50,
        discountPercentage: 5.07,
        rating: 4.67,
        stock: 96,
        brand: 'IELGY',
        category: 'womens-dresses',
        thumbnail: 'https://i.dummyjson.com/data/products/45/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/45/1.jpg',
            'https://i.dummyjson.com/data/products/45/2.webp',
            'https://i.dummyjson.com/data/products/45/3.jpg',
            'https://i.dummyjson.com/data/products/45/4.jpg',
            'https://i.dummyjson.com/data/products/45/thumbnail.jpg',
        ],
    },
    {
        id: 46,
        title: "women's shoes",
        description: 'Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber',
        price: 40,
        discountPercentage: 16.96,
        rating: 4.14,
        stock: 72,
        brand: 'IELGY fashion',
        category: 'womens-shoes',
        thumbnail: 'https://i.dummyjson.com/data/products/46/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/46/1.webp',
            'https://i.dummyjson.com/data/products/46/2.jpg',
            'https://i.dummyjson.com/data/products/46/3.jpg',
            'https://i.dummyjson.com/data/products/46/4.jpg',
            'https://i.dummyjson.com/data/products/46/thumbnail.jpg',
        ],
    },
    {
        id: 47,
        title: 'Sneaker shoes',
        description: 'Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women',
        price: 120,
        discountPercentage: 10.37,
        rating: 4.19,
        stock: 50,
        brand: 'Synthetic Leather',
        category: 'womens-shoes',
        thumbnail: 'https://i.dummyjson.com/data/products/47/thumbnail.jpeg',
        images: [
            'https://i.dummyjson.com/data/products/47/1.jpg',
            'https://i.dummyjson.com/data/products/47/2.jpg',
            'https://i.dummyjson.com/data/products/47/3.jpg',
            'https://i.dummyjson.com/data/products/47/thumbnail.jpeg',
        ],
    },
    {
        id: 48,
        title: 'Women Strip Heel',
        description: 'Features: Flip-flops, Mid Heel, Comfortable, Striped Heel, Antiskid, Striped',
        price: 40,
        discountPercentage: 10.83,
        rating: 4.02,
        stock: 25,
        brand: 'Sandals Flip Flops',
        category: 'womens-shoes',
        thumbnail: 'https://i.dummyjson.com/data/products/48/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/48/1.jpg',
            'https://i.dummyjson.com/data/products/48/2.jpg',
            'https://i.dummyjson.com/data/products/48/3.jpg',
            'https://i.dummyjson.com/data/products/48/4.jpg',
            'https://i.dummyjson.com/data/products/48/thumbnail.jpg',
        ],
    },
    {
        id: 49,
        title: 'Chappals & Shoe Ladies Metallic',
        description: 'Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals',
        price: 23,
        discountPercentage: 2.62,
        rating: 4.72,
        stock: 107,
        brand: 'Maasai Sandals',
        category: 'womens-shoes',
        thumbnail: 'https://i.dummyjson.com/data/products/49/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/49/1.jpg',
            'https://i.dummyjson.com/data/products/49/2.jpg',
            'https://i.dummyjson.com/data/products/49/3.webp',
            'https://i.dummyjson.com/data/products/49/thumbnail.jpg',
        ],
    },
    {
        id: 50,
        title: 'Women Shoes',
        description: '2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes',
        price: 36,
        discountPercentage: 16.87,
        rating: 4.33,
        stock: 46,
        brand: 'Arrivals Genuine',
        category: 'womens-shoes',
        thumbnail: 'https://i.dummyjson.com/data/products/50/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/50/1.jpeg',
            'https://i.dummyjson.com/data/products/50/2.jpg',
            'https://i.dummyjson.com/data/products/50/3.jpg',
        ],
    },
    {
        id: 51,
        title: 'half sleeves T shirts',
        description: 'Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands',
        price: 23,
        discountPercentage: 12.76,
        rating: 4.26,
        stock: 132,
        brand: 'Vintage Apparel',
        category: 'mens-shirts',
        thumbnail: 'https://i.dummyjson.com/data/products/51/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/51/1.png',
            'https://i.dummyjson.com/data/products/51/2.jpg',
            'https://i.dummyjson.com/data/products/51/3.jpg',
            'https://i.dummyjson.com/data/products/51/thumbnail.jpg',
        ],
    },
    {
        id: 52,
        title: 'FREE FIRE T Shirt',
        description: "quality and professional print - It doesn't just look high quality, it is high quality.",
        price: 10,
        discountPercentage: 14.72,
        rating: 4.52,
        stock: 128,
        brand: 'FREE FIRE',
        category: 'mens-shirts',
        thumbnail: 'https://i.dummyjson.com/data/products/52/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/52/1.png',
            'https://i.dummyjson.com/data/products/52/2.png',
            'https://i.dummyjson.com/data/products/52/3.jpg',
            'https://i.dummyjson.com/data/products/52/4.jpg',
            'https://i.dummyjson.com/data/products/52/thumbnail.jpg',
        ],
    },
    {
        id: 53,
        title: 'printed high quality T shirts',
        description: 'Brand: vintage Apparel ,Export quality',
        price: 35,
        discountPercentage: 7.54,
        rating: 4.89,
        stock: 6,
        brand: 'Vintage Apparel',
        category: 'mens-shirts',
        thumbnail: 'https://i.dummyjson.com/data/products/53/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/53/1.webp',
            'https://i.dummyjson.com/data/products/53/2.jpg',
            'https://i.dummyjson.com/data/products/53/3.jpg',
            'https://i.dummyjson.com/data/products/53/4.jpg',
            'https://i.dummyjson.com/data/products/53/thumbnail.jpg',
        ],
    },
    {
        id: 54,
        title: 'Pubg Printed Graphic T-Shirt',
        description: 'Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking',
        price: 46,
        discountPercentage: 16.44,
        rating: 4.62,
        stock: 136,
        brand: 'The Warehouse',
        category: 'mens-shirts',
        thumbnail: 'https://i.dummyjson.com/data/products/54/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/54/1.jpg',
            'https://i.dummyjson.com/data/products/54/2.jpg',
            'https://i.dummyjson.com/data/products/54/3.jpg',
            'https://i.dummyjson.com/data/products/54/4.jpg',
            'https://i.dummyjson.com/data/products/54/thumbnail.jpg',
        ],
    },
    {
        id: 55,
        title: 'Money Heist Printed Summer T Shirts',
        description: 'Fabric Jercy, Size: M & L Wear Stylish Dual Stiched',
        price: 66,
        discountPercentage: 15.97,
        rating: 4.9,
        stock: 122,
        brand: 'The Warehouse',
        category: 'mens-shirts',
        thumbnail: 'https://i.dummyjson.com/data/products/55/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/55/1.jpg',
            'https://i.dummyjson.com/data/products/55/2.webp',
            'https://i.dummyjson.com/data/products/55/3.jpg',
            'https://i.dummyjson.com/data/products/55/4.jpg',
            'https://i.dummyjson.com/data/products/55/thumbnail.jpg',
        ],
    },
    {
        id: 56,
        title: 'Sneakers Joggers Shoes',
        description: 'Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New',
        price: 40,
        discountPercentage: 12.57,
        rating: 4.38,
        stock: 6,
        brand: 'Sneakers',
        category: 'mens-shoes',
        thumbnail: 'https://i.dummyjson.com/data/products/56/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/56/1.jpg',
            'https://i.dummyjson.com/data/products/56/2.jpg',
            'https://i.dummyjson.com/data/products/56/3.jpg',
            'https://i.dummyjson.com/data/products/56/4.jpg',
            'https://i.dummyjson.com/data/products/56/5.jpg',
            'https://i.dummyjson.com/data/products/56/thumbnail.jpg',
        ],
    },
    {
        id: 57,
        title: 'Loafers for men',
        description: 'Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.',
        price: 47,
        discountPercentage: 10.91,
        rating: 4.91,
        stock: 20,
        brand: 'Rubber',
        category: 'mens-shoes',
        thumbnail: 'https://i.dummyjson.com/data/products/57/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/57/1.jpg',
            'https://i.dummyjson.com/data/products/57/2.jpg',
            'https://i.dummyjson.com/data/products/57/3.jpg',
            'https://i.dummyjson.com/data/products/57/4.jpg',
            'https://i.dummyjson.com/data/products/57/thumbnail.jpg',
        ],
    },
    {
        id: 58,
        title: 'formal offices shoes',
        description: 'Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber',
        price: 57,
        discountPercentage: 12,
        rating: 4.41,
        stock: 68,
        brand: 'The Warehouse',
        category: 'mens-shoes',
        thumbnail: 'https://i.dummyjson.com/data/products/58/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/58/1.jpg',
            'https://i.dummyjson.com/data/products/58/2.jpg',
            'https://i.dummyjson.com/data/products/58/3.jpg',
            'https://i.dummyjson.com/data/products/58/4.jpg',
            'https://i.dummyjson.com/data/products/58/thumbnail.jpg',
        ],
    },
    {
        id: 59,
        title: 'Spring and summershoes',
        description: 'Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;',
        price: 20,
        discountPercentage: 8.71,
        rating: 4.33,
        stock: 137,
        brand: 'Sneakers',
        category: 'mens-shoes',
        thumbnail: 'https://i.dummyjson.com/data/products/59/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/59/1.jpg',
            'https://i.dummyjson.com/data/products/59/2.jpg',
            'https://i.dummyjson.com/data/products/59/3.jpg',
            'https://i.dummyjson.com/data/products/59/4.jpg',
            'https://i.dummyjson.com/data/products/59/thumbnail.jpg',
        ],
    },
    {
        id: 60,
        title: 'Stylish Casual Jeans Shoes',
        description: 'High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable',
        price: 58,
        discountPercentage: 7.55,
        rating: 4.55,
        stock: 129,
        brand: 'Sneakers',
        category: 'mens-shoes',
        thumbnail: 'https://i.dummyjson.com/data/products/60/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/60/1.jpg',
            'https://i.dummyjson.com/data/products/60/2.jpg',
            'https://i.dummyjson.com/data/products/60/3.jpg',
            'https://i.dummyjson.com/data/products/60/thumbnail.jpg',
        ],
    },
    {
        id: 61,
        title: 'Leather Straps Wristwatch',
        description: 'Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar',
        price: 120,
        discountPercentage: 7.14,
        rating: 4.63,
        stock: 91,
        brand: 'Naviforce',
        category: 'mens-watches',
        thumbnail: 'https://i.dummyjson.com/data/products/61/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/61/1.jpg',
            'https://i.dummyjson.com/data/products/61/2.png',
            'https://i.dummyjson.com/data/products/61/3.jpg',
        ],
    },
    {
        id: 62,
        title: 'Waterproof Leather Brand Watch',
        description: 'Watch Crown With Environmental IPS Bronze Electroplating; Display system of 12 hours',
        price: 46,
        discountPercentage: 3.15,
        rating: 4.05,
        stock: 95,
        brand: 'SKMEI 9117',
        category: 'mens-watches',
        thumbnail: 'https://i.dummyjson.com/data/products/62/thumbnail.jpg',
        images: ['https://i.dummyjson.com/data/products/62/1.jpg', 'https://i.dummyjson.com/data/products/62/2.jpg'],
    },
    {
        id: 63,
        title: 'Royal Blue Premium Watch',
        description: 'Men Silver Chain Royal Blue Premium Watch Latest Analog Watch',
        price: 50,
        discountPercentage: 2.56,
        rating: 4.89,
        stock: 142,
        brand: 'SKMEI 9117',
        category: 'mens-watches',
        thumbnail: 'https://i.dummyjson.com/data/products/63/thumbnail.webp',
        images: [
            'https://i.dummyjson.com/data/products/63/1.jpg',
            'https://i.dummyjson.com/data/products/63/2.jpg',
            'https://i.dummyjson.com/data/products/63/3.png',
            'https://i.dummyjson.com/data/products/63/4.jpeg',
        ],
    },
    {
        id: 64,
        title: 'Leather Strap Skeleton Watch',
        description: 'Leather Strap Skeleton Watch for Men - Stylish and Latest Design',
        price: 46,
        discountPercentage: 10.2,
        rating: 4.98,
        stock: 61,
        brand: 'Strap Skeleton',
        category: 'mens-watches',
        thumbnail: 'https://i.dummyjson.com/data/products/64/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/64/1.jpg',
            'https://i.dummyjson.com/data/products/64/2.webp',
            'https://i.dummyjson.com/data/products/64/3.jpg',
            'https://i.dummyjson.com/data/products/64/thumbnail.jpg',
        ],
    },
    {
        id: 65,
        title: 'Stainless Steel Wrist Watch',
        description: "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed",
        price: 47,
        discountPercentage: 17.79,
        rating: 4.79,
        stock: 94,
        brand: 'Stainless',
        category: 'mens-watches',
        thumbnail: 'https://i.dummyjson.com/data/products/65/thumbnail.webp',
        images: [
            'https://i.dummyjson.com/data/products/65/1.jpg',
            'https://i.dummyjson.com/data/products/65/2.webp',
            'https://i.dummyjson.com/data/products/65/3.jpg',
            'https://i.dummyjson.com/data/products/65/4.webp',
            'https://i.dummyjson.com/data/products/65/thumbnail.webp',
        ],
    },
    {
        id: 66,
        title: 'Steel Analog Couple Watches',
        description: 'Elegant design, Stylish ,Unique & Trendy,Comfortable wear',
        price: 35,
        discountPercentage: 3.23,
        rating: 4.79,
        stock: 24,
        brand: 'Eastern Watches',
        category: 'womens-watches',
        thumbnail: 'https://i.dummyjson.com/data/products/66/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/66/1.jpg',
            'https://i.dummyjson.com/data/products/66/2.jpg',
            'https://i.dummyjson.com/data/products/66/3.jpg',
            'https://i.dummyjson.com/data/products/66/4.JPG',
            'https://i.dummyjson.com/data/products/66/thumbnail.jpg',
        ],
    },
    {
        id: 67,
        title: 'Fashion Magnetic Wrist Watch',
        description: "Buy this awesome  The product is originally manufactured by the company and it's a top selling product with a very reasonable",
        price: 60,
        discountPercentage: 16.69,
        rating: 4.03,
        stock: 46,
        brand: 'Eastern Watches',
        category: 'womens-watches',
        thumbnail: 'https://i.dummyjson.com/data/products/67/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/67/1.jpg',
            'https://i.dummyjson.com/data/products/67/2.jpg',
            'https://i.dummyjson.com/data/products/67/3.jpg',
            'https://i.dummyjson.com/data/products/67/4.jpg',
            'https://i.dummyjson.com/data/products/67/thumbnail.jpg',
        ],
    },
    {
        id: 68,
        title: 'Stylish Luxury Digital Watch',
        description: 'Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls',
        price: 57,
        discountPercentage: 9.03,
        rating: 4.55,
        stock: 77,
        brand: 'Luxury Digital',
        category: 'womens-watches',
        thumbnail: 'https://i.dummyjson.com/data/products/68/thumbnail.webp',
        images: ['https://i.dummyjson.com/data/products/68/1.jpg', 'https://i.dummyjson.com/data/products/68/2.jpg'],
    },
    {
        id: 69,
        title: 'Golden Watch Pearls Bracelet Watch',
        description: 'Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women',
        price: 47,
        discountPercentage: 17.55,
        rating: 4.77,
        stock: 89,
        brand: 'Watch Pearls',
        category: 'womens-watches',
        thumbnail: 'https://i.dummyjson.com/data/products/69/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/69/1.jpg',
            'https://i.dummyjson.com/data/products/69/2.jpg',
            'https://i.dummyjson.com/data/products/69/3.webp',
            'https://i.dummyjson.com/data/products/69/4.jpg',
            'https://i.dummyjson.com/data/products/69/thumbnail.jpg',
        ],
    },
    {
        id: 70,
        title: 'Stainless Steel Women',
        description: 'Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies',
        price: 35,
        discountPercentage: 8.98,
        rating: 4.08,
        stock: 111,
        brand: 'Bracelet',
        category: 'womens-watches',
        thumbnail: 'https://i.dummyjson.com/data/products/70/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/70/1.jpg',
            'https://i.dummyjson.com/data/products/70/2.jpg',
            'https://i.dummyjson.com/data/products/70/thumbnail.jpg',
        ],
    },
    {
        id: 71,
        title: 'Women Shoulder Bags',
        description: 'LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies',
        price: 46,
        discountPercentage: 14.65,
        rating: 4.71,
        stock: 17,
        brand: 'LouisWill',
        category: 'womens-bags',
        thumbnail: 'https://i.dummyjson.com/data/products/71/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/71/1.jpg',
            'https://i.dummyjson.com/data/products/71/2.jpg',
            'https://i.dummyjson.com/data/products/71/3.webp',
            'https://i.dummyjson.com/data/products/71/thumbnail.jpg',
        ],
    },
    {
        id: 72,
        title: 'Handbag For Girls',
        description: 'This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.',
        price: 23,
        discountPercentage: 17.5,
        rating: 4.91,
        stock: 27,
        brand: 'LouisWill',
        category: 'womens-bags',
        thumbnail: 'https://i.dummyjson.com/data/products/72/thumbnail.webp',
        images: [
            'https://i.dummyjson.com/data/products/72/1.jpg',
            'https://i.dummyjson.com/data/products/72/2.png',
            'https://i.dummyjson.com/data/products/72/3.webp',
            'https://i.dummyjson.com/data/products/72/4.jpg',
            'https://i.dummyjson.com/data/products/72/thumbnail.webp',
        ],
    },
    {
        id: 73,
        title: 'Fancy hand clutch',
        description: 'This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.',
        price: 44,
        discountPercentage: 10.39,
        rating: 4.18,
        stock: 101,
        brand: 'Bracelet',
        category: 'womens-bags',
        thumbnail: 'https://i.dummyjson.com/data/products/73/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/73/1.jpg',
            'https://i.dummyjson.com/data/products/73/2.webp',
            'https://i.dummyjson.com/data/products/73/3.jpg',
            'https://i.dummyjson.com/data/products/73/thumbnail.jpg',
        ],
    },
    {
        id: 74,
        title: 'Leather Hand Bag',
        description: 'It features an attractive design that makes it a must have accessory in your collection. We sell different kind of bags for boys, kids, women, girls and also for unisex.',
        price: 57,
        discountPercentage: 11.19,
        rating: 4.01,
        stock: 43,
        brand: 'Copenhagen Luxe',
        category: 'womens-bags',
        thumbnail: 'https://i.dummyjson.com/data/products/74/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/74/1.jpg',
            'https://i.dummyjson.com/data/products/74/2.jpg',
            'https://i.dummyjson.com/data/products/74/3.jpg',
            'https://i.dummyjson.com/data/products/74/4.jpg',
            'https://i.dummyjson.com/data/products/74/thumbnail.jpg',
        ],
    },
    {
        id: 75,
        title: 'Seven Pocket Women Bag',
        description: 'Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag',
        price: 68,
        discountPercentage: 14.87,
        rating: 4.93,
        stock: 13,
        brand: 'Steal Frame',
        category: 'womens-bags',
        thumbnail: 'https://i.dummyjson.com/data/products/75/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/75/1.jpg',
            'https://i.dummyjson.com/data/products/75/2.jpg',
            'https://i.dummyjson.com/data/products/75/3.jpg',
            'https://i.dummyjson.com/data/products/75/thumbnail.jpg',
        ],
    },
    {
        id: 76,
        title: 'Silver Ring Set Women',
        description: 'Jewelry Type:RingsCertificate Type:NonePlating:Silver PlatedShapeattern:noneStyle:CLASSICReligious',
        price: 70,
        discountPercentage: 13.57,
        rating: 4.61,
        stock: 51,
        brand: 'Darojay',
        category: 'womens-jewellery',
        thumbnail: 'https://i.dummyjson.com/data/products/76/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/76/1.jpg',
            'https://i.dummyjson.com/data/products/76/2.jpg',
            'https://i.dummyjson.com/data/products/76/thumbnail.jpg',
        ],
    },
    {
        id: 77,
        title: 'Rose Ring',
        description: 'Brand: The Greetings Flower Colour: RedRing Colour: GoldenSize: Adjustable',
        price: 100,
        discountPercentage: 3.22,
        rating: 4.21,
        stock: 149,
        brand: 'Copenhagen Luxe',
        category: 'womens-jewellery',
        thumbnail: 'https://i.dummyjson.com/data/products/77/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/77/1.jpg',
            'https://i.dummyjson.com/data/products/77/2.jpg',
            'https://i.dummyjson.com/data/products/77/3.jpg',
            'https://i.dummyjson.com/data/products/77/thumbnail.jpg',
        ],
    },
    {
        id: 78,
        title: 'Rhinestone Korean Style Open Rings',
        description: 'Fashion Jewellery 3Pcs Adjustable Pearl Rhinestone Korean Style Open Rings For Women',
        price: 30,
        discountPercentage: 8.02,
        rating: 4.69,
        stock: 9,
        brand: 'Fashion Jewellery',
        category: 'womens-jewellery',
        thumbnail: 'https://i.dummyjson.com/data/products/78/thumbnail.jpg',
        images: ['https://i.dummyjson.com/data/products/78/thumbnail.jpg'],
    },
    {
        id: 79,
        title: 'Elegant Female Pearl Earrings',
        description: 'Elegant Female Pearl Earrings Set Zircon Pearl Earings Women Party Accessories 9 Pairs/Set',
        price: 30,
        discountPercentage: 12.8,
        rating: 4.74,
        stock: 16,
        brand: 'Fashion Jewellery',
        category: 'womens-jewellery',
        thumbnail: 'https://i.dummyjson.com/data/products/79/thumbnail.jpg',
        images: ['https://i.dummyjson.com/data/products/79/1.jpg'],
    },
    {
        id: 80,
        title: 'Chain Pin Tassel Earrings',
        description: 'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
        price: 45,
        discountPercentage: 17.75,
        rating: 4.59,
        stock: 9,
        brand: 'Cuff Butterfly',
        category: 'womens-jewellery',
        thumbnail: 'https://i.dummyjson.com/data/products/80/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/80/1.jpg',
            'https://i.dummyjson.com/data/products/80/2.jpg',
            'https://i.dummyjson.com/data/products/80/3.png',
            'https://i.dummyjson.com/data/products/80/4.jpg',
            'https://i.dummyjson.com/data/products/80/thumbnail.jpg',
        ],
    },
    {
        id: 81,
        title: 'Round Silver Frame Sun Glasses',
        description: 'A pair of sunglasses can protect your eyes from being hurt. For car driving, vacation travel, outdoor activities, social gatherings,',
        price: 19,
        discountPercentage: 10.1,
        rating: 4.94,
        stock: 78,
        brand: 'Designer Sun Glasses',
        category: 'sunglasses',
        thumbnail: 'https://i.dummyjson.com/data/products/81/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/81/1.jpg',
            'https://i.dummyjson.com/data/products/81/2.jpg',
            'https://i.dummyjson.com/data/products/81/3.jpg',
            'https://i.dummyjson.com/data/products/81/4.webp',
            'https://i.dummyjson.com/data/products/81/thumbnail.jpg',
        ],
    },
    {
        id: 82,
        title: 'Kabir Singh Square Sunglass',
        description: 'Orignal Metal Kabir Singh design 2020 Sunglasses Men Brand Designer Sun Glasses Kabir Singh Square Sunglass',
        price: 50,
        discountPercentage: 15.6,
        rating: 4.62,
        stock: 78,
        brand: 'Designer Sun Glasses',
        category: 'sunglasses',
        thumbnail: 'https://i.dummyjson.com/data/products/82/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/82/1.jpg',
            'https://i.dummyjson.com/data/products/82/2.webp',
            'https://i.dummyjson.com/data/products/82/3.jpg',
            'https://i.dummyjson.com/data/products/82/4.jpg',
            'https://i.dummyjson.com/data/products/82/thumbnail.jpg',
        ],
    },
    {
        id: 83,
        title: 'Wiley X Night Vision Yellow Glasses',
        description: 'Wiley X Night Vision Yellow Glasses for Riders - Night Vision Anti Fog Driving Glasses - Free Night Glass Cover - Shield Eyes From Dust and Virus- For Night Sport Matches',
        price: 30,
        discountPercentage: 6.33,
        rating: 4.97,
        stock: 115,
        brand: 'mastar watch',
        category: 'sunglasses',
        thumbnail: 'https://i.dummyjson.com/data/products/83/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/83/1.jpg',
            'https://i.dummyjson.com/data/products/83/2.jpg',
            'https://i.dummyjson.com/data/products/83/3.jpg',
            'https://i.dummyjson.com/data/products/83/4.jpg',
            'https://i.dummyjson.com/data/products/83/thumbnail.jpg',
        ],
    },
    {
        id: 84,
        title: 'Square Sunglasses',
        description: 'Fashion Oversized Square Sunglasses Retro Gradient Big Frame Sunglasses For Women One Piece Gafas Shade Mirror Clear Lens 17059',
        price: 28,
        discountPercentage: 13.89,
        rating: 4.64,
        stock: 64,
        brand: 'mastar watch',
        category: 'sunglasses',
        thumbnail: 'https://i.dummyjson.com/data/products/84/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/84/1.jpg',
            'https://i.dummyjson.com/data/products/84/2.jpg',
            'https://i.dummyjson.com/data/products/84/thumbnail.jpg',
        ],
    },
    {
        id: 85,
        title: 'LouisWill Men Sunglasses',
        description: 'LouisWill Men Sunglasses Polarized Sunglasses UV400 Sunglasses Day Night Dual Use Safety Driving Night Vision Eyewear AL-MG Frame Sun Glasses with Free Box for Drivers',
        price: 50,
        discountPercentage: 11.27,
        rating: 4.98,
        stock: 92,
        brand: 'LouisWill',
        category: 'sunglasses',
        thumbnail: 'https://i.dummyjson.com/data/products/85/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/85/1.jpg',
            'https://i.dummyjson.com/data/products/85/2.jpg',
            'https://i.dummyjson.com/data/products/85/thumbnail.jpg',
        ],
    },
    {
        id: 86,
        title: 'Bluetooth Aux',
        description: 'Bluetooth Aux Bluetooth Car Aux Car Bluetooth Transmitter Aux Audio Receiver Handfree Car Bluetooth Music Receiver Universal 3.5mm Streaming A2DP Wireless Auto AUX Audio Adapter With Mic For Phone MP3',
        price: 25,
        discountPercentage: 10.56,
        rating: 4.57,
        stock: 22,
        brand: 'Car Aux',
        category: 'automotive',
        thumbnail: 'https://i.dummyjson.com/data/products/86/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/86/1.jpg',
            'https://i.dummyjson.com/data/products/86/2.webp',
            'https://i.dummyjson.com/data/products/86/3.jpg',
            'https://i.dummyjson.com/data/products/86/4.jpg',
            'https://i.dummyjson.com/data/products/86/thumbnail.jpg',
        ],
    },
    {
        id: 87,
        title: 't Temperature Controller Incubator Controller',
        description: 'Both Heat and Cool Purpose, Temperature control range; -50 to +110, Temperature measurement accuracy; 0.1, Control accuracy; 0.1',
        price: 40,
        discountPercentage: 11.3,
        rating: 4.54,
        stock: 37,
        brand: 'W1209 DC12V',
        category: 'automotive',
        thumbnail: 'https://i.dummyjson.com/data/products/87/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/87/1.jpg',
            'https://i.dummyjson.com/data/products/87/2.jpg',
            'https://i.dummyjson.com/data/products/87/3.jpg',
            'https://i.dummyjson.com/data/products/87/4.jpg',
            'https://i.dummyjson.com/data/products/87/thumbnail.jpg',
        ],
    },
    {
        id: 88,
        title: 'TC Reusable Silicone Magic Washing Gloves',
        description: 'TC Reusable Silicone Magic Washing Gloves with Scrubber, Cleaning Brush Scrubber Gloves Heat Resistant Pair for Cleaning of Kitchen, Dishes, Vegetables and Fruits, Bathroom, Car Wash, Pet Care and Multipurpose',
        price: 29,
        discountPercentage: 3.19,
        rating: 4.98,
        stock: 42,
        brand: 'TC Reusable',
        category: 'automotive',
        thumbnail: 'https://i.dummyjson.com/data/products/88/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/88/1.jpg',
            'https://i.dummyjson.com/data/products/88/2.jpg',
            'https://i.dummyjson.com/data/products/88/3.jpg',
            'https://i.dummyjson.com/data/products/88/4.webp',
            'https://i.dummyjson.com/data/products/88/thumbnail.jpg',
        ],
    },
    {
        id: 89,
        title: 'Qualcomm original Car Charger',
        description: 'best Quality CHarger , Highly Recommended to all best Quality CHarger , Highly Recommended to all',
        price: 40,
        discountPercentage: 17.53,
        rating: 4.2,
        stock: 79,
        brand: 'TC Reusable',
        category: 'automotive',
        thumbnail: 'https://i.dummyjson.com/data/products/89/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/89/1.jpg',
            'https://i.dummyjson.com/data/products/89/2.jpg',
            'https://i.dummyjson.com/data/products/89/3.jpg',
            'https://i.dummyjson.com/data/products/89/4.jpg',
            'https://i.dummyjson.com/data/products/89/thumbnail.jpg',
        ],
    },
    {
        id: 90,
        title: 'Cycle Bike Glow',
        description: 'Universal fitment and easy to install no special wires, can be easily installed and removed. Fits most standard tyre air stem valves of road, mountain bicycles, motocycles and cars.Bright led will turn on w',
        price: 35,
        discountPercentage: 11.08,
        rating: 4.1,
        stock: 63,
        brand: 'Neon LED Light',
        category: 'automotive',
        thumbnail: 'https://i.dummyjson.com/data/products/90/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/90/1.jpg',
            'https://i.dummyjson.com/data/products/90/2.jpg',
            'https://i.dummyjson.com/data/products/90/3.jpg',
            'https://i.dummyjson.com/data/products/90/4.jpg',
            'https://i.dummyjson.com/data/products/90/thumbnail.jpg',
        ],
    },
    {
        id: 91,
        title: 'Black Motorbike',
        description: 'Engine Type:Wet sump, Single Cylinder, Four Stroke, Two Valves, Air Cooled with SOHC (Single Over Head Cam) Chain Drive Bore & Stroke:47.0 x 49.5 MM',
        price: 569,
        discountPercentage: 13.63,
        rating: 4.04,
        stock: 115,
        brand: 'METRO 70cc Motorcycle - MR70',
        category: 'motorcycle',
        thumbnail: 'https://i.dummyjson.com/data/products/91/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/91/1.jpg',
            'https://i.dummyjson.com/data/products/91/2.jpg',
            'https://i.dummyjson.com/data/products/91/3.jpg',
            'https://i.dummyjson.com/data/products/91/4.jpg',
            'https://i.dummyjson.com/data/products/91/thumbnail.jpg',
        ],
    },
    {
        id: 92,
        title: 'HOT SALE IN EUROPE electric racing motorcycle',
        description: 'HOT SALE IN EUROPE electric racing motorcycle electric motorcycle for sale adult electric motorcycles',
        price: 920,
        discountPercentage: 14.4,
        rating: 4.19,
        stock: 22,
        brand: 'BRAVE BULL',
        category: 'motorcycle',
        thumbnail: 'https://i.dummyjson.com/data/products/92/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/92/1.jpg',
            'https://i.dummyjson.com/data/products/92/2.jpg',
            'https://i.dummyjson.com/data/products/92/3.jpg',
            'https://i.dummyjson.com/data/products/92/4.jpg',
        ],
    },
    {
        id: 93,
        title: 'Automatic Motor Gas Motorcycles',
        description: '150cc 4-Stroke Motorcycle Automatic Motor Gas Motorcycles Scooter motorcycles 150cc scooter',
        price: 1050,
        discountPercentage: 3.34,
        rating: 4.84,
        stock: 127,
        brand: 'shock absorber',
        category: 'motorcycle',
        thumbnail: 'https://i.dummyjson.com/data/products/93/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/93/1.jpg',
            'https://i.dummyjson.com/data/products/93/2.jpg',
            'https://i.dummyjson.com/data/products/93/3.jpg',
            'https://i.dummyjson.com/data/products/93/4.jpg',
            'https://i.dummyjson.com/data/products/93/thumbnail.jpg',
        ],
    },
    {
        id: 94,
        title: 'new arrivals Fashion motocross goggles',
        description: 'new arrivals Fashion motocross goggles motorcycle motocross racing motorcycle',
        price: 900,
        discountPercentage: 3.85,
        rating: 4.06,
        stock: 109,
        brand: 'JIEPOLLY',
        category: 'motorcycle',
        thumbnail: 'https://i.dummyjson.com/data/products/94/thumbnail.webp',
        images: [
            'https://i.dummyjson.com/data/products/94/1.webp',
            'https://i.dummyjson.com/data/products/94/2.jpg',
            'https://i.dummyjson.com/data/products/94/3.jpg',
            'https://i.dummyjson.com/data/products/94/thumbnail.webp',
        ],
    },
    {
        id: 95,
        title: 'Wholesale cargo lashing Belt',
        description: 'Wholesale cargo lashing Belt Tie Down end Ratchet strap customized strap 25mm motorcycle 1500kgs with rubber handle',
        price: 930,
        discountPercentage: 17.67,
        rating: 4.21,
        stock: 144,
        brand: 'Xiangle',
        category: 'motorcycle',
        thumbnail: 'https://i.dummyjson.com/data/products/95/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/95/1.jpg',
            'https://i.dummyjson.com/data/products/95/2.jpg',
            'https://i.dummyjson.com/data/products/95/3.jpg',
            'https://i.dummyjson.com/data/products/95/4.jpg',
            'https://i.dummyjson.com/data/products/95/thumbnail.jpg',
        ],
    },
    {
        id: 96,
        title: 'lighting ceiling kitchen',
        description: 'Wholesale slim hanging decorative kid room lighting ceiling kitchen chandeliers pendant light modern',
        price: 30,
        discountPercentage: 14.89,
        rating: 4.83,
        stock: 96,
        brand: 'lightingbrilliance',
        category: 'lighting',
        thumbnail: 'https://i.dummyjson.com/data/products/96/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/96/1.jpg',
            'https://i.dummyjson.com/data/products/96/2.jpg',
            'https://i.dummyjson.com/data/products/96/3.jpg',
            'https://i.dummyjson.com/data/products/96/4.jpg',
            'https://i.dummyjson.com/data/products/96/thumbnail.jpg',
        ],
    },
    {
        id: 97,
        title: 'Metal Ceramic Flower',
        description: 'Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp',
        price: 35,
        discountPercentage: 10.94,
        rating: 4.93,
        stock: 146,
        brand: 'Ifei Home',
        category: 'lighting',
        thumbnail: 'https://i.dummyjson.com/data/products/97/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/97/1.jpg',
            'https://i.dummyjson.com/data/products/97/2.jpg',
            'https://i.dummyjson.com/data/products/97/3.jpg',
            'https://i.dummyjson.com/data/products/97/4.webp',
            'https://i.dummyjson.com/data/products/97/thumbnail.jpg',
        ],
    },
    {
        id: 98,
        title: '3 lights lndenpant kitchen islang',
        description: '3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier',
        price: 34,
        discountPercentage: 5.92,
        rating: 4.99,
        stock: 44,
        brand: 'DADAWU',
        category: 'lighting',
        thumbnail: 'https://i.dummyjson.com/data/products/98/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/98/1.jpg',
            'https://i.dummyjson.com/data/products/98/2.jpg',
            'https://i.dummyjson.com/data/products/98/3.jpg',
            'https://i.dummyjson.com/data/products/98/4.jpg',
            'https://i.dummyjson.com/data/products/98/thumbnail.jpg',
        ],
    },
    {
        id: 99,
        title: 'American Vintage Wood Pendant Light',
        description: 'American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante',
        price: 46,
        discountPercentage: 8.84,
        rating: 4.32,
        stock: 138,
        brand: 'Ifei Home',
        category: 'lighting',
        thumbnail: 'https://i.dummyjson.com/data/products/99/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/99/1.jpg',
            'https://i.dummyjson.com/data/products/99/2.jpg',
            'https://i.dummyjson.com/data/products/99/3.jpg',
            'https://i.dummyjson.com/data/products/99/4.jpg',
            'https://i.dummyjson.com/data/products/99/thumbnail.jpg',
        ],
    },
    {
        id: 100,
        title: 'Crystal chandelier maria theresa for 12 light',
        description: 'Crystal chandelier maria theresa for 12 light',
        price: 47,
        discountPercentage: 16,
        rating: 4.74,
        stock: 133,
        brand: 'YIOSI',
        category: 'lighting',
        thumbnail: 'https://i.dummyjson.com/data/products/100/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/100/1.jpg',
            'https://i.dummyjson.com/data/products/100/2.jpg',
            'https://i.dummyjson.com/data/products/100/3.jpg',
            'https://i.dummyjson.com/data/products/100/thumbnail.jpg',
        ],
    },
];


/***/ }),

/***/ "./js/data/form.ts":
/*!*************************!*\
  !*** ./js/data/form.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formData": () => (/* binding */ formData)
/* harmony export */ });
const formData = {
    name: {
        label: 'Name',
        type: 'text',
        name: 'name',
        placeholder: 'Zhenya Kachanov',
        id: 'purchase_name',
        error: 'Name must contain at least 2 words, each word must have at least 3 characters',
        validation: /^([A-z]{3,64}\s?){2,64}$/i,
    },
    phone: {
        label: 'Phone',
        type: 'tel',
        name: 'phone',
        placeholder: '+7 999 999 99 99',
        id: 'purchase_tel',
        error: 'Phone must start with "+", contain only digits, and be no shorter than 9 digits.',
        validation: /^\+[0-9]{9}$/i,
    },
    address: {
        label: 'Delivery address',
        type: 'text',
        name: 'address',
        placeholder: 'Minsk, Azgura street',
        id: 'purchase_address',
        error: 'Address must contain at least 3 words, each word must have at least 5 characters',
        validation: /^([A-z]{5,64}\s?){3,64}$/i,
    },
    email: {
        label: 'E-mail',
        type: 'email',
        name: 'email',
        placeholder: 'mail@gmail.com',
        id: 'purchase_email',
        error: 'This must be a valid e-mail',
        validation: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    },
    cardNumber: {
        label: 'Card Number',
        type: 'number',
        name: 'cardNumber',
        placeholder: '0000 0000 0000 0000',
        id: 'purchase_card-number',
        error: 'Card number must contain 16 digits',
        validation: /^[0-9]{16}$/i,
    },
    cardExpire: {
        label: 'Expire date',
        type: 'text',
        name: 'cardExpire',
        placeholder: 'MM / YY',
        id: 'purchase_card-expire',
        error: "Month can't be less than 01 or more than 12",
        validation: /^(0[0-9]|1[0-2])\/[0-9]{2}$/i,
    },
    cardCvv: {
        label: 'CVV',
        type: 'number',
        name: 'cardCvv',
        placeholder: '000',
        id: 'purchase_card-cvv',
        error: 'CVV must contain 3 digits',
        validation: /^[0-9]{3}$/i,
    },
};


/***/ }),

/***/ "./js/data/promo-codes.ts":
/*!********************************!*\
  !*** ./js/data/promo-codes.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "promoCodes": () => (/* binding */ promoCodes)
/* harmony export */ });
const promoCodes = [
    {
        name: 'RS',
        discount: 10
    },
    {
        name: 'EPM',
        discount: 5
    }
];


/***/ }),

/***/ "./assets/svg/logo.svg":
/*!*****************************!*\
  !*** ./assets/svg/logo.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzFfMV8iIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxnPjxjaXJjbGUgY3g9IjMyIiBjeT0iMjYiIHI9IjE1IiBzdHlsZT0iZmlsbDojRkZDQjU3OyIvPjwvZz48cGF0aCBkPSJNNjEsMzEuMTg0di04LjM2OWMxLjE2MS0wLjQxNCwyLTEuNTE0LDItMi44MTZjMC0xLjY1NC0xLjM0Ni0zLTMtM2MtMC4zNDQsMC0wLjY3LDAuMDctMC45NzgsMC4xNzcgICBsLTQuNDgxLTUuNjAyQzU0LjgyNywxMS4xMTcsNTUsMTAuNTgsNTUsMTBjMC0xLjY1NC0xLjM0Ni0zLTMtM2MtMC44NDEsMC0xLjU5OSwwLjM1LTIuMTQ1LDAuOTA5bC03Ljg4My0zLjYzOCAgIEM0MS45ODEsNC4xOCw0Miw0LjA5Myw0Miw0YzAtMS42NTQtMS4zNDYtMy0zLTNjLTEuMzAyLDAtMi40MDIsMC44MzktMi44MTYsMkgyNC44MTZDMjQuNDAyLDEuODM5LDIzLjMwMiwxLDIyLDEgICBjLTEuNjU0LDAtMywxLjM0Ni0zLDNjMCwwLjEyNCwwLjAyMiwwLjI0MywwLjAzNywwLjM2M2wtNC45NiwyLjQ4QzEzLjUzNyw2LjMyNCwxMi44MDcsNiwxMiw2Yy0xLjY1NCwwLTMsMS4zNDYtMywzICAgYzAsMC41OCwwLjE3MywxLjExNywwLjQ1OCwxLjU3NmwtNC40ODEsNS42MDFDNC42NjksMTYuMDcsNC4zNDQsMTYsNCwxNmMtMS42NTQsMC0zLDEuMzQ2LTMsM2MwLDEuMzAyLDAuODM5LDIuNDAyLDIsMi44MTZ2Ni4zNjkgICBDMS44MzksMjguNTk4LDEsMjkuNjk4LDEsMzFjMCwxLjY1NCwxLjM0NiwzLDMsM2MxLjExMSwwLDIuMDcxLTAuNjE0LDIuNTktMS41MTNsNS40NTksMC45OTNDMTIuMjgsMzQuOTA1LDEzLjUxLDM2LDE1LDM2ICAgYzAuMDQxLDAsMC4wNzgtMC4wMSwwLjExOC0wLjAxMmwxLjkwOCw0Ljc3QzE2LjQwMiw0MS4zMDksMTYsNDIuMTA0LDE2LDQzYzAsMS42NTQsMS4zNDYsMywzLDNjMS4wMDYsMCwxLjg5My0wLjUwMiwyLjQzNy0xLjI2NCAgIGw4LjU4MiwyLjQ1MmMwLjA3NywxLjIxOCwwLjg3NywyLjIzNCwxLjk4MSwyLjYyOHY3LjM2OWMtMS4xNjEsMC40MTQtMiwxLjUxNC0yLDIuODE2YzAsMS42NTQsMS4zNDYsMywzLDNzMy0xLjM0NiwzLTMgICBjMC0xLjMwMi0wLjgzOS0yLjQwMi0yLTIuODE2di03LjM2OWMxLjE2MS0wLjQxNCwyLTEuNTE0LDItMi44MTZjMC0wLjk1OC0wLjQ2LTEuODA0LTEuMTYyLTIuMzUzbDEuMTk0LTMuNTgybDguOTczLDIuOTkxICAgYzAuMDI0LDEuMjc3LDAuODUsMi4zNTEsMS45OTQsMi43NTl2MTAuMzY5Yy0xLjE2MSwwLjQxNC0yLDEuNTE0LTIsMi44MTZjMCwxLjY1NCwxLjM0NiwzLDMsM3MzLTEuMzQ2LDMtMyAgIGMwLTEuMzAyLTAuODM5LTIuNDAyLTItMi44MTZWNDYuODE2YzEuMTYxLTAuNDE0LDItMS41MTQsMi0yLjgxNmMwLTAuMzY1LTAuMDc1LTAuNzExLTAuMTk1LTEuMDM1bDcuNjczLTYuMzk0ICAgQzU4LjkyNSwzNi44MzcsNTkuNDQyLDM3LDYwLDM3YzEuNjU0LDAsMy0xLjM0NiwzLTNDNjMsMzIuNjk4LDYyLjE2MSwzMS41OTgsNjEsMzEuMTg0eiBNMTcuOTk0LDMyLjk0NCAgIGMtMC4wMDItMC4xMi0wLjAyLTAuMjM1LTAuMDM2LTAuMzUxbDguMjAzLTQuMjUzbDIuNTM3LDguMTczTDE3Ljk5NCwzMi45NDR6IE0xNS43NjIsMzAuMTFsLTEuMzg2LTEwLjYyOGw2Ljg1My0wLjM0MyAgIGMwLjQzNSwxLjA1NCwxLjQ1NCwxLjgsMi42NTIsMS44NDhsMS42NzksNS40MTFsLTguNTE3LDQuNDE2QzE2LjY4NSwzMC40ODEsMTYuMjQ4LDMwLjIzOSwxNS43NjIsMzAuMTF6IE02Ljc3MiwxNy44NiAgIGMtMC4wNjMtMC4xNTMtMC4xNDQtMC4yOTctMC4yMzEtMC40MzZsNC40ODEtNS42MDFjMC4xMTYsMC4wNCwwLjIzLDAuMDgzLDAuMzUxLDAuMTA5bDAuNzM5LDUuNjYxTDYuNzcyLDE3Ljg2eiBNMTMuMzU1LDExLjY2MiAgIEMxNC4zMjcsMTEuMTY1LDE1LDEwLjE2NCwxNSw5YzAtMC4xMjQtMC4wMjItMC4yNDMtMC4wMzctMC4zNjNsNC45Ni0yLjQ4QzIwLjQ2Myw2LjY3NiwyMS4xOTMsNywyMiw3ICAgYzAuNjE0LDAsMS4xODUtMC4xODcsMS42NjEtMC41MDVsNi4yMSw0LjY1N2wtNC40OTYsNC4xOTZDMjQuOTYxLDE1LjEzNCwyNC40OTgsMTUsMjQsMTVjLTEuMzU0LDAtMi40ODgsMC45MDctMi44NiwyLjE0MiAgIGwtNy4wMjQsMC4zNTFMMTMuMzU1LDExLjY2MnogTTM2LjI1Myw1LjE5N2wtNC44OTcsNC41N0wyNC45OTksNWgxMS4xODVDMzYuMjA4LDUuMDY2LDM2LjIyNSw1LjEzMywzNi4yNTMsNS4xOTd6IE0zOS4wNDEsMTkuNDA4ICAgbC04LjA0Nyw0LjE3M2wtNC4yOTUtNC4yOTVDMjYuODg2LDE4Ljg5NCwyNywxOC40NjIsMjcsMThjMC0wLjQyNi0wLjA5Mi0wLjgyOS0wLjI1Mi0xLjE5Nmw0Ljc0OC00LjQzMmw3LjY1Myw1Ljc0ICAgQzM5LjA2MSwxOC4zOTQsMzksMTguNjg5LDM5LDE5QzM5LDE5LjE0LDM5LjAyMywxOS4yNzMsMzkuMDQxLDE5LjQwOHogTTI1LDE4YzAsMC41NTEtMC40NDgsMS0xLDFzLTEtMC40NDktMS0xczAuNDQ4LTEsMS0xICAgUzI1LDE3LjQ0OSwyNSwxOHogTTI5LjEzMiwyNC41NDZsLTEuNzY5LDAuOTE3bC0xLjIwOS0zLjg5NUwyOS4xMzIsMjQuNTQ2eiBNMjcuOTY1LDI3LjQwNGwyLjY1LTEuMzc0bDQuNjg1LDQuNjg1ICAgQzM1LjExNCwzMS4xMDYsMzUsMzEuNTM4LDM1LDMyYzAsMC45NTksMC40NiwxLjgwNCwxLjE2MiwyLjM1M2wtMS4zOTQsNC4xODJsLTMuNzM0LTEuMjQ1TDI3Ljk2NSwyNy40MDR6IE0zOCwzMyAgIGMtMC41NTIsMC0xLTAuNDQ5LTEtMXMwLjQ0OC0xLDEtMXMxLDAuNDQ5LDEsMVMzOC41NTIsMzMsMzgsMzN6IE0zOCwyOWMtMC40NjIsMC0wLjg5NCwwLjExMy0xLjI4NSwwLjMwMWwtNC4yMzctNC4yMzdsNy40OC0zLjg3OSAgIEM0MC40OTQsMjEuNjg3LDQxLjIwOSwyMiw0MiwyMmMwLjU1OCwwLDEuMDc1LTAuMTYzLDEuNTIzLTAuNDNsNC41NTMsMy43OTRsLTguMDgzLDQuNDA5QzM5LjQ2MSwyOS4yOTgsMzguNzY4LDI5LDM4LDI5eiAgICBNNTAuNTc4LDEyLjYyNUM1MS4wMDMsMTIuODU3LDUxLjQ4MywxMyw1MiwxM2MwLjM0NCwwLDAuNjY5LTAuMDcsMC45NzctMC4xNzdsNC40ODEsNS42MDJDNTcuMTczLDE4Ljg4NCw1NywxOS40Miw1NywyMCAgIGMwLDAuMTYxLDAuMDIzLDAuMzE3LDAuMDQ4LDAuNDcxbC03LjA4MywzLjg2NGwtNS4xNi00LjNDNDQuOTI1LDE5LjcxMSw0NSwxOS4zNjUsNDUsMTljMC0wLjQwNy0wLjA4My0wLjc5NC0wLjIzLTEuMTQ4ICAgTDUwLjU3OCwxMi42MjV6IE01OC40NzgsMzEuNDI5bC02Ljg2MS01LjcxOGw2LjM5MS0zLjQ4NmMwLjI4NywwLjI1OCwwLjYyMiwwLjQ1OCwwLjk5MywwLjU5djguMzY5ICAgQzU4LjgxNywzMS4yNSw1OC42NDMsMzEuMzMxLDU4LjQ3OCwzMS40Mjl6IE00MywxOWMwLDAuNTUxLTAuNDQ4LDEtMSwxcy0xLTAuNDQ5LTEtMXMwLjQ0OC0xLDEtMVM0MywxOC40NDksNDMsMTl6IE00OS43MjgsMjYuNzQyICAgbDcuMTY2LDUuOTcybC0xNS41MjYtMS40MTJMNDkuNzI4LDI2Ljc0MnogTTYxLDIwYzAsMC41NTEtMC40NDgsMS0xLDFzLTEtMC40NDktMS0xczAuNDQ4LTEsMS0xUzYxLDE5LjQ0OSw2MSwyMHogTTUyLDkgICBjMC41NTIsMCwxLDAuNDQ5LDEsMXMtMC40NDgsMS0xLDFzLTEtMC40NDktMS0xUzUxLjQ0OCw5LDUyLDl6IE00OS4wMjcsOS43MjlDNDkuMDE5LDkuODIsNDksOS45MDcsNDksMTAgICBjMCwwLjQwNywwLjA4MywwLjc5NCwwLjIzLDEuMTQ4bC01LjgwOSw1LjIyN0M0Mi45OTcsMTYuMTQzLDQyLjUxNywxNiw0MiwxNmMtMC42MTQsMC0xLjE4NSwwLjE4Ny0xLjY2MSwwLjUwNWwtNy4zNTgtNS41MTkgICBsNC42NDUtNC4zMzVDMzguMDM5LDYuODY3LDM4LjUwMiw3LDM5LDdjMC44NDEsMCwxLjYtMC4zNSwyLjE0NS0wLjkwOUw0OS4wMjcsOS43Mjl6IE0zOSwzYzAuNTUyLDAsMSwwLjQ0OSwxLDFzLTAuNDQ4LDEtMSwxICAgcy0xLTAuNDQ5LTEtMVMzOC40NDgsMywzOSwzeiBNMjIsM2MwLjU1MiwwLDEsMC40NDksMSwxcy0wLjQ0OCwxLTEsMXMtMS0wLjQ0OS0xLTFTMjEuNDQ4LDMsMjIsM3ogTTEyLDhjMC41NTIsMCwxLDAuNDQ5LDEsMSAgIHMtMC40NDgsMS0xLDFzLTEtMC40NDktMS0xUzExLjQ0OCw4LDEyLDh6IE00LDE4YzAuNTUyLDAsMSwwLjQ0OSwxLDFzLTAuNDQ4LDEtMSwxcy0xLTAuNDQ5LTEtMVMzLjQ0OCwxOCw0LDE4eiBNNCwzMiAgIGMtMC41NTIsMC0xLTAuNDQ5LTEtMXMwLjQ0OC0xLDEtMXMxLDAuNDQ5LDEsMVM0LjU1MiwzMiw0LDMyeiBNNSwyOC4xODR2LTYuMzY5YzAuODk0LTAuMzE5LDEuNTg1LTEuMDQ0LDEuODYtMS45NThsNS41MTItMC4yNzYgICBsMS4zOTQsMTAuNjljLTAuNTc0LDAuMjYtMS4wNDMsMC42OTgtMS4zNTYsMS4yNEw2Ljk1MiwzMC41MkM2Ljc3NSwyOS40MzIsNi4wMTUsMjguNTQ2LDUsMjguMTg0eiBNMTQsMzNjMC0wLjU1MSwwLjQ0OC0xLDEtMSAgIHMxLDAuNDQ5LDEsMXMtMC40NDgsMS0xLDFTMTQsMzMuNTUxLDE0LDMzeiBNMTYuOTc0LDM1LjI0MWMwLjEzOS0wLjEyMiwwLjI2NS0wLjI1NywwLjM3OS0wLjQwM2wxMi4wNzUsNC4wMjVsMS43ODMsNS43NDMgICBjLTAuMjQ4LDAuMTg2LTAuNDY4LDAuNDA1LTAuNjQ4LDAuNjU3bC04LjU4Mi0yLjQ1MkMyMS44ODIsNDEuMjQ3LDIwLjU5LDQwLDE5LDQwYy0wLjA0LDAtMC4wNzgsMC4wMS0wLjExNywwLjAxMkwxNi45NzQsMzUuMjQxeiAgICBNMTksNDRjLTAuNTUyLDAtMS0wLjQ0OS0xLTFzMC40NDgtMSwxLTFzMSwwLjQ0OSwxLDFTMTkuNTUyLDQ0LDE5LDQ0eiBNMzMsNjFjLTAuNTUyLDAtMS0wLjQ0OS0xLTFzMC40NDgtMSwxLTFzMSwwLjQ0OSwxLDEgICBTMzMuNTUyLDYxLDMzLDYxeiBNMzMsNDhjLTAuNTUyLDAtMS0wLjQ0OS0xLTFzMC40NDgtMSwxLTFzMSwwLjQ0OSwxLDFTMzMuNTUyLDQ4LDMzLDQ4eiBNMzMuMDM0LDQzLjczNmwtMS4yNzEtNC4wOTRsMi4zNzIsMC43OTEgICBMMzMuMDM0LDQzLjczNnogTTM4LjA1NiwzNC45OTRjMS4xODItMC4wMjIsMi4xOTQtMC43MywyLjY2Mi0xLjc0M2wxNi4zODYsMS40OWMwLjAyNiwwLjEsMC4wNTYsMC4xOTgsMC4wOTEsMC4yOTRsLTcuNjczLDYuMzk0ICAgQzQ5LjA3NCw0MS4xNjMsNDguNTU4LDQxLDQ4LDQxYy0wLjk1OCwwLTEuODA0LDAuNDYtMi4zNTMsMS4xNjJsLTguOTgyLTIuOTk0TDM4LjA1NiwzNC45OTR6IE00OCw2MWMtMC41NTIsMC0xLTAuNDQ5LTEtMSAgIHMwLjQ0OC0xLDEtMXMxLDAuNDQ5LDEsMVM0OC41NTIsNjEsNDgsNjF6IE00OCw0NWMtMC41NTIsMC0xLTAuNDQ5LTEtMXMwLjQ0OC0xLDEtMXMxLDAuNDQ5LDEsMVM0OC41NTIsNDUsNDgsNDV6IE02MCwzNSAgIGMtMC41NTIsMC0xLTAuNDQ5LTEtMXMwLjQ0OC0xLDEtMXMxLDAuNDQ5LDEsMVM2MC41NTIsMzUsNjAsMzV6IiBzdHlsZT0iZmlsbDojM0YzQTM0OyIvPjxnPjxyZWN0IGhlaWdodD0iMiIgc3R5bGU9ImZpbGw6I0U1NjU2NTsiIHdpZHRoPSIyIiB4PSIzIiB5PSIxIi8+PC9nPjxnPjxyZWN0IGhlaWdodD0iMiIgc3R5bGU9ImZpbGw6I0U1NjU2NTsiIHdpZHRoPSIyIiB4PSIzIiB5PSI1Ii8+PC9nPjxnPjxyZWN0IGhlaWdodD0iMiIgc3R5bGU9ImZpbGw6I0U1NjU2NTsiIHdpZHRoPSIyIiB4PSI1IiB5PSIzIi8+PC9nPjxnPjxyZWN0IGhlaWdodD0iMiIgc3R5bGU9ImZpbGw6I0U1NjU2NTsiIHdpZHRoPSIyIiB4PSIxIiB5PSIzIi8+PC9nPjxnPjxyZWN0IGhlaWdodD0iMiIgc3R5bGU9ImZpbGw6I0U1NjU2NTsiIHdpZHRoPSIyIiB4PSI1MyIgeT0iNDciLz48L2c+PGc+PHJlY3QgaGVpZ2h0PSIyIiBzdHlsZT0iZmlsbDojRTU2NTY1OyIgd2lkdGg9IjIiIHg9IjUzIiB5PSI1MSIvPjwvZz48Zz48cmVjdCBoZWlnaHQ9IjIiIHN0eWxlPSJmaWxsOiNFNTY1NjU7IiB3aWR0aD0iMiIgeD0iNTUiIHk9IjQ5Ii8+PC9nPjxnPjxyZWN0IGhlaWdodD0iMiIgc3R5bGU9ImZpbGw6I0U1NjU2NTsiIHdpZHRoPSIyIiB4PSI1MSIgeT0iNDkiLz48L2c+PGc+PHJlY3QgaGVpZ2h0PSIyIiBzdHlsZT0iZmlsbDojRTU2NTY1OyIgd2lkdGg9IjIiIHg9IjU5IiB5PSI1Ii8+PC9nPjxnPjxyZWN0IGhlaWdodD0iMiIgc3R5bGU9ImZpbGw6I0U1NjU2NTsiIHdpZHRoPSIyIiB4PSI1OSIgeT0iOSIvPjwvZz48Zz48cmVjdCBoZWlnaHQ9IjIiIHN0eWxlPSJmaWxsOiNFNTY1NjU7IiB3aWR0aD0iMiIgeD0iNjEiIHk9IjciLz48L2c+PGc+PHJlY3QgaGVpZ2h0PSIyIiBzdHlsZT0iZmlsbDojRTU2NTY1OyIgd2lkdGg9IjIiIHg9IjU3IiB5PSI3Ii8+PC9nPjxnPjxyZWN0IGhlaWdodD0iMiIgc3R5bGU9ImZpbGw6I0U1NjU2NTsiIHdpZHRoPSIyIiB4PSIxMyIgeT0iNDkiLz48L2c+PGc+PHJlY3QgaGVpZ2h0PSIyIiBzdHlsZT0iZmlsbDojRTU2NTY1OyIgd2lkdGg9IjIiIHg9IjEzIiB5PSI1MyIvPjwvZz48Zz48cmVjdCBoZWlnaHQ9IjIiIHN0eWxlPSJmaWxsOiNFNTY1NjU7IiB3aWR0aD0iMiIgeD0iMTUiIHk9IjUxIi8+PC9nPjxnPjxyZWN0IGhlaWdodD0iMiIgc3R5bGU9ImZpbGw6I0U1NjU2NTsiIHdpZHRoPSIyIiB4PSIxMSIgeT0iNTEiLz48L2c+PGc+PHJlY3QgaGVpZ2h0PSIyIiBzdHlsZT0iZmlsbDojRTU2NTY1OyIgd2lkdGg9IjIiIHg9IjciIHk9IjM4Ii8+PC9nPjxnPjxyZWN0IGhlaWdodD0iMiIgc3R5bGU9ImZpbGw6I0U1NjU2NTsiIHdpZHRoPSIyIiB4PSI3IiB5PSI0MiIvPjwvZz48Zz48cmVjdCBoZWlnaHQ9IjIiIHN0eWxlPSJmaWxsOiNFNTY1NjU7IiB3aWR0aD0iMiIgeD0iOSIgeT0iNDAiLz48L2c+PGc+PHJlY3QgaGVpZ2h0PSIyIiBzdHlsZT0iZmlsbDojRTU2NTY1OyIgd2lkdGg9IjIiIHg9IjUiIHk9IjQwIi8+PC9nPjwvZz48L3N2Zz4=";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _js_application_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/application/app */ "./js/application/app.ts");
/* harmony import */ var _js_common_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/common/state */ "./js/common/state.ts");
/* harmony import */ var _js_common_cart_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/common/cart-data */ "./js/common/cart-data.ts");
/* harmony import */ var _js_common_promo_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/common/promo-data */ "./js/common/promo-data.ts");





const state = new _js_common_state__WEBPACK_IMPORTED_MODULE_2__.State({
    cartData: _js_common_cart_data__WEBPACK_IMPORTED_MODULE_3__.CartData.getData(),
    filters: {
        category: [],
        brand: [],
        price: { min: 10, max: 1749 },
        stock: { min: 2, max: 150 },
        sortGoods: [],
        sortCount: { category: {}, brand: {} },
        sortOptions: {
            isSort: false,
            sortType: null,
            sortValue: null,
        },
        sortSearch: '',
    },
    promoData: _js_common_promo_data__WEBPACK_IMPORTED_MODULE_4__.PromoData.getData()
});
const app = new _js_application_app__WEBPACK_IMPORTED_MODULE_1__.App(document.body, state);
window.onbeforeunload = () => {
    new _js_common_cart_data__WEBPACK_IMPORTED_MODULE_3__.CartData(state.getData('cartData')).save();
    new _js_common_promo_data__WEBPACK_IMPORTED_MODULE_4__.PromoData(state.getData('promoData')).save();
};

})();

/******/ })()
;