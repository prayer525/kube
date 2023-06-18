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
          <th rowspan={4}>가상머신</th>
          <th rowspan={4}>상세</th>
          <th>상태</th>
          <td>page/vm/detail/Status.js</td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="/vm/detail/status" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>구성정보</th>
          <td>page/vm/detail/Composition.js</td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="/vm/detail/composition" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>모니터링</th>
          <td>page/vm/detail/Monitoring.js</td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="/vm/detail/monitoring" target="_blank">페이지 이동</a></td>
        </tr>
        <tr>
          <th>이벤트</th>
          <td>page/vm/detail/Event.js</td>
          <td></td>
          <td style={{textAlign: 'center'}}><a href="/vm/detail/event" target="_blank">페이지 이동</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Index