import MapLevel from "./component/mapLevel.js";
import SearchBar from "./component/searchText.js";

const mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

const $map = new kakao.maps.Map(mapContainer, mapOption);

const $zoomInBtn = document.querySelectorAll(".mapControllBtn");

$zoomInBtn.forEach(($zoomInBtn) => {
  MapLevel($zoomInBtn, $map);
});

// 검색영역 및 테이블 표시
const $searchBar = document.querySelector(".searchBar");
const $dataTable = document.querySelector("#dataTable");
SearchBar($searchBar, $map, $dataTable);
