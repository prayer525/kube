import { ReactComponent as ImgGraph } from '../../../assets/images/dummy/img-graph-chart.svg';

const Monitoring = () => {
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
              <button type="button" className="btn">정보편집</button>

              <div className="select-wrap">

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
                <th>이미지</th>
                <td><p>Linux 2023 AMI 2023</p></td>
              </tr>
              <tr>
                <th>클러스터</th>
                <td><p>클러스터</p></td>
              </tr>
              <tr>
                <th>이미지</th>
                <td><p>Ubuntu 20.04</p></td>
              </tr>
              <tr>
                <th>Flavor</th>
                <td><p>Flavro2_Base * 1</p></td>
              </tr>
              <tr>
                <th>네트워크</th>
                <td>
                  <p>INT 64 FLAT/라우터</p>
                  <div className="d-flex"><strong>기본 경로</strong><span>10.10.10.0</span></div>
                  <div className="d-flex"><strong>Gateway IP</strong><span>192.168.62.0/24</span></div>
                </td>
              </tr>
              <tr>
                <th>SR-IOV 네트워크</th>
                <td>
                  <p>KubevirtwobevirtwbevirtwbevirtwbevirtKubevirtwobevirtwbevirtwbevirtwbevirt…</p>
                  <div className="d-flex"><strong>기본 경로</strong><span>10.10.10.0</span></div>
                  <div className="d-flex"><strong>Gateway IP</strong><span>192.168.62.0/24</span></div>
                </td>
              </tr>
              <tr>
                <th>키 페어</th>
                <td><p>ZSEWR-WERW-SE02</p></td>
              </tr>
              <tr>
                <th>Load Balancer</th>
                <td><p>234342</p></td>
              </tr>
              <tr>
                <th>보안그룹</th>
                <td><p>VBA-1Team</p></td>
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
            <li><input type="radio" name="tab" id="tab1" /><label htmlFor="tab1">상태</label></li>
            <li><input type="radio" name="tab" id="tab2" /><label htmlFor="tab2">구성정보</label></li>
            <li><input type="radio" name="tab" id="tab3" checked="true" /><label htmlFor="tab3">모니터링</label></li>
            <li><input type="radio" name="tab" id="tab4" /><label htmlFor="tab4">이벤트</label></li>
          </ul>
          {/* End : TAb Button */}

          {/* Start : Tab content */}
          <div className="tab-content">
            {/* Start : Chart */}
            <div className="box-radius p-12 mb-12">
              <fieldset className="search-option">
                <legend>조회조건</legend>
                <label htmlFor="">데이터 기준</label>
                <span>2023-06-09 08:00</span>
                <select name="" id="">
                  <option value="">최근 1시간</option>
                  <option value="">최근 1일</option>
                  <option value="">최근 1주</option>
                  <option value="">최근 1개월</option>
                  <option value="">최근 1년</option>
                </select>
              </fieldset>
              <ImgGraph style={{display:'block', width: '100%', height: 'inherit'}} />
            </div>
            {/* End : Chart */}
          </div>
          {/* End : Tab content */}
        </section>
        {/* End : Right Status */}
      </div>
    </div>
  </>)
}

export default Monitoring
