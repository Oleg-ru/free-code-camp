class Bookmark{
    selectors = {
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

    storageKey = 'bookmarks';
    constructor() {
        this.elMainSection = document.querySelector(this.selectors.mainSection);
        this.elFormSection = document.querySelector(this.selectors.formSection);
        this.elAddBookmarkButton = document.querySelector(this.selectors.addBookmarkButton);
        this.elCategoryName = document.querySelectorAll(this.selectors.categoryName);
        this.elCategoryDropdown = document.querySelector(this.selectors.categoryDropdown);
        this.elCloseFormButton = document.querySelector(this.selectors.closeFormButton);
        this.elAddBookmarkButtonForm = document.querySelector(this.selectors.addBookmarkButtonForm);
        this.elNameInput = document.querySelector(this.selectors.name);
        this.elUrlInput = document.querySelector(this.selectors.url);
        this.elBookmarkListSection = document.querySelector(this.selectors.bookmarkListSection);
        this.elViewCategoryButton = document.querySelector(this.selectors.viewCategoryButton);
        this.elCategoryList = document.querySelector(this.selectors.categoryList);
        this.elCloseListButton = document.querySelector(this.selectors.closeListButton);
        this.elDeleteBookmarkButton = document.querySelector(this.selectors.deleteBookmarkButton);
    }
    /**
     *  Возвращает массив сохранённый в локальном хранилище. Если хранилище не имеет значений, то пустой массив []
     * @returns {*[]}
     */
    getBookmarks() {
        this.cache = localStorage.getItem(this.storageKey);
        return this.cache ? this.cache : [];
    }

    /**
     * Включает или выключает отображение для элементов #main-section и #form-section
     */
    displayOrCloseForm() {
        this.elMainSection.classList.toggle(this.selectors.hidden);
        this.elFormSection.classList.toggle(this.selectors.hidden);
    }

    onClickButtonAddBookmark() {
    }
}