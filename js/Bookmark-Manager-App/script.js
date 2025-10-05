const selectors = {
    mainSection: '#main-section',
    formSection: '#form-section',
    addBookmarkButton: '#add-bookmark-button',
    categoryName: '.category-name',
    categoryDropdown: '#category-dropdown',
    closeFormButton: '#close-form-button',
    addBookmarkButtonForm: '#add-bookmark-button-form',
    name: '#name',
    url: '#url',
    bookmarkListSection: '#bookmark-list-section',
    viewCategoryButton: '#view-category-button',
    categoryList: '#category-list',
    closeListButton: '#close-list-button',
    deleteBookmarkButton: '#delete-bookmark-button',
    hidden: '.hidden',
}

const storageKey = 'bookmarks';

const elements = {
    elMainSection: document.querySelector(selectors.mainSection),
    elFormSection: document.querySelector(selectors.formSection),
    elAddBookmarkButton: document.querySelector(selectors.addBookmarkButton),
    elCategoryName: document.querySelectorAll(selectors.categoryName),
    elCategoryDropdown: document.querySelector(selectors.categoryDropdown),
    elCloseFormButton: document.querySelector(selectors.closeFormButton),
    elAddBookmarkButtonForm: document.querySelector(selectors.addBookmarkButtonForm),
    elNameInput: document.querySelector(selectors.name),
    elUrlInput: document.querySelector(selectors.url),
    elBookmarkListSection: document.querySelector(selectors.bookmarkListSection),
    elViewCategoryButton: document.querySelector(selectors.viewCategoryButton),
    elCategoryList: document.querySelector(selectors.categoryList),
    elCloseListButton: document.querySelector(selectors.closeListButton),
    elDeleteBookmarkButton: document.querySelector(selectors.deleteBookmarkButton),
}

/**
 *  Возвращает массив сохранённый в локальном хранилище. Если хранилище не имеет значений, то пустой массив []
 * @returns {*[]}
 */
function getBookmarks() {
    const cache = localStorage.getItem(storageKey);
    return cache ? cache : [];
}

/**
 * Включает или выключает отображение для элементов #main-section и #form-section
 */
function displayOrCloseForm() {
    elements.elMainSection.classList.toggle(selectors.hidden);
    elements.elFormSection.classList.toggle(selectors.hidden);
}

function onClickButtonAddBookmark() {
}
