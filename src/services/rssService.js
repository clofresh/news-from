import axios from 'axios';

export default {
    loadCnn: function() {
        return axios.get('/api/cnn');
    },

    loadFox: function() {
        return axios.get('/api/fox');
    },

    loadBreitbart: function() {
        return axios.get('/api/breibart');
    },

    loadMsnbc: function() {
        return axios.get('/api/msnbc');
    }
};