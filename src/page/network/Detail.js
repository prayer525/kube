import { ReactComponent as ImgComposition } from '../../assets/images/dummy/img-composition.svg';

const NetworkDetail = () => {
  return (<>
    <div style={{background: '#eff4f9', padding: '20px', minHeight: '100vh'}}>
      <div className="vm-detail-wrap">
        {/* Start : Left Detail */}
        <div className="box-radius">

          {/* Start : Detail header */}
          <div className="vm-detail-header">
            <button type="button" className="btn-arrow-back">돌아가기</button>

            <h2 className="h2-bullet-home">project02-44444444444444444</h2>

            <div className="btn-group">
              <button type="button" className="btn btn-control">정보편집</button>

              <div className="select-wrap">
                <button type="button" className="btn btn-default">More ▾</button>
              </div>
            </div>
          </div>
          {/* End : Detail header */}

          {/* Start : Detail body */}
          <div className="vm-detail-body">
            <h2 className="h2-default">상세정보</h2>

            <table className="tbl-noline">
              <caption>상세정보</caption>
              <colgroup>
                <col style={{width: '120px'}} />
                <col style={{width: 'auto'}} />
              </colgroup>
              <tbody>
              <tr>
                <th>클러스터</th>
                <td><p>클러스터_01</p></td>
              </tr>
              <tr>
                <th>네트워크 유형</th>
                <td><p>VLAN</p></td>
              </tr>
              <tr>
                <th>Segment ID</th>
                <td><p>1000</p></td>
              </tr>
              <tr>
                <th>MTU</th>
                <td><p>1,500</p></td>
              </tr>
              <tr>
                <th>CIDR</th>
                <td><p>210.192.255.04</p></td>
              </tr>
              <tr>
                <th>Gateway IP</th>
                <td><p>210.192.255.04</p></td>
              </tr>
              <tr>
                <th>Default Route</th>
                <td><p>사용</p></td>
              </tr>
              <tr>
                <th>External</th>
                <td><p>사용</p></td>
              </tr>
              <tr>
                <th>IP Pool 정보</th>
                <td>
                  <p>시작 IP : 10.10. 0. 24</p>
                  <p>끝 IP : 10.10. 0. 24</p>
                </td>
              </tr>
              <tr>
                <th>DNS</th>
                <td>
                  <p>Destination : 10.10.10.0</p>
                  <p>Nelete : 10.10.10.1</p>
                </td>
              </tr>
              <tr>
                <th>Host Routes</th>
                <td>
                  <p>Destination : 10.10.10.0</p>
                  <p>Nelete : 10.10.10.1</p>
                </td>
              </tr>
              <tr>
                <th>설명</th>
                <td><p>1C004F에 의한 생성</p></td>
              </tr>
              </tbody>
            </table>
          </div>
          {/* End : Detail body */}
        </div>
        {/* End : Left Detail */}

        {/* Start : Right Status */}
        <section>
          {/* Start : TAb Button */}
          <ul className="tab-type-basic">
            <li><input type="radio" name="tab" id="tab1" checked="true" /><label htmlFor="tab1">상태</label></li>
          </ul>
          {/* End : TAb Button */}

          {/* Start : Tab content */}
          <div className="tab-content">
            {/* Start : Composition  */}
            <div className="box-radius p-12 mb-12">
              <ImgComposition className="m-auto" />
            </div>
            {/* End : Composition */}
          </div>
          {/* End : Tab content */}
        </section>
        {/* End : Right Status */}
      </div>
    </div>
  </>)
}

export default NetworkDetail
