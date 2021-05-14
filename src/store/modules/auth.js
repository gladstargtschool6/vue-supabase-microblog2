//store/modules/auth.js

import axios from 'axios';
const state = {

};
const getters = {

};
const actions = {

};
const mutations = {

};
export default {
  state,
  getters,
  actions,
  mutations
};
// ~/middleware/authenticated.js
export default ({ $supabase, redirect }) => {
	if (!$supabase.auth.session()) {
		return redirect('/sign-in')
	}
}
