btnStartEl=document.querySelector("[data-start]"),btnStopEl=document.querySelector("[data-stop]"),bodyEl=document.querySelector("body");let t=null;btnStopEl.disabled=!0,btnStartEl.addEventListener("click",(function(e){e.preventDefault(),btnStartEl.disabled=!0,btnStopEl.disabled=!1,t=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;bodyEl.style.backgroundColor=t}),1e3)})),btnStopEl.addEventListener("click",(function(e){e.preventDefault(),clearInterval(t),btnStartEl.disabled=!1,btnStopEl.disabled=!0}));
//# sourceMappingURL=01-color-switcher.d870862a.js.map
