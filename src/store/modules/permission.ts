/**
 * Created by Yes.Man on 2021/8/30 16:16.
 * @file: permission
 */

export default {
  namespaced:true,

  state: {
    counter: 0
  },

  mutations: {
    add (state) {
      state.couter++;
    }
  }
};
