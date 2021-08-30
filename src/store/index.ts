/**
 * Created by Yes.Man on 2021/8/30 16:15.
 * @file: store
 */
import { createStore } from 'vuex';
import getters from './getters';

const modules = import.meta.glob('./modules/*.ts');
console.log(modules);

const store = createStore({
  modules,
  getters
});

export default store;
