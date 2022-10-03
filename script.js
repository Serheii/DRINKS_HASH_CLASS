"use strict";

class HashStorageFunc {
  constructor() {
  this.storage = {};
  };

  addValue(key, value) {
      this.storage[key] = value;
  };
  getValue(key) {
    return this.storage[key];
  };
  deleteValue(key) {
    if (( key in this.storage ) == true ){
    delete this.storage[key];
    return true;
    } else {
      return false;
    }
  };
  getKeys() {
    let st = [];
    for (let k in this.storage)
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
    alert(a+'"'+key+'"'+'\n'+'Рецепт приготовления:\n'+n.key.recept);
  };
};

function deleteKoktel() {
  let key = prompt ('Введите название коктеля');
  let del = drinkStorage.deleteValue ( key );
  if (del==true)
    alert('Удалено!');
  else
    alert('Не найдено в базе!');
};

function getName () {
   if ( drinkStorage.getKeys().length === 0 ) {
     alert('В хранилище нет ни одного напитка');
   } else {
     alert(drinkStorage.getKeys());
  };
};