module.exports=function(t){function n(d){if(e[d])return e[d].exports;var r=e[d]={exports:{},id:d,loaded:!1};return t[d].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports=e(3)},,,function(t,n,e){"use strict";var d=e(4);t.exports={template:d,data:{styles:["","inner-delimiter","bordered","striped","highlight","centered","compact"]}}},function(t,n){t.exports='<div class="screen-bar shadow-1 fixed-top">Quasar HTML Tables</div>\n\n<div v-for="style in styles" style="margin-bottom: 30px; max-width: 400px">\n  <h5>{{style ? \'Class "\' + style + \'"\' : \'Default\'}}</h5>\n  <table :class="style">\n    <thead>\n      <tr>\n          <th>Name</th>\n          <th>Price</th>\n          <th>In Stock</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr>\n        <td>Item #1</td>\n        <td>$10.11</td>\n        <td>101</td>\n      </tr>\n      <tr>\n        <td>Item #2</td>\n        <td>$8.88</td>\n        <td>34</td>\n      </tr>\n      <tr>\n        <td>Item #3</td>\n        <td>$0.15</td>\n        <td>1670</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n'}]);