(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{378:function(e,t,a){"use strict";a.r(t);var n=a(84),r=a.n(n),c=a(0),o=a.n(c),l=a(30),s=a(45),i=a.n(s),u=a(91),d=a.n(u),g=a(296),f=a.n(g),p=a(377),h=a.n(p);var m=function(e){var t=e.list,a=e.listItemClass,n=e.onListItemClick;return o.a.createElement(f.a,{className:"suggestion-list"},o.a.createElement(d.a,null,t.map((function(e){return o.a.createElement(h.a,{key:"Place ".concat(e.place_id),onClick:n(e),className:a,value:e.place_id,"data-role":"suggestion"},o.a.createElement(i.a,{noWrap:!0},e.description))}))))},v=function(e){var t=e.text,a=e.title,n=e.description;return o.a.createElement(d.a,{className:"info-container",elevation:1},a&&o.a.createElement(i.a,{className:"error-text",variant:"h6",component:"h3"},a),n&&o.a.createElement(i.a,{component:"p"},"Details: ",t))},S=a(13),b=a.n(S),E=a(14),y=a.n(E),x=a(90),C=a.n(x),P=a(17),A=a.n(P),B=a(15),L=a.n(B),T=a(16),k=a.n(T),w=a(7),D=a.n(w),N=a(110),R=a.n(N);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=k()(e);if(t){var r=k()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return L()(this,a)}}var O=function(e){A()(a,e);var t=j(a);function a(e){var n;return b()(this,a),n=t.call(this,e),D()(C()(n),"recordLastSubmittedValue",(function(e){n.setState({lastActionSubmittedValue:e})})),D()(C()(n),"handleChange",(function(e){var t=C()(n),a=t.props,r=a.onChange,c=a.onChangeAfterDelay,o=(c=void 0===c?{}:c).action,l=c.seconds,s=t.state,i=s.currentTimeoutObject,u=s.lastActionSubmittedValue,d=e&&e.target&&e.target.value;r(d),(d||""===d)&&(i&&clearTimeout(i),o&&l&&l>=0?n.setState({currentTimeoutObject:setTimeout((function(){d!==u&&(n.recordLastSubmittedValue(d),o(d))}),1e3*l)}):o(d))})),n.state={currentTimeoutObject:null,lastActionSubmittedValue:""},n.handleChange=n.handleChange.bind(C()(n)),n}return y()(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.placeholder,n=e.label,r=e.onBlur;return o.a.createElement("div",{className:"text-search-field"},o.a.createElement(R.a,{value:t,onChange:this.handleChange,fullWidth:!0,placeholder:a,label:n,onBlur:r,type:"search"}))}}]),a}(o.a.Component),V=a(127);t.default=Object(l.b)((function(e){var t=e.googleMapsApiReducer,a=e.searchBoxReducer,n=a.searchBoxSuggestedList,r=a.searchBoxSuggestedStoreUpdateTime,c=a.selectedPlace;return{googleMapsApiLoaded:t.loaded,searchBoxSuggestedList:n,searchBoxSuggestedStoreUpdateTime:r,selectedPlace:c}}),{requestSuggestionsPlacesStart:V.b,cleanSuggestions:V.a,selectSuggestionPlace:V.d})((function(e){var t=e.googleMapsApiLoaded,a=e.placeholder,n=e.label,l=e.searchBoxError,s=e.searchBoxSuggestedList,i=e.searchBoxSuggestedStoreUpdateTime,u=e.forInputValue,d=e.cleanSuggestions,g=e.selectSuggestionPlace,f=e.requestSuggestionsPlacesStart,p=e.selectedPlaceDescription,h=e.selectedPlace,S=Object(c.useState)(""),b=r()(S,2),E=b[0],y=b[1];Object(c.useEffect)((function(){h&&y(h.description)}),[h]);var x=!!i&&!s&&E===u;return o.a.createElement("span",{className:"search-container"},t&&o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{fullWidth:!0,placeholder:a,label:n,value:E,onChange:function(e){y(e),!e&&d()},onChangeAfterDelay:{action:function(e){e&&e!==p&&f(e)},seconds:.5},onBlur:function(e){var t=e.relatedTarget,a=t&&"function"==typeof t.getAttribute&&"suggestion"===t.getAttribute("data-role");s&&!a&&d()}}),l&&o.a.createElement(v,{title:"Problem with connect to Google API",description:"Details: ".concat(l),text:l,type:"error"}),x&&o.a.createElement(v,{title:"No places find for this query",text:"Please, check input value",type:"message"}),s&&o.a.createElement(m,{onListItemClick:function(e){return function(){g(e)}},list:s})))}))}}]);