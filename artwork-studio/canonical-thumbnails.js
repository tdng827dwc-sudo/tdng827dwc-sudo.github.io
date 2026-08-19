/* Profabrix canonical thumbnails v1 — Board 2 locked source */
(function(){
  const BOARD="./assets/canonical-board-2.webp";
  const CROPS={"rapboot":[6.5,19.0,130.5,139.0],"sportsicon":[142.5,19.0,128.0,139.0],"popdiva":[274.0,19.0,125.5,139.0],"traplux":[403.0,19.0,126.5,139.0],"sportswear":[532.0,19.0,113.5,139.0],"fashion":[649.0,19.0,113.5,139.0],"neon":[6.5,187.0,130.5,131.0],"motorsport":[142.5,187.0,128.0,131.0],"comic":[274.0,187.0,125.5,131.0],"cyber":[403.0,187.0,126.5,131.0],"graffiti":[532.0,187.0,113.5,131.0],"y2k":[649.0,187.0,113.5,131.0],"watercolor":[6.5,354.5,130.5,128.5],"sketch":[142.5,354.5,128.0,128.5],"paintsplash":[274.0,354.5,125.5,128.5],"vector":[403.0,354.5,126.5,128.5],"halftone":[532.0,354.5,113.5,128.5],"clean":[649.0,354.5,113.5,128.5]};

  function canonicalThumb(key){
    const c=CROPS[key]||CROPS.neon;
    const [x,y,w,h]=c;
    return `<svg class="canonicalThumbSvg" viewBox="${x} ${y} ${w} ${h}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><image href="${BOARD}" x="0" y="0" width="768" height="512" preserveAspectRatio="none"/></svg>`;
  }

  window.CANONICAL_THUMBNAIL_CROPS=CROPS;
  window.thumbSVG=canonicalThumb;

  function refreshExisting(){
    document.querySelectorAll(".preset[data-profile]").forEach(el=>{
      el.querySelector("svg")?.remove();
      el.insertAdjacentHTML("afterbegin",canonicalThumb(el.dataset.profile));
    });
    if(typeof window.renderStyleLibrary==="function"){
      const search=document.getElementById("librarySearch");
      window.renderStyleLibrary(search ? search.value : "");
    }
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",refreshExisting,{once:true});
  } else {
    refreshExisting();
  }
})();
