/**
 * Created by Yes.Man on 2021/8/30 16:16.
 * @file: permission
 */
import { Module } from 'vuex';
import { State } from '@/store';

const state = {
  counter: 0
};

export type PermissionState = typeof state

export default {
  namespaced: true,

  state,

  mutations: {
    add (state) {
      state.counter++;
    }
  },

  actions: {}
} as Module<PermissionState, State>;
