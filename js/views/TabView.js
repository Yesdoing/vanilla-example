'use strict';

import View from './View.js';

const tag = '[TabView]';

const TabView = Object.create(View);

TabView.tabNames = {
    recommand: '추천 검색어',
    recent: '최근 검색어',
}

TabView.setup = function (el) {
    this.init(el);
    this.bindEvents();
    return this;
}

TabView.setActiveTab = function(tabName) {
    console.log(tabName);
    Array.from(this.el.children).forEach(li => {
        li.className = li.innerHTML === tabName ? 'active' : '';
    });
    this.show();
};

TabView.bindEvents = function() {
    Array.from(this.el.children).forEach(li => li.addEventListener('click', e => this.onClick(e)));
}

TabView.onClick = function(e) {
    this.setActiveTab(e.target.innerHTML);
}

export default TabView;