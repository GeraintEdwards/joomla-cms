Joomla=window.Joomla||{},!function(e,a){"use strict";a.setcollapse=function(a,t,o){e.getElementById("collapse-"+t)||(e.getElementById("container-collapse").innerHTML='<div class="collapse fade" id="collapse-'+t+'"><iframe class="iframe" src="'+a+'" height="'+o+'" width="100%"></iframe></div>')},Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var a=this.length>>>0,t=Number(arguments[1])||0;for(t=0>t?Math.ceil(t):Math.floor(t),0>t&&(t+=a);a>t;t++)if(t in this&&this[t]===e)return t;return-1}),window.jQuery&&function(a){function t(e,t){for(var o,n,i,r,d=!0,l=e.data("showon")||[],s=0,f=l.length;f>s;s++)n=l[s]||{},i=n.field,r=a('[name="'+i+'"], [name="'+i+'[]"]'),n.valid=0,r.each(function(){var e=a(this);if(-1!==["checkbox","radio"].indexOf(e.attr("type"))){if(!e.prop("checked"))return;o=e.val()}else o=e.val(),null==o&&"select"==e.prop("tagName").toLowerCase()&&(o=[]);"object"!=typeof o&&(o=JSON.parse('["'+o+'"]'));for(var t in o)o.propertyIsEnumerable(t)&&("="==l[s].sign&&-1!==l[s].values.indexOf(o[t])&&(l[s].valid=1),"!="==l[s].sign&&-1===l[s].values.indexOf(o[t])&&(l[s].valid=1))}),""===n.op?0===n.valid&&(d=!1):("AND"===n.op&&n.valid+l[s-1].valid<2&&(d=!1),"OR"===n.op&&n.valid+l[s-1].valid>0&&(d=!0));if(t&&!e.is("option"))d?e.slideDown():e.slideUp();else if(d?e.show():e.hide(),e.is("option")){e.toggle(d),e.attr("disabled",d?!1:!0);var c=e.parent();a("#"+c.attr("id")+"_chzn").length&&(c.trigger("liszt:updated"),c.trigger("chosen:updated"))}}function o(o){o=o||e;for(var n=a(o).find("[data-showon]"),i=0,r=n.length;r>i;i++)!function(){for(var e,o=a(n[i]),r=o.data("showon")||[],d=a(),l=0,s=r.length;s>l;l++)e=r[l].field,d=d.add(a('[name="'+e+'"], [name="'+e+'[]"]'));t(o),d.on("change",function(){t(o,!0)})}()}a(e).ready(function(){o(),a(e).on("subform-row-add",function(e,t){for(var n,i,r=a(t),d=r.find("[data-showon]"),l=r.data("baseName"),s=r.data("group"),f=new RegExp("\\["+l+"\\]\\["+l+"X\\]","g"),c="["+l+"]["+s+"]",p=0,h=d.length;h>p;p++)n=a(d[p]),i=n.attr("data-showon").replace(f,c),n.attr("data-showon",i);o(t)})})}(jQuery)}(document,Joomla);