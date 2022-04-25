import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueQueryBuilder from './VueQueryBuilder.vue'

Vue.config.productionTip = false

Vue.use(ElementUI);

import rules from './rule.json'

new Vue({
  el: '#app',

  components: { VueQueryBuilder },

  data: {
    rules: rules,
    output: {},
  },

  computed: {
    outputFormatted: function() {
      return JSON.stringify(this.output, null, 2);
    }
  },

  methods: {
    updateQuery: function(value){
      this.output = value;
    }
  }
});
