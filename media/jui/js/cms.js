Joomla=window.Joomla||{},!function(e,a){"use strict";a.setcollapse=function(a,t,n){e.getElementById("collapse-"+t)||(e.getElementById("container-collapse").innerHTML='<div class="collapse fade" id="collapse-'+t+'"><iframe class="iframe" src="'+a+'" height="'+n+'" width="100%"></iframe></div>')},Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var a=this.length>>>0,t=Number(arguments[1])||0;for(t=0>t?Math.ceil(t):Math.floor(t),0>t&&(t+=a);a>t;t++)if(t in this&&this[t]===e)return t;return-1}),window.jQuery&&function(a){function t(e,t){for(var n,o,i,r,d=!0,l=e.data("showon")||[],s=0,f=l.length;f>s;s++)o=l[s]||{},i=o.field,r=a('[name="'+i+'"], [name="'+i+'[]"]'),o.valid=0,r.each(function(){var e=a(this);if(-1!==["checkbox","radio"].indexOf(e.attr("type"))){if(!e.prop("checked"))return;n=e.val()}else n=e.val(),null==n&&"select"==e.prop("tagName").toLowerCase()&&(n=[]);"object"!=typeof n&&(n=JSON.parse('["'+n+'"]'));for(var t in n)n.propertyIsEnumerable(t)&&("="==l[s].sign&&-1!==l[s].values.indexOf(n[t])&&(l[s].valid=1),"!="==l[s].sign&&-1===l[s].values.indexOf(n[t])&&(l[s].valid=1))}),""===o.op?0===o.valid&&(d=!1):("AND"===o.op&&o.valid+l[s-1].valid<2&&(d=!1),"OR"===o.op&&o.valid+l[s-1].valid>0&&(d=!0));if(t&&!e.is("option"))d?e.slideDown():e.slideUp();else if(e.toggle(d),e.is("option")){e.attr("disabled",d?!1:!0);var c=e.parent();a("#"+c.attr("id")+"_chzn").length&&(c.trigger("liszt:updated"),c.trigger("chosen:updated"))}}function n(n){n=n||e;for(var o=a(n).find("[data-showon]"),i=0,r=o.length;r>i;i++)!function(){for(var e,n=a(o[i]),r=n.data("showon")||[],d=a(),l=0,s=r.length;s>l;l++)e=r[l].field,d=d.add(a('[name="'+e+'"], [name="'+e+'[]"]'));t(n),d.on("change",function(){t(n,!0)})}()}a(e).ready(function(){n(),a(e).on("subform-row-add",function(e,t){for(var o,i,r=a(t),d=r.find("[data-showon]"),l=r.data("baseName"),s=r.data("group"),f=new RegExp("\\["+l+"\\]\\["+l+"X\\]","g"),c="["+l+"]["+s+"]",p=0,u=d.length;u>p;p++)o=a(d[p]),i=o.attr("data-showon").replace(f,c),o.attr("data-showon",i);n(t)})})}(jQuery)}(document,Joomla);
