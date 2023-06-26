import { ReactComponent as IconInfo } from '../../assets/images/icons/ico-info-circle.svg';
import { ReactComponent as IconSquare } from '../../assets/images/icons/ico-dbl-square-large.svg';
import { ReactComponent as IconCalendar } from '../../assets/images/icons/ico-calendar.svg';


import { ReactComponent as IconServer } from '../../assets/images/icons/ico-server.svg';
import { ReactComponent as IconPieChart } from '../../assets/images/icons/ico-pie-chart.svg';
import { ReactComponent as IconCode } from '../../assets/images/icons/ico-code.svg';
import { ReactComponent as IconList } from '../../assets/images/icons/ico-list.svg';
import { ReactComponent as IconDownload } from '../../assets/images/icons/ico-download.svg';
import { ReactComponent as IconTrash } from '../../assets/images/icons/ico-trash.svg';

const SecurityDetail = () => {
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

                {/*<ul className="list-select-option">*/}
                {/*  <li><i><IconServer /></i><span>VNC 접속</span></li>*/}
                {/*  <li><i><IconPieChart /></i><span>FIP 할당</span></li>*/}
                {/*  <li><i><IconCode /></i><span>YAML 보기</span></li>*/}
                {/*  <li><i><IconList /></i><span>Console 로그</span></li>*/}
                {/*  <li><i><IconDownload /></i><span>마이그레이션</span></li>*/}
                {/*  <li><i><IconTrash /></i><span>삭제</span></li>*/}
                {/*</ul>*/}
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
                <td><p>클러스터</p></td>
              </tr>
              <tr>
                <th>설명</th>
                <td><p>1C00504F에 의한 생성</p></td>
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
            <div className="box-radius p-12 mb-12">
              <div className="box-radius bg-darkgray">
                <ul className="status-list p-12">
                  <li>
                    <i className="icon"><IconSquare /></i>
                    <div>
                      <strong>Test232 01</strong>
                      <span>VM</span>
                    </div>
                  </li>
                  <li>
                    <i className="icon"><IconCalendar /></i>
                    <div>
                      <strong>2023-05-29 09:00:00</strong>
                      <span>생성일</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End : Tab content */}
        </section>
        {/* End : Right Status */}
      </div>
    </div>
  </>)
}

export default SecurityDetail
