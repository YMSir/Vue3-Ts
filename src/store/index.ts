/**
 * Created by Yes.Man on 2021/8/30 16:15.
 * @file: store
 */
import { createStore, Store } from 'vuex';
import getters from './getters';
import type { ModuleTree } from 'vuex';
import { InjectionKey } from 'vue';

const files = import.meta.globEager('./modules/*.ts');
const modules: ModuleTree<string> = {};

for (const path in files) {
  if (/^\.\/modules\/(.*)\.ts$/.test(path)) {
    modules[RegExp.$1] = files[path].default;
  }
}

export default createStore({ modules, getters });

export interface State {

}

export const key: InjectionKey<Store<State>> = Symbol();
