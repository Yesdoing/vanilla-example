'use strict';

export default {
    data: [
        { keyword: '검색기록2', data: '12.03' },
        { keyword: '검색기록1', data: '12.02' },
        { keyword: '검색기록0', data: '12.01' },
    ],

    list() {
        return Promise.resolve(this.data)
    },

    add(keyword = '') {
        keyword = keyword.trim();
        if (!keyword) return;
        if (this.data.some(item => item.keyword === keyword)) {
            this.remove(keyword);
        }

        const date = '12.31';
        this.data = [{keyword, date}, ...this.data];
    },

    remove(keyword) {
        this.data = this.data.filter(item => item.keyword !== keyword);
    }
}