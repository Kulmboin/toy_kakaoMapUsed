const InputTable = (data, $dataTable) => {
  //   console.log(data);

  const $div = document.createElement("div");

  for (let i = 0; i < data.length; i++) {
    const $div = document.createElement("div");
    $div.innerHTML = `<table class=foodtable>
      <tr>
        <th align = "center" class= "nameTh">이름</th>
        <th align = "center" class= "adressTh">주소</th>
        <th align = "center" class= "phoneTh">전화번호</th>
        <th align = "center" class= "foodCate">음식 카테고리</th>
      </tr>
      <tr>
        <td align = "center">${data[i].place_name}</td>
        <td align = "center">${data[i].road_address_name}</td>
        <td align = "center"><a href='tel'>${data[i].phone}</a></td>
        <td align = "center">${data[i].category_name}</td>
      </tr>
    </table>`;
    $dataTable.append($div);
  }
};

export default InputTable;
