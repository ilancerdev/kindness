/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
!function(){function t(t){return t.type==CKEDITOR.NODE_TEXT&&0<t.getLength()&&(!a||!t.isReadOnly())}function e(t){return!(t.type==CKEDITOR.NODE_ELEMENT&&t.isBlockBoundary(CKEDITOR.tools.extend({},CKEDITOR.dtd.$empty,CKEDITOR.dtd.$nonEditable)))}var a,n=function(){return{textNode:this.textNode,offset:this.offset,character:this.textNode?this.textNode.getText().charAt(this.offset):null,hitMatchBoundary:this._.matchBoundary}},i=["find","replace"],h=[["txtFindFind","txtFindReplace"],["txtFindCaseChk","txtReplaceCaseChk"],["txtFindWordChk","txtReplaceWordChk"],["txtFindCyclic","txtReplaceCyclic"]];CKEDITOR.dialog.add("find",function(s){function r(a,n){var i=this,h=new CKEDITOR.dom.walker(a);h.guard=n?e:function(t){!e(t)&&(i._.matchBoundary=!0)},h.evaluator=t,h.breakOnFalse=1,a.startContainer.type==CKEDITOR.NODE_TEXT&&(this.textNode=a.startContainer,this.offset=a.startOffset-1),this._={matchWord:n,walker:h,matchBoundary:!1}}function l(t,e){var a=s.createRange();return a.setStart(t.textNode,e?t.offset:t.offset+1),a.setEndAt(s.editable(),CKEDITOR.POSITION_BEFORE_END),a}function c(t){var e=s.getSelection().getRanges()[0],a=s.editable();return e&&!t?(t=e.clone()).collapse(!0):(t=s.createRange()).setStartAt(a,CKEDITOR.POSITION_AFTER_START),t.setEndAt(a,CKEDITOR.POSITION_BEFORE_END),t}var o=new CKEDITOR.style(CKEDITOR.tools.extend({attributes:{"data-cke-highlight":1},fullMatch:1,ignoreReadonly:1,childRule:function(){return 0}},s.config.find_highlight,!0));r.prototype={next:function(){return this.move()},back:function(){return this.move(!0)},move:function(t){var e=this.textNode;if(null===e)return n.call(this);if(this._.matchBoundary=!1,e&&t&&0<this.offset)this.offset--;else if(e&&this.offset<e.getLength()-1)this.offset++;else{for(e=null;!(e||(e=this._.walker[t?"previous":"next"].call(this._.walker),this._.matchWord&&!e||this._.walker._.end)););this.offset=(this.textNode=e)&&t?e.getLength()-1:0}return n.call(this)}};var g=function(t,e){this._={walker:t,cursors:[],rangeLength:e,highlightRange:null,isMatched:0}};g.prototype={toDomRange:function(){var t=s.createRange(),e=this._.cursors;if(1>e.length){var a=this._.walker.textNode;if(!a)return null;t.setStartAfter(a)}else a=e[0],e=e[e.length-1],t.setStart(a.textNode,a.offset),t.setEnd(e.textNode,e.offset+1);return t},updateFromDomRange:function(t){var e=new r(t);this._.cursors=[];do{(t=e.next()).character&&this._.cursors.push(t)}while(t.character);this._.rangeLength=this._.cursors.length},setMatched:function(){this._.isMatched=!0},clearMatched:function(){this._.isMatched=!1},isMatched:function(){return this._.isMatched},highlight:function(){if(!(1>this._.cursors.length)){this._.highlightRange&&this.removeHighlight();var t=this.toDomRange(),e=t.createBookmark();o.applyToRange(t,s),t.moveToBookmark(e),this._.highlightRange=t,(e=t.startContainer).type!=CKEDITOR.NODE_ELEMENT&&(e=e.getParent()),e.scrollIntoView(),this.updateFromDomRange(t)}},removeHighlight:function(){if(this._.highlightRange){var t=this._.highlightRange.createBookmark();o.removeFromRange(this._.highlightRange,s),this._.highlightRange.moveToBookmark(t),this.updateFromDomRange(this._.highlightRange),this._.highlightRange=null}},isReadOnly:function(){return this._.highlightRange?this._.highlightRange.startContainer.isReadOnly():0},moveBack:function(){var t=this._.walker.back(),e=this._.cursors;return t.hitMatchBoundary&&(this._.cursors=e=[]),e.unshift(t),e.length>this._.rangeLength&&e.pop(),t},moveNext:function(){var t=this._.walker.next(),e=this._.cursors;return t.hitMatchBoundary&&(this._.cursors=e=[]),e.push(t),e.length>this._.rangeLength&&e.shift(),t},getEndCharacter:function(){var t=this._.cursors;return 1>t.length?null:t[t.length-1].character},getNextCharacterRange:function(t){var e,a;return a=(e=(a=this._.cursors)[a.length-1])&&e.textNode?new r(l(e)):this._.walker,new g(a,t)},getCursors:function(){return this._.cursors}};var d=function(t,e){var a=[-1];e&&(t=t.toLowerCase());for(var n=0;n<t.length;n++)for(a.push(a[n]+1);0<a[n+1]&&t.charAt(n)!=t.charAt(a[n+1]-1);)a[n+1]=a[a[n+1]-1]+1;this._={overlap:a,state:0,ignoreCase:!!e,pattern:t}};d.prototype={feedCharacter:function(t){for(this._.ignoreCase&&(t=t.toLowerCase());;){if(t==this._.pattern.charAt(this._.state))return this._.state++,this._.state==this._.pattern.length?(this._.state=0,2):1;if(!this._.state)return 0;this._.state=this._.overlap[this._.state]}},reset:function(){this._.state=0}};var u=/[.,"'?!;: \u0085\u00a0\u1680\u280e\u2028\u2029\u202f\u205f\u3000]/,f=function(t){if(!t)return!0;var e=t.charCodeAt(0);return 9<=e&&13>=e||8192<=e&&8202>=e||u.test(t)},R={searchRange:null,matchRange:null,find:function(t,e,a,n,i,h){this.matchRange?(this.matchRange.removeHighlight(),this.matchRange=this.matchRange.getNextCharacterRange(t.length)):this.matchRange=new g(new r(this.searchRange),t.length);for(var o=new d(t,!e),u=0,R="%";null!==R;){for(this.matchRange.moveNext();(R=this.matchRange.getEndCharacter())&&2!=(u=o.feedCharacter(R));)this.matchRange.moveNext().hitMatchBoundary&&o.reset();if(2==u){if(a){var p=(m=this.matchRange.getCursors())[m.length-1],m=m[0],C=s.createRange();if(C.setStartAt(s.editable(),CKEDITOR.POSITION_AFTER_START),C.setEnd(m.textNode,m.offset),m=C,p=l(p),m.trim(),p.trim(),m=new r(m,!0),p=new r(p,!0),!f(m.back().character)||!f(p.next().character))continue}return this.matchRange.setMatched(),!1!==i&&this.matchRange.highlight(),!0}}return this.matchRange.clearMatched(),this.matchRange.removeHighlight(),!(!n||h)&&(this.searchRange=c(1),this.matchRange=null,arguments.callee.apply(this,Array.prototype.slice.call(arguments).concat([!0])))},replaceCounter:0,replace:function(t,e,n,i,h,r,l){if(a=1,t=0,t=this.hasMatchOptionsChanged(e,i,h),!this.matchRange||!this.matchRange.isMatched()||this.matchRange._.isReplaced||this.matchRange.isReadOnly()||t)t&&this.matchRange&&(this.matchRange.clearMatched(),this.matchRange.removeHighlight(),this.matchRange=null),t=this.find(e,i,h,r,!l);else{if(this.matchRange.removeHighlight(),e=this.matchRange.toDomRange(),n=s.document.createText(n),!l){var c=s.getSelection();c.selectRanges([e]),s.fire("saveSnapshot")}e.deleteContents(),e.insertNode(n),l||(c.selectRanges([e]),s.fire("saveSnapshot")),this.matchRange.updateFromDomRange(e),l||this.matchRange.highlight(),this.matchRange._.isReplaced=!0,this.replaceCounter++,t=1}return a=0,t},matchOptions:null,hasMatchOptionsChanged:function(t,e,a){return t=[t,e,a].join("."),e=this.matchOptions&&this.matchOptions!=t,this.matchOptions=t,e}},p=s.lang.find;return{title:p.title,resizable:CKEDITOR.DIALOG_RESIZE_NONE,minWidth:350,minHeight:170,buttons:[CKEDITOR.dialog.cancelButton(s,{label:s.lang.common.close})],contents:[{id:"find",label:p.find,title:p.find,accessKey:"",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindFind",label:p.findWhat,isChanged:!1,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFind",align:"left",style:"width:100%",label:p.find,onClick:function(){var t=this.getDialog();R.find(t.getValueOf("find","txtFindFind"),t.getValueOf("find","txtFindCaseChk"),t.getValueOf("find","txtFindWordChk"),t.getValueOf("find","txtFindCyclic"))||alert(p.notFoundMsg)}}]},{type:"fieldset",className:"cke_dialog_find_fieldset",label:CKEDITOR.tools.htmlEncode(p.findOptions),style:"margin-top:29px",children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtFindCaseChk",isChanged:!1,label:p.matchCase},{type:"checkbox",id:"txtFindWordChk",isChanged:!1,label:p.matchWord},{type:"checkbox",id:"txtFindCyclic",isChanged:!1,"default":!0,label:p.matchCyclic}]}]}]},{id:"replace",label:p.replace,accessKey:"M",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindReplace",label:p.findWhat,isChanged:!1,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFindReplace",align:"left",style:"width:100%",label:p.replace,onClick:function(){var t=this.getDialog();R.replace(t,t.getValueOf("replace","txtFindReplace"),t.getValueOf("replace","txtReplace"),t.getValueOf("replace","txtReplaceCaseChk"),t.getValueOf("replace","txtReplaceWordChk"),t.getValueOf("replace","txtReplaceCyclic"))||alert(p.notFoundMsg)}}]},{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtReplace",label:p.replaceWith,isChanged:!1,labelLayout:"horizontal",accessKey:"R"},{type:"button",id:"btnReplaceAll",align:"left",style:"width:100%",label:p.replaceAll,isChanged:!1,onClick:function(){var t=this.getDialog();for(R.replaceCounter=0,R.searchRange=c(1),R.matchRange&&(R.matchRange.removeHighlight(),R.matchRange=null),s.fire("saveSnapshot");R.replace(t,t.getValueOf("replace","txtFindReplace"),t.getValueOf("replace","txtReplace"),t.getValueOf("replace","txtReplaceCaseChk"),t.getValueOf("replace","txtReplaceWordChk"),!1,!0););R.replaceCounter?(alert(p.replaceSuccessMsg.replace(/%1/,R.replaceCounter)),s.fire("saveSnapshot")):alert(p.notFoundMsg)}}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(p.findOptions),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtReplaceCaseChk",isChanged:!1,label:p.matchCase},{type:"checkbox",id:"txtReplaceWordChk",isChanged:!1,label:p.matchWord},{type:"checkbox",id:"txtReplaceCyclic",isChanged:!1,"default":!0,label:p.matchCyclic}]}]}]}],onLoad:function(){var t,e=this,a=0;this.on("hide",function(){a=0}),this.on("show",function(){a=1}),this.selectPage=CKEDITOR.tools.override(this.selectPage,function(n){return function(s){n.call(e,s);var r,l=e._.tabs[s];if(r="find"===s?"txtFindWordChk":"txtReplaceWordChk",t=e.getContentElement(s,"find"===s?"txtFindFind":"txtFindReplace"),e.getContentElement(s,r),l.initialized||(CKEDITOR.document.getById(t._.inputId),l.initialized=!0),a){l=1-(s="find"===s?1:0);var c,o=h.length;for(c=0;c<o;c++)r=this.getContentElement(i[s],h[c][s]),this.getContentElement(i[l],h[c][l]).setValue(r.getValue())}}})},onShow:function(){R.searchRange=c();var t=this._.currentTabId,e=this.getParentEditor().getSelection().getSelectedText(),a=this.getContentElement(t,"find"==t?"txtFindFind":"txtFindReplace");a.setValue(e),a.select(),this[("find"==t&&this._.editor.readOnly?"hide":"show")+"Page"]("replace")},onHide:function(){var t;R.matchRange&&R.matchRange.isMatched()&&(R.matchRange.removeHighlight(),(t=R.matchRange.toDomRange())&&s.getSelection().selectRanges([t]),s.focus()),delete R.matchRange},onFocus:function(){return"replace"==this._.currentTabId?this.getContentElement("replace","txtFindReplace"):this.getContentElement("find","txtFindFind")}}})}();