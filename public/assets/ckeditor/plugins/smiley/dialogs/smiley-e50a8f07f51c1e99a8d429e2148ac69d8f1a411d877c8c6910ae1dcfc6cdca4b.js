/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("smiley",function(e){var t,a=e.config,i=e.lang.smiley,l=a.smiley_images,s=a.smiley_columns||8,n=function(a){if("a"==(i=(s=a.data.getTarget()).getName()))s=s.getChild(0);else if("img"!=i)return;var i=s.getAttribute("cke_src"),l=s.getAttribute("title"),s=e.document.createElement("img",{attributes:{src:i,"data-cke-saved-src":i,title:l,alt:l,width:s.$.width,height:s.$.height}});e.insertElement(s),t.hide(),a.data.preventDefault()},r=CKEDITOR.tools.addFunction(function(t,a){var i;t=new CKEDITOR.dom.event(t),a=new CKEDITOR.dom.element(a),i=t.getKeystroke();var l="rtl"==e.lang.dir;switch(i){case 38:(i=a.getParent().getParent().getPrevious())&&(i=i.getChild([a.getParent().getIndex(),0])).focus(),t.preventDefault();break;case 40:(i=a.getParent().getParent().getNext())&&(i=i.getChild([a.getParent().getIndex(),0]))&&i.focus(),t.preventDefault();break;case 32:n({data:t}),t.preventDefault();break;case l?37:39:(i=a.getParent().getNext())?((i=i.getChild(0)).focus(),t.preventDefault(!0)):(i=a.getParent().getParent().getNext())&&((i=i.getChild([0,0]))&&i.focus(),t.preventDefault(!0));break;case l?39:37:(i=a.getParent().getPrevious())?((i=i.getChild(0)).focus(),t.preventDefault(!0)):(i=a.getParent().getParent().getPrevious())&&((i=i.getLast().getChild(0)).focus(),t.preventDefault(!0))}}),o=['<div><span id="'+(o=CKEDITOR.tools.getNextId()+"_smiley_emtions_label")+'" class="cke_voice_label">'+i.options+"</span>",'<table role="listbox" aria-labelledby="'+o+'" style="width:100%;height:100%;border-collapse:separate;" cellspacing="2" cellpadding="2"',CKEDITOR.env.ie&&CKEDITOR.env.quirks?' style="position:absolute;"':"","><tbody>"],d=l.length;for(i=0;i<d;i++){0==i%s&&o.push('<tr role="presentation">');var c="cke_smile_label_"+i+"_"+CKEDITOR.tools.getNextNumber();o.push('<td class="cke_dark_background cke_centered" style="vertical-align: middle;" role="presentation"><a href="javascript:void(0)" role="option"',' aria-posinset="'+(i+1)+'"',' aria-setsize="'+d+'"',' aria-labelledby="'+c+'"',' class="cke_smile cke_hand" tabindex="-1" onkeydown="CKEDITOR.tools.callFunction( ',r,', event, this );">','<img class="cke_hand" title="',a.smiley_descriptions[i],'" cke_src="',CKEDITOR.tools.htmlEncode(a.smiley_path+l[i]),'" alt="',a.smiley_descriptions[i],'"',' src="',CKEDITOR.tools.htmlEncode(a.smiley_path+l[i]),'"',CKEDITOR.env.ie?" onload=\"this.setAttribute('width', 2); this.removeAttribute('width');\" ":"",'><span id="'+c+'" class="cke_voice_label">'+a.smiley_descriptions[i]+"</span></a>","</td>"),i%s==s-1&&o.push("</tr>")}if(i<s-1){for(;i<s-1;i++)o.push("<td></td>");o.push("</tr>")}return o.push("</tbody></table></div>"),a={type:"html",id:"smileySelector",html:o.join(""),onLoad:function(e){t=e.sender},focus:function(){var e=this;setTimeout(function(){e.getElement().getElementsByTag("a").getItem(0).focus()},0)},onClick:n,style:"width: 100%; border-collapse: separate;"},{title:e.lang.smiley.title,minWidth:270,minHeight:120,contents:[{id:"tab1",label:"",title:"",expand:!0,padding:0,elements:[a]}],buttons:[CKEDITOR.dialog.cancelButton]}});