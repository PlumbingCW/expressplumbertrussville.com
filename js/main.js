(function(){
  var t=document.getElementById("mob-toggle"),d=document.getElementById("mob-drawer"),o=document.getElementById("mob-overlay"),c=document.getElementById("drawer-close");
  function open(){d.removeAttribute("hidden");o.classList.add("visible");t.setAttribute("aria-expanded","true");t.setAttribute("aria-label","Close navigation menu");document.documentElement.style.overflow="hidden";}
  function close(){d.setAttribute("hidden","");o.classList.remove("visible");t.setAttribute("aria-expanded","false");t.setAttribute("aria-label","Open navigation menu");document.documentElement.style.overflow="";}
  if(t&&d&&o){
    t.addEventListener("click",function(){t.getAttribute("aria-expanded")==="true"?close():open();});
    if(c)c.addEventListener("click",close);
    o.addEventListener("click",close);
    d.querySelectorAll("a").forEach(function(a){a.addEventListener("click",close);});
    document.addEventListener("keydown",function(e){if(e.key==="Escape")close();});
    window.addEventListener("resize",function(){if(window.innerWidth>768)close();});
  }
  document.querySelectorAll(".dgroup-btn").forEach(function(b){
    b.addEventListener("click",function(){
      var p=document.getElementById(b.getAttribute("aria-controls"));
      var isOpen=b.getAttribute("aria-expanded")==="true";
      b.setAttribute("aria-expanded",isOpen?"false":"true");
      if(p){if(isOpen){p.setAttribute("hidden","");}else{p.removeAttribute("hidden");}}
    });
  });
  document.querySelectorAll(".faq-q").forEach(function(q){
    q.addEventListener("click",function(){
      var item=q.parentNode,isOpen=item.classList.contains("open");
      item.classList.toggle("open",!isOpen);
      q.setAttribute("aria-expanded",isOpen?"false":"true");
    });
  });
})();
