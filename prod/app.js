/*
Copyright (c) [year] Not Another™ (https://www.na.studio)

This code is part of the Praas project (https://praas.co.nz).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and
to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be preserved in
all copies or substantial portions of the Software.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS
OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
OF THE POSSIBILITY OF SUCH DAMAGE.

**IMPORTANT NOTICE**

You may not remove or modify any copyright notices or authorship attributions
(i.e., "written by" or "made by" statements) from this code.
*/

$(document).ready(function(){$("[data-anchor-scroll]").length&&(console.log("anchor scroll is present"),$("[data-anchor-scroll]").each(function(){let e=$(this),t=e.attr("href");e.data("target",t).attr("href","");let a=$("#top-bar-wrapper").outerHeight(),i=$(t).offset().top-(a+a/2);e.data("scrollPosition",i)}),$("[data-anchor-scroll]").click(function(e){e.preventDefault();let t=$(this).data("scrollPosition");$("html, body").animate({scrollTop:t},800)}),$(window).resize(function(){$("[data-anchor-scroll]").each(function(){let e=$(this),t=e.data("target"),a=$("#top-bar-wrapper").outerHeight(),i=$(t).offset().top-(a+a/2);e.data("scrollPosition",i)})}));let e=window.location.hash;e&&function e(t){let a=$("#top-bar-wrapper").outerHeight(),i=$(t);if(i.length){let o=i.offset().top-(a+a/2);$("html, body").animate({scrollTop:o},800)}}(e)}),$(document).ready(function(){$(".dropdown-wrapper").length&&(console.log("dropdown is present"),$("[data-dropdown-item]").each(function(){var e=$(this).find("[data-dropdown-trigger]").outerHeight();if($(this).css("height",e),"true"===$(this).attr("data-dropdown-expand")){var t=$(this).find("[data-dropdown-result]"),a=$(this).find("[data-dropdown-trigger]").find("[data-dropdown-icon]");$(this).addClass("expanded");var i=t.outerHeight()+$(this).find("[data-dropdown-trigger]").outerHeight();$(this).css("height",i),a.addClass("opened")}}),$("[data-dropdown-trigger]").click(function(){var e=$(this).closest("[data-dropdown-item]"),t=e.find("[data-dropdown-result]"),a=$(this).find("[data-dropdown-icon]");if(e.hasClass("expanded"))e.removeClass("expanded"),e.css("height",e.find("[data-dropdown-trigger]").outerHeight()),a.removeClass("opened");else{$("[data-dropdown-item].expanded").each(function(){$(this).removeClass("expanded"),$(this).css("height",$(this).find("[data-dropdown-trigger]").outerHeight()),$(this).find("[data-dropdown-icon]").removeClass("opened")}),e.addClass("expanded");var i=t.outerHeight()+$(this).outerHeight();e.css("height",i),a.addClass("opened")}}))}),$(document).ready(function(){if($("#footer-wrapper").length){console.log("footer is present");let e=new Date().getFullYear(),t=$("#copyright-text"),a=t.text();function i(){(function e(){let t=768>=$(window).width(),a=/Mobi|Android/i.test(navigator.userAgent)&&t;return console.log(`User Agent Mobile: ${a}, Window Width Mobile: ${t}, Window Width: ${$(window).width()}`),a||t})()?(console.log("mobile"),t.text(`Copyright ${e} \xa9`)):(console.log("desktop"),t.text(a.replace(/\b\d{4}\b/,e)))}i(),$(window).resize(i),$("#by-na").css({opacity:"100%","pointer-events":"auto"}),0===$("#footer-linkedin, #footer-instagram, #footer-twitter, #footer-youtube").length&&$("#footer-social-links").hide();let o=$("#footer-wrapper a.title8").not(".footer-bottom a.title8"),n=$("#footer-wrapper a.title9").not(".footer-bottom a.title9"),s=$("#footer-wrapper a.footer-social-link").not(".footer-bottom a.footer-social-link");o.hover(function(){o.not(this).css("opacity","0.35")},function(){o.css("opacity","1")}),n.hover(function(){n.not(this).css("opacity","0.35")},function(){n.css("opacity","1")}),s.hover(function(){s.not(this).css("opacity","0.35")},function(){s.css("opacity","1")})}}),$(document).ready(function(){if($(".contact-form").length){console.log("contact form is present");var e=setInterval(function t(){var a=$(".select2-search__field");a.length&&(a.attr("placeholder","Choose your interests"),clearInterval(e))},100);let t=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Congo-Brazzaville)","Costa Rica","Croatia","Cuba","Cyprus","Czechia (Czech Republic)","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini (fmr. Swaziland)","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (formerly Burma)","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine State","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe",];$("select[data-form-country]").each(function(){let e=$(this);e.empty().append(new Option("Select your country","",!0,!0)).prop("disabled",!0),t.forEach(t=>{e.append(new Option(t,t))}),e.prop("disabled",!1),$.get("https://ipapi.co/json/",function(a){let i=a.country_name;if(i){let o=t.find(e=>e.toLowerCase()===i.toLowerCase());o&&e.val(o)}})});document.querySelectorAll("[data-first-option-hidden='true']").forEach(e=>{e.getElementsByTagName("option")[0].hidden=!0}),$(document).on("keypress","[data-form-no-number]",function(e){/\d/.test(e.key)&&e.preventDefault()}),$(document).on("keypress","[data-form-email]",function(e){/[\s<>()\[\]\\,;:"]/.test(e.key)&&e.preventDefault()}),$("#cp-submit").click(function(){$("#cf-submit").click()}),$('input[data-form-success-pull="user-name"]').on("input",function(){var e=$(this).val();sessionStorage.setItem("userName",e)})}$(document).ready(function(){if($("#form-success-section").length){if(sessionStorage.getItem("pageHistory")&&sessionStorage.getItem("userName")){$("#form-success-section").css({opacity:"1"});for(var e=sessionStorage.getItem("pageHistory"),t=sessionStorage.getItem("userName"),a=JSON.parse(e),i=a.length-1;i>0&&("Contact"==a[i].name||"Form Success"==a[i].name);)i--;var o=a[i],n=o.name,s=o.url;$("[data-form-success-push='page-name']").text("Go back to "+n).attr("href",s),$("[data-form-success-push='user-name']").text("Hey "+t+", your submission has been sent successfully."),setTimeout(function(){sessionStorage.removeItem("userName")},500)}else $("#form-success-section").css({opacity:"0"}),window.location.href="/contact"}})}),$(document).ready(function(){$("[data-contact-form]").length&&(console.log("form popup buttons are present"),$("[data-contact-form]").click(function(){window.innerWidth<768?$("#popup-on").click():window.location.href="/contact"}))}),$(document).ready(function(){if($("#home-hero").length){console.log("home hero is present");var e=["https://player.vimeo.com/progressive_redirect/playback/965933185/rendition/1080p/file.mp4?loc=external&signature=f7dd045397e05b2ca1ef33390fa438a048a21a6e18d77e1de526f03a1665a236","https://player.vimeo.com/progressive_redirect/playback/965933256/rendition/1080p/file.mp4?loc=external&signature=41c4f24fd1d84d1f309858da8e14e2918ea0e41f501bdfb9a6c27131f51faac4","https://player.vimeo.com/progressive_redirect/playback/965933102/rendition/1080p/file.mp4?loc=external&signature=6387185d09434f77b7de5972bce04225da80f2c6d400da9832c3b9c7363cfe27",],t=0,a=e.length,i=$(".hero-video-wrapper"),o=$("<video>",{id:"header-video",class:"video-sync",playsinline:"",loop:"",muted:"muted",autoplay:"autoplay","data-wf-ignore":"true","data-object-fit":"cover",style:"width: 100%; height: 100%; position: absolute; top: 0; left: 0; object-fit: cover;"}).append($("<source>",{src:"","data-wf-ignore":"true"})),n=[];i.append(o);var s=$(".home-hero-index-wrapper .title7"),r=$(".home-hero-progress-bar");function l(){var e=o[0].play();void 0!==e&&e.catch(function(e){console.log("Autoplay prevented:",e),o.prop("muted",!0),o[0].play()})}function d(){768>=$(window).width()?(r.stop(!0,!0).css("width","0%"),r.animate({width:"100%"},1e4)):(r.stop(!0,!0).css("height","0%"),r.animate({height:"100%"},1e4))}function c(){t=(t+1)%n.length,o.find("source").attr("src",n[t]),o[0].load(),l(),s.text(t+1+" / "+a),d(),setTimeout(c,1e4)}i.css({position:"relative",overflow:"hidden"}),o.on("loadeddata",function(){i.find("img").remove()}),Promise.all(e.map(function(e){return fetch(e).then(e=>e.blob()).then(e=>URL.createObjectURL(e))})).then(function(e){n=e,o.find("source").attr("src",n[t]),o[0].load(),l(),s.text(t+1+" / "+a),d(),setTimeout(c,1e4)})}}),$(document).ready(function(){if($(".marquee-wrapper").length){console.log("marquee is present");let e=document.querySelectorAll('[data-marquee="true"]');e.forEach((e,t)=>{let a=e.getAttribute("data-marquee-speed")||15,i=e.getAttribute("data-marquee-direction")||"left";e.setAttribute("data-marquee",t);let o=e.scrollWidth,n=e.parentNode.clientWidth,s=Math.ceil(n/o)+1;console.log(`Number of clones created for marquee ${t}: ${s}`);for(let r=0;r<s;r++){let l=e.cloneNode(!0);l.setAttribute("data-marquee",t),l.removeAttribute("id"),e.parentNode.appendChild(l)}let d="left"===i?`@keyframes marquee${t} {
             0% { transform: translateX(0); }
             100% { transform: translateX(-${100*s}%); }
           }`:`@keyframes marquee${t} {
             0% { transform: translateX(-${100*s}%); }
             100% { transform: translateX(0); }
           }`,c=document.createElement("style");c.innerHTML=`
      ${d}
      [data-marquee="${t}"] {
        animation: marquee${t} ${a*s}s linear infinite;
      }
    `,document.head.appendChild(c),"right"===i&&(e.style.transform=`translateX(-${100*s}%)`)})}}),history.scrollRestoration="manual",$(window).on("beforeunload",function(){$(window).scrollTop(0)}),$(document).ready(function(){if($("#nav-wrapper").length){if(window.innerWidth>=992){let e=$("[data-nav-expand-trigger]"),t=$("#expanded-nav-wrapper"),a=$(".full-screen-overlay"),i=!1,o=!1,n=!1;function s(){n=!0,e.removeClass("hovered"),t.stop(!0,!0).animate({marginTop:"-100vh",opacity:"0"},250,"easeInQuart"),a.stop(!0,!0).animate({opacity:"0"},250,"easeInOutQuad",function(){a.css({display:"none"}),t.css({display:"none"}),n=!1})}e.on("mouseenter",function(){n||(i=!0,n=!0,e.addClass("hovered"),a.stop(!0,!0).css({display:"block"}).animate({opacity:"1"},250,"easeInOutQuad"),t.stop(!0,!0).css({display:"flex"}).animate({opacity:"1",marginTop:"0"},500,"easeOutQuart",function(){n=!1}))}),e.on("mouseleave",function(){o||(i=!1,setTimeout(function(){i||o||n||s()},100))}),t.on("mouseenter",function(){o=!0}),t.on("mouseleave",function(){o=!1,setTimeout(function(){i||o||n||s()},100)}),$(".nav-menu-card").each(function(){$(this).find(".title8[data-menu-card-details]").css({opacity:"0",visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",width:"100%"}),$(this).find(".title8[data-menu-card-title]").css({width:"65%",transition:"opacity 0.2s ease, visibility 0.2s ease",position:"absolute"})}),$(".nav-menu-card").hover(function(){$(this).find(".title8[data-menu-card-title]").css({opacity:"0",visibility:"hidden"}),$(this).find(".title8[data-menu-card-details]").css({opacity:"1",visibility:"visible"})},function(){$(this).find(".title8[data-menu-card-title]").css({opacity:"1",visibility:"visible"}),$(this).find(".title8[data-menu-card-details]").css({opacity:"0",visibility:"hidden"})})}if("Home"===$("body").attr("data-page-name")){let r=$("#top-bar-wrapper"),l=$("#nav-logo-white"),d=$("#nav-logo-black"),c=r.find(".title8"),h=r.find(".button1"),p=$("#nav-lottie-black"),u=$("#nav-lottie-white");r.addClass("transparent"),l.removeClass("hide"),d.addClass("hide"),c.addClass("white"),h.addClass("transparent"),p.addClass("hide"),u.removeClass("hide"),$(window).scroll(function(){$(window).scrollTop()>1&&!r.hasClass("mobile-nav-open")?(r.removeClass("transparent"),d.removeClass("hide"),l.addClass("hide"),c.removeClass("white"),h.removeClass("transparent"),p.removeClass("hide"),u.addClass("hide")):1>=$(window).scrollTop()&&!r.hasClass("mobile-nav-open")&&(r.addClass("transparent"),l.removeClass("hide"),d.addClass("hide"),c.addClass("white"),h.addClass("transparent"),p.addClass("hide"),u.removeClass("hide"))}),$(".nav-wrapper").hover(function(){r.hasClass("mobile-nav-open")||(r.removeClass("transparent"),d.removeClass("hide"),l.addClass("hide"),c.removeClass("white"),h.removeClass("transparent"),p.removeClass("hide"),u.addClass("hide"))}),$(".mobile-nav-trigger").click(function(){r.hasClass("mobile-nav-open")?r.removeClass("mobile-nav-open"):(r.addClass("mobile-nav-open"),r.removeClass("transparent"),d.removeClass("hide"),l.addClass("hide"),c.removeClass("white"),h.removeClass("transparent"),p.removeClass("hide"),u.addClass("hide"))})}}}),$(document).ready(function(){var e=$("body").attr("data-page-name"),t=window.location.href;if(e){var a=sessionStorage.getItem("pageHistory");(a=a?JSON.parse(a):[]).push({name:e,url:t}),sessionStorage.setItem("pageHistory",JSON.stringify(a))}}),$(document).ready(function(){if($(".solution-sub-service-wrapper").length){function e(){let e=$(window).width()>768,t=!/Mobi|Android/i.test(navigator.userAgent)||e;return console.log(`User Agent Desktop: ${t}, Window Width Desktop: ${e}, Window Width: ${$(window).width()}`),t&&e}console.log("solution sub-service is present"),setTimeout(function(){if(e()&&($(".top-bar-wrapper-height").css("min-height",$("#top-bar-wrapper").outerHeight()),$(window).resize(function(){e()&&$(".top-bar-wrapper-height").css("min-height",$("#top-bar-wrapper").outerHeight())}),console.log("Top bar wrapper = "+$("#top-bar-wrapper").outerHeight()),console.log("Top bar wrapper height = "+$(".top-bar-wrapper-height").outerHeight())),e()){let t=$(".solution-sub-service-content"),a=[];t.each(function(e){let t=$(this).attr("id");a.push(t)});let i=$(".solution-sub-service-img-wrapper"),o=[];i.each(function(e){$(this).attr("id",`solution-sub-service-img-wrapper-${e}`),o.push(`solution-sub-service-img-wrapper-${e}`)}),o.forEach((e,t)=>{0!==t&&$(`#${e}`).hide()});let n=$(".table-of-contents-item.second"),s=[];n.each(function(e){s.push($(this))});let r=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let t=a.indexOf(e.target.id);o.forEach((e,a)=>{a===t?$(`#${e}`).show():$(`#${e}`).hide()}),n.removeClass("active"),-1!==t&&s[t].addClass("active");let i=$(".table-of-contents.animated");i.find(".table-of-contents-close").hasClass("minimized")&&(i.find(".table-of-contents-item").hide(),-1!==t&&s[t].show())}})},{threshold:.8});t.each(function(){r.observe(this)}),$(".table-of-contents.animated").on("click",".table-of-contents-close",function(){let e=$(this).closest(".table-of-contents.animated").find(".table-of-contents-item");e.not(".active").is(":visible")?(e.not(".active").hide(),$(this).addClass("minimized")):(e.show(),$(this).removeClass("minimized"))})}if(e()){let l=$(".toc-hero"),d=$("#about-us-wrapper");function c(){let e=d.offset().top,t=$(window).scrollTop(),a=$(window).height();t+a<e?l.removeClass("animate-hide-right animate-hide-bottom"):l.hasClass("animate-hide-bottom")||(l.addClass("animate-hide-right"),setTimeout(()=>{l.removeClass("animate-hide-right"),l.addClass("animate-hide-bottom")},800))}$(window).on("scroll",c),c()}},1e3)}}),$(document).ready(function(){if($(".spotlight-wrapper").length){function e(){let e=$(window).width()>1024,t=!/Mobi|Android/i.test(navigator.userAgent)||e;return console.log(`User Agent Desktop: ${t}, Window Width Desktop: ${e}, Window Width: ${$(window).width()}`),t&&e}if(console.log("spotlight is present"),setTimeout(function(){e()&&$(".top-bar-wrapper-height").css("min-height",$("#top-bar-wrapper").outerHeight()),$(window).resize(function(){e()&&$(".top-bar-wrapper-height").css("min-height",$("#top-bar-wrapper").outerHeight())}),console.log("Top bar wrapper = "+$("#top-bar-wrapper").outerHeight()),console.log("Top bar wrapper height = "+$(".top-bar-wrapper-height").outerHeight())},1e3),e()){let t=$(".spotlight-track"),a=t.length;console.log(`Number of .spotlight-track elements: ${a}`),t.each(function(e){0!==e&&$(this).hide()});let i=t.first().css("min-height"),o=i.match(/(\d+)dvh/),n=o?parseInt(o[1],10):175,s=n*a,r=t.first();r.css("height",`${s}dvh`),console.log(`Original height of first .spotlight-track: ${n}dvh`),console.log(`New height of first .spotlight-track: ${s}dvh`);let l=[],d=[];t.each(function(){$(this).find(".spotlight .full-img-cover").each(function(){l.push($(this))}),$(this).find(".spotlight .spotlight-details").each(function(){d.push($(this))})}),console.log("Stored spotlight images:",l),console.log("Stored spotlight details:",d);let c=0;$(window).scroll(function(){let e=$(window).scrollTop(),t=r.offset().top,a=$(window).height(),i=Math.floor((e-t)/(n*a/100));if(i!==c&&i>=0&&i<l.length){let o=l[i],s=d[i],h=r.find(".spotlight-bg"),p=r.find(".spotlight-details");h.find(".full-img-cover").fadeOut(250,function(){$(this).remove(),h.append(o.clone().hide()),h.find(".full-img-cover").fadeIn(250)}),p.fadeOut(250,function(){$(this).replaceWith(s.clone().hide()),r.find(".spotlight-details").fadeIn(250)}),c=i}})}}}),$(document).ready(function(){let e=()=>.35*$(window).height(),t=()=>.05*$(window).height();function a(){return $(window).width()>=1024}function i(){a()&&$(".stacking-module-card").each(function(){let a=$(this),i=a.offset().top-$(window).scrollTop();i<=e()&&i>t()?a.addClass("active"):a.removeClass("active")})}$(".stacking-module-card").first().addClass("active"),a()&&i(),$(window).on("scroll",function(){a()&&i()}),$(window).on("resize",function(){a()&&i()})}),$(document).ready(function(){$("#team-1-img-true").length&&$("#team-1-img-false").remove(),$("#team-2-img-true").length&&$("#team-2-img-false").remove(),$(".team-list-img").removeClass("opened"),$("#team-wrapper").length&&(console.log("team is present"),$(".team-list-item").each(function(){var e=$(this).find(".team-list-trigger").outerHeight();$(this).css("height",e)}),$(".team-list-trigger").click(function(){var e=$(this).closest(".team-list-item"),t=e.find(".team-list-result"),a=$(this).find(".dropdown-icon"),i=e.find(".team-list-img"),o=$(this).find(".team-list-icon");if(e.hasClass("expanded"))e.removeClass("expanded"),e.css("height",e.find(".team-list-trigger").outerHeight()),a.removeClass("opened"),i.removeClass("opened"),o.css("opacity",1);else{$(window).width()>768&&$(".team-list-item.expanded").each(function(){$(this).removeClass("expanded"),$(this).css("height",$(this).find(".team-list-trigger").outerHeight()),$(this).find(".dropdown-icon").removeClass("opened"),$(this).find(".team-list-img").removeClass("opened"),$(this).find(".team-list-icon").css("opacity",1)}),e.addClass("expanded");var n=t.outerHeight()+$(this).outerHeight();e.css("height",n),a.addClass("opened"),i.addClass("opened"),o.css("opacity",0)}}))}),$(document).ready(function(){if($("#testimonial-slider").length>0){var e;function t(){e&&clearInterval(e),e=setInterval(function(){$("#testimonial-slider-next-proxy").click()},7e3)}$("[data-testimonial-quote=true]").each(function(){var e=$(this).text();if(e.length>140){var t=e.substring(0,140);(t=t.substring(0,Math.min(t.length,t.lastIndexOf(" ")))).length<e.length&&("."!==t.charAt(t.length-1)?t+="...":t=t.substring(0,t.length-1)+"..."),$(this).text(t)}}),$("#testimonial-slider-next").hide(),$("#testimonial-slider-prev").hide(),$("#testimonial-slider-next-proxy").click(function(){$("#testimonial-slider-next").click()}),$("#testimonial-slider-prev-proxy").click(function(){$("#testimonial-slider-prev").click(),$("#testimonial-slider-prev").click(),$("#testimonial-slider-next-proxy").click()}),t(),$("#testimonial-slider-next-proxy, #testimonial-slider-prev-proxy").on("click",function(){t()}),$("#testimonial-slider-next-proxy").click()}});