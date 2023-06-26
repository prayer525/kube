const Index = () => {
  return (
    <div style={{padding: '20px'}}>
      <table className="tbl-publishing-list">
        <caption>파일구조</caption>
        <colgroup>
          <col style={{width: '14%'}}/>
          <col style={{width: '14%'}}/>
          <col style={{width: '14%'}}/>
          <col style={{width: '22%'}}/>
          <col style={{width: 'auto'}}/>
          <col style={{width: '10%'}}/>
        </colgroup>
        <thead>
        <tr>
          <th>Depth 1</th>
          <th>Depth 2</th>
          <th>Depth 3</th>
          <th>파일위치</th>
          <th>비고</th>
          <th>Link</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th rowSpan={11}>가상머신</th>
          <th>목록</th>
          <th></th>
          <td>./page/vm/List.js</td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="/vm/list" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th rowspan={4}>가상머신 상세</th>
          <th>상태</th>
          <td>./page/vm/detail/Status.js</td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="/vm/detail/status" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>구성정보</th>
          <td>./page/vm/detail/Composition.js</td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="/vm/detail/composition" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>모니터링</th>
          <td>./page/vm/detail/Monitoring.js</td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="/vm/detail/monitoring" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>이벤트</th>
          <td>./page/vm/detail/Event.js</td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="/vm/detail/event" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th rowSpan={4}>가상머신 생성</th>
          <th>기본설정 - 이미지</th>
          <td>./page/vm/create/CommonImage.js</td>
          <td>Popup</td>
          <td style={{textAlign: 'center'}}><a href="/vm/create/common-image" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>기본설정 - 부트 볼륨</th>
          <td>./page/vm/create/CommonBoot.js</td>
          <td>Popup</td>
          <td style={{textAlign: 'center'}}><a href="/vm/create/common-boot" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>네트워크</th>
          <td>./page/vm/create/Network.js</td>
          <td>Popup</td>
          <td style={{textAlign: 'center'}}><a href="/vm/create/network" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>세부설정</th>
          <td>./page/vm/create/Advanced.js</td>
          <td>Popup</td>
          <td style={{textAlign: 'center'}}><a href="/vm/create/advanced" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>생성 내역</th>
          <th></th>
          <td>./page/vm/create/Summary.js</td>
          <td>Popup</td>
          <td style={{textAlign: 'center'}}><a href="/vm/create/summary" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>Fip IP 연결</th>
          <th></th>
          <td>./page/vm/create/Fip.js</td>
          <td>Popup</td>
          <td style={{textAlign: 'center'}}><a href="/vm/create/fip" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th rowSpan={4}>네트워크</th>
          <th>목록</th>
          <th></th>
          <td>./page/network/List.js</td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="/network/list" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th rowSpan={2}>네트워크 생성</th>
          <th>기본 설정</th>
          <td>./page/network/create/Common.js</td>
          <td>Popup</td>
          <td style={{textAlign: 'center'}}><a href="/network/create/common" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>세부 설정</th>
          <td>./page/network/create/Advanced.js</td>
          <td>Popup</td>
          <td style={{textAlign: 'center'}}><a href="/network/create/advanced" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>상세</th>
          <th></th>
          <td>./page/network/Detail.js</td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="/network/detail" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th rowSpan={3}>보안그룹</th>
          <th>목록</th>
          <th></th>
          <td>./page/security/List.js</td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="/security/list" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>등록</th>
          <th>기본정보</th>
          <td>./page/security/create/Common.js</td>
          <td>팝업</td>
          <td style={{textAlign: 'center'}}><a href="/security/create/common" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>상세</th>
          <th></th>
          <td>./page/security</td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="#" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th rowSpan={1}>Flavor</th>
          <th></th>
          <th></th>
          <td></td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="#" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th rowSpan={1}>이미지</th>
          <th></th>
          <th></th>
          <td></td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="#" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th rowSpan={1}>키페어</th>
          <th></th>
          <th></th>
          <td></td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="#" target="_blank">페이지 이동</a></td>
        </tr>
        </tbody>

      </table>
    </div>
  )
}

export default Index
