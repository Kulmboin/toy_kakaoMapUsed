const zoomIn = (map) => {
  // 현재 지도의 레벨을 얻어옵니다
  const level = map.getLevel();

  // 지도를 1레벨 내립니다 (지도가 확대됩니다)
  map.setLevel(level - 1);

  // 지도 레벨을 표시합니다
  //   displayLevel();
};

const zoomOut = (map) => {
  // 현재 지도의 레벨을 얻어옵니다
  const level = map.getLevel();

  // 지도를 1레벨 올립니다 (지도가 축소됩니다)
  map.setLevel(level + 1);

  // 지도 레벨을 표시합니다
  //   displayLevel();
};

const controllMap = (target, map) => {
  const text = target.innerHTML;

  //   displayLevel();

  if (text === "+1") zoomIn(map);
  else zoomOut(map);
};

const MapLevel = (target, mapContainer) => {
  target.addEventListener("click", () => {
    controllMap(target, mapContainer);
  });
};

export default MapLevel;
