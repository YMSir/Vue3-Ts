/**
 * Created by Yes.Man on 2021/8/30 23:52.
 * @file: vuex.d
 */

import { ComponentCustomProperties, InjectionKey } from 'vue';
import { Store } from 'vuex';

// 模块扩展
declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    permission: {
      counter: number
    };
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

export interface State {

}

export const key: InjectionKey<Store<State
>>= Symbol();
