import InputTable from "./inputTable.js";

const SearchBar = (target, map, $dataTable) => {
  let inputValue;

  target.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      //   event.preventDefault();
      inputValue = target.value;

      const displayMarker = (place) => {
        const infowindow = new kakao.maps.InfoWindow({
          zIndex: 1,
        });

        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        kakao.maps.event.addListener(marker, "click", function () {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              "</div>"
          );
          infowindow.open(map, marker);
          //   console.log(infowindow.getContent());
        });
      };

      const placesSearchCB = (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();

          //   배열 초기화
          for (var i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          InputTable(data, $dataTable);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      };

      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(inputValue, placesSearchCB);
    }
  });
};

export default SearchBar;
