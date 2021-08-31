/**
 * Created by Yes.Man on 2021/8/30 16:15.
 * @file: store
 */
import { createStore, Store } from 'vuex';
import getters from './getters';
import type { ModuleTree } from 'vuex';
import { InjectionKey } from 'vue';

const files = import.meta.glob('./modules/*.ts');
const modules: ModuleTree<string> = {};

for (const path in files) {
  files[path]().then(mod => {
    if (/^\.\/modules\/(.*)\.ts$/.test(path)) {
      modules[RegExp.$1] = mod.default;
    }
  });
}

export default createStore({ modules, getters });
