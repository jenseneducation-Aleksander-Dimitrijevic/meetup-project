(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b0475b4"],{"7db0":function(e,t,n){"use strict";var i=n("23e7"),s=n("b727").find,a=n("44d2"),r=n("ae40"),o="find",d=!0,l=r(o);o in[]&&Array(1)[o]((function(){d=!1})),i({target:"Array",proto:!0,forced:d||!l},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),a(o)},c81d:function(e,t,n){},d22a:function(e,t,n){"use strict";var i=n("c81d"),s=n.n(i);s.a},d3dc:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.event?n("div",{staticClass:"event-container flex"},[n("section",[n("h1",{staticClass:"title"},[e._v("Event: "+e._s(e.event.eventTitle))]),n("img",{attrs:{src:e.event.imgUrl,alt:"event image"}})]),n("section",[n("span",{staticClass:"btn-back",on:{click:function(t){return e.$store.commit("DISABLE_BACKDROP")}}},[e._v("×")]),n("h1",{staticClass:"date"},[n("span",{staticClass:"lnr lnr-calendar-full"}),e._v(" - "+e._s(e._f("moment")(e.event.eventDate,"dddd, MMMM Do YYYY"))+" ")]),n("p",{staticClass:"description"},[e._v(e._s(e.event.eventDescription))]),n("p",{staticClass:"attendees"},[n("span",{staticClass:"lnr lnr-users"}),e._v(" "+e._s(e.isAttended?e.event.attendees+1:e.event.attendees)+" "),n("button",{staticClass:"btn-attend",style:[e.isAttended?{background:"red"}:{background:"#00796b"}],on:{click:e.attendToEvent}},[e._v(" "+e._s(e.isAttended?"Leave":"Attend")+" ")])]),n("form",{on:{submit:function(t){return t.preventDefault(),e.createReview(t)}}},[n("h2",[e._v("Review")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.title,expression:"input.title"}],attrs:{required:"",type:"text",placeholder:"Title",id:"title"},domProps:{value:e.input.title},on:{input:function(t){t.target.composing||e.$set(e.input,"title",t.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.input.message,expression:"input.message"}],attrs:{required:"",placeholder:"What did you like/dislike about this event?"},domProps:{value:e.input.message},on:{input:function(t){t.target.composing||e.$set(e.input,"message",t.target.value)}}}),n("button",[e._v("Send")])]),n("ul",{ref:"review",staticClass:"review-container"},e._l(e.showCurrentReview(e.event.id),(function(t,i){return n("li",{key:i,staticClass:"review-item"},[n("h1",[e._v(e._s(t.review.title))]),n("p",[e._v(e._s(t.review.message))]),n("span",{staticClass:"review-date"},[e._v(e._s(e._f("moment")(t.date,"dddd, MMMM Do YYYY, HH:mm:ss")))])])})),0)])]):e._e()},s=[],a=(n("7db0"),n("5530")),r=n("2f62"),o={name:"Event",data:function(){return{input:{title:null,message:null}}},props:{event:Object},methods:{attendToEvent:function(){this.$store.getters.loggedIn?this.$store.commit("SET_EVENT_DATA",this.event):alert("Please log in to attend to event")},createReview:function(){var e=this;if(!this.$store.getters.loggedIn)return alert("Please log in to attend to event"),void(this.input="");this.$store.commit("SET_EVENT_REVIEW",{review:this.input,id:this.event.id,date:new Date}),this.input={},this.$nextTick((function(){e.$refs.review.scrollIntoView()}))}},computed:Object(a["a"])({isAttended:function(){var e=this;return this.$store.state.eventList.find((function(t){return t.id===e.event.id}))}},Object(r["b"])(["showCurrentReview"]))},d=o,l=(n("d22a"),n("2877")),c=Object(l["a"])(d,i,s,!1,null,"65955636",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-0b0475b4.79aa55e5.js.map