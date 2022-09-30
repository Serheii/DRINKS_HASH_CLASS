"use strict";

class HashStorageFunc {
  constructor() {
  this.storage = {};
  }

  addValue = function(key, value) {
      this.storage[key] = value;
  };
  getValue = function(key) {
    return this.storage[key];
  };
  deleteValue = function(key) {
    if (( key in this.storage ) == true ){
    delete this.storage[key];
    return true;
    } else {
      return false
    }
  };
  getKeys = function() {
    let k, st = [];
    for (k in this.storage)
      st.push(k);
    return st;
  };
};

let drinkStorage = new HashStorageFunc();

function drinkInfo() {
  let key = prompt ('Введите название коктеля');
  let recept = prompt ('Введите рецепт');
  let alk = confirm ('Коктель алкогольный?');
  let value = {
    key : {
      recept,
      alk
    }
  };
  drinkStorage.addValue ( key , value );
};

function getDrinkInfo () {
  let key = prompt ('Введите название коктеля');
  let n = drinkStorage.getValue ( key );
  let a;
  if ( n == undefined)
    alert('Такого напитка нет');
  else {
      if (n.key.alk == true) {
      a = 'Алкогольный напиток ';
    } else {
      a = 'Безалкогольный напиток ';
    }
  }
    alert(a+'"'+key+'"'+'\n'+'Рецепт приготовления:\n'+n.key.recept);
};

function deleteKoktel() {
  let key = prompt ('Введите название коктеля');
  drinkStorage.deleteValue ( key );
};

function getName () {
  let a = drinkStorage.getKeys;
    if ( a()[0] == undefined ) {
      alert('В хранилище нет ни одного напитка');
    } else {
       alert(a());
   }
};