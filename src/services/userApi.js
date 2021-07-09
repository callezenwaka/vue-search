'use strict'

// https://www.raymondcamden.com/2019/10/16/using-indexeddb-with-vuejs
// https://developers.google.com/web/ilt/pwa/working-with-indexeddb#updating_data
// https://www.tutorialdocs.com/article/indexeddb-tutorial.html

const DB_NAME = 'userDB';
const DB_VERSION = 1;
let DB;

export default {

  async getDb() {
    return new Promise((resolve, reject) => {
      
      if(DB) { return resolve(DB); }
      console.log('OPENING DB', DB);
      let request = window.indexedDB.open(DB_NAME, DB_VERSION);
      
      request.onerror = e => {
        console.log('Error opening db', e);
        reject('Error');
      };
      
      request.onsuccess = e => {
        DB = e.target.result;
        resolve(DB);
      };
      
      request.onupgradeneeded = e => {
        console.log('onupgradeneeded');
        let db = e.target.result;
        db.createObjectStore("users", { keyPath: 'id' });
      };
      
    });
  },
  
  async deleteUser(id) {
    let db = await this.getDb();
    
    return new Promise(resolve => {
    
      let trans = db.transaction(['users'],'readwrite');
      trans.oncomplete = () => {
        resolve();
      };
      
      let store = trans.objectStore('users');
      store.delete(id);
      
    });
  },
  
  async getUsers(username) {
    let db = await this.getDb();
    
    return new Promise(resolve => {
      
      let trans = db.transaction(['users'],'readonly');
      trans.oncomplete = () => {
        resolve(users);
      };
      
      let store = trans.objectStore('users');
      let users = [];
      
      store.openCursor().onsuccess = e => {
        let cursor = e.target.result;
        if (cursor && cursor.value.name.toLowerCase().includes(username.toLowerCase())) {
          users.push(cursor.value)
          cursor.continue();
        }
      };
    });
  },
  
  async getUser(id) {
    
    let db = await this.getDb();
    
    return new Promise(resolve => {
      
      let trans = db.transaction(['users'],'readwrite');
      trans.oncomplete = () => {
        resolve();
      };
      
      let store = trans.objectStore('users');
      store.get(id);
    
    });
  },
  
  async addUser(user) {
    
    let db = await this.getDb();
    
    return new Promise(resolve => {
      
      let trans = db.transaction(['users'],'readwrite');
      trans.oncomplete = () => {
        resolve();
      };
      
      let store = trans.objectStore('users');
      store.add(user);
      
    });
  },
  
  async updateUser(user) {
    
    let db = await this.getDb();
    
    return new Promise(resolve => {
      
      let trans = db.transaction(['users'],'readwrite');
      trans.oncomplete = () => {
        resolve();
      };
      
      let store = trans.objectStore('users');
      store.put(user);
      
    });
  },

}